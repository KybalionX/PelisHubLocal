import { Component, Input } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: "navbar",
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavBar {

    li!: any;
    list = [];
    @Input() msg : any;
    num : any;

    selected : number = 0;

    constructor(private http: HttpClient) {
        console.log("Hiadica Pentacle Navbar: "+this.msg)
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

    public ClickedNavbar(Selected : number){
        this.selected = Selected;
    }

}