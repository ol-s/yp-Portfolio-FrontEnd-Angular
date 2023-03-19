import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfbannerComponent } from './halfbanner.component';

describe('HalfbannerComponent', () => {
  let component: HalfbannerComponent;
  let fixture: ComponentFixture<HalfbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HalfbannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HalfbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
