import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherDimensionnementComponent } from './afficher-dimensionnement.component';

describe('AfficherDimensionnementComponent', () => {
  let component: AfficherDimensionnementComponent;
  let fixture: ComponentFixture<AfficherDimensionnementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherDimensionnementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherDimensionnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
