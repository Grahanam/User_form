# Generated by Django 4.1.4 on 2022-12-30 09:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_alter_data_url'),
    ]

    operations = [
        migrations.AlterField(
            model_name='data',
            name='added',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='data',
            name='published',
            field=models.DateField(blank=True, null=True),
        ),
    ]
