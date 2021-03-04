import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterDimensionnementComponent } from './ajouter-dimensionnement.component';

describe('AjouterDimensionnementComponent', () => {
  let component: AjouterDimensionnementComponent;
  let fixture: ComponentFixture<AjouterDimensionnementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterDimensionnementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterDimensionnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
