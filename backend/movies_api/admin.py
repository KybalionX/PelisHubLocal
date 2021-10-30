from django.contrib import admin
from .models import *

class UsuarioAdmin(admin.ModelAdmin):
    list_display = [
        'nombre_usuario',
        'correo',
        'telefono',
    ]

# Register your models here.
admin.site.register(Usuario, UsuarioAdmin)