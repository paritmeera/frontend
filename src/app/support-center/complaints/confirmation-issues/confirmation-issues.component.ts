import { Component, OnInit } from '@angular/core';
import { Confirm, ConfirmationService } from 'src/app/services/confirmation.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-confirmation-issues',
  templateUrl: './confirmation-issues.component.html',
  styleUrls: ['./confirmation-issues.component.css']
})
export class ConfirmationIssuesComponent implements OnInit {
  confirm:Confirm = new Confirm();
  constructor(private service:ConfirmationService,
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

    onClear()
  {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.notificationservice.success('::submitted Successfully');
  }
  onSubmit():void
{
  this.service.createConfirm(this.confirm)
  .subscribe(data=>{
    this.confirm=data;
    alert("submitted successfully");
    this.service.form.reset();
    this.service.initializeFormGroup();
  })
}


  ngOnInit() {
  }

}
