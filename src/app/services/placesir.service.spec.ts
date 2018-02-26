import { TestBed, inject } from '@angular/core/testing';

import { PlacesirService } from './placesir.service';

describe('PlacesirService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlacesirService]
    });
  });

  it('should be created', inject([PlacesirService], (service: PlacesirService) => {
    expect(service).toBeTruthy();
  }));
});
