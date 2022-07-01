import { TestBed } from '@angular/core/testing';

import { AfazeresService } from './afazeres.service';

describe('AfazeresService', () => {
  let service: AfazeresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfazeresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
