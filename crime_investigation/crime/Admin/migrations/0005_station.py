# Generated by Django 2.2.6 on 2019-11-22 05:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Admin', '0004_circle'),
    ]

    operations = [
        migrations.CreateModel(
            name='station',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sname', models.CharField(max_length=20)),
                ('scode', models.IntegerField()),
                ('enum', models.IntegerField()),
                ('cnum', models.IntegerField()),
                ('uname', models.CharField(max_length=20)),
                ('pwd', models.CharField(max_length=20)),
                ('cid', models.IntegerField()),
                ('disid', models.IntegerField()),
            ],
        ),
    ]
