import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras} from "@angular/router";


import { FormGroup,  FormBuilder,  Validators } from '@angular/forms'
import TipoProducto from './../../models/cotizacion/TipoProducto';
import Producto from './../../models/cotizacion/Producto';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateCotizacionComponent implements OnInit {

  angForm: FormGroup;
  tipoProductos = [new TipoProducto(1,"Computadores")];
  productos = [];

  constructor(private frm: FormBuilder, private router: Router) { 
    this.createForm();
  }

  createForm() {
    this.angForm = this.frm.group({
      tipoProducto: ['', Validators.required ]     
    });
  }

  getProductos(){
    this.productos = [
      new Producto(1,1,1,"Disco duro","Disco duro",50000,10.5,"A",new Date(),new Date(),"assets/img/discoDuro.jpg"),
      new Producto(1,1,1,"Mouse","Mouse",20000,10.5,"A",new Date(),new Date(),"assets/img/mouse.jpg"),
      new Producto(1,1,1,"Teclado","Teclado",30000,10.5,"A",new Date(),new Date(),"assets/img/teclado.jpg"),
      new Producto(1,1,1,"Usb","Usb",15000,10.5,"A",new Date(),new Date(),"assets/img/usb.jpg")
    ];
  }
  confimarCotizacion(){
    let navigationExtras: NavigationExtras = {
      queryParams:{"Datos":JSON.stringify(this.productos)}
    };
    this.router.navigate(["cotizacion/confirmar"], navigationExtras);
  }

  ngOnInit() {
  }

}
