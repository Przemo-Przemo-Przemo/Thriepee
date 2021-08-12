import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeDoSummaryWebDevelopmentComponent } from './what-we-do-summary-web-development.component';

describe('WhatWeDoSummaryWebDevelopmentComponent', () => {
  let component: WhatWeDoSummaryWebDevelopmentComponent;
  let fixture: ComponentFixture<WhatWeDoSummaryWebDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatWeDoSummaryWebDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatWeDoSummaryWebDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
