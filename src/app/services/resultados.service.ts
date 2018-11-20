import { Injectable } from '@angular/core';

@Injectable()
export class ResultadosService {

	resultados: any;
	constructor() { }

	guardaResultado(result: any) {
		this.resultados = result;
	}

	getResultado() {
		 return this.resultados;
	}
}
