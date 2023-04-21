export  interface Estudiante {
    nombre: string;
    apellidos: string, 
    identificacion: number,
    edad: number,
    salon: number,
    promedio: number,
    notasMaterias: {
      matematicas: number,
      ciencias: number,
      ingles: number,
      fisica: number,
    },
    observaciones: string
}