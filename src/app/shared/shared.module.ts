import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnderecoService } from './services/endereco.service';
import { EstadosService } from './services/estados.service';

import {MatIconModule, MatListModule, MatInputModule, MatFormFieldModule,
  MatTabsModule, MatSlideToggleModule, MatButtonModule,
  MatMenuModule, MatToolbarModule, MatCardModule,
  MatAutocompleteModule,MatSelectModule}  from '@angular/material';
import { CovalentLayoutModule, CovalentMediaModule, CovalentSearchModule,
  CovalentMessageModule, CovalentDialogsModule} from '@covalent/core';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  exports:[
    MatIconModule, MatListModule, MatInputModule, MatFormFieldModule,
    MatTabsModule, MatSlideToggleModule, MatButtonModule,
    MatMenuModule, MatToolbarModule, MatCardModule,MatSelectModule,
    MatAutocompleteModule,
    CovalentLayoutModule, CovalentMediaModule, CovalentSearchModule,
    CovalentMessageModule, CovalentDialogsModule,
    CommonModule, FormsModule, ReactiveFormsModule,
  ],
  providers: [ EstadosService, EnderecoService ],
  declarations: []
})
export class SharedModule { }