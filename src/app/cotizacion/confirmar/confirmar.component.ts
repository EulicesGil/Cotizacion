import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms'

import Producto from './../../models/cotizacion/Producto';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.css']
})
export class ConfirmarCotizacionComponent implements OnInit {

  angForm: FormGroup;
  productos = [
    new Producto(1,1,1,"Disco duro","Disco duro",50000,10.5,"A",new Date(),new Date(),"assets/img/discoDuro.jpg", 1),
    new Producto(1,1,1,"Mouse","Mouse",20000,10.5,"A",new Date(),new Date(),"assets/img/mouse.jpg", 4),
    new Producto(1,1,1,"Teclado","Teclado",30000,10.5,"A",new Date(),new Date(),"assets/img/teclado.jpg", 3),
    new Producto(1,1,1,"Usb","Usb",15000,10.5,"A",new Date(),new Date(),"assets/img/usb.jpg", 2)
  ];

  constructor(private frm: FormBuilder,) {
    this.createForm();
  }
  
  createForm() {
    this.angForm = this.frm.group({
      observaciones: ['', Validators.required ]   ,
      fechaVencimiento: ['', Validators.required ]  
    });
  }
  ngOnInit() {
  }

}
