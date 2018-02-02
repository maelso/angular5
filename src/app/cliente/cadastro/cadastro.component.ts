import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EstadoBr } from '../../shared/models/estado-br';
import { EnderecoService } from '../../shared/services/endereco.service';
import { EstadosService } from '../../shared/services/estados.service';

@Component({
	selector: 'app-cadastro',
	templateUrl: './cadastro.component.html',
	styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

	public PFForm: FormGroup;
	public PJForm: FormGroup;
	public enderecoForm: FormGroup;

	estados: EstadoBr[];

	cadPF: boolean;
	cadPJ: boolean;

	constructor(private fb: FormBuilder,
				private estadosService: EstadosService,
				private enderecoService: EnderecoService,) {

		this.estadosService.getEstadosBr()
			.subscribe( dados => {
				this.estados = dados;
				console.log("Estados ", this.estados);
		});
	}

	ngOnInit() {

		this.PJForm = this.fb.group({
			cnpj: [null, [Validators.required, Validators.minLength(14), Validators.maxLength(14)]],
			razao_social: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
			nome_fantasia: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
			inscricao_estadual: [null, Validators.required],
			fone: [null, [Validators.required]],
			email: [null, [Validators.required, Validators.email]],
		});

		this.PFForm =  this.fb.group({
			nome: [null, [Validators.required, Validators.name, Validators.minLength(3), Validators.maxLength(40)]],
			data_nascimento: [null, Validators.required],
			cpf: [null, [Validators.required, Validators.minLength(11), Validators.maxLength(11) ]],
			rg: [null, Validators.required],
			fone: [null, Validators.required],
			email: [null, [Validators.required, Validators.email]],
		});

		this.enderecoForm =	this.fb.group({
			cep: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
			logradouro: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
			numero: [null, Validators.required],
			bairro: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
	      	cidade: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
	      	estado: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
		});
	}

	onSubmit(){

	}

	reset(){
		this.PJForm.reset();
	}

}
