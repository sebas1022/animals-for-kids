
import { Injectable } from '@angular/core';

import { SWindow } from 'app/interfaces/swindow';

@Injectable()
export class SpeechService {
	private msg;
	private speach;

	constructor() {
		const {SpeechSynthesisUtterance}: SWindow = <SWindow>window;
		this.msg = new SpeechSynthesisUtterance();
		this.msg.volumen = 1;
		this.msg.rate = 1;
		this.msg.voiceURI = 'native';
		this.msg.pitch = 0.8;
		this.msg.lang = 'es-CO';
		this.speach = window.speechSynthesis;
	}

	habla(txt): void {
		this.msg.voice = this.speach.getVoices().filter(function(voice) { return voice.name === 'Google español'; })[0];
		this.msg.text = txt;
		this.speach.speak(this.msg);
	}
}
