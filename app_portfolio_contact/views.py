from rest_framework.views import APIView
from .models import Contact
from .serializers import ContactSerializer
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.exceptions import APIException

from django.core.mail import send_mail


class ServerError(APIException):
    status_code = 500
    default_code = "Server Error"
    default_detail = "Server Error!"


class CreateContact(APIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = ContactSerializer

    def post(self, request, format=None):
        data = self.request.data

        try:
            send_mail(data['subject'],
                      'Name: {}\nEmail: {}\n\nMessage: {}'.format(data['name'], data['email'], data['message']), 'michaeldoctoryyc@gmail.com', ['michaeldoctoryyc@gmail.com'], fail_silently=False)
            contact = Contact(name=data['name'], email=data['email'],
                              subject=data['subject'], message=data['message'])
            contact.save()

            return Response({'msg': 'Message successfully sent'})
        except:
            return ServerError
