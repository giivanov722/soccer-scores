import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { LeaguesListComponent } from './leagues/leagues-list/leagues-list.component';
import { StandingComponent } from './leagues/standing/standing.component';
import { HeaderComponent } from './header/header.component';
import { CommentCreateComponent } from './events/comment/comment-create/comment-create.component';
import { CommentListComponent } from './events/comment/comment-list/comment-list.component';
import { EventShowComponent } from './events/event-show/event-show.component';
import { AddVoteComponent } from './vote/add-vote/add-vote.component';
import { VoteStandingComponent } from './vote/vote-standing/vote-standing.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DailyEventsComponent } from './events/daily-events/daily-events.component';
import { LeagueShowComponent } from './leagues/league-show/league-show.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    LeaguesListComponent,
    StandingComponent,
    HeaderComponent,
    CommentCreateComponent,
    CommentListComponent,
    EventShowComponent,
    AddVoteComponent,
    VoteStandingComponent,
    DailyEventsComponent,
    LeagueShowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
