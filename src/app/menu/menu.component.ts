import { Component } from '@angular/core';

import { PoMenuPanelItem } from '@po-ui/ng-components';
import { Router } from '@angular/router';

import { PoMenuItem } from '@po-ui/ng-components';

import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  providers: [MenuService],
})
export class MenuComponent {
  title: string = '';
  collapsed: boolean;

  constructor(private router: Router, public menuService: MenuService) {}

  public readonly menuItems: Array<PoMenuItem> = [
    {
      label: 'Home',
      action: this.changeTitle.bind(this),
      icon: 'po-icon-home',
      link: 'home',
      shortLabel: 'Home',
    },
    // {
    //   label: 'Adicionar Tarefa',
    //   action: this.changeTitle.bind(this),
    //   icon: 'po-icon-plus',
    //   link: 'task',
    //   shortLabel: 'Adicionar',
    // },
    {
      label: 'Tarefas',
      action: this.changeTitle.bind(this),
      icon: 'po-icon-news',
      link: 'tasks',
      shortLabel: 'Tarefas',
    },
  ];

  changeTitle(menu: PoMenuPanelItem) {
    this.title = menu.label;
    this.router.navigate([menu.link]);
    this.collapsed = true;
  }
}
