import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesPage } from './redes.page';

describe('RedesPage', () => {
  let component: RedesPage;
  let fixture: ComponentFixture<RedesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
