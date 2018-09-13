import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {DataService} from '../../services/data.service';
import {ContextService} from '../../services/context.service';

import {Event} from '../../models/event.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.css']
})
export class EventViewComponent implements OnInit {

  constructor(private sanitizer:DomSanitizer,
    private data: DataService,
    private context: ContextService,
    private router: Router) { }

  ngOnInit() {
    this.initializeEvent();
  }
  currentEvent: Event;
  /*
  currentEvent = {
    id: 1,
    name: 'TestEvent',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh massa, 
      vulputate eu laoreet vehicula, facilisis eget massa. Quisque pharetra vehicula pharetra. 
      Suspendisse in tortor efficitur, aliquam urna dictum, pharetra lacus. Fusce scelerisque, 
      libero ut congue tempor, diam dui varius erat, at aliquam ex libero in nisi. Suspendisse potenti. 
      Morbi purus quam, elementum vel ultrices vitae, luctus vitae nisi. Ut eu pretium ligula. 
      Mauris eget nulla a metus volutpat suscipit molestie congue justo. Proin fringilla dignissim 
      est non gravida. Maecenas fermentum risus at lectus blandit sagittis et ut tortor.`,
    users: null,
    tags: ['sponsored', 'outdoors'],
    groups: ['batch', 'company'],
    time: Date.now(),
    location: 'Revature'
  };
  */

  mapLocation() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://maps.google.com/maps?q=
      ${this.currentEvent.location}&output=embed`);
  }
  

  rsvp() {
    console.log(this.context.getUser());
    // console.log(this.context.getUser().id);
    console.log(this.context.getEventId());
    this.data.addUserToEvent(this.context.getUser().id + " " + this.context.getEventId()).subscribe();
  }

  initializeEvent() {
    this.data.getEventById(this.context.getEventId()).subscribe(data => this.currentEvent = data, error => {}, 
      () => 
      {
        console.log(this.currentEvent);
        console.log(this.currentEvent.users[0].username);
      });
  }

  deleteEvent() {
    this.data.deleteEvent(this.currentEvent).subscribe(
      event => {
        this.currentEvent = event;
        this.router.navigateByUrl('/event-list');
      }
    )
  }

  goBack() {
    this.router.navigateByUrl('/event-list');
  }

}
