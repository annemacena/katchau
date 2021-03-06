# Generated by Django 2.2.6 on 2019-11-03 16:34

import database.models
import datetime
import django.core.validators
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('database', '0004_auto_20191103_1124'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='month',
            name='id',
        ),
        migrations.RemoveField(
            model_name='year',
            name='id',
        ),
        migrations.AlterField(
            model_name='month',
            name='month',
            field=models.IntegerField(default=11, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='potency',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2019, 11, 3, 16, 34, 1, 581975, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='year',
            name='year',
            field=models.IntegerField(default=2019, primary_key=True, serialize=False, validators=[django.core.validators.MinValueValidator(1984), database.models.max_value_current_year]),
        ),
    ]
