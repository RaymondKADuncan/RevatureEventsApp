import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/event.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-crud-event-view',
  templateUrl: './crud-event-view.component.html',
  styleUrls: ['./crud-event-view.component.css']
})
export class CrudEventViewComponent implements OnInit {

  events: Event[] = [];
  newEvent: Event = new Event();

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.dataService.getAllEvents().subscribe(
      e => {
        this.events = e;
      }
    )
  }

  createEvent() {
    console.log('adding event');
    console.log(this.newEvent.id);
    console.log(this.newEvent.name);
    console.log(this.newEvent.description);
    console.log(this.newEvent.location);
  }

}
