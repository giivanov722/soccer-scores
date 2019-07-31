import { Component, OnInit } from '@angular/core';
import { Event } from '../event.model';
import { Subscription } from 'rxjs';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-daily-events',
  templateUrl: './daily-events.component.html',
  styleUrls: ['./daily-events.component.css']
})
export class DailyEventsComponent implements OnInit {

  year: number = new Date().getFullYear();
  day: number = new Date().getDate();
  month: number = new Date().getMonth();
  date = this.year + '-';

  dailyEvents: Event[] = [];


  constructor( public eventsService: EventsService) { }

  ngOnInit() {
    this.eventsService.getDailyEvents(this.convertDate(this.day, this.month))
    .subscribe(response => {
      this.dailyEvents = response.events;
      this.date = this.year + '-';
    });
  }

  getEvents(day: number, month: number) {
    this.eventsService.getDailyEvents(this.convertDate(day, month))
    .subscribe(response => {
      this.dailyEvents = response.events;
      this.date = this.year + '-';
    });
  }

  convertDate(day: number, month: number) {
    (month < 10) ? this.date += '0' + (month + 1) : this.date += (month + 1);
    (day < 10) ? this.date += '-0' + (day) : this.date += '-' + day;
    return this.date;
  }

}
