import { Component, OnInit } from '@angular/core';
import { PackageService, Packages,  } from 'src/app/services/package.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  packageModel: Packages = new Packages();

  constructor(private service:PackageService) { }
  hide = true;

  palces=[
    {id:1, value:'mysore'},
    {id:2, value:'Bangalore'},
    {id:3, value:'Ballari'},
    {id:4, value:'Delhi'},
    {id:5, value:'Agra'},
    {id:6, value:'Chenai'},
    {id:7, value:'Hydrabad'},
    {id:8, value:'Tirupati'},
    {id:9, value:'kerala'},
    {id:10, value:'Mumbai'},


  ]

  ngOnInit() {
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
  onReset() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onsubmit()
  {
    this.service.addPackage(this.packageModel)
    .subscribe( data => {
      alert("submitted successfully");
    this.service.form.reset();
    this.service.initializeFormGroup();
  });
  
}

}