import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Event } from '../../models/event.model';

@Injectable()
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchParam = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  search(): void {
    console.log('Searching for: ' + this.searchParam);
    let url = 'event/view/search/search?name=' + this.searchParam;
    let response = this.http.get<Event>(url);
    response.subscribe(r => console.log(r.id));
  }

}
