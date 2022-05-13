import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../common/models/auth.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userInfo: UserInfo = {
    email: '',
    password: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
