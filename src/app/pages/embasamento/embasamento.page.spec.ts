import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbasamentoPage } from './embasamento.page';

describe('EmbasamentoPage', () => {
  let component: EmbasamentoPage;
  let fixture: ComponentFixture<EmbasamentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbasamentoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbasamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
