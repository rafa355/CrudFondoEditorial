import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapasProyectoComponent } from './etapas-proyecto.component';

describe('EtapasProyectoComponent', () => {
  let component: EtapasProyectoComponent;
  let fixture: ComponentFixture<EtapasProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtapasProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtapasProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
