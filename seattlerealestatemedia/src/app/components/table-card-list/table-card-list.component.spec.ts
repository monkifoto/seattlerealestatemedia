import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCardListComponent } from './table-card-list.component';

describe('TableCardListComponent', () => {
  let component: TableCardListComponent;
  let fixture: ComponentFixture<TableCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCardListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
