import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Rx';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

import { EstadoBr } from '../../shared/models/estado-br';
import { EnderecoService } from '../../shared/services/endereco.service';
import { EstadosService } from '../../shared/services/estados.service';


@Component({
	selector: 'app-cadastro',
	templateUrl: './cadastro.component.html',
	styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
	@BlockUI() blockUI: NgBlockUI;
	clientForm: FormGroup;
	public estados: EstadoBr[];
	public client_type: string = "";

	constructor(private fb: FormBuilder,
				private estadosService: EstadosService,
				private enderecoService: EnderecoService) {

		this.estadosService.getEstadosBr()
			.subscribe( dados => {
				this.estados = dados;
		});
	}

	print(){
		console.log('Form: ', this.clientForm);
	}

	ngOnInit() {
		this.createForm();
	}

	onSubmit(){

	}

	reset(){
		this.clientForm.reset();
	}

	consultaCEP(){
		this.blockUi(true, "Pesquisando cep...");
		if(this.clientForm.get('endereco.cep').valid){
			let cep = this.clientForm.get('endereco.cep').value;
			this.enderecoService.buscaEndereco(cep).subscribe(dados => {
				this.populaEndereco(dados);
				this.blockUi(false, '');
			},
			err => {
				this.blockUi(false, '');
			});
		} else {
			this.resetaEndereco();
			this.blockUi(false, '');
		}
	}

	resetaEndereco(){
		this.clientForm.patchValue({
			endereco: {
				logradouro: null,
		      	numero: null,
		      	bairro: null,
		      	cidade: null,
		      	estado: null
			}
		});
	}

	populaEndereco(dados){
		this.clientForm.patchValue({
			endereco: {
				logradouro: dados.logradouro,
		      	bairro: dados.bairro,
		      	cidade: dados.localidade,
		      	estado: dados.uf
			}
		});
	}

	blockUi(open: boolean, message: string) {
        if (!open) {
            this.blockUI.stop();
        } else {
            this.blockUI.start(message);
        }
    }

	createForm(){
		this.clientForm = this.fb.group({

			client_type: [null, [Validators.required]],

			pf: this.fb.group({
				nome: [null, [Validators.required, Validators.pattern("[a-zA-Z ]*"), Validators.minLength(3), Validators.maxLength(40)]],
				data_nascimento: [null, [Validators.required]],
				cpf: [null, [Validators.required, Validators.pattern("[0-9]{11}"), Validators.minLength(11), Validators.maxLength(11) ]],
				rg: [null, [Validators.required]],
			}),
			pj: this.fb.group({
				cnpj: [null, [Validators.required, Validators.pattern("[0-9]{14}"), Validators.minLength(14), Validators.maxLength(14)]],
				razao_social: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
				nome_fantasia: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
				inscricao_estadual: [null, [Validators.required]],
			}),
			contato: this.fb.group({
				fone: [null, [Validators.required]],
				email: [null, [Validators.required, Validators.email]]
			}),
			endereco: this.fb.group({
				cep: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
				logradouro: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
				numero: [null, Validators.required],
				bairro: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
		      	cidade: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
		      	estado: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
			})
		});
	}

}
