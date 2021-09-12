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

    constructor(private http: HttpClient) {

    }

    GetPopular() {

    }

    ngOnInit(): void {
        this.getPopular();
    }

    getPopular() {
        var url = "http://localhost:8000/api/movie/popular/"
        this.http.get(url)
            .subscribe(Response => {
                this.responsePopular = Response;
                this.listPopular = this.responsePopular.data.results;
            });
    }
    

}