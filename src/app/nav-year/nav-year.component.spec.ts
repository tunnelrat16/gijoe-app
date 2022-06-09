import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavYearComponent } from './nav-year.component';

describe('NavYearComponent', () => {
  let component: NavYearComponent;
  let fixture: ComponentFixture<NavYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavYearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
