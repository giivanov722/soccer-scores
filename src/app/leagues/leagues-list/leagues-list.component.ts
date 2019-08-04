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
  year: number = new Date().getFullYear();
  season: string =  (this.year.toString()).substr(2, 3) + ((this.year + 1).toString()).substr(2, 3) ;

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

  updateStanding(idLeague: string){
    this.leaguesService.getStandingByLeague(idLeague, this.season);
  }

}
