import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesContentComponent } from './activities-content.component';

describe('ActivitiesContentComponent', () => {
  let component: ActivitiesContentComponent;
  let fixture: ComponentFixture<ActivitiesContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitiesContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
