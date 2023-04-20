import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoEstudiantesComponent } from './contenido-estudiantes.component';

describe('ContenidoEstudiantesComponent', () => {
  let component: ContenidoEstudiantesComponent;
  let fixture: ComponentFixture<ContenidoEstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoEstudiantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
