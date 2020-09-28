import { TestBed } from '@angular/core/testing';

import { TopNewsStateService } from './top-news-state.service';

describe('TopNewsStateService', () => {
  let service: TopNewsStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopNewsStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
