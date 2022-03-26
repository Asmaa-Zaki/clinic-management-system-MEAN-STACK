import { TestBed } from '@angular/core/testing';

import { ClinicServService } from './clinic-serv.service';

describe('ClinicServService', () => {
  let service: ClinicServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClinicServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
