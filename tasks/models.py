from django.db import models
from api.models import User

# Create your models here.

class Task(models.Model):
    user = models.ForeignKey('api.User', related_name='tasks', on_delete=models.CASCADE)
    title = models.CharField(max_length=100, blank=False, null=False)
    description = models.CharField(max_length=255, blank=False, null=False)
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['user']

    def __str__(self):
        return self.title

    
