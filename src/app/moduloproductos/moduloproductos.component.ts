import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-moduloproductos',
  templateUrl: './moduloproductos.component.html',
  styleUrls: ['./moduloproductos.component.css']
})
export class ModuloproductosComponent implements OnInit {

  constructor() { }
modproducto:FormGroup
  ngOnInit() {
  }

  guardarproducto(producto)
  {
    alert("el dato es:"+producto);

  }

}
