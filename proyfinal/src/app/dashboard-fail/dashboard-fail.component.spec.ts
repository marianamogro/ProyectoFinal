import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFailComponent } from './dashboard-fail.component';

describe('DashboardFailComponent', () => {
  let component: DashboardFailComponent;
  let fixture: ComponentFixture<DashboardFailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardFailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
