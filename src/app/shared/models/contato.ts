export class Contato {
	fone: string;
	email: string;

	constructor(){
		this.fone = null;
		this.email = null;
	}

	public getApiPostData(): any {

		let data = {
			"fone": this.fone,
			"email": this.email
		}
		return data;
	}
}
