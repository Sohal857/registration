# Generated by Django 3.1.3 on 2021-01-05 10:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('new_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofileinfo',
            name='state',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]