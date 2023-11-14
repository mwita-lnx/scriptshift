from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _


from .managers import UserProfileManager

class UserProfile(AbstractUser):
    name = models.CharField(max_length=150)
    username = models.CharField(max_length=150,unique=True)
    bio = models.TextField(max_length=500, blank=True)
    profile_pic = models.ImageField(upload_to='profile_pics', blank=True)
    email = models.EmailField(null=True,unique=True)
   
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []
    objects = UserProfileManager()

    def __str__(self):
       return self.username
    
class Category(models.Model):
    name = models.CharField(max_length=50, db_index=True)
    image = models.ImageField(upload_to='category_images', blank=True)

    def __str__(self):
        return self.name

class Tag(models.Model):
    name = models.CharField(max_length=50, db_index=True)

    def __str__(self):
        return self.name
    


class BlogPost(models.Model):
    STATUS_CHOICES = (
        ('draft', 'Draft'),
        ('published', 'Published'),
    )

    title = models.CharField(max_length=100, db_index=True)
    content = models.TextField()
    author = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)
    updated_at = models.DateTimeField(auto_now=True)
    publication_date = models.DateTimeField(null=True, blank=True)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='draft')
    likes = models.ManyToManyField(UserProfile, related_name='liked_posts', blank=True)
    uploaded_images = models.JSONField(default=list, blank=True)
    uploaded_videos = models.JSONField(default=list, blank=True)
    uploaded_audio = models.JSONField(default=list, blank=True)
    views = models.PositiveIntegerField(default=0, db_index=True)
    categories = models.ManyToManyField(Category, related_name='blogpostscategories')
    tags = models.ManyToManyField(Tag, related_name='blogpoststags')

    def publish(self):
        self.status = 'published'
        self.save()

    def unpublish(self):
        self.status = 'draft'
        self.save()

class Comment(models.Model):
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    blog_post = models.ForeignKey(BlogPost, on_delete=models.CASCADE, related_name='comments')
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)


