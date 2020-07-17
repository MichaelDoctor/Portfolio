from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.views import APIView
from rest_framework import permissions
from .models import Skill
from .serializers import SkillSerializer


class SkillsView(ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Skill.objects.order_by('-id').all()
    serializer_class = SkillSerializer


class SkillView(RetrieveAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
