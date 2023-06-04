import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUsers(){
    const url = 'http://127.0.0.1:8000/api/users'; // Reemplaza con la URL de tu API
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const response = this.http.get<any>(url, { headers });
    return response;
  }
}
