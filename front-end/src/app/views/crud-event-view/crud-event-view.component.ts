import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/event.model';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-crud-event-view',
  templateUrl: './crud-event-view.component.html',
  styleUrls: ['./crud-event-view.component.css']
})
export class CrudEventViewComponent implements OnInit {

  events: Event[] = [];
  newEvent: Event = new Event();

  constructor(private dataService: DataService, private router: Router) { }

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
    this.dataService.addEvent(this.newEvent.name, this.newEvent.description, this.newEvent.location).subscribe(
      e => {
        console.log(e);
        this.router.navigateByUrl('/event-list');
      }
    )
  }

}
