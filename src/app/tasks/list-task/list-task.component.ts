import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import {
  PoModalComponent,
  PoTableColumn,
  PoModalAction,
} from '@po-ui/ng-components';

import { TaskService } from '../task.service';

import { Task } from './../task';

import {
  PoCheckboxGroupOption,
  PoMultiselectOption,
} from '@po-ui/ng-components';

import { PoDialogService } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';
import { PoPageAction, PoPageFilter } from '@po-ui/ng-components';
import { PoPageListComponent } from '@po-ui/ng-components';

import { ListTaskService } from './list-task.service';
import { DeleteTaskComponent } from '../delete-task/delete-task.component';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css'],
  providers: [ListTaskService, TaskService],
})
export class ListTaskComponent implements OnInit, OnChanges {
  readonly serviceTaskApi = 'http://localhost:3002/tasks';
  @ViewChild('advancedFilterModal', { static: true })
  advancedFilterModal: PoModalComponent;
  @ViewChild('poPageList', { static: true }) poPageList: PoPageListComponent;

  detail: any;
  disclaimerGroup;
  task: Array<object>;
  taskColumns: Array<PoTableColumn>;
  taskFiltered: Array<object>;
  category: Array<string> = [];
  categoryOptions: Array<PoMultiselectOption>;
  labelFilter: string = '';
  status: Array<string> = [];
  statusOptions: Array<PoCheckboxGroupOption>;

  listTasks: Task[] = [];
  @Input() detailTask: Task = {
    id: 0,
    title: '',
    description: '',
    category: '',
    dateDone: new Date(),
    dateLimit: new Date(),
    status: 1,
  };

  public readonly actions: Array<PoPageAction> = [
    {
      label: 'Adicionar',
      action: this.createTask.bind(this),
    },
  ];

  public readonly taskActions: Array<PoPageAction> = [
    {
      label: 'Excluir',
      action: this.openModalDelete.bind(this),
      disabled: this.isDone.bind(this),
      icon: 'po-icon-delete',
    },
    {
      label: 'Alterar',
      action: this.doneTask.bind(this),
      disabled: this.isDone.bind(this),
      icon: 'po-icon-delete',
    },
    {
      label: 'Conluir',
      action: this.doneTask.bind(this),
      disabled: this.isDone.bind(this),
      icon: 'po-icon-delete',
    },
  ];

  openModalDelete(item: any) {
    this.router.navigate([`/task/deleteTask/${item.id}`]);
  }

  public readonly advancedFilterPrimaryAction: PoModalAction = {
    action: () => {
      this.poPageList.clearInputSearch();
      this.advancedFilterModal.close();
      const filters = [...this.category, ...this.status];
      this.filterAction(filters);
    },
    label: 'Apply filters',
  };

  public readonly filterSettings: PoPageFilter = {
    action: this.filterAction.bind(this),
    advancedAction: this.advancedFilterActionModal.bind(this),
    placeholder: 'Search',
  };

  private disclaimers: Array<any> = [];

  constructor(
    private listTaskService: ListTaskService,
    private taskService: TaskService,
    private poNotification: PoNotificationService,
    private poDialog: PoDialogService,
    private router: Router
  ) {}

  ngOnChanges(): void {
    this.loadTasks();
  }
  ngOnInit(): void {
    this.disclaimerGroup = {
      title: 'Filters',
      disclaimers: [],
      change: this.onChangeDisclaimer.bind(this),
      remove: this.onClearDisclaimer.bind(this),
    };

    this.loadTasks();

    this.taskColumns = this.listTaskService.getColumns();
    this.categoryOptions = this.listTaskService.getCategories();
    this.statusOptions = this.listTaskService.getTaskStatus();

    this.taskFiltered = [...this.listTasks];
  }

  loadTasks(): void {
    this.listTasks = [];
    this.taskService.list().subscribe((listTask) => {
      this.listTasks = listTask;
    });
  }

  advancedFilterActionModal() {
    this.advancedFilterModal.open();
  }

  disableHireButton() {
    return !this.task.find((candidate) => candidate['$selected']);
  }

  filter() {
    const filters = this.disclaimers.map((disclaimer) => disclaimer.value);
    filters.length ? this.taskFilter(filters) : this.resetFilterTask();
  }

  filterAction(labelFilter: string | Array<string>) {
    const filter =
      typeof labelFilter === 'string' ? [labelFilter] : [...labelFilter];
    this.populateDisclaimers(filter);
    this.filter();
  }

  doneTask() {
    const selectedCandidate = this.task.find(
      (candidate) => candidate['$selected']
    );
    if (selectedCandidate) {
      switch (selectedCandidate['hireStatus']) {
        case 'progress':
          selectedCandidate['hireStatus'] = 'hired';
          this.poNotification.success('Hired candidate!');
          break;

        case 'hired':
          this.poNotification.warning('This candidate has already been hired.');
          break;

        case 'canceled':
          this.poNotification.error(
            'This candidate has already been disqualified.'
          );
          break;
      }
    }
  }

  createTask() {
    this.router.navigate(['/createTask']);
  }

  taskFilter(filters) {
    this.taskFiltered = this.task.filter((item) =>
      Object.keys(item).some(
        (key) =>
          !(item[key] instanceof Object) &&
          this.includeFilter(item[key], filters)
      )
    );
  }

  includeFilter(item, filters) {
    return filters.some((filter) =>
      String(item).toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  }

  onChangeDisclaimer(disclaimers) {
    this.disclaimers = disclaimers;
    this.filter();
  }

  onClearDisclaimer(disclaimers) {
    if (disclaimers.removedDisclaimer.property === 'search') {
      this.poPageList.clearInputSearch();
    }
    this.disclaimers = [];
    this.filter();
  }

  populateDisclaimers(filters: Array<any>) {
    const property = filters.length > 1 ? 'advanced' : 'search';
    this.disclaimers = filters.map((value) => ({ value, property }));

    if (this.disclaimers && this.disclaimers.length > 0) {
      this.disclaimerGroup.disclaimers = [...this.disclaimers];
    } else {
      this.disclaimerGroup.disclaimers = [];
    }
  }

  resetFilterTask() {
    this.taskFiltered = [...this.task];
    this.status = [];
    this.category = [];
  }

  private isDone(task: Task) {
    // this.detailedUser = task;
    return false;
  }

  cancel() {
    this.router.navigate(['/listTask']);
  }
}
