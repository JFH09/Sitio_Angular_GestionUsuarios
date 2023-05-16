import { Injectable } from '@angular/core';
import { Estudiante } from '../interfaces/estudiante';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';

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
    return this.endpoint.get(`${environment.desarrolloURL}datosUsuariosProvisional.json`)
  }

}
