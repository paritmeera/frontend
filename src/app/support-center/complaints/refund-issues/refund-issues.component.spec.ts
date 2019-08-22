import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundIssuesComponent } from './refund-issues.component';

describe('RefundIssuesComponent', () => {
  let component: RefundIssuesComponent;
  let fixture: ComponentFixture<RefundIssuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefundIssuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
