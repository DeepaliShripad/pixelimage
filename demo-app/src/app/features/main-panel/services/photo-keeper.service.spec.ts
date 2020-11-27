import { TestBed } from '@angular/core/testing';

import { PhotoKeeperService } from './photo-keeper.service';

describe('PhotoKeeperService', () => {
  let service: PhotoKeeperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoKeeperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
