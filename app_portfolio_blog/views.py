from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from .models import BlogPost
from .serializers import BlogPostSerializer
from .forms import CommentForm

from rest_framework.response import Response


class PostsView(ListAPIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = BlogPostSerializer
    queryset = BlogPost.objects.all().order_by()


class PostDetailView(RetrieveAPIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = BlogPostSerializer
