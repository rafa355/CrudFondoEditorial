import { TestBed, inject } from '@angular/core/testing';

import { CargararchivoService } from './cargararchivo.service';

describe('CargararchivoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CargararchivoService]
    });
  });

  it('should be created', inject([CargararchivoService], (service: CargararchivoService) => {
    expect(service).toBeTruthy();
  }));
});
