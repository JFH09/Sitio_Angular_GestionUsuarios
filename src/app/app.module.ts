import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { ToolBarComponent } from './componentes/tool-bar/tool-bar.component';
import { ContenidoEstudiantesComponent } from './componentes/contenido-estudiantes/contenido-estudiantes.component';
import { ListadoPaginasComponent } from './componentes/listado-paginas/listado-paginas.component';
import { LogoComponent } from './componentes/logo/logo.component';
import { CardInfoEstudianteComponent } from './componentes/card-info-estudiante/card-info-estudiante.component';
import { FormularioRegistroComponent } from './componentes/formulario-registro/formulario-registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioLoginComponent } from './componentes/formulario-login/formulario-login.component';
import { MaterialModule } from './modulos/material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { PanelPrincipalComponent } from './componentes/panel-principal/panel-principal.component';
import { RoutingModule } from './modulos/routing/routing.module';
import { MateriasPipe } from './pipes/materias.pipe';
import { ListaEstudiantesDirective } from './directivas/lista-estudiantes.directive';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ToolBarComponent,
    ContenidoEstudiantesComponent,
    ListadoPaginasComponent,
    LogoComponent,
    CardInfoEstudianteComponent,
    FormularioLoginComponent,
    FormularioRegistroComponent,
    PanelPrincipalComponent,
    MateriasPipe,
    ListaEstudiantesDirective,
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule, BrowserAnimationsModule,
    MaterialModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
