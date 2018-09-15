import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

import { DataService } from '../../services/data.service';

@Injectable()
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchParam = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  search(): void {
    //console.log('Searching for: ' + this.searchParam);
    const response = this.dataService.getSearchResults(this.searchParam);
    response.subscribe(data => console.log(JSON.stringify(data)));

  }

}