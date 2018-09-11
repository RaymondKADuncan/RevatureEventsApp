import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  login(username: String, password: String): Observable<User> {
    const user = {
      username: username,
      password: password
    };
    // console.log(`Logging in ${username} with password: ${password}`);
    // console.log(JSON.stringify(user));
    return this.http.post<User>(this.url.concat('login'), JSON.stringify(user));
  }

  validate(username: String, password: String): Boolean {
    return null;
  }

}
