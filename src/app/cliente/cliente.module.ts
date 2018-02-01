import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [
  {
    path: '', component: CadastroComponent,
    children: [
      {
        path: '', redirectTo: 'list', pathMatch: 'full'
      },
      {
        path: 'cadastro', component: CadastroComponent
      }
    ]
  }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
  	CadastroComponent
  ]
})
export class ClienteModule { }
