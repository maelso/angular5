import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { TdMediaService } from '@covalent/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
    route: '/cadastro',
    icon: 'add',
  }
  ];

  constructor(public media: TdMediaService,
              private _iconRegistry: MatIconRegistry,
              private _domSanitizer: DomSanitizer) {
  }


}
