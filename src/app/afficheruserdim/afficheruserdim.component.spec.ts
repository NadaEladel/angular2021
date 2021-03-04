import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheruserdimComponent } from './afficheruserdim.component';

describe('AfficheruserdimComponent', () => {
  let component: AfficheruserdimComponent;
  let fixture: ComponentFixture<AfficheruserdimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficheruserdimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheruserdimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
