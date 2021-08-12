import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeDoPhotoComponent } from './what-we-do-photo.component';

describe('WhatWeDoPhotoComponent', () => {
  let component: WhatWeDoPhotoComponent;
  let fixture: ComponentFixture<WhatWeDoPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatWeDoPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatWeDoPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
