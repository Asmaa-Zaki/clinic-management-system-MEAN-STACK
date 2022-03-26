import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineReadComponent } from './medicine-read.component';

describe('MedicineReadComponent', () => {
  let component: MedicineReadComponent;
  let fixture: ComponentFixture<MedicineReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
