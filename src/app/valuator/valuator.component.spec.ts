/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ValuatorComponent } from './valuator.component';

describe('ValuatorComponent', () => {
  let component: ValuatorComponent;
  let fixture: ComponentFixture<ValuatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});