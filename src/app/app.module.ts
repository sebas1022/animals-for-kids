import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InicioVozComponent } from './inicio-voz/inicio-voz.component';
import { NivelComponent } from './nivel/nivel.component';
import { JuegoComponent } from './juego/juego.component';
import { ResultadosComponent } from './resultados/resultados.component';

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
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
