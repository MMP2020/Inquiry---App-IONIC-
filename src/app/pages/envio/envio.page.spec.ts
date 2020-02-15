import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioPage } from './envio.page';

describe('EnvioPage', () => {
  let component: EnvioPage;
  let fixture: ComponentFixture<EnvioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
