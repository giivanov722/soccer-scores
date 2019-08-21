import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Event } from '../../event.model';
import { EventsService } from '../../events.service';
import { Subscription } from 'rxjs';
import { CommentsService } from '../comments.service';
import { Comment } from '../comment.model';
import { AuthService } from 'src/app/auth/auth.service';




@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent implements OnInit, OnDestroy {

  eventId;
  eventComments: Comment[] = [];
  userId: string;
  username: string;
  private eventSub: Subscription;
  private commentSub: Subscription;

  constructor(public eventsService: EventsService, public commentsService: CommentsService, public authService: AuthService) { }

  ngOnInit() {
    this.username = this.authService.getUsername();
    this.eventSub = this.eventsService.getEventUpdateListener()
      .subscribe((event: Event) => {
        this.eventId = event.idEvent;
      });
  }

  ngOnDestroy() {
    this.eventSub.unsubscribe();
    if (this.commentSub) {
      this.commentSub.unsubscribe();
    }

  }

  saveComment(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.commentsService.addComment(this.username, form.value.comment, this.eventId, this.userId);
    // added now
    console.log('/////////////aaaaaaaaaaaaaaaaaaaaaaaaaa');
    this.commentsService.getComments(this.eventId);
    form.resetForm();
  }

}
