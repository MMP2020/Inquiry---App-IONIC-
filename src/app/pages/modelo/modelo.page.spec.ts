import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloPage } from './modelo.page';

describe('ModeloPage', () => {
  let component: ModeloPage;
  let fixture: ComponentFixture<ModeloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeloPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
