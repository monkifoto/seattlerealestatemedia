import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualstagingComponent } from './virtualstaging.component';

describe('VirtualstagingComponent', () => {
  let component: VirtualstagingComponent;
  let fixture: ComponentFixture<VirtualstagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualstagingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualstagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
