# Generated by Django 2.2.1 on 2019-12-02 17:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('station', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='officer',
            name='did',
            field=models.IntegerField(default=1),
        ),
    ]
