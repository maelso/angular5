import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BlockUIModule } from 'ng-block-ui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { EnderecoService } from './services/endereco.service';
import { EstadosService } from './services/estados.service';
import { PFService } from './services/pf.service';
import { PJService } from './services/pj.service';
import { PF } from './models/pf';
import { PJ } from './models/pj';
import { Contato } from './models/contato';
import { Endereco } from './models/endereco';

import { MatIconModule, MatListModule, MatInputModule, MatFormFieldModule,
  MatTabsModule, MatSlideToggleModule, MatButtonModule,
  MatMenuModule, MatToolbarModule, MatCardModule,
  MatAutocompleteModule, MatSelectModule }  from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    BlockUIModule,
    TextMaskModule

  ],
  exports:[
    MatIconModule, MatListModule, MatInputModule, MatFormFieldModule,
    MatTabsModule, MatSlideToggleModule, MatButtonModule,
    MatMenuModule, MatToolbarModule, MatCardModule, MatSelectModule,
    MatAutocompleteModule,
    CommonModule, FormsModule, ReactiveFormsModule,
    BlockUIModule,
    TextMaskModule,
  ],
  providers: [ EstadosService, EnderecoService, PFService, PJService, PF, PJ, Contato, Endereco, BlockUIModule ],
  declarations: []
})
export class SharedModule { }
