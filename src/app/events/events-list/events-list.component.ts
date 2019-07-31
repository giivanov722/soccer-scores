import { Component, OnDestroy, OnInit } from '@angular/core';
import { Event } from '../event.model';
import { EventsService } from '../events.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit, OnDestroy {

  events: Event[] = [];
  private eventsSubscription: Subscription;

  constructor(public eventsService: EventsService) { }

  ngOnInit() {
    this.eventsService.getEvents();
    this.eventsSubscription = this.eventsService.getEventsUpdateListener()
      .subscribe((events: Event[]) => {
         this.events = events ;
      });
  }

  ngOnDestroy() {
      this.eventsSubscription.unsubscribe();
  }


}
