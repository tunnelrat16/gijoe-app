import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigureListingComponent } from './figure-listing.component';

describe('FigureListingComponent', () => {
  let component: FigureListingComponent;
  let fixture: ComponentFixture<FigureListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FigureListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FigureListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
