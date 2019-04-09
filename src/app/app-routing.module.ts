import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCotizacionComponent } from './cotizacion/create/create.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'cotizacion/create',
    component: CreateCotizacionComponent
  },
  {
    path: 'login/login',
    component: LoginComponent
  },
  {
    path: 'register/register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
