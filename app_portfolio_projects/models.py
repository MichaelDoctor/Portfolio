from django.db import models
from datetime import datetime


class Project(models.Model):
    class_name = models.CharField(
        max_length=150,
        default='col-lg-3 col-md-4 portfolio-item isotope-item'
    )
    img = models.ImageField(upload_to='photos/%Y/%m/%d/')
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    date_time = models.DateTimeField(default=datetime.now, blank=True)
    date = models.CharField(max_length=100, blank=True)
    content = models.TextField(max_length=200, blank=True)
    link = models.CharField(max_length=50, default='#')

    class Meta:
        ordering = ['id']

    def __str__(self):
        return self.title
