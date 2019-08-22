import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {
  displayedColumns: string[] = ['serialno', 'Aname', 'Pnumber','address'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
const ELEMENT_DATA = [
  {serialno: 1, Aname: 'Ravi', Pnumber: '9856237415', address: 'Bangalore-560058'},
  {serialno: 2, Aname: 'Prakash', Pnumber: '9856237325', address: 'Bangalore-560098'},
  {serialno: 3, Aname: 'Shins', Pnumber: '9856237400', address: 'Bangalore-562235'},
  {serialno: 4, Aname: 'Rajkumar', Pnumber: '9856230015', address: 'Bangalore-560054'},
  {serialno: 5, Aname: 'KiranKumar', Pnumber: '9856230015', address: 'Bangalore-560043'},
  {serialno: 6, Aname: 'Ramu', Pnumber: '9856230015', address: 'Bangalore-560052'},
  {serialno: 7, Aname: 'Shrinivas', Pnumber: '9856230015', address: 'Bangalore-560042'},
  {serialno: 8, Aname: 'Ashok', Pnumber: '9856230015', address: 'Bangalore-560059'},
 
];