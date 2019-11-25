# Generated by Django 2.2.6 on 2019-11-03 16:42

import datetime
from django.db import migrations, models
import django.db.models.deletion
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('database', '0006_auto_20191103_1339'),
    ]

    operations = [
        migrations.AlterField(
            model_name='potency',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2019, 11, 3, 16, 42, 19, 18539, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='potency',
            name='device',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='database.Device'),
        ),
    ]
