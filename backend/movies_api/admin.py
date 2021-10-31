from django.contrib import admin
from .models import *

class UsuarioAdmin(admin.ModelAdmin):
    list_display = [
        'nombre_usuario',
        'correo',
        'telefono',
    ]

class UsuarioComentarioAdmin(admin.ModelAdmin):
    list_display = [
        'id',
        'usuario',
        'comentario',
    ]

# Register your models here.
admin.site.register(Usuario, UsuarioAdmin)
admin.site.register(UsuarioComentario, UsuarioComentarioAdmin)
admin.site.register(UsuarioValoracion)