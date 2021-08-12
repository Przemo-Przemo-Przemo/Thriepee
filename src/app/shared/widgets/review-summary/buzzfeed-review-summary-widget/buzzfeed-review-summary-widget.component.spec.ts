import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuzzfeedReviewSummaryWidgetComponent } from './buzzfeed-review-summary-widget.component';

describe('BuzzfeedReviewSummaryWidgetComponent', () => {
  let component: BuzzfeedReviewSummaryWidgetComponent;
  let fixture: ComponentFixture<BuzzfeedReviewSummaryWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuzzfeedReviewSummaryWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuzzfeedReviewSummaryWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
