import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Event } from '../../event.model';
import { EventsService } from '../../events.service';
import { Subscription } from 'rxjs';
import { CommentsService } from '../comments.service';
import { Comment } from '../comment.model';




@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent implements OnInit, OnDestroy {

  eventId;
  eventComments: Comment[] = [];
  private eventSub: Subscription;
  private commentSub: Subscription;

  constructor(public eventsService: EventsService, public commentsService: CommentsService) { }

  ngOnInit() {
    this.eventSub = this.eventsService.getEventUpdateListener()
      .subscribe((event: Event) => {
        this.eventId = event.idEvent;
      });

    // this.commentSub = this.commentsService.getCommentsUpdateListener()
    //   .subscribe((comments: Comment[]) => {
    //     this.eventComments = comments;
    //   });

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
    this.commentsService.addComment(form.value.author, form.value.comment, this.eventId);
    // added now
    console.log('/////////////aaaaaaaaaaaaaaaaaaaaaaaaaa');
    this.commentsService.getComments(this.eventId);
    form.resetForm();
  }

}
