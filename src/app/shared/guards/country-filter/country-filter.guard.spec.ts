import { TestBed } from '@angular/core/testing';

import { CountryFilterGuard } from './country-filter.guard';

describe('CountryFilterGuard', () => {
  let guard: CountryFilterGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CountryFilterGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
