import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataAnimales } from '../../data/mock-data';

@Component({
	selector: 'app-juego',
	templateUrl: './juego.component.html',
	styleUrls: ['./juego.component.styl']
})
export class JuegoComponent implements OnInit, OnDestroy  {
	num: number;
	private sub: any;
	private intento: number;
	public animales: any;

	constructor(private route: ActivatedRoute) {}

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			this.num = +params['num']; // (+) converts string 'num' to a number
		});
		this.intento = 0;
		this.animales = DataAnimales.DATA_ANIMALES.animales.sort(function() {
			return .5 - Math.random();
		});
		this.animales = this.animales.splice(0, this.num);
		this.sonidoAnimal();
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}

	sonidoAnimal() {
		console.log(this.animales[this.intento])
	}

	seleccionarAnimal(animal) {
		console.log(animal);
	}
}
