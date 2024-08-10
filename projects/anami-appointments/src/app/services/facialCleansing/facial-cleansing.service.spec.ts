import { TestBed } from '@angular/core/testing';

import { FacialCleansingService } from './facial-cleansing.service';

describe('FacialCleansingService', () => {
  let service: FacialCleansingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacialCleansingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
