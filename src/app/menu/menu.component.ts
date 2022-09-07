import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  providers: [MenuService],
  styles: [
    `
      .sample-menu-header-text-color {
        color: #9da7a9;
      }
    `,
  ],
})
export class MenuComponent {
  menuItemSelected: string;

  menus: Array<PoMenuItem> = [
    {
      label: 'Login',
      action: this.printMenuAction.bind(this),
      icon: 'po-icon-user',
      shortLabel: 'Login',
    },
    {
      label: 'Tarefas Importantes',
      action: this.printMenuAction.bind(this),
      icon: 'po-icon-exclamation',
      shortLabel: 'Importante',
      badge: { value: 1 },
    },
    {
      label: 'Adicionar',
      icon: 'po-icon-plus',
      shortLabel: 'Adicionar',
      subItems: [
        {
          label: 'Tarefa',
          action: this.printMenuAction.bind(this),
          badge: { value: 12 },
        },
        {
          label: 'Categoria',
          action: this.printMenuAction.bind(this),
          badge: { value: 12 },
        },
      ],
    },
    {
      label: 'Visualizar',
      icon: 'po-icon-eye',
      shortLabel: 'Visualizar',
      subItems: [
        {
          label: 'Tarefas Pendentes',
          action: this.printMenuAction.bind(this),
          badge: { value: 2 },
        },
        {
          label: 'Tarefas Concluídas',
          action: this.printMenuAction.bind(this),
          badge: { value: 12 },
        },
      ],
    },
  ];

  constructor(public MenuService: MenuService) {}

  printMenuAction(menu: PoMenuItem) {
    this.menuItemSelected = menu.label;
  }
}
