import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

export class Packages{

  public packageid:string;
  public packagename:string;
  public numberofday:string;
  public packagecost:string;
  public transfers:string;
  public hotels:string;
  public sightseeings:string;
  public numberofplaces:string;
  public museums:string;
}

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  

  constructor(private httpClient:HttpClient) { }
    form : FormGroup = new FormGroup({
    $packageid: new FormControl(null),
     packageName: new FormControl('', Validators.required),
     numberofdays: new FormControl('', Validators.required),
     packagecost: new FormControl('', Validators.required),
     transfers: new FormControl('', Validators.required),
     hotels: new FormControl(''),
     sightseeings: new FormControl(''),
     numberofplaces:new FormControl(''),
     museums: new FormControl(''),
     
  });

  initializeFormGroup() {
    this.form.setValue({
    packageid:'null',
    packageName: '',
    numberofdays: '',
    packagecost: '', 
    transfersr: '', 
    hotels: '',
    sightseeings:'',
    numberofplaces: '',
    museum: '',

    });
  }

  public addPackage(packageModel)
  {
    return this.httpClient.post<Packages>("http://localhost:8787/api/packages/add", packageModel);

  }
  
}
