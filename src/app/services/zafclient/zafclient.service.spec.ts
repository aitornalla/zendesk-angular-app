import { TestBed } from '@angular/core/testing';

import { ZafClientService } from './zafclient.service';

describe('ZafClientService', () => {
  let service: ZafClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZafClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
