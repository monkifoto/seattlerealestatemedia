import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicServiceCardComponent } from './dynamic-service-card.component';

describe('DynamicServiceCardComponent', () => {
  let component: DynamicServiceCardComponent;
  let fixture: ComponentFixture<DynamicServiceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicServiceCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicServiceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
