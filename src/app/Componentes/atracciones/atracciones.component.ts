import { Component, OnInit } from "@angular/core";
import { ApiActivity } from '../../services/atraccion_s/atraccion.service';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-atracciones',
    templateUrl: './atracciones.component.html',
    styleUrls: ['./atracciones.component.css']
    })

export class atraccionesComponent implements OnInit {
  datos: any;

  constructor(private apiService: ApiActivity) {}

  ngOnInit() {
    this.apiService.getDatos().subscribe(data => {
      console.log(data);
      this.datos = data;
    });
  }
}