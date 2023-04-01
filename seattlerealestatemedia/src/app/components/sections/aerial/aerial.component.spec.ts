import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AerialComponent } from './aerial.component';

describe('AerialComponent', () => {
  let component: AerialComponent;
  let fixture: ComponentFixture<AerialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AerialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AerialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
