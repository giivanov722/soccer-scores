import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteStandingComponent } from './vote-standing.component';

describe('VoteStandingComponent', () => {
  let component: VoteStandingComponent;
  let fixture: ComponentFixture<VoteStandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteStandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteStandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
