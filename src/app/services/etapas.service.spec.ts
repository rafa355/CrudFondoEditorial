import { TestBed, inject } from '@angular/core/testing';

import { EtapasService } from './etapas.service';

describe('EtapasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EtapasService]
    });
  });

  it('should be created', inject([EtapasService], (service: EtapasService) => {
    expect(service).toBeTruthy();
  }));
});
