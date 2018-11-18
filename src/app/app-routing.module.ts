// tslint:disable:indent
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InicioVozComponent } from './components/inicio-voz/inicio-voz.component';
import { NivelComponent } from './components/nivel/nivel.component';
import { JuegoComponent } from './components/juego/juego.component';
import { ResultadosComponent } from './components/resultados/resultados.component';

// New code

const routes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: 'home'},
        { path: 'home', component: HomeComponent},
        { path: 'inicia', component: InicioVozComponent},
        { path: 'nivel', component: NivelComponent},
        { path: 'juego/:num', component: JuegoComponent},
        { path: 'resultado', component: ResultadosComponent},
    ];

    @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
    export class AppRoutingModule { }
