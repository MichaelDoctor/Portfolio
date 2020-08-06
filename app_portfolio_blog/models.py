from django.db import models
from django.contrib.auth.models import User
from datetime import datetime
from django.template.defaultfilters import slugify


class BlogPost(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField(blank=True)
    img = models.ImageField(upload_to='blog_images')
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='blog_posts')
    date = models.DateTimeField(default=datetime.now, blank=True)
    content = models.TextField()

    class Meta:
        ordering = ('-id',)

    # Auto create slug field
    def save(self, *args, **kwargs):
        og_slug = slugify(self.title)
        queryset = BlogPost.objects.all().filter(slug__iexact=og_slug).count()

        count = 1
        slug = og_slug
        while (queryset):
            slug = og_slug + '-' + str(count)
            count += 1
            queryset = BlogPost.objects.all().filter(slug__iexact=slug).count()
        self.slug = slug
        super(BlogPost, self).save(*args, **kwargs)

    def __str__(self):
        return self.title


class Comment(models.Model):
    blog = models.ForeignKey(
        BlogPost, on_delete=models.CASCADE, related_name='comments')
    parent = models.ForeignKey(
        'self', related_name='replies', null=True, blank=True, on_delete=models.CASCADE)
    author = models.ForeignKey(
        User, related_name="blog_comments", on_delete=models.CASCADE)
    content = models.TextField()
    date = models.DateTimeField(default=datetime.now, blank=True)

    class Meta:
        ordering = ('date',)

    def __str__(self):
        if not self.parent:
            return f'comment by {self.author}: {self.content} on {self.blog}'
        else:
            return f'reply by {self.author}: {self.content} on {self.blog}'

    def __repr__(self):
        return self.__str__()

    def replies(self):
        return self.__class__.objects.filter(parent=self).order_by()

    @property
    def is_parent(self):
        return self.parent is None
