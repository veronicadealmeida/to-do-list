import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PoMenuPanelModule } from '@po-ui/ng-components';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
import { TaskViewComponent } from './task-view/task-view.component';
import { FormsModule } from '@angular/forms';
import { MenuService } from './menu/menu.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    HomeComponent,
    TaskComponent,
    TaskViewComponent,
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
  ],
  providers: [MenuService],
  bootstrap: [AppComponent],
})
export class AppModule {}
