# Generated by Django 4.1.4 on 2022-12-30 11:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_alter_data_added_alter_data_published'),
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