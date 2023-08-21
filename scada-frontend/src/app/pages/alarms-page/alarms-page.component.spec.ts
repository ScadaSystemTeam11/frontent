import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmsPageComponent } from './alarms-page.component';

describe('AlarmsPageComponent', () => {
  let component: AlarmsPageComponent;
  let fixture: ComponentFixture<AlarmsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlarmsPageComponent]
    });
    fixture = TestBed.createComponent(AlarmsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
