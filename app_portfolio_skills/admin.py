from django.contrib import admin
from .models import Language, Framework


class LanguageAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'icon')
    list_display_links = ('id', 'title')


class FrameworkAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'icon')
    list_display_links = ('id', 'title')


admin.site.register(Language, LanguageAdmin)
admin.site.register(Framework, FrameworkAdmin)
