import { TestBed, inject } from '@angular/core/testing';

import { NologueadoService } from './nologueado.service';

describe('NologueadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NologueadoService]
    });
  });

  it('should be created', inject([NologueadoService], (service: NologueadoService) => {
    expect(service).toBeTruthy();
  }));
});
