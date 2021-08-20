import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterprofilenlongComponent } from './consulterprofilenlong.component';

describe('ConsulterprofilenlongComponent', () => {
  let component: ConsulterprofilenlongComponent;
  let fixture: ComponentFixture<ConsulterprofilenlongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterprofilenlongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterprofilenlongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
