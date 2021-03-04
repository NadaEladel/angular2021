import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherProfilenlongComponent } from './afficher-profilenlong.component';

describe('AfficherProfilenlongComponent', () => {
  let component: AfficherProfilenlongComponent;
  let fixture: ComponentFixture<AfficherProfilenlongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherProfilenlongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherProfilenlongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
