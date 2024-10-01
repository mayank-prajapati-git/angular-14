/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TranningListComponent } from './tranning-list.component';

describe('TranningListComponent', () => {
  let component: TranningListComponent;
  let fixture: ComponentFixture<TranningListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranningListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranningListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
