# Generated by Django 4.0.5 on 2022-08-16 01:36

import datetime
from django.db import migrations, models
import django.utils.timezone
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_auto_20220804_1652'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='profile_pic',
            field=models.ImageField(blank=True, default='profilepics/mushroom.png', null=True, upload_to='media/profilepics'),
        ),
        migrations.AlterField(
            model_name='profilescore',
            name='scoreDate',
            field=models.DateTimeField(default=datetime.datetime(2022, 8, 16, 1, 36, 16, 973908, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='profilescorelogic',
            name='scoreDate',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
