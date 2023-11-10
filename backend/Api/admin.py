# admin.py

from django.contrib import admin
from .models import UserProfile, BlogPost, Comment, Category, Tag 

admin.site.register(UserProfile)
admin.site.register(BlogPost)
admin.site.register(Comment)
admin.site.register(Category)
admin.site.register(Tag)

