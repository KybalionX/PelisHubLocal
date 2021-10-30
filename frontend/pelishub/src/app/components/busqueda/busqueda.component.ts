import { Component } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: "busqueda",
    templateUrl: './busqueda.component.html',
    styleUrls: ['./busqueda.component.css']
})

export class Busqueda {

    li!: any;
    list = [];

    buscar: any = "";

    constructor(private http: HttpClient, private route: ActivatedRoute,) {

    }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.buscar = params.get('buscar');
            console.log("PARAMS: " + this.buscar);

            var busqueda = "https://blackmage.pythonanywhere.com/api/search/?search=" + this.buscar;
            this.http.get(busqueda)
                    .toPromise()
                    .then(response => {
                        this.showBusqueda(response);
                    })
                    .catch(error => {
                        console.error("Error obteniendo popular: ");
                        throw new Error(error);
                    });
                
        });

    }


    public showBusqueda(respuesta: Object) {
        this.li = respuesta;
        this.list = this.li.data_movie.results;
        console.log(this.list)
    }


}