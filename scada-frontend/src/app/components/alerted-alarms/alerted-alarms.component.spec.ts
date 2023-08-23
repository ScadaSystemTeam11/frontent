import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertedAlarmsComponent } from './alerted-alarms.component';

describe('AlertedAlarmsComponent', () => {
  let component: AlertedAlarmsComponent;
  let fixture: ComponentFixture<AlertedAlarmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertedAlarmsComponent]
    });
    fixture = TestBed.createComponent(AlertedAlarmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
