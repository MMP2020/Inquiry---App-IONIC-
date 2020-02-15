import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasPage } from './minhas.page';

describe('MinhasPage', () => {
  let component: MinhasPage;
  let fixture: ComponentFixture<MinhasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
