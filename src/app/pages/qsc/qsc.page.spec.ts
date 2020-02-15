import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QscPage } from './qsc.page';

describe('QscPage', () => {
  let component: QscPage;
  let fixture: ComponentFixture<QscPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QscPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QscPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
