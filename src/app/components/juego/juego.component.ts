import { Component, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataAnimales } from '../../data/mock-data';
import { SpeechService } from '../../services/speech.service';

@Component({
	selector: 'app-juego',
	templateUrl: './juego.component.html',
	styleUrls: ['./juego.component.styl']
})
export class JuegoComponent implements OnInit, OnDestroy  {
	num: number;
	adivino: string;
	animalAdivinar: any;
	private sub: any;
	private intento: number;
	public animales: any;
	animalesDisponibles: any;

	constructor(private route: ActivatedRoute, private hablador: SpeechService, private cd: ChangeDetectorRef) {}

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
		this.adivino = 'ND';
		this.animalesDisponibles = this.animales.filter(function(animal) { return !animal.adivinado; });
		const numAnimal = this.getRndInteger(0, this.animalesDisponibles.length);
		this.animalAdivinar = this.animalesDisponibles[numAnimal];
		const sonido = new Audio(this.animalAdivinar.audioUrl);
		sonido.play();
		setTimeout(function(){
			sonido.pause();
		}, 3000);
	}

	seleccionarAnimal(nombre) {
		if (this.animalAdivinar.nombre === nombre) {
			this.adivino = 'SI';
			this.animales.filter(function(animal) { return animal.nombre === nombre; })[0].adivinado = true;
		} else {
			this.adivino = 'NO';
		}
		this.cd.detectChanges();
	}

	siguiente() {
		this.intento = +1;
		this.sonidoAnimal();
	}

	private getRndInteger(min, max) {
		return Math.floor(Math.random() * (max - min) ) + min;
	}
}
