// import { NgModule } from '@angular/core';
// import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { TasksComponent } from './task/tasks.component';
// import { TaskViewComponent } from './task-view/task-view.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'index.html', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'tasks', component: TasksComponent },
  //   { path: 'taskview', component: TaskViewComponent },
];

export class RoutesModule {}

// export const routing: ModuleWithProviders<RouterModule> =
//   RouterModule.forRoot(routes);
