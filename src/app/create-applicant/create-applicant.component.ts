import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService, LocalStorage } from 'ng2-webstorage';
import { CreateApplicantService } from './create-applicant.service';

@Component({
  selector: 'app-create-applicant',
  templateUrl: './create-applicant.component.html',
  styleUrls: ['./create-applicant.component.css'],
  providers: [CreateApplicantService]
})
export class CreateApplicantComponent implements OnInit {

  userForm: FormGroup;
  lastname: String;
  firstname: String;
  middlename: String;
  nameextension: String;

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
    this.lastname=this.userForm.value.name.lastname;
    this.firstname=this.userForm.value.name.firstname;
    this.middlename=this.userForm.value.name.middlename;
    this.nameextension=this.userForm.value.name.nameextension;
  }
  
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this._formBuilder.group({
      name: this._formBuilder.group({
        lastname: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(25), Validators.pattern('[a-zA-Z0-9\w Ññ]+\$')]],
        firstname: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(25), Validators.pattern('[a-zA-Z0-9\w Ññ]+\$')]],
        middlename: [null, [Validators.minLength(4), Validators.maxLength(25),Validators.pattern('[a-zA-Z0-9\w Ññ]+\$')]],
        nameextension: [null, [Validators.maxLength(2)]],
      }),
      contactInformation: this._formBuilder.group({
        emailaddress: ['', Validators.pattern('^[a-zA-Z0-9._Ññ]+@[a-z]+([.][a-z]+)+\$')],
        cellphone: [null, Validators.pattern('^[0-9;)(-]+\$')],
        residentialAddress: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(100), Validators.pattern('^[ÑñA-Za-z0-9 -~]*\$')]],
        permanentAddress: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(100), Validators.pattern('^[ÑñA-Za-z0-9 -~]*\$')]]
      }),
      elementaryEducation: this._formBuilder.group({
        eNameOfSchool: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50), Validators.pattern('^[ÑñA-Za-z0-9 -~]*\$')]],
        eYearGraduated: ['',[Validators.required, Validators.pattern('^[0-9;)(-]+\$')]],
        eHonor: ['', Validators.pattern('[a-zA-Z0-9\w Ññ]+\$')]
      }),
      secondaryEducation: this._formBuilder.group({
        sNameOfSchool:['', [Validators.required, Validators.minLength(4), Validators.maxLength(50), Validators.pattern('^[ÑñA-Za-z0-9 -~]*\$')]],
        sYearGraduated: ['', [Validators.required, Validators.pattern('^[0-9;)(-]+\$')]],
        sHonor: ['']
      }),
      collegeEducation: this._formBuilder.group({
        cNameOfSchool: ['',[Validators.required, Validators.minLength(4), Validators.maxLength(50), Validators.pattern('^[ÑñA-Za-z0-9 -~]*\$')]],
        cYearGraduated: ['', [Validators.required, Validators.pattern('^[0-9;)(-]+\$')]],
        cHonor: ['']
      }),
      hobbies: ['', Validators.pattern('^[ÑñA-Za-z0-9 -~]*\$')]    
    })
  }
}
