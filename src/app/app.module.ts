import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Http, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { ClienteModule } from './cliente/cliente.module';
import { SharedModule } from './shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

import { MatIconModule, MatListModule, MatInputModule, MatFormFieldModule,
  MatTabsModule, MatSlideToggleModule, MatButtonModule, MatRadioModule,
  MatMenuModule, MatToolbarModule, MatCardModule, MatSidenavModule,
  MatAutocompleteModule, MatSelectModule, MatGridListModule }  from '@angular/material';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsComponent } from './dashboard/charts/charts.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    DashboardComponent,
    ChartsComponent,
  ],
  entryComponents: [
    LoginComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRouting,
    HttpModule,
    ClienteModule,
    SharedModule,

    /** Material Modules */
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatRadioModule,
    MatGridListModule,
    MatAutocompleteModule,
  ],
  exports:[
    MatSidenavModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatRadioModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
