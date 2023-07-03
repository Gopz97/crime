# Generated by Django 2.2.6 on 2019-11-21 06:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Admin', '0002_designation'),
    ]

    operations = [
        migrations.CreateModel(
            name='district',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('disname', models.CharField(max_length=20)),
            ],
        ),
        migrations.RenameField(
            model_name='designation',
            old_name='Dname',
            new_name='dname',
        ),
    ]