import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearVehicleComponent } from './year-vehicle.component';

describe('YearVehicleComponent', () => {
  let component: YearVehicleComponent;
  let fixture: ComponentFixture<YearVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearVehicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
