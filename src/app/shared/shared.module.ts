import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnderecoService } from './services/endereco.service';
import { EstadosService } from './services/estados.service';
import { BlockUIModule } from 'ng-block-ui';

import {MatIconModule, MatListModule, MatInputModule, MatFormFieldModule,
  MatTabsModule, MatSlideToggleModule, MatButtonModule,
  MatMenuModule, MatToolbarModule, MatCardModule,
  MatAutocompleteModule,MatSelectModule}  from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    BlockUIModule
  ],
  exports:[
    MatIconModule, MatListModule, MatInputModule, MatFormFieldModule,
    MatTabsModule, MatSlideToggleModule, MatButtonModule,
    MatMenuModule, MatToolbarModule, MatCardModule,MatSelectModule,
    MatAutocompleteModule,
    CommonModule, FormsModule, ReactiveFormsModule,
    BlockUIModule
  ],
  providers: [ EstadosService, EnderecoService ],
  declarations: []
})
export class SharedModule { }
