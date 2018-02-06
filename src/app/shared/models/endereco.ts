export class Endereco {
	cep: string;
	logradouro: string;
	numero: string;
	bairro: string;
	cidade: string;
	estado: string;

	constructor(){}

	public getApiPostData(): any {

		let data = {
			"cep": this.cep,
			"logradouro": this.logradouro,
			"numero": this.numero,
			"bairro": this.bairro,
			"cidade": this.cidade,
			"estado": this.estado
		}
		return data;
	}
}
