import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users;

  constructor() { 

    this.users = [{id: 1, name: 'John', posts:["hia!", "i am here", "testing this out"]}];
  }

  getUsers(){
    return this.users.map( u => u);
  }
  
}
