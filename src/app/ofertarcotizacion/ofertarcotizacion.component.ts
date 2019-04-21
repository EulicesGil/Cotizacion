import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras} from "@angular/router";
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms'
import {HttpClient} from '@angular/common/http';
import  Cotizacion from './../models/cotizacion/Cotizacion';
import Producto from '../models/cotizacion/Producto';
import ofertacorregida from '../models/oferta/Oferta';
import { isDate } from '@angular/common/src/i18n/format_date';
import { Console } from '@angular/core/src/console';



@Component({
  selector: 'app-ofertarcotizacion',
  templateUrl: './ofertarcotizacion.component.html',
  styleUrls: ['./ofertarcotizacion.component.css']
})
export class OfertarcotizacionComponent implements OnInit {
  frmNotificarOfertas: FormGroup;
 
  Cotizaciones = [
    new Cotizacion(1,1, new Producto(1,1,1,'Portatil','Acer2354',2300000,1,'',new Date(),new Date(),'',1),5),
    new Cotizacion(1,1, new Producto(2,2,2,'D.D','3454',500000,1,'',new Date(),new Date(),'',1),5)
  

  ];
  constructor() {
 
   
  }

  getCotizacionesPorOfertar()
  {}

  setcrearoferta(of)
  {
    alert("datos:"+
    of )

     


  }



 mensajeconfirmacionoferta()
 { alert('Se ha notificado exítosamente al cliente la oferta que realizaste');}



 

  ngOnInit() {
  }
}
