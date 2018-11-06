import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostComponent } from './post/post.component';
import { UserComponent } from './user/user.component';
import { UserService } from './shared/user.service';
import { FormsModule } from '@angular/forms';  //<<<< import it here


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PostComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
