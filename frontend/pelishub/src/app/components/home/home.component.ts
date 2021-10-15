import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

    constructor(private http: HttpClient) {

    }


    ngOnInit(): void {
        this.getPopular();
        this.getTrending();
    }


    getPopular() {

        var url = "https://pelishub.pythonanywhere.com/api/movie/popular/"
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
        var url = "https://pelishub.pythonanywhere.com/api/movie/trending/?type=day"
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
            'https://pelishub.pythonanywhere.com/api/movie/trending/?type=day'
            : 'https://pelishub.pythonanywhere.com/api/movie/trending/?type=week';


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