import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmsPreviewComponent } from './alarms-preview.component';

describe('AlarmsPreviewComponent', () => {
  let component: AlarmsPreviewComponent;
  let fixture: ComponentFixture<AlarmsPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlarmsPreviewComponent]
    });
    fixture = TestBed.createComponent(AlarmsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
