import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterdimensionnementComponent } from './consulterdimensionnement.component';

describe('ConsulterdimensionnementComponent', () => {
  let component: ConsulterdimensionnementComponent;
  let fixture: ComponentFixture<ConsulterdimensionnementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterdimensionnementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterdimensionnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
