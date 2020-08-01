from django.contrib import admin
from .models import Contact


class ContactAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email', 'subject')
    list_display_links = ('id', 'email')
    search_fields = ('name', 'email', 'subject')


admin.site.register(Contact, ContactAdmin)
