from django.db import models
from datetime import datetime


class Project(models.Model):
    class_name = models.CharField(max_length=150)
    img = models.ImageField(upload_to='photos/%Y/%m/%d/')
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    date_time = models.DateTimeField(default=datetime.now, blank=True)
    date = models.CharField(max_length=100)
    content = models.TextField(max_length=200, blank=True)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return self.title
