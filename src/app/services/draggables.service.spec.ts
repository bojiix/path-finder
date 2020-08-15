import { TestBed } from '@angular/core/testing';

import { DraggablesService } from './draggables.service';

describe('DraggablesService', () => {
  let service: DraggablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DraggablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
