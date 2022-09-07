import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PoMenuPanelModule } from '@po-ui/ng-components';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, MenuComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    RouterModule,
    PoTemplatesModule,
    PoModule,
    PoMenuPanelModule,
  ],
  providers: [MenuComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
