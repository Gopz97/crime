# Generated by Django 2.2.1 on 2019-12-08 11:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('station', '0006_auto_20191207_2136'),
    ]

    operations = [
        migrations.AddField(
            model_name='assigncase',
            name='remarks',
            field=models.CharField(default='', max_length=200),
        ),
    ]