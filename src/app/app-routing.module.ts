import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCotizacionComponent } from './cotizacion/create/create.component';
import { ConfirmarCotizacionComponent } from './cotizacion/confirmar/confirmar.component';

const routes: Routes = [
  {
    path: 'cotizacion/create',
    component: CreateCotizacionComponent
  },
  {
    path:'cotizacion/confirmar',
    component:ConfirmarCotizacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
