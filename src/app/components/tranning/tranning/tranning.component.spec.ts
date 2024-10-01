/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TranningComponent } from './tranning.component';

describe('TranningComponent', () => {
  let component: TranningComponent;
  let fixture: ComponentFixture<TranningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
