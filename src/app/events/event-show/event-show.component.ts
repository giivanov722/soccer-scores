import { Component, OnInit, OnDestroy } from '@angular/core';
import { Event } from '../event.model';
import { EventsService } from '../events.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-event-show',
  templateUrl: './event-show.component.html',
  styleUrls: ['./event-show.component.css']
})
export class EventShowComponent implements OnInit, OnDestroy {

  event: Event;
  private eventSubscription: Subscription;
  private idEvent: string;

  constructor(public eventsService: EventsService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.idEvent = paramMap.get('idEvent');
      this.eventsService.getEvent(this.idEvent);
      this.eventSubscription = this.eventsService.getEventUpdateListener()
        .subscribe((event: Event) => {
          this.event = event;
        });
      });
    }

    ngOnDestroy(){
      this.eventSubscription.unsubscribe();
    }

}


