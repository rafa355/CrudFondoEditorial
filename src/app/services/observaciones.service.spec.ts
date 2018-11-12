import { TestBed, inject } from '@angular/core/testing';

import { ObservacionesService } from './observaciones.service';

describe('ObservacionesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObservacionesService]
    });
  });

  it('should be created', inject([ObservacionesService], (service: ObservacionesService) => {
    expect(service).toBeTruthy();
  }));
});
