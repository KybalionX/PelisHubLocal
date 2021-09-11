import { ThrowStmt } from "@angular/compiler";
import { Component, Input } from "@angular/core";

@Component(
    {
        selector: "card-movie",
        templateUrl: "./cardmovie.component.html",
        styleUrls: ['./cardmovie.component.css']
    }
)

export class CardMovie{

    @Input()
    public title : string = "NOTITLE";
    @Input()
    public posterPath : string = "NOIMG";

    constructor(){
    }

}