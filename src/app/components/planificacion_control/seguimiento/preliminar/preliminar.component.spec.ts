import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreliminarComponent } from './preliminar.component';

describe('PreliminarComponent', () => {
  let component: PreliminarComponent;
  let fixture: ComponentFixture<PreliminarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreliminarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
