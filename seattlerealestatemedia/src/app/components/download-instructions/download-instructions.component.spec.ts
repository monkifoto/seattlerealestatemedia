import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadInstructionsComponent } from './download-instructions.component';

describe('DownloadInstructionsComponent', () => {
  let component: DownloadInstructionsComponent;
  let fixture: ComponentFixture<DownloadInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadInstructionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
