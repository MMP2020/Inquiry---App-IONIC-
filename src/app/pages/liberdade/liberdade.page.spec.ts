import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiberdadePage } from './liberdade.page';

describe('LiberdadePage', () => {
  let component: LiberdadePage;
  let fixture: ComponentFixture<LiberdadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiberdadePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiberdadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
