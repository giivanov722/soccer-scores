import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueShowComponent } from './league-show.component';

describe('LeagueShowComponent', () => {
  let component: LeagueShowComponent;
  let fixture: ComponentFixture<LeagueShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
