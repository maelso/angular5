import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { SharedModule} from '../shared/shared.module';
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
    SharedModule,
  ],
  declarations: [
  	CadastroComponent
  ]
})
export class ClienteModule { }
