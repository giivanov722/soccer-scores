import { Component, OnInit } from '@angular/core';
import { LeaguesService } from '../leagues.service';
import { LeagueDetail } from './league-detail.model';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-league-show',
  templateUrl: './league-show.component.html',
  styleUrls: ['./league-show.component.css']
})
export class LeagueShowComponent implements OnInit {

  league: LeagueDetail;
  idLeague: string;

  constructor(public leaguesService: LeaguesService, public route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.idLeague = paramMap.get('idLeague');
      this.leaguesService.getLeague(this.idLeague)
      .subscribe( response => {
        console.log(response);
        this.league = response.leagues;
      });
    });
  }

}
