# Generated by Django 3.0.8 on 2020-08-06 23:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app_portfolio_blog', '0003_auto_20200806_2300'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='blogpost',
            options={'ordering': ('-id',)},
        ),
    ]
