import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { SharedModule} from '../shared/shared.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListarComponent } from './listar/listar.component';
import { ClienteRoutingModule }  from './cliente.routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ClienteRoutingModule
  ],
  declarations: [
  	CadastroComponent,
  	ListarComponent
  ]
})
export class ClienteModule { }
