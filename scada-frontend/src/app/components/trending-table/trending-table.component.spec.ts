import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingTableComponent } from './trending-table.component';

describe('TrendingTableComponent', () => {
  let component: TrendingTableComponent;
  let fixture: ComponentFixture<TrendingTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrendingTableComponent]
    });
    fixture = TestBed.createComponent(TrendingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
