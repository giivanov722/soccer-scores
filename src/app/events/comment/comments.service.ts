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

addComment(username: string, strComment: string, strIdEvent: string, creator: string) {
  const comment: Comment = {
    _id: null,
    author: username,
    strComment,
    strIdEvent,
    creator
  };
  this.http.post<any>('http://localhost:3000/event/comment', comment)
    .subscribe(response => {
      console.log(response);
    });
}

getComments(idEvent: string) {
  this.http.get<any>(`http://localhost:3000/event/${idEvent}/comments`)
  .subscribe(response => {
    console.log('***************' + response);
    this.comments = response;
    this.commentsUpdateListener.next([...this.comments]);
  });
}

deleteComment(idComment: string) {
  console.log('I am in delete comments service method');
  this.http.delete('http://localhost:3000/event/comments/' + idComment)
    .subscribe( () => {
      const updatedComments = this.comments.filter(comment => comment._id !== idComment);
      this.comments = updatedComments;
      this.commentsUpdateListener.next([...this.comments]);
    });
}

getCommentsUpdateListener() {
  return this.commentsUpdateListener.asObservable();
}

}
