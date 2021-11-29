import { Component, ViewChild, ElementRef } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { UserService } from "src/app/services/other/user.service";

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
    result: any;
    productoras: any;

    listaCategorias: string = "";

    idUsuario = 0 as any;

    listaProductoras = [];
    listaActores = [];
    listaComentarios = [];


    @ViewChild('comentario') comentario!: ElementRef;
    @ViewChild('btn') btn!: ElementRef;


    constructor(private http: HttpClient, private route: ActivatedRoute, private userService: UserService) {
        this.idUsuario = userService.idUser;
        console.log(this.idUsuario);

    }


    subirComentario() {
        this.comentario.nativeElement.disabled = true;
        this.btn.nativeElement.disabled = true;

        let comentario = this.comentario.nativeElement.value;
        let id = this.idUsuario;

        let Com = {
            usuario: id,
            comentario: comentario,
            movie: this.movieID
        }
        /* 
                this.http.post("https://blackmage.pythonanywhere.com/api/comentarios/", Com).toPromise().then(
                    () => {
                        console.log("SUBIDO!");
                    }
                ).catch(data => {
                    console.log("ERROR SUBIENDO COMENTARIO ", data);
                }) */


        this.http.post("https://blackmage.pythonanywhere.com/api/comentarios/", Com).subscribe(
            (data) => {
                this.getComentarios();
                this.comentario.nativeElement.value = "";
                this.comentario.nativeElement.disabled = false;
                this.btn.nativeElement.disabled = false;
            }
        )
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
                    this.result.genres.map((i: any) => categorias += i['name'] + ", ")
                    this.listaCategorias = categorias;
                    this.listaProductoras = this.result.production_companies;
                    this.listaActores = this.result.creditos.cast;
                });

            this.getComentarios();
        });

    }

    getComentarios() {
        this.http.get("https://blackmage.pythonanywhere.com/api/comentarios/?idmovie=" + this.movieID)
            .toPromise().then((data) => {
                let comentarios: any;
                comentarios = data;
                this.listaComentarios = comentarios.comentarios;
                console.log(this.listaComentarios);
            });
    }

}