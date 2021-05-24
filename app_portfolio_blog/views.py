from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework import permissions, status
from rest_framework.parsers import JSONParser, FormParser
from .models import Comment
from .serializers import CommentSerializer


from rest_framework.response import Response


class Comments(APIView):
    permission_classes = (permissions.AllowAny,)
    lookup_field = 'pk'

    def get(self, request, pk, format=None):
        comments = Comment.objects.filter(
            blog=int(pk)).values().order_by('-id')
        data = {
            'length': len(comments),
            'comments': comments,
        }
        return Response(data, status=status.HTTP_200_OK)


class CreateCommentView(APIView):
    permission_classes = (permissions.AllowAny,)
    parser_classes = (JSONParser, FormParser,)

    def post(self, request, format=None):
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(
                serializer.errors,
                status=status.HTTP_400_BAD_REQUEST
            )


class AllCommentsView(ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Comment.objects.all().order_by('-id')
    serializer_class = CommentSerializer
