import { Component, Input, ViewChild, OnInit } from "@angular/core";
import { CircleProgressComponent, CircleProgressOptions, NgCircleProgressModule } from "ng-circle-progress";

@Component(
    {
        selector: "card-movie",
        templateUrl: "./cardmovie.component.html",
        styleUrls: ['./cardmovie.component.css']
    }
)

export class CardMovie {

    @ViewChild('circleProgress') circleProgress !: any;

    @Input()
    public title: string = "NOTITLE";
    @Input()
    public posterPath: string = "NOIMG";
    @Input()
    public valoracion: string = "";
    @Input()
    public movieID: string = "";
    @Input()
    public vote: number = 0;

    constructor() {

    }

    ngOnInit() {
    }

    ngAfterContentInit() {
        this.vote = parseFloat(this.valoracion) * 10;
    }

    clicked() {
        console.log("hello")
    }

}