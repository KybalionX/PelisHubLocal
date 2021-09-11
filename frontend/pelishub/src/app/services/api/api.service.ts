import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ApiService {

    API_KEY: string = "c3519dc03ba1de5a4c499a0b89386039";

    constructor(private http: HttpClient) {

    }

}