import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicacaoPage } from './comunicacao.page';

describe('ComunicacaoPage', () => {
  let component: ComunicacaoPage;
  let fixture: ComponentFixture<ComunicacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunicacaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunicacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
