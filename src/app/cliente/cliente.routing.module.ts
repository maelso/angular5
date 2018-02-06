import { NgModule, Component } from '@angular/core';
import { Router, RouterModule} from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListarComponent } from './listar/listar.component';

const clienteRoutes = [
	{path:'cliente/cadastro', component: CadastroComponent},
	{path:'cliente/listar', component: ListarComponent}
];

@NgModule({
	imports: [RouterModule.forChild(clienteRoutes)],
	exports: [RouterModule]
})
export class ClienteRoutingModule{}