import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Event } from '../../models/event.model';

@Injectable()
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchParam = '';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  search(): void {
    //console.log('Searching for: ' + this.searchParam);
    //const url = 'http://ec2-54-208-38-230.compute-1.amazonaws.com:8080/RevEventApp/event/view/search/search?name=' + this.searchParam;
    const url = 'http://ec2-54-208-38-230.compute-1.amazonaws.com:8080/RevEventApp/event/search?param=' + this.searchParam;
    const response = this.http.get<Event[]>(url);
    response.subscribe(data => console.log(JSON.stringify(data)));
    //this.router.navigateByUrl('event/view/search/search?name=' + this.searchParam);
  }

}
