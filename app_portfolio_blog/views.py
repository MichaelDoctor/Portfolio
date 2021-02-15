from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions, status
from rest_framework.authentication import BasicAuthentication, SessionAuthentication
from rest_framework.parsers import JSONParser, FormParser
# from .models import BlogPost, Comment
# from .serializers import BlogPostSerializer, CommentSerializer
from .models import Comment
from .serializers import CommentSerializer
from .forms import CommentForm

from rest_framework.response import Response


class Comments(APIView):
    permission_classes = (permissions.AllowAny,)
    lookup_field = 'pk'

    def get(self, request, pk, format=None):
        data = {
            'length': len(Comment.objects.filter(blog=int(pk)).values().order_by('-id')),
            'comments': Comment.objects.filter(blog=int(pk)).values().order_by('-id'),
        }
        return Response(data, status=status.HTTP_200_OK)


class CreateCommentView(APIView):
    permission_classes = (permissions.AllowAny,)
    parser_classes = (JSONParser, FormParser,)
    # authentication_classes = (SessionAuthentication, BasicAuthentication,)

    def post(self, request, format=None):
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AllCommentsView(ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Comment.objects.all().order_by('-id')
    serializer_class = CommentSerializer

# class PostsView(ListAPIView):
#     permission_classes = (permissions.AllowAny,)
#     serializer_class = BlogPostSerializer
#     queryset = BlogPost.objects.all().order_by('-id')


# class PostDetailView(APIView):
#     permission_classes = (permissions.AllowAny,)
#     serializer_class = BlogPostSerializer
#     lookup_field = 'slug'

#     def get(self, request, slug, format=None):
#         post = BlogPost.objects.filter(slug=slug).values()[0]
#         data = {
#             'post': post,
#             'comments': Comment.objects.filter(blog=post['id']).values()

#         }
#         return Response(data, status=status.HTTP_200_OK)





# class CreatePostView(APIView):
#     permission_classes = (permissions.IsAuthenticated,)
#     parser_classes = (MultiPartParser, FormParser,)
#     authentication_classes = (SessionAuthentication, BasicAuthentication,)

#     def post(self, request, format=None):
#         serializer = BlogPostSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_200_OK)
#         else:
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
