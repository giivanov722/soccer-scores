import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyEventsComponent } from './daily-events.component';

describe('DailyEventsComponent', () => {
  let component: DailyEventsComponent;
  let fixture: ComponentFixture<DailyEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
