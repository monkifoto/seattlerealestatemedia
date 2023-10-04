import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosCombinedComponent } from './photos-combined.component';

describe('PhotosCombinedComponent', () => {
  let component: PhotosCombinedComponent;
  let fixture: ComponentFixture<PhotosCombinedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosCombinedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosCombinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
