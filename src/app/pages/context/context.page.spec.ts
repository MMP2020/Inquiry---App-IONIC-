import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextPage } from './context.page';

describe('ContextPage', () => {
  let component: ContextPage;
  let fixture: ComponentFixture<ContextPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
