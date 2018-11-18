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
	animalAdivinar: string;
	adivino: string;
	private sub: any;
	private intento: number;
	public animales: any;

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
		const sonido = new Audio(this.animales[this.intento].audioUrl);
		sonido.play();
		this.animalAdivinar = this.animales[this.intento].nombre;
		setTimeout(function(){
			sonido.pause();
		}, 3000);
	}

	seleccionarAnimal(animal) {
		if (this.animalAdivinar === animal) {
			this.adivino = 'SI';
		} else {
			this.adivino = 'NO';
		}
		console.log(this.adivino);
		this.cd.detectChanges();
	}
}
