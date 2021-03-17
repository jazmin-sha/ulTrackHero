import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermapComponent } from './usermap.component';

describe('UsermapComponent', () => {
  let component: UsermapComponent;
  let fixture: ComponentFixture<UsermapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsermapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
