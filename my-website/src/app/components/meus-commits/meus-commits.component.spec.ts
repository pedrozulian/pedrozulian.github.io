import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusCommitsComponent } from './meus-commits.component';

describe('MeusCommitsComponent', () => {
  let component: MeusCommitsComponent;
  let fixture: ComponentFixture<MeusCommitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeusCommitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusCommitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
