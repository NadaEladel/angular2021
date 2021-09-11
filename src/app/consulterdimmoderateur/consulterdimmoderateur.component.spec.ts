import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterdimmoderateurComponent } from './consulterdimmoderateur.component';

describe('ConsulterdimmoderateurComponent', () => {
  let component: ConsulterdimmoderateurComponent;
  let fixture: ComponentFixture<ConsulterdimmoderateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterdimmoderateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterdimmoderateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
