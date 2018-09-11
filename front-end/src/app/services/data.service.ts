import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';
import { Event } from '../models/event.model';
import { properties } from '../app.properties';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = properties.url;

  constructor(private http: HttpClient) { }

  getAllEvents(): Observable<Event[]> {
    return this.http.post<Event[]>(this.url.concat(''), null);
  }

  getEventsByUser(user: User): Observable<Event[]> {
    return this.http.post<Event[]>(this.url.concat(''), user);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.post<User[]>(this.url.concat(''), null);
  }

  getUserByUsername(username: String): Observable<User> {
    const user = {
      username: username
    };
    return this.http.post<User>(this.url.concat(''), user);
  }
}
