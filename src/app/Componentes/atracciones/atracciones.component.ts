import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-atracciones',
    templateUrl: './atracciones.component.html',
    })

export class atraccionesComponent implements OnInit {
    data: any;

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
      this.http.get('/src/app/componentes/atracciones').subscribe((response) => {
        this.data = response;
      });
    }
}