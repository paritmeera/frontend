import { Component, OnInit } from '@angular/core';
import { MoneyTransfer, MoneyService } from 'src/app/services/money.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-money-issues',
  templateUrl: './money-issues.component.html',
  styleUrls: ['./money-issues.component.css']
})
export class MoneyIssuesComponent implements OnInit {
  money:MoneyTransfer=new MoneyTransfer();

  constructor(private service:MoneyService,
    private notificationservice:NotificationService) { }

    sources= [
      {id: 1, value: 'Bangalore'},
      {id: 2, value: 'Ballari'},
      {id: 3, value: 'Gulbarga'},
      {id: 4, value: 'Pune'}
    ];
    destinations= [
  {id: 1, value: 'Bangalore'},
  {id: 2, value: 'Ballari'},
  {id: 3, value: 'Gulbarga'},
  {id: 4, value: 'Pune'}
    ];
    payments= [
      {id: 1, value: 'Credit Card'},
      {id: 2, value: 'Debit Card'},
      {id: 3, value: 'Net Banking'}
    ]

  ngOnInit() {
  }

  onSubmit():void{
    if(this.service.form.valid)
    {
      this.service.createMoneyTransfer(this.money)
      .subscribe(data=>{
        this.money=data;
        alert("submitted successfully");
        this.service.form.reset();
        this.service.initializeFormGroup();
      })
    }
}
onClear()
{
  this.service.form.reset();
  this.service.initializeFormGroup();
  this.notificationservice.success("submitted successfully");
}

}
