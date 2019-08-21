import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventsService } from '../../events.service';
import { CommentsService } from '../comments.service';
import { Subscription } from 'rxjs';
import { Event } from '../../event.model';
import { Comment } from '../comment.model';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit, OnDestroy {

  eventId = '';
  eventComments: Comment[] = [];
  loadCommentsBut = false;
  isUserAuth = false;
  userId: string;
  username: string;

  private eventSub: Subscription;
  private commentsSub: Subscription;
  private authSub: Subscription;

  constructor(private eventsService: EventsService, private commentsService: CommentsService, private authService: AuthService) { }

  ngOnInit() {
    this.userId = this.authService.getUserId();
    this.username = this.authService.getUsername();
    this.eventSub = this.eventsService.getEventUpdateListener()
      .subscribe((event: Event) => {
        this.eventId = event.idEvent;
      });
    this.isUserAuth = this.authService.getAuthStatus();
    this.authSub = this.authService.getAuthListener()
      .subscribe( isAuthenticated => {
        this.isUserAuth = isAuthenticated;
        this.userId = this.authService.getUserId();
        this.username = this.authService.getUsername();
      });
  }

  ngOnDestroy() {
    this.eventSub.unsubscribe();
    if (this.commentsSub) {
      this.commentsSub.unsubscribe();
    }
    this.authSub.unsubscribe();
  }

  loadComments() {
    this.loadCommentsBut = !this.loadCommentsBut;
    console.log('Load comments button ' + this.loadCommentsBut);
    if (this.loadCommentsBut === true) {
      this.commentsService.getComments(this.eventId);
      this.commentsSub = this.commentsService.getCommentsUpdateListener()
        .subscribe((comments: Comment[]) => {
          this.eventComments = comments;
          console.log(comments);
        });
    }
  }

deleteComment(commentId: string){
  this.commentsService.deleteComment(commentId);
}

}
