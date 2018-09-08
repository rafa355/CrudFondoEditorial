import { TestBed, inject } from '@angular/core/testing';

import { CargarimagenService } from './cargarimagen.service';

describe('CargarimagenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CargarimagenService]
    });
  });

  it('should be created', inject([CargarimagenService], (service: CargarimagenService) => {
    expect(service).toBeTruthy();
  }));
});
