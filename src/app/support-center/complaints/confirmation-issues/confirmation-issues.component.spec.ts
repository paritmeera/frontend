import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationIssuesComponent } from './confirmation-issues.component';

describe('ConfirmationIssuesComponent', () => {
  let component: ConfirmationIssuesComponent;
  let fixture: ComponentFixture<ConfirmationIssuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationIssuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
