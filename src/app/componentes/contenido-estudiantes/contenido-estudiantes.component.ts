import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../interfaces/estudiante';
import { ActivatedRoute } from '@angular/router';
import { ObtenerUsuariosService } from 'src/app/servicios/obtener-usuarios.service';

@Component({
  selector: 'app-contenido-estudiantes',
  templateUrl: './contenido-estudiantes.component.html',
  styleUrls: ['./contenido-estudiantes.component.css']
})
export class ContenidoEstudiantesComponent implements OnInit {
//   public listaEstudiantes: Estudiante[] = [{
//     nombre: "Pepito",
//     apellidos: "Perez", 
//     identificacion: 21151561,
//     edad: 13,
//     salon: 304,
//     promedio: 80, //sacar entre la suma y division de las materias...
//     perfil: "Estudiante",
//     notasMaterias: {
//       matematicas: 60,
//       ciencias: 78,
//       ingles: 80,
//       fisica: 99,
//     },
//     observaciones: "El estudiante no se comporta en clase"
//   },
//   {
//     nombre: "Jose",
//     apellidos: "Ramirez", 
//     identificacion: 345232,
//     edad: 16,
//     salon: 1102,
//     promedio: 55,
//     perfil: "Estudiante",
//     notasMaterias: {
//       matematicas: 66,
//       ciencias: 55,
//       ingles: 30,
//       fisica: 68,
//     },
//     observaciones: "Esta vendiendo dulces sin permiso"
//   },
//   {
//     nombre: "Naruto",
//     apellidos: "Usumaki", 
//     identificacion: 867643,
//     edad: 15,
//     salon: 702,
//     promedio: 75,
//     perfil: "Estudiante",
//     notasMaterias: {
//       matematicas: 70,
//       ciencias: 68,
//       ingles: 80,
//       fisica: 60,
//     },
//     observaciones: "Se copio en un examen de fisica"
//   },
//   {
//     nombre: "Andres",
//     apellidos: "Rodriguez", 
//     identificacion: 6546352,
//     edad: 8,
//     salon: 101,
//     promedio: 90,
//     perfil: "Administrador",
//     notasMaterias: {
//       matematicas: 90,
//       ciencias: 88,
//       ingles: 85,
//       fisica: 95,
//     },
//     observaciones: "El acompañamiento de los padres es bueno"
//   },
//   {
//     nombre: "Spider",
//     apellidos: "Man", 
//     identificacion: 32432442,
//     edad: 16,
//     salon: 1002,
//     promedio: 95,
//     perfil: "Administrador",
//     notasMaterias: {
//       matematicas: 100,
//       ciencias: 80,
//       ingles: 82,
//       fisica: 100,
//     },
//     observaciones: "Comprometido con el estudio"
//   },
//   // {
//   //   nombre: "Bruce",
//   //   apellidos: "Wayne", 
//   //   identificacion: 9999999,
//   //   edad: 33,
//   //   salon: 1002,
//   //   promedio: 0,
//   //   notasMaterias: {
//   //     matematicas: 100,
//   //     ciencias: 80,
//   //     ingles: 82,
//   //     fisica: 100,
//   //   },
//   //   observaciones: "Comprometido con el estudio"
//   // },
// ]

public estudianteModificar !: Estudiante;
public mostrarUsuariosPerfil !: string;
public listaEstudiantes :Estudiante[]  = [];
constructor(private activateRoute: ActivatedRoute, private obtenerUsuariosService: ObtenerUsuariosService){

}

  ngOnInit(): void {
    this.activateRoute.params.subscribe(parametro => {
      for (const key in parametro) {
        this.mostrarUsuariosPerfil = parametro[key];
  
      }
      console.log(this.mostrarUsuariosPerfil)
    });

    //console.log(this.obtenerUsuariosService.obtenerUsuarios());
    console.log(this.obtenerUsuariosService.obtenerListaEstudiantes().subscribe((usuarios)=>{
      console.log(typeof usuarios);
      for (const usuario of usuarios) {
        console.log( usuario);
        this.listaEstudiantes.push(usuario);
      }
      
    }));

  }

alumnoModificar(estudiante: Estudiante){
  this.estudianteModificar  = estudiante;
}

}
