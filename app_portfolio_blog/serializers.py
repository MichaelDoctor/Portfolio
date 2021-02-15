from rest_framework import serializers
from .models import Comment
# from .models import BlogPost, Comment



class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'


# class BlogPostSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = BlogPost
#         fields = '__all__'
