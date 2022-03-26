import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCopyComponent } from './home-copy.component';

describe('HomeComponent', () => {
  let component: HomeCopyComponent;
  let fixture: ComponentFixture<HomeCopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeCopyComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
