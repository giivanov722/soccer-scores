import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  //events: Event[] = [];
  private eventsSubscription: Subscription;
  events = [
    {home:"Liverpool", away:"Everton", result: "1:0"},
    {home:"Chelsea", away:"Tothenam", result: "1:1"},
    {home:"Burnley", away:"Manchester City", result: "1:3"},
    {home:"Manchester United", away:"Brighton", result: "2:1"},
    {home:"Newcastle United", away:"Arsenal", result: "2:2"}
  ];

  constructor() { }

  ngOnInit() {
  }


}
