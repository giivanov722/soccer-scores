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
    VoteStandingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
