# Generated by Django 2.2.6 on 2019-11-22 06:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('citizen', '0002_missing'),
    ]

    operations = [
        migrations.CreateModel(
            name='theft',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.CharField(max_length=20)),
                ('object', models.CharField(max_length=20)),
                ('model', models.CharField(max_length=20)),
                ('quantity', models.CharField(max_length=20)),
                ('identification', models.CharField(max_length=100)),
                ('remarks', models.CharField(max_length=250)),
                ('photo', models.CharField(max_length=20)),
                ('cid', models.IntegerField()),
            ],
        ),
    ]
