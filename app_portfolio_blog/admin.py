from django.contrib import admin
# from .models import BlogPost, Comment
# from .serializers import BlogPostSerializer, CommentSerializer
from .models import Comment
from .serializers import CommentSerializer


# class BlogPostAdmin(admin.ModelAdmin):
#     list_display = ('id', 'title', 'slug', 'img', 'author', 'date', 'content')
#     list_display_links = ('id', 'title', 'date')


class CommentAdmin(admin.ModelAdmin):
    list_display = ('id', 'blog', 'author', 'content', 'date')
    list_display_links = ('id', 'author', 'date')


# admin.site.register(BlogPost, BlogPostAdmin)
admin.site.register(Comment, CommentAdmin)
