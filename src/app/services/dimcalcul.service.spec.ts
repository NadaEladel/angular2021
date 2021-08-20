import { TestBed } from '@angular/core/testing';

import { DimcalculService } from './dimcalcul.service';

describe('DimcalculService', () => {
  let service: DimcalculService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DimcalculService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
