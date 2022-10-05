import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, tap } from 'rxjs';
import { Task } from './task';
import { Tasks } from './tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly API = 'http://localhost:3002/tasks';

  constructor(private http: HttpClient) {}

  list(): Observable<Task[]> {
    return this.http.get<Task[]>(this.API).pipe(tap(console.log));
  }

  create(task: Task): Observable<Task> {
    return this.http.post<Task>(this.API, task);
  }

  update(task: Task): Observable<Task> {
    const url = `${this.API}/${task.id}`;
    return this.http.put<Task>(url, task);
  }

  delete(id: number): Observable<Task> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Task>(url);
  }

  getById(id: number): Observable<Task> {
    const url = `${this.API}/${id}`;
    return this.http.get<Task>(url);
  }
}
