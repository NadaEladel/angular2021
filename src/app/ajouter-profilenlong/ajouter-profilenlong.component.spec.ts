import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterProfilenlongComponent } from './ajouter-profilenlong.component';

describe('AjouterProfilenlongComponent', () => {
  let component: AjouterProfilenlongComponent;
  let fixture: ComponentFixture<AjouterProfilenlongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterProfilenlongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterProfilenlongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
