import { Component } from "@angular/core";
import Swal from 'sweetalert2'
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from "rxjs";

import { Router, Routes } from "@angular/router";

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: [
        './register.component.css'
    ]
})

export class Register {

    usuariosExistentes: any;
    listUsuariosExistentes = [];

    constructor(private http: HttpClient, private router: Router) {
    }


    ngOnInit(): void {
    }

    async register() {

        let nombreUsuario = (<HTMLInputElement>document.getElementById("nombreUsuario")).value;
        let correo = (<HTMLInputElement>document.getElementById("correo")).value;
        let telefono = (<HTMLInputElement>document.getElementById("telefono")).value;
        let contraseña1 = (<HTMLInputElement>document.getElementById("contraseña1")).value;
        let contraseña2 = (<HTMLInputElement>document.getElementById("contraseña2")).value;

        if(!(correo.includes("@") && correo.includes("."))){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ingrese un correo valido!',
                confirmButtonColor: '#FF9900',
            })
            return;
        }
        

        let campos = [
            nombreUsuario,
            correo,
            telefono,
            contraseña1,
            contraseña2
        ]

        campos.forEach(c => {
            if (c == "") {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Todos los campos deben ser llenados!',
                    confirmButtonColor: '#FF9900',
                })
                return;
            }
        });

        if (contraseña1 != contraseña2) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Los campos de contraseña no coinciden!',
                confirmButtonColor: '#FF9900',
            })
            return;
        }


        Swal.fire({
            title: 'Cargando...',
            text: 'Verificando datos...',
            showConfirmButton: false,
            allowOutsideClick: false,
            timerProgressBar: true,
        })

        let usuariosSimilares = await this.http.get("https://blackmage.pythonanywhere.com/api/users/?correo=" + correo)
            .toPromise();


        this.usuariosExistentes = usuariosSimilares;
        this.listUsuariosExistentes = this.usuariosExistentes.usuarios;
        if (this.listUsuariosExistentes.length > 0) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ya hay un usuario registrado con ese correo!',
            })
            return;
        }



        let us = {
            nombreUsuario: nombreUsuario,
            correo: correo,
            telefono: telefono,
            contraseña: contraseña1
        }


        this.http.post("https://blackmage.pythonanywhere.com/api/users/", us).toPromise().then(
            () => {
                Swal.fire({
                    icon: 'success',
                    title: 'Perfecto!',
                    text: 'Te has registrado satisfactoriamente!',
                }).then(result => {
                    if (result.isConfirmed) {
                        this.router.navigate(['']);

                    }
                })
            }
        ).catch(data => {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ocurrió un error al intentar registrarte!',
            })
        })





    }


}