import { Event } from './event.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private events: Event[] = [];
  //private eventsUpdated: new Subject<Event[]>();

  constructor() {}

  // getEvents() {
  //   this.http.get<any>('https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4328')
  //     .subscribe((responseEvents) => {
  //       this.events = responseEvents;
  //       this.eventsUpdated.next([...this.events]);
  //     });
  // }

  // getEventsUpdateListener() {
  //   return this.eventsUpdated.asObservable();
  // }

}
