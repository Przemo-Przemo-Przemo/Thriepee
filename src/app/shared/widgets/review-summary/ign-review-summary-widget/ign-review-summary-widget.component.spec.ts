import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgnReviewSummaryWidgetComponent } from './ign-review-summary-widget.component';

describe('IgnReviewSummaryWidgetComponent', () => {
  let component: IgnReviewSummaryWidgetComponent;
  let fixture: ComponentFixture<IgnReviewSummaryWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IgnReviewSummaryWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IgnReviewSummaryWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
