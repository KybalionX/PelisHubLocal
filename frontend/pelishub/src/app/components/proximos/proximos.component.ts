import { Component, OnInit, ElementRef, ViewChildren, Query, AfterViewInit } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { QueryList } from "@angular/core";
import { CardMovie } from "../cardmovie/cardmovie.component";

@Component({
    selector: 'proximos',
    templateUrl: './proximos.component.html',
    styleUrls: [
        './proximos.component.css'
    ]
})

export class Proximos implements AfterViewInit{

    public isIntersecting: boolean;
    p: number = 0;
    private elementRef: ElementRef;

    @ViewChildren('ultracont')
    public listItems!: QueryList<ElementRef<HTMLLIElement>>

    responseProximos: any;
    listProximos = [] as any;
    observer: IntersectionObserver | undefined;
    page: number = 1;

    constructor(private http: HttpClient, elementRef: ElementRef) {
        this.isIntersecting = false;
        this.elementRef = elementRef;
    }

    ngAfterViewInit() {
        this.listItems.changes.subscribe(element => {
            //this.observer!.observe(element.last);
            this.observer!.observe(element.last.nativeElement);
        })
    }

    ngOnInit(): void {
        this.mostrarProximos(1);


        this.observer = new IntersectionObserver(
            (entries: IntersectionObserverEntry[]) => {

                entries.forEach(e => {
                    if (e.isIntersecting) {
                        this.page++;
                        this.mostrarProximos(this.page);
                    }
                });

            },
            {
                // This classifies the "intersection" as being a bit outside the
                // viewport. The intent here is give the elements a little time to react
                // to the change before the element is actually visible to the user.
                rootMargin: '0px 0px 0px 0px',
                threshold: 1.0
            }
        );
        
    }

    async mostrarProximos(page: number) {

        var url = "https://blackmage.pythonanywhere.com/api/movie/proximo/?page=" + page;

        this.http.get(url)
            .toPromise()
            .then(response => {
                this.responseProximos = response;
                this.listProximos.push(this.responseProximos.data.results);
            })
            .catch(error => {
                console.error("Error obteniendo popular: ");
                throw new Error(error);
            });
    }

    mostrarMas() {
        this.page++;
        var url = "http://127.0.0.1:8000/api/movie/proximo/?page=" + this.page;
        this.http.get(url)
            .subscribe(Response => {
                this.responseProximos = Response;
                this.listProximos = this.responseProximos.data.results;
                console.log(this.listProximos)
            });
    }

}