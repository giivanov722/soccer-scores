import { Component, OnDestroy, OnInit } from '@angular/core';
import { League } from '../league.model';
import { LeaguesService } from '../leagues.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-leagues-list',
  templateUrl: './leagues-list.component.html',
  styleUrls: ['./leagues-list.component.css']
})
export class LeaguesListComponent implements OnInit, OnDestroy {

  leagues: League[] = [];
  private leaguesSubscription: Subscription;

  constructor(public leaguesService: LeaguesService) { }

  ngOnInit() {
    this.leaguesService.getLeagues();
    this.leaguesSubscription = this.leaguesService.getLeaguesUpdateListener()
      .subscribe((leagues: League[]) => {
         this.leagues = leagues ;
      });
  }

  ngOnDestroy() {
      this.leaguesSubscription.unsubscribe();
  }

}
