import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RockPaperScissorReviewSummaryWidgetComponent } from './rock-paper-scissor-review-summary-widget.component';

describe('RockPaperScissorReviewSummaryWidgetComponent', () => {
  let component: RockPaperScissorReviewSummaryWidgetComponent;
  let fixture: ComponentFixture<RockPaperScissorReviewSummaryWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RockPaperScissorReviewSummaryWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RockPaperScissorReviewSummaryWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
