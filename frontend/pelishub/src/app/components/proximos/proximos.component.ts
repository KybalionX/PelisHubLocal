import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'proximos',
    templateUrl: './proximos.component.html',
    styleUrls: [
        './proximos.component.css'
    ]
})

export class Proximos {


    responseProximos: any;
    listProximos = [];

    page : number = 1;

    constructor(private http: HttpClient) {

    }

    ngOnInit(): void {
        this.mostrarProximos(1);
    }

    mostrarProximos(page : number){
        var url = "http://127.0.0.1:8000/api/movie/proximo/?page="+page;
        this.http.get(url)
            .subscribe(Response => {
                this.responseProximos = Response;
                this.listProximos = this.responseProximos.data.results;
                console.log(this.listProximos)
            });
    }

    mostrarMas(){
        this.page++;
        var url = "http://127.0.0.1:8000/api/movie/proximo/?page="+this.page;
        this.http.get(url)
            .subscribe(Response => {
                this.responseProximos = Response;
                this.listProximos = this.responseProximos.data.results;
                console.log(this.listProximos)
            });
    }
    
}