import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblematizacaoPage } from './problematizacao.page';

describe('ProblematizacaoPage', () => {
  let component: ProblematizacaoPage;
  let fixture: ComponentFixture<ProblematizacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblematizacaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblematizacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
