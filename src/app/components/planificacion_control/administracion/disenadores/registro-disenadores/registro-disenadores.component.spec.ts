import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDisenadoresComponent } from './registro-disenadores.component';

describe('RegistroDisenadoresComponent', () => {
  let component: RegistroDisenadoresComponent;
  let fixture: ComponentFixture<RegistroDisenadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroDisenadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroDisenadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
