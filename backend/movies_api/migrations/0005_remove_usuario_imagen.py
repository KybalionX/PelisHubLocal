# Generated by Django 3.2.3 on 2021-10-30 22:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('movies_api', '0004_usuariocomentario_usuariovaloracion'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='usuario',
            name='imagen',
        ),
    ]