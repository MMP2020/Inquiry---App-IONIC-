import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetomadaPage } from './retomada.page';

describe('RetomadaPage', () => {
  let component: RetomadaPage;
  let fixture: ComponentFixture<RetomadaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetomadaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetomadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
