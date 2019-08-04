import { Component, OnInit } from '@angular/core';
import { Event } from '../event.model';
import { Subscription } from 'rxjs';
import { EventsService } from '../events.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-daily-events',
  templateUrl: './daily-events.component.html',
  styleUrls: ['./daily-events.component.css']
})
export class DailyEventsComponent implements OnInit {

  checkDays: number;
  year: number = new Date().getFullYear();
  day: number = new Date().getDate();
  month: number = new Date().getMonth();
  date = this.year + '-';
  config: any;

  dailyEvents: Event[] = [];


  constructor( public eventsService: EventsService) {}

  ngOnInit() {
    this.eventsService.getDailyEvents(this.convertDate(this.day, this.month))
    .subscribe(response => {
      this.dailyEvents = response.events;
      this.date = this.year + '-';
    });
    this.config = {
      itemsPerPage: 15,
      currentPage: 1,
      totalItems: this.dailyEvents.length
    };
  }

  getEvent(idEvent: string) {
    this.eventsService.getEvent(idEvent);
  }

  getEvents(day: number, month: number) {
    this.eventsService.getDailyEvents(this.convertDate(day, month))
    .subscribe(response => {
      this.date = this.year + '-';
      this.dailyEvents = response.events;
    });
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  convertDate(day: number, month: number) {
    this.checkDays = new Date(Number(month), Number(this.year), 0).getDate();
    if (day > this.checkDays) {
      (month < 10) ? this.date += '0' + (month + 2) : this.date += (month + 2);
      this.date += '-0' + 1;
      return this.date;
    }
    if (day < 1) {
      if ( month === 1) {
          day = 31;
          month = 12;
      }
      (month < 10) ? this.date += '0' + (month) : this.date += (month);
      this.date += '-' + this.checkDays;
      return this.date;
    }
    (month < 10) ? this.date += '0' + (month + 1) : this.date += (month + 1);
    (day < 10) ? this.date += '-0' + (day) : this.date += '-' + day;
    return this.date;
  }

}
