import { TestBed } from '@angular/core/testing';

import { ReceptGuard } from './recept.guard';

describe('ReceptGuard', () => {
  let guard: ReceptGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ReceptGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
