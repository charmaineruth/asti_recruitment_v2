import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfApplicantComponent } from './list-of-applicant.component';

describe('ListOfApplicantComponent', () => {
  let component: ListOfApplicantComponent;
  let fixture: ComponentFixture<ListOfApplicantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfApplicantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
