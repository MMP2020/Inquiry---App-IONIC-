import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovapropostaPage } from './novaproposta.page';

describe('NovapropostaPage', () => {
  let component: NovapropostaPage;
  let fixture: ComponentFixture<NovapropostaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovapropostaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovapropostaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
