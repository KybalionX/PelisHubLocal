import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'movie',
    templateUrl: './movie.component.html',
    styleUrls: [
        './movie.component.css'
    ]
})

export class MovieComponent {

    movieID: any;

    movie: any;
    result : any;

    listaCategorias : string = "";

    constructor(private http: HttpClient, private route: ActivatedRoute,) {

    }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.movieID = params.get('movieID');
            console.log("ID MOVIE: " + this.movieID);
            var busqueda = "https://blackmage.pythonanywhere.com/api/movie/?id=" + this.movieID;
            this.http.get(busqueda)
                .subscribe(Response => {
                    this.movie = Response;
                    this.result = this.movie.search;
                    console.log(this.result);
                    let categorias = "";
                    this.result.genres.map((i : any) => categorias += i['name'] + ", ")
                    this.listaCategorias = categorias;
                });
        });

    }

}