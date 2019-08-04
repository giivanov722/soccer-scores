import { Component, OnInit, OnDestroy } from '@angular/core';
import { Standing } from '../standing/standing.model';
import { Subscription } from 'rxjs';
import { LeaguesService } from '../leagues.service';

@Component({
  selector: 'app-standing',
  templateUrl: './standing.component.html',
  styleUrls: ['./standing.component.css']
})
export class StandingComponent implements OnInit, OnDestroy {

  position: Number = 1;
  standing: Standing[] = [];
  private standingSub: Subscription;

  constructor(private leaguesService: LeaguesService) { }

  ngOnInit() {
    this.position = 1;
    this.standingSub = this.leaguesService.getStandingUpdateListener()
      .subscribe((standing: Standing[]) => {
        this.standing = standing;
      });
  }

  ngOnDestroy() {
    this.standingSub.unsubscribe();
  }

}
