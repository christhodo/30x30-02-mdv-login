import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mdv-login';
  links = [
    { path: '/login', icon: 'vpn_key', title: 'Login' },
    { path: '/players', icon: 'view_list', title: 'Players' },
  ];
}
