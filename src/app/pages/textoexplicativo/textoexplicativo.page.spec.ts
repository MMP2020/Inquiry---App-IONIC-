import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoexplicativoPage } from './textoexplicativo.page';

describe('TextoexplicativoPage', () => {
  let component: TextoexplicativoPage;
  let fixture: ComponentFixture<TextoexplicativoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextoexplicativoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextoexplicativoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
