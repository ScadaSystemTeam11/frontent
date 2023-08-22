import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAlarmComponent } from './create-alarm.component';

describe('CreateAlarmComponent', () => {
  let component: CreateAlarmComponent;
  let fixture: ComponentFixture<CreateAlarmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAlarmComponent]
    });
    fixture = TestBed.createComponent(CreateAlarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
