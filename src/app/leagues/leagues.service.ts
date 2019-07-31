import { League } from './league.model';
import { Standing } from "./standing/standing.model";
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {

  private leagues: League[] = [];
  private standing: Standing[] = [];
  private leaguesUpdated = new Subject<League[]>();
  private standingUpdated = new Subject<Standing[]>();

  constructor(private http: HttpClient) {}

  getLeagues() {
    this.http.get<any>('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
      .subscribe((response) => {
         this.leagues = response.leagues;
         this.leaguesUpdated.next([...this.leagues]);
      });
  }

  getStandingByLeague() {
    this.http.get<any>('https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4328&s=1819')
      .subscribe((response) => {
        console.log(response);
        this.standing = response.table;
        this.standingUpdated.next([...this.standing]);
      });
  }

  getLeague(idLeague: string) {
    console.log(idLeague);
    return this.http.get<any>('https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=' + idLeague);
  }

  getLeaguesUpdateListener() {
    return this.leaguesUpdated.asObservable();
  }

  getStandingUpdateListener() {
    return this.standingUpdated.asObservable();
  }


}

