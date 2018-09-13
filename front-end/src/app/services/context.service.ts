import { Injectable } from '@angular/core';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  private user: User = null;
  private eventId: number;

  constructor() { }

  getUser(): User {
    return this.user;
  }

  setUser(user: User): void {
    this.user = user;
  }

  getEventId(): number {
    return this.eventId;
  }

  setEventId(eventId: number): void {
    this.eventId = eventId;
  }
}
