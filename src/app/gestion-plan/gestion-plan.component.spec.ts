import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPlanComponent } from './gestion-plan.component';

describe('GestionPlanComponent', () => {
  let component: GestionPlanComponent;
  let fixture: ComponentFixture<GestionPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
