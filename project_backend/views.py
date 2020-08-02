from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.response import Response


class CurrentUser(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request):
        user = request.user
        if user.is_authenticated:
            return Response({'pk': user.id, 'username': user.username, 'first_name': user.first_name, 'last_name': user.last_name})
        else:
            return Response(user)
