import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagingFloorplanCombinedComponent } from './staging-floorplan-combined.component';

describe('StagingFloorplanCombinedComponent', () => {
  let component: StagingFloorplanCombinedComponent;
  let fixture: ComponentFixture<StagingFloorplanCombinedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StagingFloorplanCombinedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StagingFloorplanCombinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
