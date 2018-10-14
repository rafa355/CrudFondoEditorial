import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroSolicitanteComponent } from './registro-solicitante.component';

describe('RegistroSolicitanteComponent', () => {
  let component: RegistroSolicitanteComponent;
  let fixture: ComponentFixture<RegistroSolicitanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroSolicitanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroSolicitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
