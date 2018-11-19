import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionDisenadoresComponent } from './edicion-disenadores.component';

describe('EdicionDisenadoresComponent', () => {
  let component: EdicionDisenadoresComponent;
  let fixture: ComponentFixture<EdicionDisenadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicionDisenadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionDisenadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
