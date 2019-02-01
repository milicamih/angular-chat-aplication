import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
//import { Observable } from 'rxjs';
//import { User } from "../models/User";
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
//import { Http, Response, Headers, RequestOptions } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any>("assets/conversations.json")                     
  }

}

@Injectable({
  providedIn: 'root'
})
export class ChatingService {

  constructor(private http: HttpClient) {}
   
   getUsers() {
        return this.http.get("./assets/conversations.json")
                          
   }
 }
