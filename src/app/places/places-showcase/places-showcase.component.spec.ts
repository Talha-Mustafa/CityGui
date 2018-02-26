import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesShowcaseComponent } from './places-showcase.component';

describe('PlacesShowcaseComponent', () => {
  let component: PlacesShowcaseComponent;
  let fixture: ComponentFixture<PlacesShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesShowcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
