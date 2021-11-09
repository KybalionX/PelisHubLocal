import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavBar } from "../navbar/navbar.component";
import { UserService } from "src/app/services/other/user.service";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: [
        './home.component.css'
    ]
})

export class HomeComponent {


    responsePopular: any;
    listPopular = [];

    responseTrending: any;
    listTrending = [];

    constructor(private http: HttpClient, private userService : UserService) {

        this.userService.logged.subscribe(data => console.log("elemento suscrito: "+data));

        if(localStorage.getItem('id') != null){
            //this.nombreUsuario = "REGISTERED!";
        }

    }


    ngOnInit(): void {
        this.getPopular();
        this.getTrending();
    }


    getPopular() {

        var url = "https://blackmage.pythonanywhere.com/api/movie/popular/";
        this.http.get(url)
            .toPromise()
            .then(response => {
                this.responsePopular = response;
                this.listPopular = this.responsePopular.data.results;
            })
            .catch(error => {
                console.error("Error obteniendo popular: ");
                throw new Error(error);
            });

    }

    getTrending() {
        var url = "https://blackmage.pythonanywhere.com/api/movie/trending/?type=day"
        this.http.get(url)
            .toPromise()
            .then(response => {
                this.responseTrending = response;
                this.listTrending = this.responseTrending.data.results;
            })
            .catch(error => {
                console.error("Error obteniendo Trending: ");
                throw new Error(error);
            });
    }

    changeTrendingType(type: string) {

        var url = "";

        url = type == 'hoy' ?
            'https://blackmage.pythonanywhere.com/api/movie/trending/?type=day'
            : 'https://blackmage.pythonanywhere.com/api/movie/trending/?type=week';


        this.http.get(url)
            .toPromise()
            .then(response => {
                this.responseTrending = response;
                this.listTrending = this.responseTrending.data.results;
            })
            .catch(error => {
                console.error("Error obteniendo Trending: ");
                throw new Error(error);
            });

    }


}