import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerfooterComponent } from './bannerfooter.component';

describe('BannerfooterComponent', () => {
  let component: BannerfooterComponent;
  let fixture: ComponentFixture<BannerfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerfooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
