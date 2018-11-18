import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { InicioVozComponent } from './components/inicio-voz/inicio-voz.component';
import { NivelComponent } from './components/nivel/nivel.component';
import { JuegoComponent } from './components/juego/juego.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { SpeechService } from './services/speech.service';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		InicioVozComponent,
		NivelComponent,
		JuegoComponent,
		ResultadosComponent,
		FooterComponent,
		HeaderComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule
	],
	providers: [SpeechService],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
