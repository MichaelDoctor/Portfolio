from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from django.contrib.auth.models import User


class CurrentUser(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (SessionAuthentication, BasicAuthentication,)

    def get(self, request):
        if str(request.user.id) != "None":
            content = {
                'pk': int(str(request.user.id)),
                'username': str(request.user),
                'first_name': str(request.user.first_name),
                'last_name': str(request.user.last_name)
            }
            return Response(content)
        else:
            return Response({'pk': 'None'})


class GetUsername(APIView):
    permission_classes = (permissions.AllowAny,)
    lookup_field = 'pk'

    def get(self, request, pk):
        try:
            data = User.objects.filter(id=pk).values()[0]
            content = {
                'pk': data['id'],
                'username': data['username']
            }
            return Response(content)
        except:
            return Response({'pk': pk, 'username': '404'})
