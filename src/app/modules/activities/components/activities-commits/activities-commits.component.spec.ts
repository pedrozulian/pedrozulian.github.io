import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesCommitsComponent } from './activities-commits.component';

describe('ActivitiesCommitsComponent', () => {
  let component: ActivitiesCommitsComponent;
  let fixture: ComponentFixture<ActivitiesCommitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitiesCommitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesCommitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
