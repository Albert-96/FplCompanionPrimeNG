import { TestBed } from '@angular/core/testing';

import { MediaMessageService } from './mediaMessage.service';

describe('MessageService', () => {
  let service: MediaMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
