import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSharedComponent } from './top-shared.component';

describe('TopSharedComponent', () => {
  let component: TopSharedComponent;
  let fixture: ComponentFixture<TopSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
