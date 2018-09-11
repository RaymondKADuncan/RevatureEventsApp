import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.css']
})
export class EventViewComponent implements OnInit {

  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.initializeEvent();
  }

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

  mapLocation() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://maps.google.com/maps?q=
      ${this.currentEvent.location}&output=embed`);
  }

  rsvp() {
    //RSVP to currentEvent
  }

  initializeEvent() {
    //Utilize data service to retrieve current event details
  }

}
