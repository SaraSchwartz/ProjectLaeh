import { TestBed } from '@angular/core/testing';

import { SequenceServiceService } from './sequence-service.service';

describe('SequenceServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SequenceServiceService = TestBed.get(SequenceServiceService);
    expect(service).toBeTruthy();
  });
});
