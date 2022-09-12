import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { PoBreadcrumb } from '@po-ui/ng-components';
import {
  PoCheckboxGroupOption,
  PoMultiselectOption,
} from '@po-ui/ng-components';

import { PoDialogService } from '@po-ui/ng-components';
import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';
import { PoPageAction, PoPageFilter } from '@po-ui/ng-components';
import { PoTableColumn } from '@po-ui/ng-components';
import { PoPageListComponent } from '@po-ui/ng-components';

import { TaskViewService } from './task-view.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css'],
  providers: [TaskViewService],
})
export class TaskViewComponent implements OnInit {
  @ViewChild('advancedFilterModal', { static: true })
  advancedFilterModal: PoModalComponent;
  @ViewChild('poPageList', { static: true }) poPageList: PoPageListComponent;

  disclaimerGroup;
  doneProcesses: Array<object>;
  doneProcessesColumns: Array<PoTableColumn>;
  doneProcessesFiltered: Array<object>;
  taskDescription: Array<string> = [];
  taskDescriptionOptions: Array<PoCheckboxGroupOption>;
  categoryDescription: Array<string> = [];
  categoryDescriptionOptions: Array<PoCheckboxGroupOption>;
  labelFilter: string = '';
  status: Array<string> = [];
  statusOptions: Array<PoCheckboxGroupOption>;

  public readonly actions: Array<PoPageAction> = [
    {
      label: 'Concluir',
      action: this.doneTask.bind(this),
      disabled: this.disableHireButton.bind(this),
    },
    {
      label: 'Adicionar',
      action: this.doneTask.bind(this),
      disabled: this.disableHireButton.bind(this),
    },
    {
      label: 'Alterar',
      action: this.doneTask.bind(this),
      disabled: this.disableHireButton.bind(this),
    },
  ];

  public readonly advancedFilterPrimaryAction: PoModalAction = {
    action: () => {
      this.poPageList.clearInputSearch();
      this.advancedFilterModal.close();
      const filters = [...this.taskDescription, ...this.categoryDescription];
      //   const filters = [...this.taskDescription, ...this.status];
      this.filterAction(filters);
    },
    label: 'Filtrar',
  };

  public readonly filterSettings: PoPageFilter = {
    action: this.filterAction.bind(this),
    advancedAction: this.advancedFilterActionModal.bind(this),
    placeholder: 'Search',
  };

  private disclaimers: any[] = [];

  constructor(
    private taskViewService: TaskViewService,
    private poNotification: PoNotificationService,
    private poDialog: PoDialogService,
    private router: Router
  ) {}

  ngOnInit() {
    this.disclaimerGroup = {
      title: 'Filtros',
      disclaimers: [],
      change: this.onChangeDisclaimer.bind(this),
      remove: this.onClearDisclaimer.bind(this),
    };

    this.doneProcesses = this.taskViewService.getItems();
    this.doneProcessesColumns = this.taskViewService.getColumns();
    this.taskDescriptionOptions = this.taskViewService.getStatus();
    this.categoryDescriptionOptions = this.taskViewService.getCategory();
    this.statusOptions = this.taskViewService.getTaskStatus();

    this.doneProcessesFiltered = [...this.doneProcesses];
  }

  advancedFilterActionModal() {
    this.advancedFilterModal.open();
  }

  disableHireButton() {
    return !this.doneProcesses.find((candidate) => candidate['$selected']);
  }

  filter() {
    const filters = this.disclaimers.map((disclaimer) => disclaimer.value);
    filters.length
      ? this.doneProcessesFilter(filters)
      : this.resetFilterTaskProcess();
  }

  filterAction(labelFilter: string | Array<string>) {
    const filter =
      typeof labelFilter === 'string' ? [labelFilter] : [...labelFilter];
    this.populateDisclaimers(filter);
    this.filter();
  }

  doneTask() {
    const selectedCandidate = this.doneProcesses.find(
      (candidate) => candidate['$selected']
    );
    switch (selectedCandidate!['taskStatus']) {
      case 'Pendente':
        selectedCandidate!['taskStatus'] = 'Concluída';
        this.poNotification.success('Tarefa concluída!');
        break;

      case 'Concluída':
        this.poNotification.warning('Esta tarefa já está concluída.');
        break;

      case 'Cancelada':
        this.poNotification.error('Esta tarefa já está cancelada.');
        break;
    }
  }

  doneProcessesFilter(filters) {
    this.doneProcessesFiltered = this.doneProcesses.filter((item) =>
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

  resetFilterTaskProcess() {
    this.doneProcessesFiltered = [...this.doneProcesses];
    this.status = [];
    this.taskDescription = [];
    this.categoryDescription = [];
  }
}
