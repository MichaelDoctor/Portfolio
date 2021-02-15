from django.urls import path
# from .views import PostsView, PostDetailView, CreatePostView, CreateCommentView, CommentCount
from .views import CreateCommentView, Comments, AllCommentsView

urlpatterns = [
    # path('', PostsView.as_view()),
    path('comment/', AllCommentsView.as_view()),
    path('comment/<pk>/', Comments.as_view()),
    path('create/comment/', CreateCommentView.as_view()),
]
