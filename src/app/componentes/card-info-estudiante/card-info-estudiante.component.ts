import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Estudiante } from '../../interfaces/estudiante';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-info-estudiante',
  templateUrl: './card-info-estudiante.component.html',
  styleUrls: ['./card-info-estudiante.component.css']
})
export class CardInfoEstudianteComponent implements OnInit{
 

  public promedio: number = 85;
  public materia!: string;



  @Input() estudiante!: Estudiante;
  @Output() alumnoModificar  =new EventEmitter<Estudiante>();
  public mostrarUsuariosPerfil !: string;
  public nombreCompleto!: string;
  constructor(private activateRoute: ActivatedRoute){

  }
  ngOnInit(): void {
    this.activateRoute.params.subscribe(parametro => {
      for (const key in parametro) {
        this.mostrarUsuariosPerfil = parametro[key];
  
      }
      console.log(this.mostrarUsuariosPerfil)
    });
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
