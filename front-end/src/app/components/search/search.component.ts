import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Event } from '../../models/event.model';
import { DataService } from '../../services/data.service';

@Injectable()
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchQuery = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  search(): void {
    //console.log('Searching for: ' + this.searchQuery);
    const response = this.dataService.getSearchResults(this.searchQuery);
    //const url = 'http://ec2-54-208-38-230.compute-1.amazonaws.com:8080/RevEventApp/event/view/search/search?name=' + this.searchParam;
    //const url = 'http://ec2-54-208-38-230.compute-1.amazonaws.com:8080/RevEventApp/event/search?param=' + this.searchParam;
    //const response = this.http.get<Event[]>(url);
    response.subscribe(data => console.log(JSON.stringify(data)));

  }

}
