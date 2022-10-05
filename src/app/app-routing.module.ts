import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  PoPageLoginComponent,
  PoPageLoginAuthenticationType,
} from '@po-ui/ng-templates';
import { AuthComponent } from './auth/auth.component';
import { CreateTaskComponent } from './tasks/create-task/create-task.component';
import { ListTaskComponent } from './tasks/list-task/list-task.component';
import { DeleteTaskComponent } from './tasks/delete-task/delete-task.component';
import { UpdateTaskComponent } from './tasks/update-task/update-task.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: AuthComponent,
  },

  // {
  //   path: 'loginTask',
  //   component: LoginComponent,
  // },
  {
    path: 'createTask',
    component: CreateTaskComponent,
  },
  {
    path: 'listTask',
    component: ListTaskComponent,
  },
  {
    path: 'task/deleteTask/:id',
    component: DeleteTaskComponent,
  },
  {
    path: 'task/updateTask/:id',
    component: UpdateTaskComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
