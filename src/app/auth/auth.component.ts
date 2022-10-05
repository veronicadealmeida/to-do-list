import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PoNotificationService } from '@po-ui/ng-components';
import { PoPageLogin } from '@po-ui/ng-templates';
import { Auth } from './auth';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  param = {};
  user: Auth = {
    user: '',
    password: '',
    rememberUser: false,
    token: '',
  };

  constructor(
    private router: Router,
    private authService: AuthService,
    public poNotification: PoNotificationService
  ) {}

  listUsers: Auth[] = [];

  submitAuth(formData: PoPageLogin) {
    this.user.user = formData['login'];
    this.user.password = formData['password'];
    this.user.rememberUser = formData['rememberUser'];

    this.authService.list().subscribe((listUsers) => {
      this.listUsers = listUsers;

      if (
        this.listUsers.find((auth) => {
          return (
            auth.user === this.user.user && auth.password === this.user.password
          );
        })
      ) {
        this.user.token = this.user + '|OK';
        console.log('OKKKKKK');
        this.router.navigate(['/listTask']);
      } else {
        this.poNotification.error('Usuário ou senha inválidos!');
        return false;
      }
    });
  }
}
