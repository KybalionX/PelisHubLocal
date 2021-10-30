from django.db.models import fields
from rest_framework import serializers
from movies_api.models import Usuario

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields('NombreUsuario', 'Correo', 'Telefono', 'Contraseña')

"""
    nombre_usuario = models.CharField(max_length=200)
    correo = models.CharField(max_length=200)
    telefono = models.CharField(max_length=200)
    contraseña = models.CharField(max_length=200)
    imagen = models.CharField(max_length=200)

"""