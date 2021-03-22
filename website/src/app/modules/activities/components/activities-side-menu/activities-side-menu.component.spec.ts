import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesSideMenuComponent } from './activities-side-menu.component';

describe('ActivitiesSideMenuComponent', () => {
  let component: ActivitiesSideMenuComponent;
  let fixture: ComponentFixture<ActivitiesSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitiesSideMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
