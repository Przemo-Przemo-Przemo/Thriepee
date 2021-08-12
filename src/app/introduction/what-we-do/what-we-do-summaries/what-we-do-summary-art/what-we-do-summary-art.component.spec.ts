import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeDoSummaryArtComponent } from './what-we-do-summary-art.component';

describe('WhatWeDoSummaryArtComponent', () => {
  let component: WhatWeDoSummaryArtComponent;
  let fixture: ComponentFixture<WhatWeDoSummaryArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatWeDoSummaryArtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatWeDoSummaryArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
