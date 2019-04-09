import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateClientComponent } from './client/create/create.component';
import { EditComponent } from './client/edit/edit.component';
import { GetComponent } from './client/get/get.component';
import { CreateCotizacionComponent } from './cotizacion/create/create.component';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { CotizacionService } from './services/cotizacion/cotizacion.service';
import { LoginService } from './services/login/login.service';
import { ConsultarOfertaComponent } from './oferta/consultar/consultar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CreateClientComponent,
    EditComponent,
    GetComponent,
    CreateCotizacionComponent,
    ConsultarOfertaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SlimLoadingBarModule,
    MatStepperModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [CotizacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
