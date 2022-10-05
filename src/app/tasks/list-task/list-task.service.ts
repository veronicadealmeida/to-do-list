import { Injectable } from '@angular/core';

import { PoTableColumn } from '@po-ui/ng-components';

@Injectable()
export class ListTaskService {
  getColumns(): Array<PoTableColumn> {
    return [
      {
        property: 'status',
        label: 'Status',
        type: 'subtitle',
        subtitles: [
          { value: 1, color: 'success', label: 'Concluída', content: '' },
          {
            value: 2,
            color: 'warning',
            label: 'Pendente',
            content: '',
          },
          {
            value: 3,
            color: 'danger',
            label: 'Atrasada',
            content: '',
          },
        ],
      },
      { property: 'title', label: 'Título', type: 'string' },
      { property: 'description', label: 'Descrição', type: 'string' },
      { property: 'category', label: 'Categoria', type: 'string' },
      { property: 'dateLimit', label: 'Data Limite', type: 'date' },
      { property: 'dateDone', label: 'Conclusão', type: 'date' },
      { property: 'id', label: 'id', type: 'number', visible: false },
    ];
  }

  getTaskStatus() {
    return [
      { value: '', label: 'Pendente' },
      { value: '', label: 'Concluída' },
    ];
  }

  getCategories() {
    return [
      { value: 'Pessoal', label: 'Pessoal' },
      { value: 'Trabalho', label: 'Trabalho' },
      { value: 'Estudo', label: 'Estudo' },
      { value: 'Outra', label: 'Outra' },
    ];
  }
}
