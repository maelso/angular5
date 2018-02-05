import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { LoginComponent } from './auth/login/login.component';
import { CadastroComponent } from './cliente/cadastro/cadastro.component';
import { AppComponent } from './app.component';

const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    // { path: 'cliente', loadChildren: './cliente/cliente.module#ClienteModule' },
    // { path: 'cliente/cadastro', component: CadastroComponent },
    // { path: '', component: AppComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})

export class AppRouting {}