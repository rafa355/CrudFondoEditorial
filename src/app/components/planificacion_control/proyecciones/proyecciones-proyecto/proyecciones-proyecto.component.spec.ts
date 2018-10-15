import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyeccionesProyectoComponent } from './proyecciones-proyecto.component';

describe('ProyeccionesProyectoComponent', () => {
  let component: ProyeccionesProyectoComponent;
  let fixture: ComponentFixture<ProyeccionesProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyeccionesProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyeccionesProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
