import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyIssuesComponent } from './money-issues.component';

describe('MoneyIssuesComponent', () => {
  let component: MoneyIssuesComponent;
  let fixture: ComponentFixture<MoneyIssuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyIssuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
