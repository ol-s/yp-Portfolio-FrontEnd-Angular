import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadernameComponent } from './headername.component';

describe('HeadernameComponent', () => {
  let component: HeadernameComponent;
  let fixture: ComponentFixture<HeadernameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadernameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
