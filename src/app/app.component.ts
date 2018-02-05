import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  name = 'Contacts';

  routes: Object[] = [
  {
    title: 'Login',
    route: '/login',
    icon: 'account_circle',
  },
  {
    title: 'Dashboard',
    route: '/dashboard',
    icon: 'dashboard',
  },
  {
    title: 'Cadastro',
    route: '/cliente/cadastro',
    icon: 'add',
  }
  ];

  constructor(private _iconRegistry: MatIconRegistry,
              private _domSanitizer: DomSanitizer) {
  }


}
