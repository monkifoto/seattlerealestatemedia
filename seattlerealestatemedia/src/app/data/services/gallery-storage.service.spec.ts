import { TestBed } from '@angular/core/testing';

import { GalleryStorageService } from './gallery-storage.service';

describe('GalleryStorageService', () => {
  let service: GalleryStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GalleryStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
