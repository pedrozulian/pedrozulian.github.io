import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesRepositoriesComponent } from './activities-repositories.component';

describe('ActivitiesRepositoriesComponent', () => {
  let component: ActivitiesRepositoriesComponent;
  let fixture: ComponentFixture<ActivitiesRepositoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitiesRepositoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesRepositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
