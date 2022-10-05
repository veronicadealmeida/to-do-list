import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { PoNotificationService } from '@po-ui/ng-components';

import {
  PoModalComponent,
  PoTableColumn,
  PoTableColumnSort,
  PoTableColumnLabel,
} from '@po-ui/ng-components';

import { TasksService } from './tasks.service';
import { TasksEnum } from './tasks.enum';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [TasksService],
})
export class TasksComponent {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  readonly serviceApi = 'http://localhost:3002/tasks';

  msg: any;
  title: any;

  doneProcesses: Array<object>;

  public readonly columns: Array<PoTableColumn> = [
    {
      property: 'status',
      type: 'label',
      label: 'Status',
      width: '5%',
      labels: <Array<PoTableColumnLabel>>[
        {
          value: TasksEnum.Done,
          color: 'color-10',
          label: 'Concluída',
          tooltip: 'Tarefa concluída',
        },
        {
          value: TasksEnum.Pendente,
          color: 'color-07',
          label: 'Pendente',
          tooltip: 'Tarefa pendente',
        },
        {
          value: TasksEnum.Canceled,
          color: 'color-10',
          label: 'Cancelada',
          tooltip: 'Tarefa',
        },
      ],
    },
    {
      property: 'title',
      label: 'Título da tarefa',
    },
    {
      property: 'description',
      label: 'Descrição da tarefa',
    },
    {
      property: 'category',
      label: 'Descrição',
    },
    {
      property: 'dateLimit',
      label: 'Data Limite',
    },
    {
      property: 'dateDone',
      label: 'Data de Conclusão',
    },
    {
      property: 'actions',
      label: 'Actions',
      type: 'icon',
      sortable: false,
      icons: [
        {
          action: this.Cancel.bind(this),
          color: 'color-07',
          icon: 'po-icon po-icon-close',
          tooltip: 'Cancelar Tarefa',
          value: 'canCancel',
        },
        {
          action: this.View.bind(this),
          color: 'color-02',
          icon: 'po-icon po-icon-eye',
          tooltip: 'Visualizar Tarefa',
          value: 'canView',
        },
        {
          action: this.Set.bind(this),
          color: 'color-08',
          icon: 'po-icon po-icon-document-filled',
          tooltip: 'Alterar Tarefa',
          value: 'canSet',
        },
        {
          action: this.Done.bind(this),
          color: 'color-11',
          icon: 'po-icon po-icon-ok',
          tooltip: 'Concluir Tarefa',
          value: 'canDone',
        },
      ],
    },
  ];

  constructor(
    public tasksComponents: TasksService,
    private router: Router,
    private poNotification: PoNotificationService
  ) {}

  private Done(row) {
    // this.title = 'oi';
    // this.msg = row;

    // this.poModal.open();

    const selectedTask = row['status'];
    switch (selectedTask) {
      case TasksEnum.Pendente:
        row['status'] = TasksEnum.Done;
        this.poNotification.success('Tarefa concluída!');
        break;

      case TasksEnum.Done:
        this.poNotification.warning('Esta tarefa já estava concluída.');
        break;

      case TasksEnum.Canceled:
        this.poNotification.error('Esta tarefa já estava cancelada.');
        break;
    }
  }

  private Set(row) {
    row.component.isDone = !row.component.isDone;
  }

  private View(row) {
    row.component.isDone = !row.component.isDone;
  }

  private Cancel(row) {
    row.component.isDone = !row.component.isDone;
  }

  onClick() {
    alert('adicionar');
  }
}
