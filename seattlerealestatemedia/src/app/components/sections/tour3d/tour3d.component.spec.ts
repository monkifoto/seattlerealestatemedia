import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tour3dComponent } from './tour3d.component';

describe('Tour3dComponent', () => {
  let component: Tour3dComponent;
  let fixture: ComponentFixture<Tour3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tour3dComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tour3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
