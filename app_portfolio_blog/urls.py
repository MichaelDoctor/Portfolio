from django.urls import path
from .views import PostsView, PostDetailView, CreatePostView, CreateCommentView, CommentCount

urlpatterns = [
    path('', PostsView.as_view()),
    path('comment/<pk>/', CommentCount.as_view()),
    path('create/post/', CreatePostView.as_view()),
    path('create/comment/', CreateCommentView.as_view()),
    path('blog/<slug>/', PostDetailView.as_view()),
]
