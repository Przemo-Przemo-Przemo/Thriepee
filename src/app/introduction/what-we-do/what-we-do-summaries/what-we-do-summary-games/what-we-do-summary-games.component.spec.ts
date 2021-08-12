import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeDoSummaryGamesComponent } from './what-we-do-summary-games.component';

describe('WhatWeDoSummaryGamesComponent', () => {
  let component: WhatWeDoSummaryGamesComponent;
  let fixture: ComponentFixture<WhatWeDoSummaryGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatWeDoSummaryGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatWeDoSummaryGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
