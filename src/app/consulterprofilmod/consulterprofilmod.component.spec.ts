import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterprofilmodComponent } from './consulterprofilmod.component';

describe('ConsulterprofilmodComponent', () => {
  let component: ConsulterprofilmodComponent;
  let fixture: ComponentFixture<ConsulterprofilmodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterprofilmodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterprofilmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
