import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

import 'rxjs/Rx';

@Injectable()
export class PJService {

	protected apiUrl: string = 'http://0.0.0.0:3000/pj';

  	constructor(private http: Http) {}

  	getAPI() {
        return this.apiUrl;
    }

    getClientes() {
        let url = `${this.getAPI()}`;
        return this.http.get(url)
            .map((res: Response) => {
                return res.json();
            }).catch((error: Response | any) => {
                return Observable.throw(error);
            });
    }

    createPJ(data: any){
        console.log('Dados ', data);
        let url = `${this.getAPI()}`;
        return this.http.post(url, data).map((res: Response) => {
            let results = res.json();
            console.log("results ", results);
            return results;
        }).catch((error: Response | any) => {
            let errorResponse = error.json(),
                errorMessage = (errorResponse.ErrorId && errorResponse.Message) ?
                    'Error ' + errorResponse.ErrorId + ': ' + errorResponse.Message : 'Error connecting to the API. Please try again.';
            alert(errorMessage);window.location.reload(true);
            return Observable.throw(error);
        });
    }

}
