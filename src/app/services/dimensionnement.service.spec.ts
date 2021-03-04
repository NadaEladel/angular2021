import { TestBed } from '@angular/core/testing';

import { DimensionnementService } from './dimensionnement.service';

describe('DimensionnementService', () => {
  let service: DimensionnementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DimensionnementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
