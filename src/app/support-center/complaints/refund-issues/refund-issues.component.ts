import { Component, OnInit } from '@angular/core';
import { Refund, RefundService } from 'src/app/services/refund.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-refund-issues',
  templateUrl: './refund-issues.component.html',
  styleUrls: ['./refund-issues.component.css']
})
export class RefundIssuesComponent implements OnInit {
  refund:Refund=new Refund();
  constructor(private service:RefundService,
    private notificationservice: NotificationService) { }
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

  onClear()
  {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.notificationservice.success('::submitted Successfully');
  }
  onSubmit():void
  {
if(this.service.form.valid)
{
  this.service.createRefund(this.refund)
  .subscribe(data=>
    {
      this.refund=data;
      alert("submitted successfully");
      this.service.form.reset();
      this.service.initializeFormGroup();
    })
}
  }

}
