// tslint:disable:indent
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InicioVozComponent } from './inicio-voz/inicio-voz.component';
import { NivelComponent } from './nivel/nivel.component';
import { JuegoComponent } from './juego/juego.component';
import { ResultadosComponent } from './resultados/resultados.component';

// New code

const routes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: 'home'},
        { path: 'home', component: HomeComponent},
        { path: 'inicia', component: InicioVozComponent},
        { path: 'nivel', component: NivelComponent},
        { path: 'juego', component: JuegoComponent},
        { path: 'resultado', component: ResultadosComponent},
    ];

    @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
    export class AppRoutingModule { }
