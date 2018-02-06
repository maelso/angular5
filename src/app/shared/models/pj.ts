import { Contato } from './contato';
import { Endereco } from './endereco';

export class PJ {
	cnpj: string;
	razao_social: string;
	nome_fantasia: string;
	inscricao_estadual: string;
	contato: Contato;
	endereco: Endereco;

	constructor(){
		this.cnpj = null;
		this.razao_social = null;
		this.nome_fantasia = null;
		this.inscricao_estadual = null;
		this.contato = null;
		this.endereco = null;
	}

	public getApiPostData(): any {

		let data = {
			"cnpj": this.cnpj,
			"razao_social": this.razao_social,
			"nome_fantasia": this.nome_fantasia,
			"inscricao_estadual": this.inscricao_estadual,
			"contato": {},
			"endereco": {}
		}
		return data;
	}
}
