import { TestBed, inject } from '@angular/core/testing';

import { AuthenticationguardService } from './authenticationguard.service';

describe('AuthenticationguardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationguardService]
    });
  });

  it('should be created', inject([AuthenticationguardService], (service: AuthenticationguardService) => {
    expect(service).toBeTruthy();
  }));
});
