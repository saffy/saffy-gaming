import { TestBed } from '@angular/core/testing';

import { LootTableService } from './loot-table.service';

describe('LootTableService', () => {
  let service: LootTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LootTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
