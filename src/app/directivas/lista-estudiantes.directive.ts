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
    if(this.perfilEstudiante != this.mostrarUsuariosPerfil){
      
      this.renderer.setStyle(
        this.element.nativeElement, "display", "none"
      )
      
     }
   // .removeChild();
  }

}
