from django.db import models
from django.contrib.auth.models import User
from datetime import datetime
from django.template.defaultfilters import slugify


class BlogPost(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField()
    img = models.ImageField(upload_to='photos/%Y/%m/%d/')
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='blog_posts')
    date = models.DateTimeField(default=datetime.now, blank=True)
    content = models.TextField()

    class Meta:
        ordering = ('-date',)

    # Auto create slug field
    def save(self, *args, **kwargs):
        og_slug = slugify(self.title)
        queryset = BlogPost.objects.all().filter(slug__iexact=og_slug).count()

        count = 1
        slug = og_slug
        while (queryset):
            slug = og_slug + '-' + str(count)
            count += 1
            queryset = queryset.filter.all().filter(slug__iexact=slug).count()
        self.slug = slug
        super(BlogPost, self).save(*args, **kwargs)

    def __str__(self):
        return self.title


class Comment(models.Model):
    blog = models.ForeignKey(
        BlogPost, on_delete=models.CASCADE, related_name='comments')
    reply = models.ForeignKey('self', related_name='replies')
    author = models.ForeignKey(User, related_name='blog_comments')
    content = models.TextField()
    date = models.DateTimeField(default=datetime.now, blank=True)

    class Meta:
        ordering = ('-date')

    def __str__(self):
        return f'{self.author}: {self.content} on {self.blog}'
