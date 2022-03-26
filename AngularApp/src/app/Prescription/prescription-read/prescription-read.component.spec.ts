import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionReadComponent } from './prescription-read.component';

describe('PrescriptionReadComponent', () => {
  let component: PrescriptionReadComponent;
  let fixture: ComponentFixture<PrescriptionReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescriptionReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
