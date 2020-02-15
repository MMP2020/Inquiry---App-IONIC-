import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrientacaoPage } from './orientacao.page';

describe('OrientacaoPage', () => {
  let component: OrientacaoPage;
  let fixture: ComponentFixture<OrientacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrientacaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrientacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
