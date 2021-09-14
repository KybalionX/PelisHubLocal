import { Component, Input } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppRoutingModule } from "src/app/app-routing.module";
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
    selector: "navbar",
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavBar {

    li!: any;
    list = [];
    @Input() msg: any;
    num: any;

    selected: number = 0;

    constructor(private http: HttpClient, private router: Router) {
        this.router.events.subscribe((event: Event) => {

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
        var busqueda = "http://127.0.0.1:8000/api/search/?search=" + num1
        this.http.get(busqueda)
            .subscribe(Response => {
                console.log(Response)
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

}