import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceReadComponent } from './invoice-read.component';

describe('InvoiceReadComponent', () => {
  let component: InvoiceReadComponent;
  let fixture: ComponentFixture<InvoiceReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
