import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EjerciciosComponent } from '../ejercicios/ejercicios.component';

const routes: Routes = [
  {
    path:'persona', component:EjerciciosComponent

  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
