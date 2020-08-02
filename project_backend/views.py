from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication, BasicAuthentication


class CurrentUser(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (SessionAuthentication, BasicAuthentication,)

    def get(self, request):
        content = {
            'user': unicode(request.user),
            'auth': unicode(request.auth)
        }
        return Response(content)
