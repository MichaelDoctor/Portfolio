from django.db import models


class Skill(models.Model):
    title = models.CharField(max_length=50)
    icon = models.CharField(max_length=100)
    content = models.TextField(max_length=200)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return self.title
