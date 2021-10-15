import { Component, Input, ViewChild, OnInit } from "@angular/core";

@Component(
    {
        selector: "card-result-movie",
        templateUrl: "./cardResultMovie.component.html",
        styleUrls: ['./cardResultMovie.component.css']
    }
)


export class cardResultMovie{

    @Input()
    public title: string = "NOTITLE";
    @Input()
    public posterPath: string = "NOIMG";
    @Input()
    public description: string = "";
    @Input()
    public movieID: string = "";

    public path : string = "";


    ngOnInit(){
        this.path = "/movie/"+this.movieID;
    }

}