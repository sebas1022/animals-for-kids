import { Component, OnInit } from '@angular/core';

import { ResultadosService } from '../../services/resultados.service';

@Component({
	selector: 'app-resultados',
	templateUrl: './resultados.component.html',
	styleUrls: ['./resultados.component.styl']
})
export class ResultadosComponent implements OnInit {
	animales: any;
	constructor(private resultados: ResultadosService) { }

	ngOnInit() {
		this.animales = this.resultados.getResultado();
		console.log(this.animales);
	}

}
