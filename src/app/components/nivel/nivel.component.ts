import { Component, OnInit } from '@angular/core';

import { SpeechService } from '../../services/speech.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-nivel',
	templateUrl: './nivel.component.html',
	styleUrls: ['./nivel.component.styl']
})
export class NivelComponent implements OnInit {

	constructor(private hablador: SpeechService, private router: Router) { }

	ngOnInit() {
		this.hablador.habla('Selecciona la cantidad	de animales que quieres adivinar. 3 , 6 o 9');
	}

	irNivel(num) {
		this.router.navigate(['/juego', num])
	}
}
