import os
from whitenoise import WhiteNoise
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'project_backend.settings')

application = get_wsgi_application()
application = WhiteNoise(application, root='/portfolio/build/static')
application.add_files('/static', prefix='more-files/')
