import { Injectable } from '@angular/core';

import { PoTableColumn } from '@po-ui/ng-components';

@Injectable()
export class TaskViewService {
  getColumns(): Array<PoTableColumn> {
    return [
      {
        property: 'taskStatus',
        label: 'Status',
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
      { property: 'title', label: 'Título', type: 'string' },
      { property: 'dataLimit', label: 'Data Limite', type: 'date' },
      { property: 'dataDone', label: 'Data Conclusão', type: 'date' },
      {
        property: 'category',
        label: 'Categoria',
        type: 'string',
      },
    ];
  }

  getTaskStatus() {
    return [
      { label: 'Concluída', value: 'Concluída', type: 'string' },
      { value: 'Pendente', label: 'Pendente', type: 'string' },
      { value: 'Cancelada', label: 'Cancelada', type: 'string' },
    ];
  }

  getItems() {
    return [
      {
        taskStatus: 'Concluída',
        title: 'Tarefa 001',
        dataLimit: '10-12-2022',
        dataDone: '10-12-2022',
        category: 'Trabalho',
      },
      {
        taskStatus: 'Concluída',
        title: 'Tarefa 002',
        dataLimit: '10-13-2021',
        dataDone: '10-12-2021',
        category: 'Trabalho',
      },
      {
        taskStatus: 'Pendente',
        title: 'Tarefa 003',
        dataLimit: '10-13-2021',
        dataDone: '',
        category: 'Pessoal',
      },
      {
        taskStatus: 'Pendente',
        title: 'Tarefa 004',
        dataLimit: '09-13-2022',
        dataDone: '',
        category: 'Estudo',
      },
      {
        taskStatus: 'Cancelada',
        title: 'Tarefa 005',
        dataLimit: '09-13-2022',
        dataDone: '',
        category: 'Estudo',
      },
      {
        taskStatus: 'Concluída',
        title: 'Tarefa 006',
        dataLimit: '10-12-2022',
        dataDone: '10-12-2022',
        category: 'Trabalho',
      },
      {
        taskStatus: 'Concluída',
        title: 'Tarefa 007',
        dataLimit: '10-13-2021',
        dataDone: '10-12-2021',
        category: 'Trabalho',
      },
      {
        taskStatus: 'Pendente',
        title: 'Tarefa 008',
        dataLimit: '10-13-2021',
        dataDone: '',
        category: 'Pessoal',
      },
      {
        taskStatus: 'Pendente',
        title: 'Tarefa 009',
        dataLimit: '09-13-2022',
        dataDone: '',
        category: 'Estudo',
      },
      {
        taskStatus: 'Cancelada',
        title: 'Tarefa 010',
        dataLimit: '09-13-2022',
        dataDone: '',
        category: 'Estudo',
      },
      {
        taskStatus: 'Concluída',
        title: 'Tarefa 011',
        dataLimit: '10-12-2022',
        dataDone: '10-12-2022',
        category: 'Trabalho',
      },
      {
        taskStatus: 'Concluída',
        title: 'Tarefa 012',
        dataLimit: '10-13-2021',
        dataDone: '10-12-2021',
        category: 'Trabalho',
      },
      {
        taskStatus: 'Pendente',
        title: 'Tarefa 013',
        dataLimit: '10-13-2021',
        dataDone: '',
        category: 'Pessoal',
      },
      {
        taskStatus: 'Pendente',
        title: 'Tarefa 014',
        dataLimit: '09-13-2022',
        dataDone: '',
        category: 'Estudo',
      },
      {
        taskStatus: 'Cancelada',
        title: 'Tarefa 015',
        dataLimit: '09-13-2022',
        dataDone: '',
        category: 'Estudo',
      },
      {
        taskStatus: 'Concluída',
        title: 'Tarefa 016',
        dataLimit: '10-12-2022',
        dataDone: '10-12-2022',
        category: 'Trabalho',
      },
      {
        taskStatus: 'Concluída',
        title: 'Tarefa 017',
        dataLimit: '10-13-2021',
        dataDone: '10-12-2021',
        category: 'Trabalho',
      },
      {
        taskStatus: 'Pendente',
        title: 'Tarefa 018',
        dataLimit: '10-13-2021',
        dataDone: '',
        category: 'Pessoal',
      },
      {
        taskStatus: 'Pendente',
        title: 'Tarefa 019',
        dataLimit: '09-13-2022',
        dataDone: '',
        category: 'Estudo',
      },
      {
        taskStatus: 'Cancelada',
        title: 'Tarefa 020',
        dataLimit: '09-13-2022',
        dataDone: '',
        category: 'Estudo',
      },
      {
        taskStatus: 'Concluída',
        title: 'Tarefa 021',
        dataLimit: '10-12-2022',
        dataDone: '10-12-2022',
        category: 'Trabalho',
      },
      {
        taskStatus: 'Concluída',
        title: 'Tarefa 022',
        dataLimit: '10-13-2021',
        dataDone: '10-12-2021',
        category: 'Trabalho',
      },
      {
        taskStatus: 'Pendente',
        title: 'Tarefa 023',
        dataLimit: '10-13-2021',
        dataDone: '',
        category: 'Pessoal',
      },
      {
        taskStatus: 'Pendente',
        title: 'Tarefa 024',
        dataLimit: '09-13-2022',
        dataDone: '',
        category: 'Estudo',
      },
      {
        taskStatus: 'Cancelada',
        title: 'Tarefa 025',
        dataLimit: '09-13-2022',
        dataDone: '',
        category: 'Estudo',
      },
    ];
  }

  getStatus() {
    return [
      { value: 'Concluída', label: 'Concluídas', type: 'string', length: 50 },
      { value: 'Pendente', label: 'Pendentes', type: 'string', length: 50 },
      { value: 'Cancelada', label: 'Canceladas', type: 'string', length: 50 },
    ];
  }

  getCategory() {
    return [
      { value: 'Pessoal', label: 'Pessoal', type: 'string' },
      { value: 'Trabalho', label: 'Trabalho', type: 'string' },
      { value: 'Estudo', label: 'Estudo', type: 'string' },
    ];
  }
}
