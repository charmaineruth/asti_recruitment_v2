import { TestBed, inject } from '@angular/core/testing';

import { CreateApplicantService } from './create-applicant.service';

describe('CreateApplicantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateApplicantService]
    });
  });

  it('should be created', inject([CreateApplicantService], (service: CreateApplicantService) => {
    expect(service).toBeTruthy();
  }));
});
