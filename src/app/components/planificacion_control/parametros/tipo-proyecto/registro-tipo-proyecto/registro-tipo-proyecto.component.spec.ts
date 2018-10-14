import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTipoProyectoComponent } from './registro-tipo-proyecto.component';

describe('RegistroTipoProyectoComponent', () => {
  let component: RegistroTipoProyectoComponent;
  let fixture: ComponentFixture<RegistroTipoProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroTipoProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroTipoProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
