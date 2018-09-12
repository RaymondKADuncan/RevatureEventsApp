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
    return this.http.get<Event[]>(this.url.concat('event/view/all'));
  }

  getEventsByUser(user: User): Observable<Event[]> {
    return this.http.get<Event[]>(this.url.concat(''));
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url.concat('user/view/all'));
  }

  getUserByUsername(username: String): Observable<User> {
    const user = {
      username: username
    };
    return this.http.post<User>(this.url.concat(''), user);
  }

<<<<<<< HEAD
  getEventById(id: Number): Observable<Event> {
    return this.http.get<Event>(this.url.concat(`event/view/${id}`));
  }

  addUserToEvent(userId: Number, eventId: Number): Observable<Event> {
    return this.http.post<Event>(this.url.concat(''), eventId);
  }

  //addEvent()
=======
  addEvent(name: String, description: String, location: String) {
    const event = {
      name: name,
      description: description,
      location: location
    };
    return this.http.post<Event>(this.url.concat('event/add'), event);
  }
>>>>>>> 03946765cc4a974cf9800cf01e53b8ab8e4f268c
}
