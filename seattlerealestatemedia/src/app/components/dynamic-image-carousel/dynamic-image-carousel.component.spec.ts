import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicImageCarouselComponent } from './dynamic-image-carousel.component';

describe('DynamicImageCarouselComponent', () => {
  let component: DynamicImageCarouselComponent;
  let fixture: ComponentFixture<DynamicImageCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicImageCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicImageCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
