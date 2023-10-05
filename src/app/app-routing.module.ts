import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestauranteComponent } from "./Componentes/restaurante/restaurante.component";
import { InicioComponent } from "./Componentes/Inicio/inicio.component";



const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'restaurante', component: RestauranteComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
