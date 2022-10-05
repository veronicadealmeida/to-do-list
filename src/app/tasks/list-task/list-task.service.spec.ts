/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListTaskService } from './list-task.service';

describe('Service: ListTask', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListTaskService]
    });
  });

  it('should ...', inject([ListTaskService], (service: ListTaskService) => {
    expect(service).toBeTruthy();
  }));
});
