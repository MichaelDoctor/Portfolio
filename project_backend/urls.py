from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static
from .views import CurrentUser, GetUsername

urlpatterns = [
    path('api/skills/', include('app_portfolio_skills.urls')),
    path('api/projects/', include('app_portfolio_projects.urls')),
    path('api/contact/', include('app_portfolio_contact.urls')),
    path('api/blogs/', include('app_portfolio_blog.urls')),
    path('auth/', include('dj_rest_auth.urls')),
    path('allauth/', include('allauth.urls')),
    path('auth/register/', include('dj_rest_auth.registration.urls')),
    path('auth/current/', CurrentUser.as_view()),
    path('auth/user/<pk>', GetUsername.as_view()),
    path('admin/', admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)  # creates urls for media

# react-router stuff
urlpatterns += [
    re_path(r'^.*', TemplateView.as_view(template_name='index.html'))
]
