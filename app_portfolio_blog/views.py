from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from rest_framework.authentication import BasicAuthentication, SessionAuthentication
from .models import BlogPost, Comment
from .serializers import BlogPostSerializer, CommentSerializer
from .forms import CommentForm

from rest_framework.response import Response


class PostsView(ListAPIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = BlogPostSerializer
    queryset = BlogPost.objects.all().order_by()


class CommentsView(ListAPIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = CommentSerializer
    queryset = Comment.objects.all().order_by()


class PostDetailView(APIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = BlogPostSerializer
    lookup_field = 'slug'

    def get(self, request, slug, format=None):
        post = BlogPost.objects.filter(slug=slug).values()[0]
        data = {
            'post': post,
            'comments': Comment.objects.filter(blog=post['id']).values()

        }
        return Response(data)


class CommentDetailView(RetrieveAPIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = CommentSerializer
    queryset = Comment.objects.all().order_by()
    lookup_field = 'pk'


class CreatePostView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = BlogPostSerializer
    authentication_classes = (SessionAuthentication, BasicAuthentication,)

    def post(self, request, format=None):
        data = self.request.data
        username = str(self.request.user)
        serializer = BlogPostSerializer(data, many=True)
        return Response(serializer.data)


class CreateCommentView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = CommentSerializer
    authentication_classes = (SessionAuthentication, BasicAuthentication,)

    def post(self, request, format=None):
        data = self.request.data
        username = str(self.request.user)
        serializer = CommentSerializer(data, many=True)
        return Response(serializer.data)
