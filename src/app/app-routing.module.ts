import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventShowComponent } from './events/event-show/event-show.component';
import { LeagueShowComponent } from './leagues/league-show/league-show.component';
import { DailyEventsComponent } from './events/daily-events/daily-events.component';

const routes: Routes = [
  { path: '', component: DailyEventsComponent},
//  { path: 'event-show/:idEvent', component: EventShowComponent},
  { path: 'league/:idLeague', component: LeagueShowComponent}
  // {path: 'create', component: PostCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
