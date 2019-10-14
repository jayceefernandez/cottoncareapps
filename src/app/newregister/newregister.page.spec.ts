import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewregisterPage } from './newregister.page';

describe('NewregisterPage', () => {
  let component: NewregisterPage;
  let fixture: ComponentFixture<NewregisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewregisterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewregisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
