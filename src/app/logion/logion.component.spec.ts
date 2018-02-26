import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogionComponent } from './logion.component';

describe('LogionComponent', () => {
  let component: LogionComponent;
  let fixture: ComponentFixture<LogionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
