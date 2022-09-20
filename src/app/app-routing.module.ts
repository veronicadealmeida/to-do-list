import { NgModule } from '@angular/core';
// import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  //   { path: 'task', component: TaskComponent },
  { path: 'tasks', component: TasksComponent },
];

// const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// export const routing: ModuleWithProviders<RouterModule> =
//   RouterModule.forRoot(routes);
