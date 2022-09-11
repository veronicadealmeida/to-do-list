// import { NgModule } from '@angular/core';
// import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
import { TaskViewComponent } from './task-view/task-view.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'index.html', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'task', component: TaskComponent },
  { path: 'task-view', component: TaskViewComponent },
];

export class RoutesModule {}

// export const routing: ModuleWithProviders<RouterModule> =
//   RouterModule.forRoot(routes);