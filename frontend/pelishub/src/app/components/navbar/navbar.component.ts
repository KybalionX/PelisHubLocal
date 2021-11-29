import { Component, Input, OnInit, SimpleChanges } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppRoutingModule } from "src/app/app-routing.module";
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { UserService } from "src/app/services/other/user.service";

@Component({
    selector: "navbar",
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    providers: [UserService]
})

export class NavBar {

    li!: any;
    list = [];
    @Input() msg: any;
    num: any;

    @Input() nombreUsuario: string = '';

    idUser: number = 0;


    selected: number = 0;



    constructor(private http: HttpClient, private router: Router, private userService: UserService) {

        this.userService.logged.subscribe((nextValue) => console.log("apart " + nextValue))


        console.log(localStorage.getItem('id'));


        this.router.events.subscribe((event: Event) => {

            this.idUser = userService.idUser as unknown as number;

            console.log(this.idUser);

            if (this.idUser != null) {
                this.http.get("https://blackmage.pythonanywhere.com/api/users/?id=" + this.idUser).toPromise()
                    .then(data => {
                        let ds = [];
                        ds = data as any;
                        this.nombreUsuario = ds.usuarios[0].nombre_usuario;
                    });
            }

            if (event instanceof NavigationEnd) {
                // Hide loading indicator
                var url = event.url;
                switch (url) {
                    case "/":
                        this.ClickedNavbar(0);
                        break;
                    case "/proximos":
                        this.ClickedNavbar(1);
                        break;
                    case "/":
                        this.ClickedNavbar(0);
                        break;
                    default:
                        this.ClickedNavbar(0);
                }
            }

            if (event instanceof NavigationError) {
                // Hide loading indicator
                console.log("Error navigation")
                // Present error to user
            }
        });
    }

    public open() {

        var num1 = ((document.getElementById("inputBusqueda") as HTMLInputElement).value);

        this.router.navigate(['/busqueda/' + num1]);


        var busqueda = "https://blackmage.pythonanywhere.com/api/search/?search=" + num1;
        this.http.get(busqueda)
            .subscribe(Response => {
                console.log(Response);
            });

    }

    public ShowResponse(Respuesta: Object) {
        //console.log(Respuesta);
        //console.log(JSON.parse(JSON.stringify(Respuesta)).data_movie.results);

        this.li = Respuesta;
        this.list = this.li.data_movie.results;
        console.log(this.li.data_movie)
        console.log(this.list.length)
    }

    public ClickedNavbar(Selected: number) {
        this.selected = Selected;
    }

    public cerrarSesion(){
        this.userService.logout();
        this.idUser=0;
        console.log(this.idUser);
        this.ClickedNavbar(0);
    }


}