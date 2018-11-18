import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { IWindow } from '../../interfaces/iwindow';
import { SpeechService } from '../../services/speech.service';

@Component({
	selector: 'app-inicio-voz',
	templateUrl: './inicio-voz.component.html',
	styleUrls: ['./inicio-voz.component.styl']
})
export class InicioVozComponent implements OnInit {
	recognition;
	textoEscuchado;
	recognizing = false;
	error;
	constructor(private hablador: SpeechService, private cd: ChangeDetectorRef) { }
	ngOnInit() {
		const {webkitSpeechRecognition}: IWindow = <IWindow>window;
		this.recognition = new webkitSpeechRecognition();
		this.recognition.lang = 'es-CO';
		this.recognition.continuous = true;
		this.recognition.interimResults = true;
		this.recognition.onresult = listen => {
			this.reconocer(listen);
		}
	}
	escuchar() {
		if (this.recognizing) {
			this.recognition.stop();
			this.recognizing = false;
		} else {
			this.recognition.start();
			this.recognizing = true;
			this.textoEscuchado = undefined;
		}
	}
	reconocer(listen) {
		for (let i = listen.resultIndex; i < listen.results.length; i++) {
			if (listen.results[i].isFinal) {
				this.textoEscuchado = listen.results[i][0].transcript;
				this.recognizing = false;
			}
		}
		if (!this.recognizing && this.textoEscuchado !== undefined) {
			this.hablador.habla('Hola ' + this.textoEscuchado);
			this.cd.detectChanges();
		}
	}
}
