import { HttpClient } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/other/user.service";
import Swal from "sweetalert2";
import { NavBar } from "../navbar/navbar.component";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: [
        './login.component.css'
    ],
    providers : [UserService]
})

export class Login {

    
    constructor(private htpp: HttpClient, private router: Router, private userService : UserService) {

    }



    async checkUser() {
        Swal.fire({
            title: 'Cargando...',
            text: 'Verificando datos...',
            showConfirmButton: false,
            allowOutsideClick: false,
            timerProgressBar: true,
        })

        let correo = (<HTMLInputElement>document.getElementById("correo")).value;
        let contraseña = (<HTMLInputElement>document.getElementById("contraseña")).value;
        let users = await this.htpp.get("https://blackmage.pythonanywhere.com/api/users/?correo=" + correo).toPromise()
        let listUsuarios: any;
        listUsuarios = users;

        if (listUsuarios.usuarios.length == 1) {

            if (listUsuarios.usuarios[0].contraseña == contraseña) {
                this.userService.setLogged(listUsuarios.usuarios[0].id);
                Swal.fire({
                    icon: 'success',
                    title: 'Perfecto!',
                    text: 'Te has registrado satisfactoriamente!',
                }).then(result => {
                    this.router.navigate(['']);
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Contraseña incorrecta!',
                })
            }

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No existen usuarios registrados con ese correo!',
            })
            return;
        }

    }

}