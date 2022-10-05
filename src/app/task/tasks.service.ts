import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  readonly serviceApi = 'http://localhost:3002/tasks';
}
