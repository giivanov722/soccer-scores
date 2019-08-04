import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from './comment.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private comments: Comment[] = [];

  private commentsUpdateListener = new Subject<Comment[]>();

  constructor(private http: HttpClient) { }

addComment(author: string, strComment: string, strIdEvent: string) {
  const comment: Comment = {
    _id: null,
    author,
    strComment,
    strIdEvent
  };
  this.http.post<any>('http://localhost:3000/event/comment', comment)
    .subscribe(response => {
      console.log(response);
    });
}

getComments(idEvent: string) {
  console.log('id: ' + idEvent);
  console.log('getComments activated in comments service');
  this.http.get<any>(`http://localhost:3000/event/${idEvent}/comments`)
  .subscribe(response => {
    this.comments = response;
    console.log('The obtained comments' + this.comments);
    this.commentsUpdateListener.next([...this.comments]);
  });
}

getCommentsUpdateListener() {
  return this.commentsUpdateListener.asObservable();
}

}
