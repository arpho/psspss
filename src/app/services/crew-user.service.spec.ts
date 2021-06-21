import { TestBed } from '@angular/core/testing';

import { CrewUserService } from './crew-user.service';

describe('CrewUserService', () => {
  let service: CrewUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrewUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
