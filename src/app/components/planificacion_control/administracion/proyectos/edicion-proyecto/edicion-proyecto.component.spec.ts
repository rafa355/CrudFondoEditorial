import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionProyectoComponent } from './edicion-proyecto.component';

describe('EdicionProyectoComponent', () => {
  let component: EdicionProyectoComponent;
  let fixture: ComponentFixture<EdicionProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicionProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
