import { Injectable } from '@angular/core';

import { PoTableColumn } from '@po-ui/ng-components';

@Injectable()
export class TaskService {
  getColumns(): Array<PoTableColumn> {
    return [
      {
        property: 'taskStatus',
        label: 'Status',
        type: 'subtitle',
        subtitles: [
          { value: 'done', color: 'success', label: 'Concluída', content: '' },
          {
            value: 'progress',
            color: 'warning',
            label: 'Pendente',
            content: '',
          },
          {
            value: 'canceled',
            color: 'danger',
            label: 'Cancelada',
            content: '',
          },
        ],
      },
      { property: 'idCard', label: 'Identity card', type: 'string' },
      { property: 'name', label: 'Name' },
      { property: 'age', label: 'Age' },
      { property: 'city', label: 'City' },
      { property: 'jobDescription', label: 'Job description', type: 'string' },
    ];
  }

  getTaskStatus() {
    return [
      { value: 'done', label: 'Concuída' },
      { value: 'progress', label: 'Pendente' },
      { value: 'canceled', label: 'Cancelada' },
    ];
  }

  getItems() {
    return [
      {
        hireStatus: 'hired',
        name: 'James Johnson',
        city: 'Ontario',
        age: 24,
        idCard: 'AB34lxi90',
        jobDescription: 'Systems Analyst',
      },
      {
        hireStatus: 'progress',
        name: 'Brian Brown',
        city: 'Buffalo',
        age: 23,
        idCard: 'HG56lds54',
        jobDescription: 'Trainee',
      },
      {
        hireStatus: 'canceled',
        name: 'Mary Davis',
        city: 'Albany',
        age: 31,
        idCard: 'DF23cfr65',
        jobDescription: 'Programmer',
      },
      {
        hireStatus: 'hired',
        name: 'Margaret Garcia',
        city: 'New York',
        age: 29,
        idCard: 'GF45fgh34',
        jobDescription: 'Web developer',
      },
      {
        hireStatus: 'hired',
        name: 'Emma Hall',
        city: 'Ontario',
        age: 34,
        idCard: 'RF76jut21',
        jobDescription: 'Recruiter',
      },
      {
        hireStatus: 'progress',
        name: 'Lucas Clark',
        city: 'Utica',
        age: 32,
        idCard: 'HY21kgu65',
        jobDescription: 'Consultant',
      },
      {
        hireStatus: 'hired',
        name: 'Ella Scott',
        city: 'Ontario',
        age: 24,
        idCard: 'UL78flg68',
        jobDescription: 'DBA',
      },
      {
        hireStatus: 'progress',
        name: 'Chloe Walker',
        city: 'Albany',
        age: 29,
        idCard: 'JH12oli98',
        jobDescription: 'Programmer',
      },
    ];
  }

  getCategory() {
    return [
      { value: 'Concluída', label: 'done' },
      { value: 'Pendente', label: 'progress' },
      { value: 'Cancelada', label: 'canceled' },
    ];
  }
}
