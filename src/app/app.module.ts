import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { ContenidoEstudiantesComponent } from './contenido-estudiantes/contenido-estudiantes.component';
import { ListadoPaginasComponent } from './listado-paginas/listado-paginas.component';
import { LogoComponent } from './logo/logo.component';
import { CardInfoEstudianteComponent } from './card-info-estudiante/card-info-estudiante.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ToolBarComponent,
    ContenidoEstudiantesComponent,
    ListadoPaginasComponent,
    LogoComponent,
    CardInfoEstudianteComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
