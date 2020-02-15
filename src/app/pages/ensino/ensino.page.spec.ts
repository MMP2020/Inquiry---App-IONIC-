import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsinoPage } from './ensino.page';

describe('EnsinoPage', () => {
  let component: EnsinoPage;
  let fixture: ComponentFixture<EnsinoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnsinoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnsinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
