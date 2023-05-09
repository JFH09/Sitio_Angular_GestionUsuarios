import { Injectable } from '@angular/core';
import { Estudiante } from '../interfaces/estudiante';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ObtenerUsuariosService {
 
 // @Input("usuario") = usuario:
  constructor(private endpoint: HttpClient) { }

  public obtenerUsuarios(): Estudiante[] {
    return []
  }

  public obtenerListaEstudiantes(): Observable<any>{
    return this.endpoint.get('https://jfh09.github.io/JSON_API_DB_SITIO_JS/datosUsuariosProvisional.json')
  }

}
