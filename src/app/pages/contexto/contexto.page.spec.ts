import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextoPage } from './contexto.page';

describe('ContextoPage', () => {
  let component: ContextoPage;
  let fixture: ComponentFixture<ContextoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
