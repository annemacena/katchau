# Generated by Django 2.2.6 on 2019-11-16 17:20

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('database', '0014_auto_20191116_1636'),
    ]

    operations = [
        migrations.AlterField(
            model_name='potency',
            name='date',
            field=models.DateTimeField(default=django.utils.timezone.now, null=True),
        ),
    ]
