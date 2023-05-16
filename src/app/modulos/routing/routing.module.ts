import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PanelPrincipalComponent } from 'src/app/componentes/panel-principal/panel-principal.component'
import { FormularioRegistroComponent } from 'src/app/componentes/formulario-registro/formulario-registro.component';
import { FormularioLoginComponent } from 'src/app/componentes/formulario-login/formulario-login.component';
import { RoutingPanelPrincipalModule } from './routing-panel-principal.module';
import { RoutingInicioModule } from './routing-inicio.module';


const rutas: Routes = [
    
  { path: "login", component: FormularioLoginComponent},
  { path:"registro", component: FormularioRegistroComponent},
  { path: "panelPrincipal", component: PanelPrincipalComponent},
  { path: "", redirectTo: "/login", pathMatch: "full"}
] 

  
  // const rutas: Routes = [
    
  //   // { path: "login", component: FormularioLoginComponent},
  //   // { path:"registro", component: FormularioRegistroComponent},
  //   { path: "panelPrincipal", component: PanelPrincipalComponent},
  //   { path: "", redirectTo: "/panelPrincipal", pathMatch: "full"}
  // ] 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RoutingPanelPrincipalModule,
   // RoutingInicioModule,
    RouterModule.forRoot(rutas)
    //  RoutingInicioModule
  ],
  exports: [ 
    RouterModule
  ]
})
export class RoutingModule { }
