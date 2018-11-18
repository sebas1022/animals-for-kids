import { Component, AfterViewInit } from '@angular/core';

import { SpeechService } from '../../services/speech.service';

@Component({
	selector: 'app-nivel',
	templateUrl: './nivel.component.html',
	styleUrls: ['./nivel.component.styl']
})
export class NivelComponent implements AfterViewInit {

	constructor(private hablador: SpeechService) { }

	ngAfterViewInit() {
		// this.hablador.habla('Selecciona cuantos animales vas a adivinar 3 , 6 o 9');
	}
}
