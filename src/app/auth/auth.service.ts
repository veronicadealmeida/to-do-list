import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Auth } from './auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly API = 'http://localhost:3002/auth';

  constructor(private htttp: HttpClient) {}

  list(): Observable<Auth[]> {
    console.log('list');
    return this.htttp.get<Auth[]>(this.API);
  }
}
