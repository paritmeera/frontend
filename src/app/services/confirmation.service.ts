import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

export class Confirm
{
  public customername:String;
  public mobileno:String;
  public email:String;
  public source:String;
  public destination: String;
  public ticketnumber:String;
  public bookeddate:String;
  public amountpaid:String;
  public amountpaiddate:String;
  public totalmembers: String;
}

@Injectable({
  providedIn: 'root'
})

export class ConfirmationService {

  constructor(private httpClient:HttpClient) { }
    form: FormGroup = new FormGroup({
    customername: new FormControl('',Validators.required),
    mobileno: new FormControl('',[Validators.required,Validators.minLength(8)]),
    email: new FormControl('',Validators.email),
    source: new FormControl(0),
    destination: new FormControl(0),
    ticketnumber: new FormControl(''),
    bookeddate: new FormControl(''),
    amountpaid: new FormControl(''),
    amountpaiddate: new FormControl(''),
    totalmembers: new FormControl('')
  });

  initializeFormGroup()
  {
    this.form.setValue({
  
      customername: '',
      mobileno:'',
      email:'',
      source: 0,
      destination: 0,
      ticketnumber: '',
      bookeddate: '',
      amountpaid: '',
      amountpaiddate: '',
      totalmembers:''
      });
}
public createConfirm(confirm)
{
  return this.httpClient.post<Confirm>("http://localhost:8687/create",confirm);
}
}
