import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms'

import  Oferta from './../../models/oferta/Oferta';
import OfertaDetalle from './../../models/oferta/OfertaDetalle';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarOfertaComponent implements OnInit {

  oferta = [new Oferta(1,1000,2)];
  ofertaDetalle =[new OfertaDetalle(1,"Sony",2,45000,"Usb")];
  constructor(private frm: FormBuilder) { }

  ngOnInit() {
  }

}
