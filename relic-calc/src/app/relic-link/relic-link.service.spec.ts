import { TestBed } from '@angular/core/testing';

import { RelicLinkService } from './relic-link.service';

describe('RelicLinkService', () => {
  let service: RelicLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelicLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
