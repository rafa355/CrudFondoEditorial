import { TestBed, inject } from '@angular/core/testing';

import { ProyeccionesService } from './proyecciones.service';

describe('ProyeccionesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProyeccionesService]
    });
  });

  it('should be created', inject([ProyeccionesService], (service: ProyeccionesService) => {
    expect(service).toBeTruthy();
  }));
});
