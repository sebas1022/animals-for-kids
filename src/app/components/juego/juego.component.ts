import { Component, OnInit, OnDestroy, ChangeDetectorRef, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DataAnimales } from '../../data/mock-data';
import { SpeechService } from '../../services/speech.service';

@Component({
	selector: 'app-juego',
	templateUrl: './juego.component.html',
	styleUrls: ['./juego.component.styl']
})
export class JuegoComponent implements OnInit, OnDestroy  {
	@ViewChild('Timer') timer;
	num: number;
	adivino: string;
	animalAdivinar: any;
	private sub: any;
	private intento: number;
	public animales: any;
	animalesDisponibles: any;

	constructor(private route: ActivatedRoute, private hablador: SpeechService, private cd: ChangeDetectorRef, private router: Router) {}

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
		this.contador();
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}

	sonidoAnimal() {
		this.adivino = 'ND';
		this.animalesDisponibles = this.animales.filter(function(animal) { return !animal.adivinado; });
		if (this.animalesDisponibles.length > 0) {
			const numAnimal = this.getRndInteger(0, this.animalesDisponibles.length);
			this.animalAdivinar = this.animalesDisponibles[numAnimal];
			const sonido = new Audio(this.animalAdivinar.audioUrl);
			sonido.play();
			setTimeout(function(){
				sonido.pause();
			}, 3000);
		} else {
			this.finalJuego();
		}
	}

	seleccionarAnimal(nombre) {
		if (this.animalAdivinar.nombre === nombre) {
			this.adivino = 'SI';
			this.hablador.habla('MUY BIEN PERRITO');
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

	repetir() {
		this.adivino = 'ND';
		this.cd.detectChanges();
		const sonido = new Audio(this.animalAdivinar.audioUrl);
		sonido.play();
		setTimeout(function(){
			sonido.pause();
		}, 3000);
	}

	finalJuego() {
		this.router.navigate(['/resultado'])
	}

	contador(): void {
		const tiempoActual = this.timer.nativeElement.innerHTML;
		const timeArray = tiempoActual.split(/[:]+/);
		let m = timeArray[0];
		let s: any = this.checkSecond((timeArray[1] - 1));

		if (s === 59) { m = m - 1; }
		if (m < 0) { this.finalJuego() }
		if (s < 10 && s >= 0) {s = '0' + s}; // add zero in front of numbers < 10
		this.timer.nativeElement.innerHTML = m + ':' + s;
		setTimeout(() => {
			this.contador()
		}, 1000);
	}

	checkSecond(sec) {
		if (sec < 0) {sec = '59'};
		return parseInt(sec, 0);
	}
	private getRndInteger(min, max) {
		return Math.floor(Math.random() * (max - min) ) + min;
	}
}
