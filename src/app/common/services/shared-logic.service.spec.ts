import { TestBed } from '@angular/core/testing';

import { SharedLogicService } from './shared-logic.service';

describe('SharedLogicService', () => {
  let service: SharedLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
