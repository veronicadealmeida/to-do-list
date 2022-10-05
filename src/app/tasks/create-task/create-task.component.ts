import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Task } from './../task';
import { Tasks } from './../tasks';
import { TasksService } from 'src/app/task/tasks.service';

import {
  PoDynamicFormField,
  PoDynamicFormFieldChanged,
  PoDynamicFormValidation,
  PoNotificationService,
} from '@po-ui/ng-components';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent implements OnInit {
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
    private serviceTask: TaskService
  ) {}

  ngOnInit() {
    this.task = {
      status: 1,
      title: '',
      description: '',
      category: '',
    };
    this.tasks = { item: [this.task] };
  }

  createTask(): void {
    this.serviceTask.create(this.task).subscribe(() => {
      this.poNotification.success('Tarefa criada!');
      this.router.navigate(['/listTask']);
    });
  }

  // createThought() {
  //   this.service.create(this.thought).subscribe(() => {
  //     this.router.navigate(['/listThought']);
  //   });
  // }

  cancel(): void {
    this.router.navigate(['/listTask']);
  }
}
