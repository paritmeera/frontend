import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export class MoneyTransfer
{
  public customername:String;
  public bookeddate:String;
  public source:String;
  public destination:String;
  public modeofpayment:String;
  public amountpaid:String;
  public ticketno:String;
  public email:String;
  public mobileno:String;
  public bankname:String;
  public branchname:String;
  public accountno:String;
  public ifscno:String;
}
@Injectable({
  providedIn: 'root'
})

export class MoneyService {

  constructor(private httpClient:HttpClient) { }
  
    form: FormGroup = new FormGroup({
    // $key: new FormControl(null),
    customername: new FormControl('',Validators.required),
    bookeddate: new FormControl(''),
    source: new FormControl(0),
    destination: new FormControl(0),
    modeofpayment: new FormControl(0),
    amountpaid: new FormControl(''),
    ticketno: new FormControl(''),
    email: new FormControl('',Validators.email),
    mobileno: new FormControl('',[Validators.required,Validators.minLength(8)]),
    bankname: new FormControl(''),
    branchname: new FormControl(''),
    accountno: new FormControl(''),
    ifscno: new FormControl(''),
    // canceleddate: new FormControl(''),
    // doorno: new FormControl(''),
    // street: new FormControl(''),
    // city: new FormControl(''),
    // state: new FormControl(''),
    // country: new FormControl(''),
    // pincode: new FormControl('')
    
      });
      initializeFormGroup()
      {
        this.form.setValue({
         // $key: null,
         customername: '',
         bookeddate: '',
         source: 0,
         destination: 0,
         modeofpayment: 0,
         amountpaid: '',
         ticketno: '',
         email: '',
         mobileno: '',
         bankname:  '',
         branchname: '',
         accountno: '',
         ifscno: '',
        //  canceleddate: '', 
        //  doorno: '',
        //  street: '',
        //  city: '',
        //  state: '',
        //  country: '',
        //  pincode: '' 
        });
      }
      public createMoneyTransfer(money)
      {
        return this.httpClient.post<MoneyTransfer>("http://localhost:8082/create",money);
      }
}
