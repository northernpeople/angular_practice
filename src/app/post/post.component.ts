import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-post',
  template: `
  <h1> Posts by users</h1>
  <ul>
    <li *ngFor='let user of users'>
      <h2><a routerLink="/user/{{user.id}}"> {{user.name}}</a></h2>
      <ul>
        <li *ngFor='let post of user.posts'>
          {{post}}
        </li>
      </ul>
    </li>
  </ul>
  `,
  styles: []
})
export class PostComponent implements OnInit {

  users: Object;
  userService: UserService;

  constructor(userService: UserService) { 
    this.userService = userService;
  }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

}

