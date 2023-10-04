import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyManagmentComponent } from './property-managment.component';

describe('PropertyManagmentComponent', () => {
  let component: PropertyManagmentComponent;
  let fixture: ComponentFixture<PropertyManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyManagmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
