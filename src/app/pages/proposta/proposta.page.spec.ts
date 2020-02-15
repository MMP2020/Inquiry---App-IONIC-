import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropostaPage } from './proposta.page';

describe('PropostaPage', () => {
  let component: PropostaPage;
  let fixture: ComponentFixture<PropostaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropostaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropostaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
