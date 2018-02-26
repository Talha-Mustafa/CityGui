import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRatingComponent } from './all-rating.component';

describe('AllRatingComponent', () => {
  let component: AllRatingComponent;
  let fixture: ComponentFixture<AllRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
