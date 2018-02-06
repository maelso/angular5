import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/Rx';

@Injectable()
export class EstadosService {

  constructor(private http: Http) { }

  getEstadosBr(){
  	return this.http.get('assets/dados/estadosbr.json')
  		.map( (res: Response) => res.json());
  }

  getEstadosBr2(){
  	return this.http.get('assets/dados/estados_cidades.json')
  		.map( (res: Response) => res.json());
  }

}