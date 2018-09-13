import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Event } from '../../models/event.model';
import {Router} from '../../../../node_modules/@angular/router'
import {ContextService} from '../../services/context.service'

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: Event[] = [];

  constructor(private dataService: DataService,
    private router: Router,
    private context: ContextService) { }

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

  viewEventDetails($event){
    this.context.setEventId($event.currentTarget.childNodes[0].innerHTML);
    this.router.navigateByUrl('/event-view');
  }

}
