
import { Injectable } from '@angular/core';

import { SWindow } from 'app/interfaces/swindow';

@Injectable()
export class SpeechService {
	constructor() { }

	habla(txt): void {
		const lang = 'es-ES'
		const voiceIndex = 51;

		const speak = async text => {
			if (!speechSynthesis) {
				return
			}
			const {SpeechSynthesisUtterance}: SWindow = <SWindow>window;
			const message = new SpeechSynthesisUtterance(text)
			message.voice = await chooseVoice()
			speechSynthesis.speak(message)
		}

		const getVoices = () => {
			return new Promise(resolve => {
				let voices = speechSynthesis.getVoices()
				if (voices.length) {
					resolve(voices)
					return
				}
				speechSynthesis.onvoiceschanged = () => {
					voices = speechSynthesis.getVoices()
					resolve(voices)
				}
			})
		}

		const chooseVoice = async () => {
			const voices = (await getVoices())

			return new Promise(resolve => {
				resolve(voices[voiceIndex])
			})
		}

		speak(txt);
	}
}
