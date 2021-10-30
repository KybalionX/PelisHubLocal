from django.db import models
from django.db.models.fields.related import ForeignKey
# Create your models here.

class Usuario(models.Model):
    nombre_usuario = models.CharField(max_length=200)
    correo = models.CharField(max_length=200)
    telefono = models.CharField(max_length=200)
    contraseña = models.CharField(max_length=200)

class UsuarioComentario(models.Model):
    usuario = ForeignKey(Usuario, related_name="comentario_usuario", on_delete=models.CASCADE)
    comentario = models.CharField(max_length=200)
    fecha = models.DateField(blank=True, default='', null=True)


class UsuarioValoracion(models.Model):
    usuario = ForeignKey(Usuario, related_name="valoracion_usuario", on_delete=models.CASCADE)
    pelicula = models.IntegerField()
    comentario = models.CharField(max_length=200)
    fecha = models.DateField(blank=True, default='', null=True)