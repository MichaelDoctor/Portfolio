from django.db import models
from datetime import datetime


class Comment(models.Model):
    blog = models.IntegerField()
    author = models.CharField(max_length=100)
    content = models.TextField()
    date = models.DateTimeField(default=datetime.now, blank=True)

    class Meta:
        ordering = ['-id']

    def __str__(self):
        return self.author

    def __repr__(self):
        return self.__str__()
