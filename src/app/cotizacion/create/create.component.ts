import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras} from "@angular/router";
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms'
import {HttpClient} from '@angular/common/http';

import TipoProducto from './../../models/cotizacion/TipoProducto';
import Producto from './../../models/cotizacion/Producto';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateCotizacionComponent implements OnInit {
  isLinear = true;
  frmAgregarACotizacion: FormGroup;
  frmConfirmarCotizacion: FormGroup;
  tipoProductos = [new TipoProducto(1,"Computadores")];
  productos = [];
  productosAFacturar = [
    new Producto(1,1,1,"Disco duro","Disco duro",50000,10.5,"A",new Date(),new Date(),"assets/img/discoDuro.jpg", 1),
    new Producto(1,1,1,"Mouse","Mouse",20000,10.5,"A",new Date(),new Date(),"assets/img/mouse.jpg", 4),
    new Producto(1,1,1,"Teclado","Teclado",30000,10.5,"A",new Date(),new Date(),"assets/img/teclado.jpg", 3),
    new Producto(1,1,1,"Usb","Usb",15000,10.5,"A",new Date(),new Date(),"assets/img/usb.jpg", 2)
  ];

  constructor(private frm: FormBuilder, private router: Router,private http: HttpClient) { 
    this.createForm();
  }

  createForm() {
    this.frmAgregarACotizacion = this.frm.group({
      tipoProducto: ['', Validators.required ]     
    });

    this.frmConfirmarCotizacion = this.frm.group({
      observaciones: ['', Validators.required ]   ,
      fechaVencimiento: ['', Validators.required ]  
    });
  }

  getProductos(){
    this.productos = [
      new Producto(1,1,1,"Disco duro","Disco duro",50000,10.5,"A",new Date(),new Date(),"assets/img/discoDuro.jpg", null),
      new Producto(1,1,1,"Mouse","Mouse",20000,10.5,"A",new Date(),new Date(),"assets/img/mouse.jpg", null),
      new Producto(1,1,1,"Teclado","Teclado",30000,10.5,"A",new Date(),new Date(),"assets/img/teclado.jpg", null),
      new Producto(1,1,1,"Usb","Usb",15000,10.5,"A",new Date(),new Date(),"assets/img/usb.jpg", null)
    ];
  }
  confimarCotizacion(){
    let navigationExtras: NavigationExtras = {
      queryParams:{"Datos":JSON.stringify(this.productos)}
    };
    this.http.post("cotizacion/confirmar",this.productos)
    this.router.navigate(["cotizacion/confirmar"], navigationExtras);
  }

  ngOnInit() {
  }

}
