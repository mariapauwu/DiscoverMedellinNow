import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestauranteComponent } from "./Componentes/restaurante/restaurante.component";
import { InicioComponent } from "./Componentes/Inicio/inicio.component";
import { atraccionesComponent } from './Componentes/atracciones/atracciones.component';
import { MapaComponent } from './Componentes/mapa/mapa.component';


const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'restaurante', component: RestauranteComponent},
  {path: 'atracciones', component: atraccionesComponent},
  {path: 'mapa', component: MapaComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
