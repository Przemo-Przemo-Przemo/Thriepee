import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeDoSummaryComedyComponent } from './what-we-do-summary-comedy.component';

describe('WhatWeDoSummaryComedyComponent', () => {
  let component: WhatWeDoSummaryComedyComponent;
  let fixture: ComponentFixture<WhatWeDoSummaryComedyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatWeDoSummaryComedyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatWeDoSummaryComedyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
