import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { LoginComponent } from './auth/login/login.component';
import { AppComponent } from './app.component';

const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    // { path: '', component: AppComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})

export class AppRouting {}