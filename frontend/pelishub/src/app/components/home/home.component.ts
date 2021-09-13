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
        var url = "http://localhost:8000/api/movie/popular/"
        this.http.get(url)
            .subscribe(Response => {
                this.responsePopular = Response;
                this.listPopular = this.responsePopular.data.results;
            });
    }

    getTrending() {
        var url = "http://127.0.0.1:8000/api/movie/trending/?type=day"
        this.http.get(url)
            .subscribe(Response => {
                this.responseTrending = Response;
                this.listTrending = this.responseTrending.data.results;
            });
    }

    changeTrendingType(type: string) {

        if (type == 'hoy') {
            var url = "http://127.0.0.1:8000/api/movie/trending/?type=day"
            this.http.get(url)
                .subscribe(Response => {
                    this.responseTrending = Response;
                    this.listTrending = this.responseTrending.data.results;
                });
        } else {
            var url = "http://127.0.0.1:8000/api/movie/trending/?type=week"
            this.http.get(url)
                .subscribe(Response => {
                    this.responseTrending = Response;
                    this.listTrending = this.responseTrending.data.results;
                });
        }

    }


}