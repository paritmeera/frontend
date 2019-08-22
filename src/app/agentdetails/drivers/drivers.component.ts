import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  displayedColumns: string[] = ['serialno', 'Dname', 'pnumber','address'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}

const ELEMENT_DATA = [
  {serialno: 1, Dname: 'Satish', pnumber: '9855637415', address: 'Bangalore-560056'},
  {serialno: 2, Dname: 'Prakash', pnumber: '9856007325', address: 'Bangalore-560032'},
  {serialno: 3, Dname: 'Santosh', pnumber: '9856237400', address: 'Bangalore-562235'},
  {serialno: 4, Dname: 'Rajkumar', pnumber: '9888230015', address: 'Bangalore-561154'},
  {serialno: 5, Dname: 'Kumar', pnumber: '9856110015', address: 'Bangalore-565643'},
  {serialno: 6, Dname: 'Ramu', pnumber: '9856212015', address: 'Bangalore-561152'},
  {serialno: 7, Dname: 'Shivu', pnumber: '9856560015', address: 'Bangalore-562042'},
  {serialno: 8, Dname: 'Krishna', pnumber: '9858930015', address: 'Bangalore-560659'},
 
];
