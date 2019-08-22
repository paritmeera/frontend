import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
//import { CompareValidatorDirective } from 'src/app/validator/compare-validator.directive';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 // ReactiveFrom: FormGroup;

  constructor(private service: RegisterService, ) { }
  hide = true;


  cities = [
    { id:1 , value:'Bangalore'},
    { id:2 , value:'Hydrabad'},
    { id:3 , value:'Mumbai'},
    { id:4 , value:'Pune'},
    { id:5 , value:'Delhi'},
    { id:6 , value:'Chenai'},
  ]

  states =[
    {id:1, value:'Karnataka'},
    {id:2, value:'Telangana'},
    {id:3, value:'Maharastra'},
    {id:4, value:'Andra pradesh'},
    {id:5, value:'Tamilnadu'},
    {id:6, value:'Kerala'},
  ]

  countries =[
    {id:1, value:'India'},
    {id:2, value:'America'},
    {id:3, value:'UK'},
    {id:4, value:'Itali'},
    {id:5, value:'Bhupal'},
    {id:6, value:'Pakistan'},
  ]

  accounts=[
    {id:1, value:'Savings Account'},
    {id:2, value:'Current Account'},
  ]
  ngOnInit() {
   // this.createFrom();
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
  onReset() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onRegister()
{
 // this.service.createCustomer(this.customer)
 this.service.form.reset();
 this.service.initializeFormGroup();
    // if(this.service.form.valid)
    // {
    //   this.service.form.reset();
    // this.service.initializeFormGroup();
    // }
    

};

  // //create form
  // createFrom() {
  //   this.ReactiveFrom = new FormGroup({
  //     password: new FormControl('', Validators.required),
  //     passwordconfirm: new FormControl('', Validators.required)
  //   })

  // }

  // get password() {
  //   return this.ReactiveFrom.get('password');
  // }

  // get confirmpassword() {
  //   return this.ReactiveFrom.get('confirmpassword');
  // }

//   public noWhitespace(control: FormControl) {
//     let isWhitespace = (control.value || '').trim().length === 0;
//     let isValid = !isWhitespace;
//     return isValid ? null : { 'whitespace': true }
// }
};



