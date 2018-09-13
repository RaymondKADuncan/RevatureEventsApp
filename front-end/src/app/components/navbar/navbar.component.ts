import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { ContextService } from '../../services/context.service';
import { User } from '../../models/user.model';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private username;
  private password;
  private loggedIn;

  constructor(
    private router: Router,
    private auth: AuthService,
    private context: ContextService
  ) { }

  ngOnInit() {
    if (this.context.getUser() == null) {
      this.loggedIn = false;
    } else {
      this.loggedIn = true;
    }
  }

  login() {
    console.log('Logging in!');
    console.log(this.username, this.password);
    this.auth.login(this.username, this.password).subscribe(
      data => {
        const user = <User> data;
        console.log(user);
        if (user == null) {
          // No user returned. Redirect to login page
          console.log('Redirecting to login page');
          this.router.navigateByUrl('/login');
        } else {
          // Log in user on the front end
          this.loggedIn = true;
          console.log('Logging  in');
          this.router.navigateByUrl('');
        }
      }
    );
    this.username = '';
    this.password = '';
    this.loggedIn = true;
    this.router.navigateByUrl('/login');
  }

  logout() {
    // Log out in context service and in navbar component
    this.loggedIn = false;
  }

  createAccount() {
    // Redirect to the create account page
    this.router.navigateByUrl('/create-account');
  }

}
