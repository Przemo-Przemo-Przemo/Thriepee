import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YahooAnswersReviewSummaryWidgetComponent } from './yahoo-answers-review-summary-widget.component';

describe('YahooAnswersReviewSummaryWidgetComponent', () => {
  let component: YahooAnswersReviewSummaryWidgetComponent;
  let fixture: ComponentFixture<YahooAnswersReviewSummaryWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YahooAnswersReviewSummaryWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YahooAnswersReviewSummaryWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
