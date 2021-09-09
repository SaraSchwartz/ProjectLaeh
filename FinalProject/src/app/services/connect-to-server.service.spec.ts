import { TestBed } from '@angular/core/testing';

import { ConnectToServerService } from './connect-to-server.service';

describe('ConnectToServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConnectToServerService = TestBed.get(ConnectToServerService);
    expect(service).toBeTruthy();
  });
});
