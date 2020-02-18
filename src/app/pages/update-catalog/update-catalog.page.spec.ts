import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCatalogPage } from './update-catalog.page';

describe('UpdateCatalogPage', () => {
  let component: UpdateCatalogPage;
  let fixture: ComponentFixture<UpdateCatalogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCatalogPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCatalogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
