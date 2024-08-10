import { TestBed } from '@angular/core/testing';

import { NailCuttingService } from './nail-cutting.service';

describe('NailCuttingService', () => {
  let service: NailCuttingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NailCuttingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
