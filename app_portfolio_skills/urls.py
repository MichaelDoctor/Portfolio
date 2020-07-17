from django.urls import path
from .views import LanguagesView, FrameworksView

urlpatterns = [
    path('languanges/', LanguagesView.as_view()),
    path('frameworks/', FrameworksView.as_view())
]
