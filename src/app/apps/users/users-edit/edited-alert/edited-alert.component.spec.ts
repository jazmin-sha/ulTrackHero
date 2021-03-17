import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditedAlertComponent } from './edited-alert.component';

describe('EditedAlertComponent', () => {
  let component: EditedAlertComponent;
  let fixture: ComponentFixture<EditedAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditedAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditedAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
