import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeagueShowComponent } from './leagues/league-show/league-show.component';
import { DailyEventsComponent } from './events/daily-events/daily-events.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  { path: '', component: DailyEventsComponent},
  { path: 'league/:idLeague', component: LeagueShowComponent},
  { path: 'user/login', component: LoginComponent },
  { path: 'user/signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
