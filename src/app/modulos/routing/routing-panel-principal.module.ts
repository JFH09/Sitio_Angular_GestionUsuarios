import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PanelPrincipalComponent } from 'src/app/componentes/panel-principal/panel-principal.component';
import { FormularioRegistroComponent } from 'src/app/componentes/formulario-registro/formulario-registro.component';
import { FormularioLoginComponent } from 'src/app/componentes/formulario-login/formulario-login.component';
import { ContenidoEstudiantesComponent } from 'src/app/componentes/contenido-estudiantes/contenido-estudiantes.component';

const rutas: Routes = [
  { path: "panelPrincipal", component: PanelPrincipalComponent, children: [
    { path: "registro", component: FormularioRegistroComponent},
    { path: "login", component: FormularioLoginComponent},
    { path: "listaEstudiantes", component: ContenidoEstudiantesComponent},
    { path: "listaEstudiantes/:parametro", component: ContenidoEstudiantesComponent},
  ]},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(rutas)
  ],
  exports: [RouterModule]
})
export class RoutingPanelPrincipalModule { }
