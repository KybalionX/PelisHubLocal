import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: './movie.component.html'
})

export class MovieComponent{

    id : any;

    constructor(private _Activatedroute:ActivatedRoute){
        this.id=this._Activatedroute.snapshot.paramMap.get("id");
        console.log(this.id);
    }

}