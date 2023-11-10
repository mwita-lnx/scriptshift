from django.contrib.auth import authenticate
from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User
from .models import UserProfile, BlogPost, Comment, Category, Tag
from django.contrib.auth.hashers import make_password

class CustomTokenObtainPairSerializer(serializers.Serializer):
    username_field = User.USERNAME_FIELD

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        self.fields[self.username_field] = serializers.CharField()
        self.fields['password'] = serializers.CharField(style={'input_type': 'password'})

    def validate(self, attrs):
        data = super().validate(attrs)

        user = authenticate(request=self.context.get('request'),
                            username=data[self.username_field],
                            password=data['password'])

        if not user:
            raise serializers.ValidationError('Invalid username/password')

        if not user.is_active:
            raise serializers.ValidationError('User is not active')

        return data

    @classmethod
    def get_token(cls, user):
        return RefreshToken.for_user(user)

    def create(self, validated_data):
        self.user = User.objects.get(username=validated_data['username'])
        return self.get_token(self.user)

    def update(self, instance, validated_data):
        pass


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'

    def create(self, validated_data):
        user = UserProfile.objects.create(
            username=validated_data['username'],
            password = make_password(validated_data['password'])

        )
        user.save()
        return user

    def update(self, instance, validated_data):

        if 'password' in validated_data:
            print(validated_data)
            validated_data['password'] = make_password(validated_data['password'])
        return super().update(instance, validated_data)

class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'

class BlogPostSerializer(serializers.ModelSerializer):
    categories = CategorySerializer(many=True, required=False)
    tags = TagSerializer(many=True, required=False)

    likes = serializers.PrimaryKeyRelatedField(many=True, queryset=UserProfile.objects.all(), required=False)

    class Meta:
        model = BlogPost
        fields = '__all__'

    def create(self, validated_data):
        categories_data = validated_data.pop('categories', [])
        tags_data = validated_data.pop('tags', [])
        likes_data = validated_data.pop('likes', [])

        blog_post = BlogPost.objects.create(**validated_data)

        for category_data in categories_data:
            category, _ = Category.objects.get_or_create(**category_data)
            blog_post.categories.add(category)

        for tag_data in tags_data:
            tag, _ = Tag.objects.get_or_create(**tag_data)
            blog_post.tags.add(tag)

        for like_id in likes_data:
            user_profile = UserProfile.objects.get(pk=like_id.id)  # Access the id attribute
            blog_post.likes.add(user_profile)

        return blog_post

    def update(self, instance, validated_data):
        categories_data = validated_data.pop('categories', [])
        tags_data = validated_data.pop('tags', [])
        likes_data = validated_data.pop('likes', [])

        instance = super().update(instance, validated_data)


        for category_data in categories_data:
            category, _ = Category.objects.get_or_create(**category_data)
            instance.categories.add(category)

        for tag_data in tags_data:
            tag, _ = Tag.objects.get_or_create(**tag_data)
            instance.tags.add(tag)

        for like_id in likes_data:
            user_profile = UserProfile.objects.get(pk=like_id.id)
            instance.likes.add(user_profile)

        return instance