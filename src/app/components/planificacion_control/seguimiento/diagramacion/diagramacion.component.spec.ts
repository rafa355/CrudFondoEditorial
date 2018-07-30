import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramacionComponent } from './diagramacion.component';

describe('DiagramacionComponent', () => {
  let component: DiagramacionComponent;
  let fixture: ComponentFixture<DiagramacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagramacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagramacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
