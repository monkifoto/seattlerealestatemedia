import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreedimentionComponent } from './threedimention.component';

describe('ThreedimentionComponent', () => {
  let component: ThreedimentionComponent;
  let fixture: ComponentFixture<ThreedimentionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreedimentionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreedimentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
