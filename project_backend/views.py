from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication, BasicAuthentication


class CurrentUser(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (SessionAuthentication, BasicAuthentication,)

    def get(self, request):
        if str(requset.user.id) != "None":
            content = {
                'pk': int(str(request.user.id)),
                'username': str(request.user),
                'first_name': str(request.user.first_name),
                'last_name': str(request.user.last_name)
            }
            return Response(content)
        else:
            return Response({'pk': 'None'})
