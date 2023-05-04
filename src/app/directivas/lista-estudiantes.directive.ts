import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Estudiante } from '../interfaces/estudiante';

@Directive({
  selector: '[appListaEstudiantes]'
})
export class ListaEstudiantesDirective implements OnInit{

  @Input("perfilEstudiante") perfilEstudiante!: string; 
  @Input("mostrarUsuariosPerfil") mostrarUsuariosPerfil!: string; 
  constructor(  
    private element: ElementRef,
    private renderer: Renderer2
    ) { }


  ngOnInit(): void {
    
    if(this.perfilEstudiante == "Estudiante"){
      
      this.renderer.setStyle( this.element.nativeElement, "background-color", "#0088ff0f")
      
     }else if(this.perfilEstudiante == "Administrador"){
      this.renderer.setStyle( this.element.nativeElement, "background-color", "rgb(20 19 44)")
      this.renderer.setStyle( this.element.nativeElement, "color", "#ffffff")
     }
     // this.element.nativeElement, "display", "none"
   // .removeChild();
  }

}
