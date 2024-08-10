import { TestBed } from '@angular/core/testing';

import { MassageDurationService } from './massage-duration.service';

describe('MassageDurationService', () => {
  let service: MassageDurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MassageDurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
