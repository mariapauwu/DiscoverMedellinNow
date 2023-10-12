import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestauranteComponent } from "./Componentes/restaurante/restaurante.component";
import { InicioComponent } from "./Componentes/Inicio/inicio.component";
import { atraccionesComponent } from './Componentes/atracciones/atracciones.component';


const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'restaurante', component: RestauranteComponent},
  {path: 'atracciones', component: atraccionesComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
