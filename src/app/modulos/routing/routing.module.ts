import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PanelPrincipalComponent } from 'src/app/panel-principal/panel-principal.component';
import { FormularioRegistroComponent } from 'src/app/formulario-registro/formulario-registro.component';
import { FormularioLoginComponent } from 'src/app/formulario-login/formulario-login.component';
import { RoutingPanelPrincipalModule } from './routing-panel-principal.module';


const rutas: Routes = [
  // { path: "registro", component: FormularioRegistroComponent},
  { path: "login", component: FormularioLoginComponent},
  { path:"registro", component: FormularioRegistroComponent},
  { path: "panelPrincipal", component: PanelPrincipalComponent},

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RoutingPanelPrincipalModule,
    RouterModule.forRoot(rutas)
  ],
  exports: [ 
    RouterModule
  ]
})
export class RoutingModule { }
