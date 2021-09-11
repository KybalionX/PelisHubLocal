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


    
    li: any;
    list = [];

    constructor(private http: HttpClient) {

    }

    GetPopular() {

    }

    ngOnInit(): void {
        this.getPopular();
    }

    getPopular() {
        console.log("Value list"+this.list.length)
        var url = "http://localhost:8000/api/movie/popular/"
        this.http.get(url)
            .subscribe(Response => {
                this.li = Response;
                this.list = this.li.data.results;
                console.log(this.list);
            });
    }

    

}