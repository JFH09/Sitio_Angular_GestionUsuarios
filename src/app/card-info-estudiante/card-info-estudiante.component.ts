import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Estudiante } from '../interfaces/estudiante';

@Component({
  selector: 'app-card-info-estudiante',
  templateUrl: './card-info-estudiante.component.html',
  styleUrls: ['./card-info-estudiante.component.css']
})
export class CardInfoEstudianteComponent implements OnInit{
  constructor(){}

  public promedio: number = 85;
  public materia!: string;

  @Input() estudiante!: Estudiante;
  @Output() alumnoModificar  =new EventEmitter<Estudiante>();
  ngOnInit(): void {

    
  }
  sacarPromedio (matematicas:number, ciencias:number, ingles:number, fisica:number){

    this.promedio = ((matematicas + ciencias + ingles + fisica)/ 4)
    return this.promedio;
  }

  editarEstudiante(){
    alert("editar - " +this.estudiante.nombre);
    this.alumnoModificar.emit(this.estudiante);
  }

  
}
