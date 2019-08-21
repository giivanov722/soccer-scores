import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeaguesListComponent } from './leagues/leagues-list/leagues-list.component';
import { StandingComponent } from './leagues/standing/standing.component';
import { HeaderComponent } from './header/header.component';
import { CommentCreateComponent } from './events/comment/comment-create/comment-create.component';
import { CommentListComponent } from './events/comment/comment-list/comment-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DailyEventsComponent } from './events/daily-events/daily-events.component';
import { LeagueShowComponent } from './leagues/league-show/league-show.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthenticationInterceptor } from './auth/auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LeaguesListComponent,
    StandingComponent,
    HeaderComponent,
    CommentCreateComponent,
    CommentListComponent,
    DailyEventsComponent,
    LeagueShowComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
