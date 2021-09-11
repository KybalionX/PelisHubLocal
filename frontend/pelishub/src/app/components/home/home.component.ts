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
        var url = "https://api.themoviedb.org/3/movie/popular?api_key=c3519dc03ba1de5a4c499a0b89386039&language=es&page=1"
        this.http.get(url)
            .subscribe(Response => {
                this.li = Response;
                this.list = this.li.results;
                console.log(this.list);
                
            });
    }

}