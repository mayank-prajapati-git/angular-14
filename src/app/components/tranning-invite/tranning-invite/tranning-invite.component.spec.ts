/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TranningInviteComponent } from './tranning-invite.component';

describe('TranningInviteComponent', () => {
  let component: TranningInviteComponent;
  let fixture: ComponentFixture<TranningInviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranningInviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranningInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
