import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventShowComponent } from './events/event-show/event-show.component';
import { LeagueShowComponent } from './leagues/league-show/league-show.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
//  { path: 'event-show/:idEvent', component: EventShowComponent},
  { path: 'league/:idLeague', component: LeagueShowComponent}
  // {path: 'create', component: PostCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
