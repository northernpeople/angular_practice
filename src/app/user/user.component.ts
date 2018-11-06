import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
// import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-user',
  template: `
  <h1 [hidden]='valid'> User details </h1>

  <h2 (click)="lineClicked($event)">{{user.id}} {{user.name}} posted ({{user.posts.length}}) times.</h2>

  <hr/>

  <input type='text' placeholder="address" [(ngModel)]="shippingAddress"/>
  <h3> Current address: {{shippingAddress}}</h3>
  `,
  styles: []
})
export class UserComponent implements OnInit {

  userId: Object;
  route: ActivatedRoute;
  userService: UserService;
  user: Object;
  valid: boolean = false;
  shippingAddress: Object;

  constructor(userService: UserService, route: ActivatedRoute) { 
    this.route = route;
    this.userService = userService;

    this.route.params.subscribe(params => this.userId = params.id);
  }

  ngOnInit() {
    this.user = this.userService.getUser(this.userId);
    console.log(this.user)
  }

  lineClicked(event){
    console.log("line clicked", event);
    this.user = {id: 1, name: 'Hanna', posts:[ "i am  NOT here", "NOT testing this out"]};
    this.shippingAddress ="generic address";
  }


}
