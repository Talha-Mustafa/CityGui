import { TestBed, inject } from '@angular/core/testing';

import { UploadplaceService } from './uploadplace.service';

describe('UploadplaceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadplaceService]
    });
  });

  it('should be created', inject([UploadplaceService], (service: UploadplaceService) => {
    expect(service).toBeTruthy();
  }));
});
