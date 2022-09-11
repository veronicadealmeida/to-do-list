import { Component } from '@angular/core';

import { PoMenuPanelItem } from '@po-ui/ng-components';
import { Router } from '@angular/router';

import { PoMenuItem } from '@po-ui/ng-components';

import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  title: string = 'Customers';

  constructor(private router: Router) {}

  public readonly menuItems: Array<PoMenuPanelItem> = [
    {
      label: 'Home',
      action: this.changeTitle.bind(this),
      icon: 'po-icon-home',
      link: 'home',
    },
    {
      label: 'Adicionar Tarefa',
      action: this.changeTitle.bind(this),
      icon: 'po-icon-plus',
      link: 'task',
    },
    {
      label: 'Histórico',
      action: this.changeTitle.bind(this),
      icon: 'po-icon-news',
      link: 'task-view',
    },
  ];

  changeTitle(menu: PoMenuPanelItem) {
    this.title = menu.label;
    // this.router.navigate([menu.link])
  }
}
