import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-applicant',
  templateUrl: './create-applicant.component.html',
  styleUrls: ['./create-applicant.component.css']
})
export class CreateApplicantComponent implements OnInit {

  userForm: FormGroup;

  // userForm = new FormGroup({
  //   name: new FormControl('Charmaine', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]),
  //   email: new FormControl(),
  //   address: new FormGroup({
  //     street: new FormControl(),
  //     city: new FormControl(),
  //     postalcode: new FormControl(null, Validators.pattern('^[1-9][0-9]{4}$'))
  //   })
  // });

  onSubmit(){
    console.log(this.userForm.value);
    alert('Saved')
  }
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this._formBuilder.group({
      name: this._formBuilder.group({
        lastname: ['Dela Cruz', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]],
        firstname: ['Juan', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]],
        middlename: ['Santos', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]],
        nameextension: ['Jr', [Validators.maxLength(2)]],
      }),
      contactInformation: this._formBuilder.group({
        emailaddress: ['juandelacruz@gmail.com', ],
        cellphone: ['09065826358'],
        residentialAddress: ['Sample Residential Address'],
        permanentAddress: ['Sample Permanent Address']
      }),
      elementaryEducation: this._formBuilder.group({
        eNameOfSchool: ['Elementary School'],
        eYearGraduated: ['2000'],
        eHonor: ['Valedictorian']
      }),
      secondaryEducation: this._formBuilder.group({
        sNameOfSchool: ['High School'],
        sYearGraduated: ['2006'],
        sHonor: ['Valedictorian']
      }),
      collegeEducation: this._formBuilder.group({
        cNameOfSchool: ['College State University'],
        cYearGraduated: ['2011'],
        cHonor: ['Magna Cumlaude']
      }),
      hobbies: ['Web Development']    
    })
  }
}
