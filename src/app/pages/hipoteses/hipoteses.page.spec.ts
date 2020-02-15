import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HipotesesPage } from './hipoteses.page';

describe('HipotesesPage', () => {
  let component: HipotesesPage;
  let fixture: ComponentFixture<HipotesesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HipotesesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HipotesesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
