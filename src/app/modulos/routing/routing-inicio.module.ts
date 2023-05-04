import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PanelPrincipalComponent } from 'src/app/componentes/panel-principal/panel-principal.component';
import { FormularioLoginComponent } from 'src/app/componentes/formulario-login/formulario-login.component';
import { FormularioRegistroComponent } from 'src/app/componentes/formulario-registro/formulario-registro.component';

const rutas : Routes = [

    // {path: "registro", component: FormularioRegistroComponent},
    // {path: "panelPrincipal", component: PanelPrincipalComponent}
    // { path: "login", component: FormularioLoginComponent},
    { path:"registro", component: FormularioRegistroComponent},
    { path: "panelPrincipal", component: PanelPrincipalComponent},
  ]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // RouterModule.forRoot(rutas)
  ], 
 
})
export class RoutingInicioModule { }
