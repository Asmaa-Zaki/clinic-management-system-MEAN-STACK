import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorReadComponent } from './doctor-read.component';

describe('DoctorReadComponent', () => {
  let component: DoctorReadComponent;
  let fixture: ComponentFixture<DoctorReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
