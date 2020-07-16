from django.urls import path
from .views import SkillView, SkillsView

urlpatterns = [
    path('', SkillsView.as_view(),
         path('<pk>', SkillView.as_view()))
]
