import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoPage } from './texto.page';

describe('TextoPage', () => {
  let component: TextoPage;
  let fixture: ComponentFixture<TextoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
