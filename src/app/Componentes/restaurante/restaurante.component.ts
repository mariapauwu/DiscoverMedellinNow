import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-restaurante',
    templateUrl: './restaurante.component.html',
    styleUrls: ['./restaurante.component.css']
})

export class RestauranteComponent implements OnInit {
    data: any;

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
      this.http.get('/src/app/componentes/restaurante').subscribe((response) => {
        this.data = response;
      });
    }
}