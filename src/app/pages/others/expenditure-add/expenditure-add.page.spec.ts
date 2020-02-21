import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenditureAddPage } from './expenditure-add.page';

describe('ExpenditureAddPage', () => {
  let component: ExpenditureAddPage;
  let fixture: ComponentFixture<ExpenditureAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenditureAddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenditureAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
