import { TestBed } from '@angular/core/testing';

import { ProfilenlongService } from './profilenlong.service';

describe('ProfilenlongService', () => {
  let service: ProfilenlongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfilenlongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
