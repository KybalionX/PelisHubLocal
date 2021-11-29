import { Component, EventEmitter, Injectable, Output } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";


@Injectable({providedIn: 'root'})
export class UserService {

    logged = new BehaviorSubject(0);


    setLogged(id: string){
        this.logged.next(parseInt(id));
        console.log("Data del usuario guardada en el storage");
        localStorage.setItem('id', id);
    }

    logout(){
        this.logged.next(0);
        localStorage.removeItem('id');

    }


    get idUser() {
        return localStorage.getItem('id');
    }

}