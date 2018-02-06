import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Rx';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

import { EstadoBr } from '../../shared/models/estado-br';
import { EnderecoService } from '../../shared/services/endereco.service';
import { EstadosService } from '../../shared/services/estados.service';
import { PFService } from '../../shared/services/pf.service';
import { PF } from '../../shared/models/pf';
import { PJService } from '../../shared/services/pj.service';
import { PJ } from '../../shared/models/pj';
import { Contato } from '../../shared/models/contato';
import { Endereco } from '../../shared/models/endereco';



@Component({
	selector: 'app-cadastro',
	templateUrl: './cadastro.component.html',
	styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
	@BlockUI() blockUI: NgBlockUI;
	clientForm: FormGroup;
	public estados: EstadoBr[];

	public foneMask = ['(', /[1-9]/, /\d/, ')', ' ',/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
	public dnMask = [/[0-9]/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
	public cpfMask = [/[0-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
	public cnpjMask = [/[0-9]/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
	public cepMask = [/[1-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

	constructor(private fb: FormBuilder,
				private estadosService: EstadosService,
				private enderecoService: EnderecoService,
				private pfService: PFService,
				private pf: PF,
				private pjService: PJService,
				private pj: PJ,
				private contato: Contato,
				private endereco: Endereco) {

		this.estadosService.getEstadosBr()
			.subscribe( dados => {
				this.estados = dados;
				console.log("Estados> ", dados);
		});
	}

	print(){
		console.log('Form: ', this.clientForm);
	}

	ngOnInit() {
		this.createForm();
	}

	getContato(){
		let contato = new Contato();
		contato.email = this.clientForm.get('contato.email').value;
		contato.fone = this.clientForm.get('contato.fone').value;
		return contato;
	}
	getEndereco(){
		let endereco = new Endereco();
		endereco.cep = this.clientForm.get('endereco.cep').value;
		endereco.logradouro = this.clientForm.get('endereco.logradouro').value;
		endereco.numero = this.clientForm.get('endereco.numero').value;
		endereco.bairro = this.clientForm.get('endereco.bairro').value;
		endereco.cidade = this.clientForm.get('endereco.cidade').value;
		endereco.estado = this.clientForm.get('endereco.estado').value;
		return endereco;
	}
	getDadosPF(){
		let pf = new PF();
		pf.nome = this.clientForm.get('pf.nome').value;
		pf.data_nascimento = this.clientForm.get('pf.data_nascimento').value;
		pf.cpf = this.clientForm.get('pf.cpf').value;
		pf.rg = this.clientForm.get('pf.rg').value;
		pf.contato = this.getContato();
		pf.endereco = this.getEndereco();
		return pf;
	}
	getDadosPJ(){
		let pj = new PJ();
		pj.cnpj = this.clientForm.get('pj.cnpj').value;
		pj.nome_fantasia = this.clientForm.get('pj.nome_fantasia').value;
		pj.razao_social = this.clientForm.get('pj.razao_social').value;
		pj.inscricao_estadual = this.clientForm.get('pj.inscricao_estadual').value;
		return pj;
	}

	onSubmit(){
		if (this.clientForm.get('client_type').value == 'PF') {
			if(this.clientForm.controls.pf.valid && this.clientForm.controls.contato.valid && this.clientForm.controls.endereco.valid){
				let pf = this.getDadosPF();
				this.pfService.createPF(pf.getApiPostData()).subscribe(
					res => console.log("ok"),
					err => console.log('err ', err));
			} else{
				this.showErrors(this.clientForm);
			}

		} else if(this.clientForm.get('client_type').value == 'PJ') {
			if(this.clientForm.controls.pj.valid && this.clientForm.controls.contato.valid && this.clientForm.controls.endereco.valid){
				let pj = this.getDadosPJ();
				this.pjService.createPJ(pj.getApiPostData()).subscribe(
					res => console.log("ok"),
					err => console.log('err ', err));
			} else{
				this.showErrors(this.clientForm);
			}
		}
	}

	showErrors(formGroup: FormGroup){
		Object.keys(formGroup.controls).forEach(field => {
			const ctrl = formGroup.get(field);
			ctrl.markAsTouched();
			if (ctrl instanceof FormGroup) {
				this.showErrors(ctrl);
			}
		});
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
				cpf: [null, [Validators.required, Validators.minLength(14), Validators.maxLength(14) ]],
				rg: [null, [Validators.required]],
			}),
			pj: this.fb.group({
				cnpj: [null, [Validators.required, Validators.minLength(18), Validators.maxLength(18)]],
				razao_social: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
				nome_fantasia: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
				inscricao_estadual: [null, [Validators.required]],
			}),
			contato: this.fb.group({
				fone: [null, [Validators.required]],
				email: [null, [Validators.required, Validators.email]]
			}),
			endereco: this.fb.group({
				cep: [null, [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
				logradouro: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
				numero: [null, Validators.required],
				bairro: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
		      	cidade: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
		      	estado: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
			})
		});
	}

}
