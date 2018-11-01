import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
  <nav>
  <ul>
    <li>
      <a routerLink="">
        <i class="material-icons">supervised_user_circle</i>
      </a>
    </li>
    <li>
      <a routerLink="posts">
        <i class="material-icons">message</i>
      </a>
    </li>
  </ul>
</nav>
  `,
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}