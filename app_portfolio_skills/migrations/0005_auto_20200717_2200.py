# Generated by Django 3.0.8 on 2020-07-17 22:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app_portfolio_skills', '0004_auto_20200717_2140'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='framework',
            name='content',
        ),
        migrations.RemoveField(
            model_name='language',
            name='content',
        ),
    ]