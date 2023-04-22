import { Component } from '@angular/core';
import { Estudiante } from '../interfaces/estudiante';

@Component({
  selector: 'app-contenido-estudiantes',
  templateUrl: './contenido-estudiantes.component.html',
  styleUrls: ['./contenido-estudiantes.component.css']
})
export class ContenidoEstudiantesComponent {
  public listaEstudiantes: Estudiante[] = [{
    nombre: "Pepito",
    apellidos: "Perez", 
    identificacion: 21151561,
    edad: 13,
    salon: 304,
    promedio: 80, //sacar entre la suma y division de las materias...
    notasMaterias: {
      matematicas: 60,
      ciencias: 78,
      ingles: 80,
      fisica: 99,
    },
    observaciones: "El estudiante no se comporta en clase"
  },
  {
    nombre: "Jose",
    apellidos: "Ramirez", 
    identificacion: 345232,
    edad: 16,
    salon: 1102,
    promedio: 55,
    notasMaterias: {
      matematicas: 66,
      ciencias: 55,
      ingles: 30,
      fisica: 68,
    },
    observaciones: "Esta vendiendo dulces sin permiso"
  },
  {
    nombre: "Naruto",
    apellidos: "Usumaki", 
    identificacion: 867643,
    edad: 15,
    salon: 702,
    promedio: 75,
    notasMaterias: {
      matematicas: 70,
      ciencias: 68,
      ingles: 80,
      fisica: 60,
    },
    observaciones: "Se copio en un examen de fisica"
  },
  {
    nombre: "Andres",
    apellidos: "Rodriguez", 
    identificacion: 6546352,
    edad: 8,
    salon: 101,
    promedio: 90,
    notasMaterias: {
      matematicas: 90,
      ciencias: 88,
      ingles: 85,
      fisica: 95,
    },
    observaciones: "El acompañamiento de los padres es bueno"
  },
  {
    nombre: "Spider",
    apellidos: "Man", 
    identificacion: 32432442,
    edad: 16,
    salon: 1002,
    promedio: 95,
    notasMaterias: {
      matematicas: 100,
      ciencias: 80,
      ingles: 82,
      fisica: 100,
    },
    observaciones: "Comprometido con el estudio"
  },
]

public estudianteModificar !: Estudiante;

alumnoModificar(estudiante: Estudiante){
  this.estudianteModificar  = estudiante;
}

}
