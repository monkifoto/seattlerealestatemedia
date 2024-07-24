import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryUploadComponent } from './gallery-upload.component';

describe('GalleryUploadComponent', () => {
  let component: GalleryUploadComponent;
  let fixture: ComponentFixture<GalleryUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
