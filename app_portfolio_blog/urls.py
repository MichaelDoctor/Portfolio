from django.urls import path
from .views import PostsView, PostDetailView, CreatePostView, CreateCommentView, CommentsView, CommentDetailView

urlpatterns = [
    path('', PostsView.as_view()),
    path('comments/', CommentsView.as_view()),
    path('comments/<pk>', CommentDetailView.as_view()),
    path('create/post/', CreatePostView.as_view()),
    path('create/comment/', CreateCommentView.as_view()),
    path('<slug>/', PostDetailView.as_view()),

]
