import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {

  public formularioRegistro!: FormGroup;
  public hide : Boolean = true;
  public datos !: unknown;

  ngOnInit(): void {
     
    this.formularioRegistro = new FormGroup({
      nombres: new FormControl(),
      apellidos: new FormControl(),
      edad: new FormControl(),
      identificacion: new FormControl(),
      curso: new FormControl(),
      genero: new FormControl(),
      perfil: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      celular: new FormControl(),
    })
  }
  registrarDatos(){
    console.log(this.formularioRegistro.value);

    alert("Ingreso: \n"+ 
    JSON.stringify(this.formularioRegistro.value))
  }


}
