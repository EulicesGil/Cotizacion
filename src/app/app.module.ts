import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateClientComponent } from './client/create/create.component';
import { EditComponent } from './client/edit/edit.component';
import { GetComponent } from './client/get/get.component';
import { CreateCotizacionComponent } from './cotizacion/create/create.component';
import { ConfirmarCotizacionComponent } from './cotizacion/confirmar/confirmar.component';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { CotizacionService } from './services/cotizacion/cotizacion.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CreateClientComponent,
    EditComponent,
    GetComponent,
    CreateCotizacionComponent,
    ConfirmarCotizacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,HttpClientModule,SlimLoadingBarModule
  ],
  providers: [CotizacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
