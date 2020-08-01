from django.urls import path
from .views import CreateContact, ContactDetail

urlpatterns = [
    path('', CreateContact.as_view()),
    path('<pk>', ContactDetail.as_view())
]
