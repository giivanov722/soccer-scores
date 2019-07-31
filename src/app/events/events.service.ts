import { Event } from './event.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private events: Event[] = [];
   private eventsUpdated = new Subject<Event[]>();

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
    console.log(idEvent);
    return this.http.get<any>('https://www.thesportsdb.com/api/v1/json/1/lookupevent.php?id=' + idEvent);
  }


   getEventsUpdateListener() {
     return this.eventsUpdated.asObservable();
   }

}
