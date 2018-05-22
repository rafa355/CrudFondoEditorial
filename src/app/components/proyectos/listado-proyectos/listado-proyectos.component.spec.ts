import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoProyectosComponent } from './listado-proyectos.component';

describe('ListadoProyectosComponent', () => {
  let component: ListadoProyectosComponent;
  let fixture: ComponentFixture<ListadoProyectosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoProyectosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
