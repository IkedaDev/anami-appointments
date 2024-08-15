import { TestBed } from '@angular/core/testing';

import { NailCutsService } from './nail-cuts.service';

describe('NailCutsService', () => {
  let service: NailCutsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NailCutsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
