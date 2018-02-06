import { Component, OnInit } from '@angular/core';
import { PFService } from '../../shared/services/pf.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

	pfList;
	pjList;

  constructor(private pfService: PFService) { }

  ngOnInit() {

  	this.pfService.getClientes().subscribe(
            data => {
            	this.pfList = data;
            	console.log("Pfs ", data);
            }
        );
  }

}
