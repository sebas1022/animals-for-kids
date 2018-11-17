import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { InicioVozComponent } from './components/inicio-voz/inicio-voz.component';
import { NivelComponent } from './components/nivel/nivel.component';
import { JuegoComponent } from './components/juego/juego.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { SpeechService } from './services/speech.service';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		InicioVozComponent,
		NivelComponent,
		JuegoComponent,
		ResultadosComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [SpeechService],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
