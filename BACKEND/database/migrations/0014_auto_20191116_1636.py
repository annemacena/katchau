# Generated by Django 2.2.6 on 2019-11-16 16:36

import datetime
from django.db import migrations, models
import django.db.models.deletion
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('database', '0013_auto_20191114_1347'),
    ]

    operations = [
        migrations.AlterField(
            model_name='day',
            name='day',
            field=models.IntegerField(default=16, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='potency',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2019, 11, 16, 16, 36, 2, 220020, tzinfo=utc), null=True),
        ),
        migrations.AlterField(
            model_name='potency',
            name='day',
            field=models.ForeignKey(default=16, on_delete=django.db.models.deletion.CASCADE, to='database.Day'),
        ),
    ]
