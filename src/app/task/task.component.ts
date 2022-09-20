import { Component, ViewChild } from '@angular/core';

import { PoDynamicViewField, PoModalComponent } from '@po-ui/ng-components';

import {
  PoPageDynamicTableActions,
  PoPageDynamicTableCustomTableAction,
  PoPageDynamicTableOptions,
} from '@po-ui/ng-templates';

import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers: [TaskService],
})
export class TaskComponent {
  @ViewChild('userDetailModal') userDetailModal!: PoModalComponent;

  readonly serviceApi = 'http://localhost:3000/tasks';

  actionsRight = true;
  detailedTask: any;
  quickSearchWidth: number = 3;
  fixedFilter = false;

  readonly actions: PoPageDynamicTableActions = {
    new: '/documentation/po-page-dynamic-edit',
    removeAll: true,
  };

  readonly categoryOptions: Array<object> = [
    { value: 'Pessoal', label: 'Pessoal' },
    { value: 'Profissional', label: 'Profissional' },
    { value: 'Estudo', label: 'Estudo' },
  ];

  fields: Array<any> = [
    {
      property: 'status',
      label: 'Status',
      filter: true,
      gridColumns: 6,
      type: 'subtitle',
      subtitles: [
        {
          value: 'Concluída',
          color: 'success',
          label: 'Concluída',
          content: '',
        },
        {
          value: 'Pendente',
          color: 'warning',
          label: 'Pendente',
          content: '',
        },
        {
          value: 'Cancelada',
          color: 'danger',
          label: 'Cancelada',
          content: '',
        },
      ],
    },
    { property: 'title', label: 'Título', filter: true, gridColumns: 6 },
    {
      property: 'description',
      label: 'description',
      filter: true,
      gridColumns: 6,
    },
    {
      property: 'dateLimit',
      label: 'Data Limite',
      type: 'date',
      gridColumns: 6,
      visible: true,
      allowColumnsManager: true,
    },
    {
      property: 'dateDone',
      label: 'Data de Conclusão',
      type: 'date',
      filter: true,
      gridColumns: 6,
      visible: true,
      allowColumnsManager: true,
    },
    {
      property: 'category',
      label: 'Categoria',
      filter: true,
      options: this.categoryOptions,
      gridColumns: 6,
    },
    { property: 'id', key: true, visible: false, filter: false },
  ];

  readonly detailFields: Array<PoDynamicViewField> = [
    {
      property: 'status',
      tag: true,
    },
    { property: 'title', label: 'Título', type: 'string' },
    { property: 'description', label: 'Descrição:', type: 'string' },
    { property: 'dateLimit', label: 'Data Limite:', type: 'date' },
    { property: 'dateDone', label: 'Data de Conclusão:', type: 'date' },
    { property: 'category', label: 'Categoria', type: 'string' },
  ];

  tableCustomActions: Array<PoPageDynamicTableCustomTableAction> = [
    {
      label: 'Cancelar',
      action: this.onClickUserDetail.bind(this),
      disabled: this.isUserInactive.bind(this),
      icon: 'po-icon-close',
    },
    {
      label: 'Excluir',
      action: this.onClickUserDetail.bind(this),
      disabled: this.isUserInactive.bind(this),
      icon: 'po-icon-garbage',
    },
  ];

  constructor(private taskService: TaskService) {}

  onLoad(): PoPageDynamicTableOptions {
    return {
      fields: [
        { property: 'id', visible: false, filter: false },
        { property: 'status', label: 'Status', filter: true },
        { property: 'title', label: 'Título', filter: true },
        {
          property: 'description',
          label: 'description',
          filter: true,
        },
        {
          property: 'dateLimit',
          label: 'Data Limite',
          type: 'date',
          filter: true,
        },
        {
          property: 'dateDone',
          label: 'Data de Conclusão',
          type: 'date',
          visible: true,
          filter: true,
          allowColumnsManager: true,
        },
        {
          property: 'category',
          label: 'category',
          filter: true,
        },
      ],
    };
  }

  isUserInactive(task: any) {
    return task.status === 'Cancelada';
  }

  private onClickUserDetail(user: any) {
    this.detailedTask = user;

    this.userDetailModal.open();
  }
}
