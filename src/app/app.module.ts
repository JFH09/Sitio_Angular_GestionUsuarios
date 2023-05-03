import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { ContenidoEstudiantesComponent } from './contenido-estudiantes/contenido-estudiantes.component';
import { ListadoPaginasComponent } from './listado-paginas/listado-paginas.component';
import { LogoComponent } from './logo/logo.component';
import { CardInfoEstudianteComponent } from './card-info-estudiante/card-info-estudiante.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioLoginComponent } from './formulario-login/formulario-login.component';
import { MaterialModule } from './modulos/material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { PanelPrincipalComponent } from './panel-principal/panel-principal.component';
import { RoutingModule } from './modulos/routing/routing.module';
import { MateriasPipe } from './pipes/materias.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ToolBarComponent,
    ContenidoEstudiantesComponent,
    ListadoPaginasComponent,
    LogoComponent,
    CardInfoEstudianteComponent,
    FormularioRegistroComponent,
    FormularioLoginComponent,
    PanelPrincipalComponent,
    MateriasPipe,
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
