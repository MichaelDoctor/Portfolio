from rest_framework.generics import ListAPIView
from rest_framework import permissions
from .models import Project
from .serializers import ProjectSerializer


class ProjectsView(ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Project.objects.all().order_by()
    serializer_class = ProjectSerializer
