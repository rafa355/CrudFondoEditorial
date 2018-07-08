import { TestBed, inject } from '@angular/core/testing';

import { SolicitantesService } from './solicitantes.service';

describe('SolicitantesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SolicitantesService]
    });
  });

  it('should be created', inject([SolicitantesService], (service: SolicitantesService) => {
    expect(service).toBeTruthy();
  }));
});
