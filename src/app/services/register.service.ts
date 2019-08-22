import { Injectable } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { compareValidator } from '../validator/compare-validator.directive';
import { trimValidator } from '../validator/trim-validator';



@Injectable({
  providedIn: 'root'
})
export class RegisterService {
ReactiveFrom: FormGroup;
  //service.form:FormGroup;
  ctrl: FormControl;

  constructor() { }
  form: FormGroup = new FormGroup({
   $Key: new FormControl(null),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl(''),
    email: new FormControl('',Validators.email),
    mobileNumber: new FormControl('',[Validators.required, Validators.minLength(10)]),
    password: new FormControl('',Validators.required),
    confirmPassword: new FormControl('',[Validators.required,compareValidator('password')]),
    gender: new FormControl('1'),
    photoupload:new FormControl(''),
    dateOfBirth:new FormControl(''),
    gstNumber: new FormControl('',[Validators.required, Validators.minLength(15),Validators.pattern("[0-9]{2}[A-Za-z]{5}[0-9]{4}[a-zA-Z][0-9]{1}[a-zA-Z]{1}[0-9]{1}")]),
    adharNumber: new FormControl('',[Validators.required, Validators.minLength(12),Validators.pattern(/[0-9]{12}/)]),
    panNumber: new FormControl('',[Validators.required, Validators.minLength(10),Validators.pattern(/[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}/)]),
   // nameOnPan:new FormControl('',Validators.required),
    addressline1: new FormControl(''),
    addressline2: new FormControl(''),
    //addressline3: new FormControl(''),
    city: new FormControl(''),
    pincode: new FormControl('',[Validators.required,Validators.minLength(6)]),
    state: new FormControl(''),
    country: new FormControl(''),
    accountholdername:new FormControl('',Validators.required),
    accountNumber: new FormControl('',[Validators.required, Validators.minLength(16)]),
    ifsccode: new FormControl(''),
    phoneNo:new FormControl('',[Validators.required, Validators.minLength(10)]),
    //account: new FormControl(''),
    accountType: new FormControl(''),
    branch: new FormControl(''),
  });

  initializeFormGroup() {
    this.form.setValue({
    firstName: '',
    lastName: '',
    email: '', 
    mobileNumber: '', 
    gender: '1',
    photoupload:'',
    dateOfBirth:'',
    password: '',
    confirmPassword:'',
    gstNumber:'',
    adharNumber:'',
    panNumber:'',
  //  nameOnPan: '',
    addressline1: '',
    addressline2:'',
    city: '',
    pincode:'',
    state: '',
    country: '',
    accountholdername:'',
    accountNumber:'', 
    ifsccode: '', 
   // account:'',
    accountType: '',
    branch: '',
  
    });
  }

//   onInput(value) {
//     if (this.form.hasError('confirmedDoesNotMatch')) { // or some other test of the value
//         this.form.get('confirmPassword').setErrors([{'confirmedDoesNotMatch': true}]);
//     } else {
//         this.form.get('confirmPassword').setErrors(null);
//     }
// }
  onSubmit()
  {
   this.ReactiveFrom. valueChanges.subscribe(console.log)
  }

  get password() {
    return this.ReactiveFrom.get('password');
  }

  get conPassword() {
    return this.ReactiveFrom.get('confirmPassword');
  }

  ngOnInit() {
    this.ctrl = new FormControl('', trimValidator);
    
  }
  
}
