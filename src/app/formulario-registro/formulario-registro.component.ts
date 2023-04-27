import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {

  public formularioRegistro!: FormGroup;

  ngOnInit(): void {
    this.formularioRegistro = new FormGroup({
      nombre: new FormControl(),
      edad: new FormControl(),
      genero: new FormControl()
    })
  }
  registrarDatos(){
    console.log(this.formularioRegistro.value);
  }
}
