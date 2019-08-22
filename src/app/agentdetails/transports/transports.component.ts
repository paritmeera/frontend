import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transports',
  templateUrl: './transports.component.html',
  styleUrls: ['./transports.component.css']
})
export class TransportsComponent implements OnInit {
  displayedColumns: string[] = ['tid', 'tname', 'Bnumber', 'from','to','departure','arrival','date'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
const ELEMENT_DATA = [
  {tid: 1, tname: 'VRL', Bnumber: ' KA 1234', from: 'Bangalore',to:'Hydrabad',departure:'9:00:00PM',arrival:'11:00:00AM',date:'21-06-2019'},
  {tid: 2, tname: 'Pooja', Bnumber:' KA 1222', from: 'Bangalore',to:'Chenai',departure:'10:00:00PM',arrival:'12:00:00AM',date:'2-07-2019'},
  {tid: 3, tname: 'Sidganga', Bnumber: ' KA 1233', from: 'Hydrabad',to:'Pune',departure:'9:00:00PM',arrival:'11:00:00AM',date:'25-06-2019'},
  {tid: 4, tname: 'Shakuntala', Bnumber: ' KA 1244', from: 'Hydrabad',to:'Mumbai',departure:'12:00:00PM',arrival:'1:00:00AM',date:'11-07-2019'},
  {tid: 5, tname: 'KSRTC', Bnumber: ' KA 1265', from: 'Hydrabad',to:'Mysore',departure:'3:00:00PM',arrival:'1:00:00AM',date:'16-07-2019'},  
  {tid: 6, tname: 'KSRTC', Bnumber: ' KA 1275', from: 'Hydrabad',to:'Bangalore',departure:'3:00:00PM',arrival:'1:00:00AM',date:'16-07-2019'},  
  {tid: 7, tname: 'KSRTC', Bnumber: ' KA 1285', from: 'Hydrabad',to:'Chenai',departure:'3:00:00PM',arrival:'1:00:00AM',date:'16-07-2019'},  
];

