import { Contato } from './contato';
import { Endereco } from './endereco';

export class PF {
	nome: string;
	data_nascimento: string;
	cpf: string;
	rg: string;
	contato: Contato;
	endereco: Endereco;

	constructor(){
		this.nome = null;
		this.data_nascimento = null;
		this.cpf = null;
		this.rg = null;
		this.contato = null;
		this.endereco = null;
	}

	public getApiPostData(): any {

		let data = {
			"nome": this.nome,
			"data_nascimento": this.data_nascimento,
			"cpf": this.cpf,
			"rg": this.rg,
			"contato": {},
			"endereco": {}
		}
		return data;
	}
}

