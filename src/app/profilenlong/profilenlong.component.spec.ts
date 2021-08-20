import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilenlongComponent } from './profilenlong.component';

describe('ProfilenlongComponent', () => {
  let component: ProfilenlongComponent;
  let fixture: ComponentFixture<ProfilenlongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilenlongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilenlongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
