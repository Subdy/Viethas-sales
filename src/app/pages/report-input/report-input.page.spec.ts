import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportInputPage } from './report-input.page';

describe('ReportInputPage', () => {
  let component: ReportInputPage;
  let fixture: ComponentFixture<ReportInputPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportInputPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportInputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
