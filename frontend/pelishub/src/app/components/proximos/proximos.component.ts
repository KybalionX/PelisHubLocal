import { Component } from "@angular/core";

@Component({
    selector: 'proximos',
    templateUrl: './proximos.component.html',
    styleUrls: [
        './proximos.component.css'
    ]
})

export class Proximos {

    page : number = 1;

    constructor(){
        console.clear();
        console.log("Construida la seccion de proximos");
    }
    
}