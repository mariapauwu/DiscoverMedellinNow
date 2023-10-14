import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiActivity {
  private apiUrl = 'http://127.0.0.1:8000/';  // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  getDatos() {
    return this.http.get(`${this.apiUrl}/activities/`);
  }

  // Agregar más métodos según tus necesidades
}

  

