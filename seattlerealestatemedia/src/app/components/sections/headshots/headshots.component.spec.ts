import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadshotsComponent } from './headshots.component';

describe('HeadshotsComponent', () => {
  let component: HeadshotsComponent;
  let fixture: ComponentFixture<HeadshotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadshotsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadshotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
