import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInfoEstudianteComponent } from './card-info-estudiante.component';

describe('CardInfoEstudianteComponent', () => {
  let component: CardInfoEstudianteComponent;
  let fixture: ComponentFixture<CardInfoEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardInfoEstudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardInfoEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
