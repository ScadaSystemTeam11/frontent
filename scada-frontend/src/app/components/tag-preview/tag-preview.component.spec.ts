import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagPreviewComponent } from './tag-preview.component';

describe('TagPreviewComponent', () => {
  let component: TagPreviewComponent;
  let fixture: ComponentFixture<TagPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TagPreviewComponent]
    });
    fixture = TestBed.createComponent(TagPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
