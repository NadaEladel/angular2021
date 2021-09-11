import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StattestComponent } from './stattest.component';

describe('StattestComponent', () => {
  let component: StattestComponent;
  let fixture: ComponentFixture<StattestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StattestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StattestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
