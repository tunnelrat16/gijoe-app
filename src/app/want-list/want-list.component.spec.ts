import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WantListComponent } from './want-list.component';

describe('WantListComponent', () => {
  let component: WantListComponent;
  let fixture: ComponentFixture<WantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WantListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
