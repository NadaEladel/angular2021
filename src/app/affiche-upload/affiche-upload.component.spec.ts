import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheUploadComponent } from './affiche-upload.component';

describe('AfficheUploadComponent', () => {
  let component: AfficheUploadComponent;
  let fixture: ComponentFixture<AfficheUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficheUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
