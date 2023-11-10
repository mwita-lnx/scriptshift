from django.db.models.signals import pre_save
from django.dispatch import receiver
from .models import BlogPost
from django.utils import timezone

@receiver(pre_save, sender=BlogPost)
def schedule_post(sender, instance, **kwargs):
    if instance.publication_date and instance.status == 'draft' and instance.publication_date <= timezone.now():
        instance.status = 'published'
