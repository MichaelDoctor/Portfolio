from django.contrib import admin
from .models import Skill


class SkillAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'icon', 'content')
    list_display_links = ('id', 'title')


admin.site.register(Skill, SkillAdmin)
