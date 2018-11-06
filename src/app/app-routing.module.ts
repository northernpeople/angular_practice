import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';


const routes: Routes = [
  {
    path: 'user/:id',
    component: UserComponent
  },
  {
    path: 'posts',
    component: PostComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
