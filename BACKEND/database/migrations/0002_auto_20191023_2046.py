# Generated by Django 2.2.6 on 2019-10-23 23:46

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('database', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='device',
            name='potency',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='database.Potency'),
        ),
        migrations.AddField(
            model_name='monitors',
            name='device',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='database.Device'),
        ),
        migrations.AddField(
            model_name='monitors',
            name='person',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='database.Person'),
        ),
        migrations.AddField(
            model_name='potency',
            name='date',
            field=models.DateField(default=datetime.date.today),
        ),
        migrations.AddField(
            model_name='potency',
            name='value',
            field=models.FloatField(default=0),
        ),
    ]
