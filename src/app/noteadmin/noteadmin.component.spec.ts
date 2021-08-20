import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteadminComponent } from './noteadmin.component';

describe('NoteadminComponent', () => {
  let component: NoteadminComponent;
  let fixture: ComponentFixture<NoteadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
