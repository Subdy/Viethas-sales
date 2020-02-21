import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueAddPage } from './revenue-add.page';

describe('RevenueAddPage', () => {
  let component: RevenueAddPage;
  let fixture: ComponentFixture<RevenueAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenueAddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
