# Generated by Django 2.2.1 on 2019-12-02 17:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('citizen', '0007_complaint_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='missing',
            name='photo',
            field=models.FileField(upload_to='file'),
        ),
        migrations.AlterField(
            model_name='theft',
            name='photo',
            field=models.FileField(upload_to='file'),
        ),
    ]