import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateApplicantComponent } from './create-applicant.component';

describe('CreateApplicantComponent', () => {
  let component: CreateApplicantComponent;
  let fixture: ComponentFixture<CreateApplicantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateApplicantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
