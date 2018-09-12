import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { ContextService } from '../../services/context.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username;
  private password;

  constructor(
    private authService: AuthService,
    private context: ContextService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.context.getUser() != null) {
      this.router.navigateByUrl('home');
    }
  }

  login() {
    this.authService.login(this.username, this.password).subscribe(
      data => {
        if (data != null) {
          // User received, redirect to homepage
          // @ts-ignore
          const user = <User> data;
          // @ts-ignore
          this.context.setUser(user);
          this.router.navigateByUrl('home');
        }
      }
    );
  }

  createAccount() {
    this.router.navigateByUrl('create-account');
  }

}