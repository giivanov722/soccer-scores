import { Component, OnInit, OnDestroy } from '@angular/core';
import { LeaguesService } from '../leagues.service';
import { LeagueDetail } from './league-detail.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Standing } from '../standing/standing.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-league-show',
  templateUrl: './league-show.component.html',
  styleUrls: ['./league-show.component.css']
})
export class LeagueShowComponent implements OnInit, OnDestroy {

  standing: Standing[] = [];
  year: number = new Date().getFullYear();
  season: string =  (this.year.toString()).substr(2, 3) + ((this.year + 1).toString()).substr(2, 3) ;
  league: LeagueDetail;
  idLeague: string;

  private standingSub: Subscription;

  constructor(public leaguesService: LeaguesService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.idLeague = paramMap.get('idLeague');
      console.log('idLeague in leagues-show: ' + this.idLeague);
      this.leaguesService.getLeague(this.idLeague)
      .subscribe( response => {
        this.league = response.leagues[0];
      });
    });
    this.leaguesService.getStandingByLeague(this.idLeague, this.season);
    this.standingSub = this.leaguesService.getStandingUpdateListener()
      .subscribe((standing: Standing[]) => {
        this.standing = standing;
      });
  }

  ngOnDestroy() {
    this.standingSub.unsubscribe();
  }

}
