import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBookmarkedComponent } from './top-bookmarked.component';

describe('TopBookmarkedComponent', () => {
  let component: TopBookmarkedComponent;
  let fixture: ComponentFixture<TopBookmarkedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopBookmarkedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBookmarkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
