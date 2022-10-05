import { CreateTaskComponent } from './tasks/create-task/create-task.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {
  PoMenuPanelModule,
  PoDynamicFormComponent,
} from '@po-ui/ng-components';
import { PoModule } from '@po-ui/ng-components';
import { PoContainerModule } from '@po-ui/ng-components';
import {
  PoTemplatesModule,
  PoPageDynamicTableCustomTableAction,
} from '@po-ui/ng-templates';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { MenuComponent } from './menu/menu.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { MenuService } from './menu/menu.service';
import { TasksComponent } from './task/tasks.component';
import { CategoryComponent } from './category/category.component';
import { DeleteTaskComponent } from './tasks/delete-task/delete-task.component';
import { DoneTaskComponent } from './tasks/done-task/done-task.component';
import { HeaderComponent } from './header/header.component';
import { ListTaskComponent } from './tasks/list-task/list-task.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MenuComponent,
    HomeComponent,
    TasksComponent,
    CategoryComponent,
    DeleteTaskComponent,
    DoneTaskComponent,
    HeaderComponent,
    ListTaskComponent,
    CreateTaskComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    PoModule,

    RouterModule.forRoot(routes, {
      useHash: false,
      relativeLinkResolution: 'legacy',
    }),
    PoTemplatesModule,
    PoModule,
    PoMenuPanelModule,
    PoContainerModule,
  ],
  providers: [MenuService, PoDynamicFormComponent, DeleteTaskComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
