import { NgModule, Component } from '@angular/core';
import { Router, RouterModule} from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';

const clienteRoutes = [
	{path:'cliente/cadastro', component: CadastroComponent},
];

@NgModule({
	imports: [RouterModule.forChild(clienteRoutes)],
	exports: [RouterModule]
})
export class ClienteRoutingModule{}