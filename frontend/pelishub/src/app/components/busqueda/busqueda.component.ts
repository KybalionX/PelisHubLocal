import { Component } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: "busqueda",
    templateUrl: './busqueda.component.html',
    styleUrls: ['./busqueda.component.css']
})

export class Busqueda {

    li!: any;
    list = [];

    constructor(private http: HttpClient) {

    }

    public open() {
        var num1 = ((document.getElementById("inputBusqueda") as HTMLInputElement).value);
        var busqueda = "http://127.0.0.1:8000/api/search/?search=" + num1
        this.http.get(busqueda)
            .subscribe(Response => {
                this.ShowResponse(Response)
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

}