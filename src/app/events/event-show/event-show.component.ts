import { Component, OnInit } from '@angular/core';
import { Event } from '../event.model';
import { EventsService } from '../events.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-event-show',
  templateUrl: './event-show.component.html',
  styleUrls: ['./event-show.component.css']
})
export class EventShowComponent implements OnInit {

  event: Event;
  private idEvent: string;

  constructor(public eventsService: EventsService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.idEvent = paramMap.get('idEvent');
      this.eventsService.getEvent(this.idEvent)
        .subscribe(response => {
          console.log(response.events);
          this.event = response.events;
        });
    });
  }


}
