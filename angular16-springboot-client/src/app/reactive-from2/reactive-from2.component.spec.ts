import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFrom2Component } from './reactive-from2.component';

describe('ReactiveFrom2Component', () => {
  let component: ReactiveFrom2Component;
  let fixture: ComponentFixture<ReactiveFrom2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveFrom2Component]
    });
    fixture = TestBed.createComponent(ReactiveFrom2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
