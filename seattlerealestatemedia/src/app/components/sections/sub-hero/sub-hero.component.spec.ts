import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubHeroComponent } from './sub-hero.component';

describe('SubHeroComponent', () => {
  let component: SubHeroComponent;
  let fixture: ComponentFixture<SubHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
