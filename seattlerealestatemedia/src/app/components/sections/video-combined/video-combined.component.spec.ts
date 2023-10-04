import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCombinedComponent } from './video-combined.component';

describe('VideoCombinedComponent', () => {
  let component: VideoCombinedComponent;
  let fixture: ComponentFixture<VideoCombinedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoCombinedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoCombinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
