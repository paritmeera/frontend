import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agentdetails',
  templateUrl: './agentdetails.component.html',
  styleUrls: ['./agentdetails.component.css']
})
export class AgentdetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goAgents(){

    this.router.navigate(['agents'])
  }

  goTransports(){

    this.router.navigate(['transports'])
  }
  goDrivers(){

    this.router.navigate(['drivers'])
  }
}
