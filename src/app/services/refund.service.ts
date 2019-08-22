import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export class  Refund
{
  public ticketno: string;
  public custname: string;
  public bookeddate: string;
  public canceleddate: string;
  public amount: string;
  public source: string;
  public destination: string;
  public modeofpayment: string;
  public mobileno: string;
  public emailid: string;
  public bankname: string;
  public branchname: string;
  public accountno: string;
  public ifsc: string;
  public doorno: string;
  public streetno: string;
  public city: string;
  public state: string;
  public country: string;
  public pincode: string;
}

@Injectable({
  providedIn: 'root'
})
export class RefundService {

  constructor(private httpClient:HttpClient) { }

  form: FormGroup = new FormGroup({
    // $key: new FormControl(null),
    custname: new FormControl('',Validators.required),
    ticketno: new FormControl(''),
    bookeddate: new FormControl(''),
    canceleddate: new FormControl(''),
    amount: new FormControl(''),
    source: new FormControl(0),
    destination: new FormControl(0),
    modeofpayment: new FormControl(0),
    mobileno: new FormControl('',[Validators.required,Validators.minLength(8)]),
    emailid: new FormControl('',Validators.email),
    bankname: new FormControl(''),
    branchname: new FormControl(''),
    accountno: new FormControl(''),
    ifsc: new FormControl(''),
    doorno: new FormControl(''),
    streetno: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    country: new FormControl(''),
    pincode: new FormControl('')
    
    });

    initializeFormGroup()
      {
        this.form.setValue({
         // $key: null,
         custname: '',
         ticketno: '',
         bookeddate: '',
         canceleddate: '',
         amount: '',
         source: 0,
         destination: 0,
         modeofpayment: 0,
         mobileno: '',
         emailid: '',
         bankname:  '',
         branchname: '',
         accountno: '',
         ifsc: '',
         doorno: '',
         streetno: '',
         city: '',
         state: '',
         country: '',
         pincode: '' 
        });
      }
      public createRefund(refund)
      {
        return this.httpClient.post<Refund>("http://localhost:8093/create",refund);
      }
}
