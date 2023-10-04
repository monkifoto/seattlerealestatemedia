import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatorComponent } from './estimator.component';

describe('EstimatorComponent', () => {
  let component: EstimatorComponent;
  let fixture: ComponentFixture<EstimatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstimatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
