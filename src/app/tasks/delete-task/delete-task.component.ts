import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {
  PoDynamicFormField,
  PoNotificationService,
} from '@po-ui/ng-components';

import { TaskService } from '../task.service';
import { Task } from './../task';
import { Tasks } from './../tasks';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css'],
})
export class DeleteTaskComponent implements OnInit {
  task: Task;
  tasks: Tasks;
  validateFields: Array<string> = ['state'];

  fields: Array<PoDynamicFormField> = [
    {
      property: 'title',
      label: 'Título',
      required: true,
      minLength: 4,
      maxLength: 50,
      gridColumns: 6,
      gridSmColumns: 12,
      order: 1,
      placeholder: 'Informe o título',
    },
    {
      property: 'dateLimit',
      label: 'Data Limite',
      type: 'date',
      format: 'DD/MM/yyyy',
      gridColumns: 6,
      gridSmColumns: 12,
      minValue: '2022-09-30',
      errorMessage: 'A data deve ser igual ou maior que a data atual',
      order: 4,
    },
    {
      property: 'dateDone',
      label: 'Data da Conclusão',
      type: 'date',
      format: 'DD/MM/yyyy',
      gridColumns: 6,
      gridSmColumns: 12,
      minValue: '2022-09-30',
      errorMessage: 'A data deve ser igual ou maior que hoje',
      order: 5,
    },
    {
      property: 'category',
      label: 'Categoria',
      gridColumns: 6,
      gridSmColumns: 12,
      options: ['Pessoal', 'Trabalho', 'Estudo', 'Outra'],
      order: 2,
    },
    {
      property: 'description',
      label: 'Descrição',
      gridColumns: 12,
      gridSmColumns: 12,
      rows: 5,
      placeholder: 'Adicione uma descrição',
      order: 3,
    },
  ];

  constructor(
    public poNotification: PoNotificationService,
    private router: Router,
    private serviceTask: TaskService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log(this.route);
    console.log(this.route.snapshot);
    const id = this.route.snapshot.paramMap.get('id');
    this.serviceTask.getById(parseInt(id!)).subscribe((task) => {
      this.task = task;
    });
  }

  deleteTask(): void {
    this.serviceTask.delete(this.task.id!).subscribe(() => {
      this.poNotification.success('Tarefa excluída!');
      this.router.navigate(['/listTask']);
    });
  }

  cancel(): void {
    this.router.navigate(['/listTask']);
  }
}
