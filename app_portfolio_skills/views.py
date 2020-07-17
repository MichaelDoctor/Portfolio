from rest_framework.generics import ListAPIView
from rest_framework import permissions
from .models import Language, Framework
from .serializers import LanguageSerializer, FrameworkSerializer


class LanguagesView(ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Language.objects.all().order_by()
    serializer_class = LanguageSerializer


class FrameworksView(ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Framework.objects.all().order_by()
    serializer_class = FrameworkSerializer
