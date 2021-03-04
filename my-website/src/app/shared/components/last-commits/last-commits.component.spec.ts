import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastCommitsComponent } from './last-commits.component';

describe('LastCommitsComponent', () => {
  let component: LastCommitsComponent;
  let fixture: ComponentFixture<LastCommitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastCommitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastCommitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
