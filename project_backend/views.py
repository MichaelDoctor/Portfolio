from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication, BasicAuthentication


class CurrentUser(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (SessionAuthentication, BasicAuthentication,)

    def get(self, request):
        content = {
            'user': str(request.user),
            'id': str(request.user.id)
        }
        return Response(content)
