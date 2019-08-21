import { Event } from './event.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private events: Event[] = [];
  private event: Event;
   private eventsUpdated = new Subject<Event[]>();
   private eventUpdated = new Subject<Event>();

  constructor(private http: HttpClient) {}

   getEvents() {
     this.http.get<any>('http://localhost:3000/events')
       .subscribe((response) => {
         this.events = response.events;
         console.log(response.message);
         this.eventsUpdated.next([...this.events]);
       });
   }


  getDailyEvents(date: string) {
    return  this.http.get<any>(`https://www.thesportsdb.com/api/v1/json/1/eventsday.php?d=${date}&s=Soccer`);
  }

  getEvent(idEvent: string) {
    return this.http.get<any>('https://www.thesportsdb.com/api/v1/json/1/lookupevent.php?id=' + idEvent)
      .subscribe( response => {
        this.event = response.events[0];
        console.log('Event obtained ' + this.event.strAwayTeam);
        this.eventUpdated.next({...this.event});
      });
  }


   getEventsUpdateListener() {
     return this.eventsUpdated.asObservable();
   }

   getEventUpdateListener() {
     return this.eventUpdated.asObservable();
   }

}
