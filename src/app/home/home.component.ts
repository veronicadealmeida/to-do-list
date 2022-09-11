import { Component, ViewChild } from '@angular/core';

import { PoModalComponent, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @ViewChild('detailsModal', { static: true })
  detailsModalElement: PoModalComponent;

  paymentLink: string = 'https://www.google.com.br/search?q=days+to+payment';
  itemsDetails: Array<any>;
  titleDetailsModal: string;
  typeChart: string = 'line';

  public readonly columnsDetails: Array<PoTableColumn> = [
    { property: 'title', label: 'Título', type: 'string' },
    { property: 'category', label: 'Categoria', type: 'string' },
    { property: 'dataLimit', label: 'Data Limite', type: 'date' },
    { property: 'dataDone', label: 'Data de Conclusão', type: 'date' },
  ];

  public readonly itemsPendentDetails: Array<any> = [
    {
      title: 'TAREFA 001',
      category: 'Categoria 1',
      dataLimit: '03-05-2018',
      dataDone: '',
    },
    {
      title: 'TAREFA 002',
      category: 'Categoria 1',
      dataLimit: '03-05-2018',
      dataDone: '',
    },
    {
      title: 'TAREFA 003',
      category: 'Categoria 1',
      dataLimit: '02-05-2018',
      dataDone: '',
    },
    {
      title: 'TAREFA 004',
      category: 'Categoria 1',
      dataLimit: '02-05-2018',
      dataDone: '',
    },
    {
      title: 'TAREFA 005',
      category: 'Categoria 1',
      dataLimit: '12-05-2017',
      dataDone: '',
    },
  ];

  public readonly itemsDoneDetails: Array<any> = [
    {
      title: 'TAREFA 001',
      category: 'Categoria 1',
      dataLimit: '03-05-2018',
      dataDone: '',
    },
    {
      title: 'TAREFA 002',
      category: 'Categoria 1',
      dataLimit: '03-05-2018',
      dataDone: '',
    },
    {
      title: 'TAREFA 003',
      category: 'Categoria 1',
      dataLimit: '02-05-2018',
      dataDone: '',
    },
    {
      title: 'TAREFA 004',
      category: 'Categoria 1',
      dataLimit: '02-05-2018',
      dataDone: '',
    },
  ];

  daysPayment() {
    window.open(this.paymentLink, '_blank');
  }

  openModal(type) {
    switch (type) {
      case 'pendent':
        this.titleDetailsModal = 'Tarefas Pendentes - Detalhes';
        this.itemsDetails = this.itemsPendentDetails;
        this.detailsModalElement.open();
        break;
      case 'done':
        this.titleDetailsModal = 'Tarefas Concluídas - Detalhes';
        this.itemsDetails = this.itemsDoneDetails;
        this.detailsModalElement.open();
        break;
    }
  }
}
