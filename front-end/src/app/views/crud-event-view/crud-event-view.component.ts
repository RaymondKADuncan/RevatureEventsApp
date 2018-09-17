import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/event.model';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { ContextService } from '../../services/context.service';
import { InputValidatorService } from '../../services/input-validator.service';

@Component({
  selector: 'app-crud-event-view',
  templateUrl: './crud-event-view.component.html',
  styleUrls: ['./crud-event-view.component.css']
})
export class CrudEventViewComponent implements OnInit {

  events: Event[] = [];
  newEvent: Event = new Event();
  eventId: Number;
  event: Event;
  isNew: boolean;
  eventDate: Date;

  eventTagInput: String;
  eventTagList: String[] = [];

  constructor(
    private dataService: DataService, 
    private router: Router,
    private context: ContextService,
    private validator: InputValidatorService
  ) { }

  ngOnInit() {
    this.getEvents();
    this.eventId = this.context.getEventId();
    if(this.eventId === null) {
      this.newEvent = new Event();
    } else {
      this.dataService.getEventById(this.eventId).subscribe(
        data => {
          if(data == null) {
            // Something went wrong
          } else {
            this.newEvent = <Event> data;
            this.eventTagList = this.newEvent.tags;
          }
        }
      )
    }
  }

  addTag() {
    this.eventTagList.push(this.eventTagInput);
    console.log(this.eventTagList);
    this.eventTagInput = '';
  }

  removeTag(tag: String) {
    this.eventTagList = this.eventTagList.filter(t => t !== tag);
  }

  getTags(): String[] {
    return this.eventTagList;
  }

  getEvents() {
    this.dataService.getAllEvents().subscribe(
      e => {
        this.events = e;
      }
    )
  }

  createEvent() {
    if (!this.validator.validateInputStrings(this.newEvent.name, this.newEvent.location, this.newEvent.time))
    {
      alert('Invalid Input');
      return;
    }
    this.dataService.addEvent(this.newEvent.name, this.newEvent.description, this.newEvent.location, this.getTags(), this.newEvent.time).subscribe(
      e => {
        console.log(e);
        this.router.navigateByUrl('/event-list');
      }
    )
  }

  updateEvent() {
    if (!this.validator.validateInputStrings(this.newEvent.name, this.newEvent.location, this.newEvent.time))
    {
      alert('Invalid Input');
      return;
    }
    this.dataService.updateEvent(this.newEvent).subscribe(
      data => {
        if(data == null) {
          // Bad things happened
        }
        else {
          console.log(data);
          this.router.navigateByUrl('/event-list');
        }
      }
    )
  }

}
