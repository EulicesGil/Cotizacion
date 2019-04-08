import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCotizacionComponent } from './cotizacion/create/create.component';

const routes: Routes = [
  {
    path: 'cotizacion/create',
    component: CreateCotizacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
