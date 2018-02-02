import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/Rx';

@Injectable()
export class EnderecoService {

  constructor(private http: Http) { }

  buscaEndereco(cep: string){
  	return this.http.get(`//viacep.com.br/ws/${cep}/json`)
  		.map(dados => dados.json());
  }
}
