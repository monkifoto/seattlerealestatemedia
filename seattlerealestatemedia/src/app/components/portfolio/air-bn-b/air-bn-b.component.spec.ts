import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirBnBComponent } from './air-bn-b.component';

describe('AirBnBComponent', () => {
  let component: AirBnBComponent;
  let fixture: ComponentFixture<AirBnBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirBnBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirBnBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
