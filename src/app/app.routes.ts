import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { TaskComponent } from './features/task/task.component';
import { UsersComponent } from './features/users/users.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'task', component: TaskComponent },
  { path: 'users', component: UsersComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
]
