import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroducaoPage } from './introducao.page';

describe('IntroducaoPage', () => {
  let component: IntroducaoPage;
  let fixture: ComponentFixture<IntroducaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroducaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroducaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
