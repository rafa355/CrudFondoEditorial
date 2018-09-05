import { TestBed, inject } from '@angular/core/testing';

import { AdjuntoService } from './adjunto.service';

describe('AdjuntoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdjuntoService]
    });
  });

  it('should be created', inject([AdjuntoService], (service: AdjuntoService) => {
    expect(service).toBeTruthy();
  }));
});
