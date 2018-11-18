webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_inicio_voz_inicio_voz_component__ = __webpack_require__("../../../../../src/app/components/inicio-voz/inicio-voz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_nivel_nivel_component__ = __webpack_require__("../../../../../src/app/components/nivel/nivel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_juego_juego_component__ = __webpack_require__("../../../../../src/app/components/juego/juego.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_resultados_resultados_component__ = __webpack_require__("../../../../../src/app/components/resultados/resultados.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// tslint:disable:indent







// New code
var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'inicia',
        component: __WEBPACK_IMPORTED_MODULE_3__components_inicio_voz_inicio_voz_component__["a" /* InicioVozComponent */]
    },
    {
        path: 'nivel',
        component: __WEBPACK_IMPORTED_MODULE_4__components_nivel_nivel_component__["a" /* NivelComponent */]
    },
    {
        path: 'juego/:num',
        component: __WEBPACK_IMPORTED_MODULE_5__components_juego_juego_component__["a" /* JuegoComponent */]
    },
    {
        path: 'resultado',
        component: __WEBPACK_IMPORTED_MODULE_6__components_resultados_resultados_component__["a" /* ResultadosComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.styl")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_inicio_voz_inicio_voz_component__ = __webpack_require__("../../../../../src/app/components/inicio-voz/inicio-voz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_nivel_nivel_component__ = __webpack_require__("../../../../../src/app/components/nivel/nivel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_juego_juego_component__ = __webpack_require__("../../../../../src/app/components/juego/juego.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_resultados_resultados_component__ = __webpack_require__("../../../../../src/app/components/resultados/resultados.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_speech_service__ = __webpack_require__("../../../../../src/app/services/speech.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__layouts_footer_footer_component__ = __webpack_require__("../../../../../src/app/layouts/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__layouts_header_header_component__ = __webpack_require__("../../../../../src/app/layouts/header/header.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_inicio_voz_inicio_voz_component__["a" /* InicioVozComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_nivel_nivel_component__["a" /* NivelComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_juego_juego_component__["a" /* JuegoComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_resultados_resultados_component__["a" /* ResultadosComponent */],
            __WEBPACK_IMPORTED_MODULE_10__layouts_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__layouts_header_header_component__["a" /* HeaderComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__services_speech_service__["a" /* SpeechService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cont-sol-bkg\">\n    <img class=\"img-responsive\" src=\"assets/images/bkg-img-sol.png\" alt=\"\">\n</div>\n<div class=\"cont-cloud-l cloud-1\">\n        <img class=\"img-responsive\" src=\"assets/images/bkg-img-nube-l.png\" alt=\"\">\n</div>\n<div class=\"cont-cloud-r cloud-2\">\n        <img class=\"img-responsive\" src=\"assets/images/bkg-img-nube-r.png\" alt=\"\">\n</div>\n<div class=\"cont-cloud-l cloud-3\">\n        <img class=\"img-responsive\" src=\"assets/images/bkg-img-nube-l.png\" alt=\"\">\n</div>\n<div class=\"cont-cloud-r cloud-4\">\n        <img class=\"img-responsive\" src=\"assets/images/bkg-img-nube-r.png\" alt=\"\">\n</div>\n\n\n<div class=\"cont-all-default cont-intro-home\">\n    <div class=\"cont-logo-app\">\n\n    </div>\n    <button class=\"btn-default-app\" routerLink=\"/inicia\">Iniciar</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html,\nbody,\nspan,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\nabbr,\naddress,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\nsamp,\nsmall,\nstrong,\nsub,\nsup,\nvar,\nb,\ni,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  border: 0;\n  font-size: 100%;\n  outline: 0;\n  padding: 0;\n  vertical-align: baseline;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nimg,\nmenu,\nnav,\nsection {\n  display: block;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote quotes none before,\nq quotes none before,\nblockquote quotes none :after,\nq quotes none :after {\n  content: none;\n}\nblockquote a,\nq a {\n  font-size: 100%;\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  vertical-align: baseline;\n}\nblockquote button,\nq button {\n  background: none;\n  border: 0;\n  padding: 0;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nhr {\n  border: 0;\n  display: block;\n  height: 1px;\n  margin: 1em 0;\n  padding: 0;\n}\ninput,\nselect {\n  vertical-align: middle;\n}\naddress {\n  font-style: normal;\n}\ninput :-ms-clear {\n  display: none;\n}\n.cont-intro-home {\n  padding-top: 40%;\n}\n.cont-logo-app {\n  background: #546cf7;\n  height: 150px;\n  margin: 0 auto 30px;\n  width: 90%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.styl")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/inicio-voz/inicio-voz.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cont-cloud-l cloud-1\">\n        <img class=\"img-responsive\" src=\"assets/images/bkg-img-nube-l.png\" alt=\"\">\n</div>\n<div class=\"cont-cloud-r cloud-2\">\n        <img class=\"img-responsive\" src=\"assets/images/bkg-img-nube-r.png\" alt=\"\">\n</div>\n<div class=\"cont-cloud-l cloud-3\">\n        <img class=\"img-responsive\" src=\"assets/images/bkg-img-nube-l.png\" alt=\"\">\n</div>\n<div class=\"cont-cloud-r cloud-4\">\n        <img class=\"img-responsive\" src=\"assets/images/bkg-img-nube-r.png\" alt=\"\">\n</div>\n\n<div class=\"cont-all-default\">\n    <p class=\"text-intro-app\">\n        Oprime el botón y di tu nombre.\n    </p>\n    <div class=\"cont-btn-micro\">\n        <button class=\"btn-micro-app\" (click)=\"escuchar()\">\n            <img src=\"assets/images/icon-img-micro.png\" alt=\"\">\n        </button>\n    </div>\n    <div *ngIf=\"textoEscuchado\">\n        Hola {{textoEscuchado}} <br>\n        Deseas iniciar el juego ?\n    <button routerLink=\"/nivel\">Si</button>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/inicio-voz/inicio-voz.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/inicio-voz/inicio-voz.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_speech_service__ = __webpack_require__("../../../../../src/app/services/speech.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioVozComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InicioVozComponent = (function () {
    function InicioVozComponent(hablador, cd) {
        this.hablador = hablador;
        this.cd = cd;
        this.recognizing = false;
    }
    InicioVozComponent.prototype.ngOnInit = function () {
        var _this = this;
        var webkitSpeechRecognition = window.webkitSpeechRecognition;
        this.recognition = new webkitSpeechRecognition();
        this.recognition.lang = 'es-CO';
        this.recognition.continuous = true;
        this.recognition.interimResults = true;
        this.recognition.onresult = function (listen) {
            _this.reconocer(listen);
        };
    };
    InicioVozComponent.prototype.escuchar = function () {
        if (this.recognizing) {
            this.recognition.stop();
            this.recognizing = false;
        }
        else {
            this.recognition.start();
            this.recognizing = true;
            this.textoEscuchado = undefined;
        }
    };
    InicioVozComponent.prototype.reconocer = function (listen) {
        for (var i = listen.resultIndex; i < listen.results.length; i++) {
            if (listen.results[i].isFinal) {
                this.textoEscuchado = listen.results[i][0].transcript;
                this.recognizing = false;
            }
        }
        if (!this.recognizing && this.textoEscuchado !== undefined) {
            this.hablador.habla('Hola ' + this.textoEscuchado);
            this.cd.detectChanges();
        }
    };
    return InicioVozComponent;
}());
InicioVozComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-inicio-voz',
        template: __webpack_require__("../../../../../src/app/components/inicio-voz/inicio-voz.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/inicio-voz/inicio-voz.component.styl")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_speech_service__["a" /* SpeechService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_speech_service__["a" /* SpeechService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ChangeDetectorRef */]) === "function" && _b || Object])
], InicioVozComponent);

var _a, _b;
//# sourceMappingURL=inicio-voz.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/juego/juego.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n\t¿Que animal escuchaste?\n</p>\n<div *ngFor=\"let animal of animales\">\n\t<div [ngClass]=\"{'gris': animal.adivinado}\">\n\t\t{{animal.nombre}} |\n\t\t<img src=\"{{animal.image}}\">\n\t\t<button (click)=\"seleccionarAnimal(animal.nombre)\">Seleccionar</button>\n\t</div>\n\t<br>\n</div>\n<div *ngIf=\"adivino === 'SI'\">\n\tMuy bien perrito\n\t<button (click)=\"siguiente()\">Siguente</button>\t\n</div>\n\n<div *ngIf=\"adivino === 'NO'\">\n\tEn la mala perrito\n\t<button (click)=\"sonidoAnimal()\">Volver A Escuchar</button>\t\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/juego/juego.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/juego/juego.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_mock_data__ = __webpack_require__("../../../../../src/app/data/mock-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_speech_service__ = __webpack_require__("../../../../../src/app/services/speech.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JuegoComponent = (function () {
    function JuegoComponent(route, hablador, cd) {
        this.route = route;
        this.hablador = hablador;
        this.cd = cd;
    }
    JuegoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.num = +params['num']; // (+) converts string 'num' to a number
        });
        this.intento = 0;
        this.animales = __WEBPACK_IMPORTED_MODULE_2__data_mock_data__["a" /* DataAnimales */].DATA_ANIMALES.animales.sort(function () {
            return .5 - Math.random();
        });
        this.animales = this.animales.splice(0, this.num);
        this.sonidoAnimal();
    };
    JuegoComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    JuegoComponent.prototype.sonidoAnimal = function () {
        this.adivino = 'ND';
        this.animalesDisponibles = this.animales.filter(function (animal) { return !animal.adivinado; });
        var numAnimal = this.getRndInteger(0, this.animalesDisponibles.length);
        this.animalAdivinar = this.animalesDisponibles[numAnimal];
        var sonido = new Audio(this.animalAdivinar.audioUrl);
        sonido.play();
        setTimeout(function () {
            sonido.pause();
        }, 3000);
    };
    JuegoComponent.prototype.seleccionarAnimal = function (nombre) {
        if (this.animalAdivinar.nombre === nombre) {
            this.adivino = 'SI';
            this.animales.filter(function (animal) { return animal.nombre === nombre; })[0].adivinado = true;
        }
        else {
            this.adivino = 'NO';
        }
        this.cd.detectChanges();
    };
    JuegoComponent.prototype.siguiente = function () {
        this.intento = +1;
        this.sonidoAnimal();
    };
    JuegoComponent.prototype.getRndInteger = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    return JuegoComponent;
}());
JuegoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-juego',
        template: __webpack_require__("../../../../../src/app/components/juego/juego.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/juego/juego.component.styl")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_speech_service__["a" /* SpeechService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_speech_service__["a" /* SpeechService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ChangeDetectorRef */]) === "function" && _c || Object])
], JuegoComponent);

var _a, _b, _c;
//# sourceMappingURL=juego.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/nivel/nivel.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Selecciona cuantos animales vas a adivinar</h1>\n<button [routerLink]=\"['/juego/3']\">3</button>\n<button [routerLink]=\"['/juego/6']\">6</button>\n<button [routerLink]=\"['/juego/9']\">9</button>\n"

/***/ }),

/***/ "../../../../../src/app/components/nivel/nivel.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nivel/nivel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_speech_service__ = __webpack_require__("../../../../../src/app/services/speech.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NivelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NivelComponent = (function () {
    function NivelComponent(hablador) {
        this.hablador = hablador;
    }
    NivelComponent.prototype.ngAfterViewInit = function () {
        // this.hablador.habla('Selecciona cuantos animales vas a adivinar 3 , 6 o 9');
    };
    return NivelComponent;
}());
NivelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-nivel',
        template: __webpack_require__("../../../../../src/app/components/nivel/nivel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/nivel/nivel.component.styl")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_speech_service__["a" /* SpeechService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_speech_service__["a" /* SpeechService */]) === "function" && _a || Object])
], NivelComponent);

var _a;
//# sourceMappingURL=nivel.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/resultados/resultados.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  resultados works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/resultados/resultados.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/resultados/resultados.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultadosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResultadosComponent = (function () {
    function ResultadosComponent() {
    }
    ResultadosComponent.prototype.ngOnInit = function () {
    };
    return ResultadosComponent;
}());
ResultadosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-resultados',
        template: __webpack_require__("../../../../../src/app/components/resultados/resultados.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/resultados/resultados.component.styl")]
    }),
    __metadata("design:paramtypes", [])
], ResultadosComponent);

//# sourceMappingURL=resultados.component.js.map

/***/ }),

/***/ "../../../../../src/app/data/mock-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataAnimales; });
/* tslint:disable:max-file-line-count */
var DataAnimales = (function () {
    function DataAnimales() {
    }
    return DataAnimales;
}());

DataAnimales.DATA_ANIMALES = {
    animales: [
        {
            nombre: 'perro',
            image: '/assets/images/animales/perro.png',
            audioUrl: '/assets/audio/perro.mp3',
            adivinado: false
        },
        {
            nombre: 'gatito',
            image: '/assets/images/animales/gatito.png',
            audioUrl: '/assets/audio/gatito.mp3',
            adivinado: false
        },
        {
            nombre: 'caballo',
            image: '/assets/images/animales/caballo.png',
            audioUrl: '/assets/audio/caballo.mp3',
            adivinado: false
        },
        {
            nombre: 'cerdo',
            image: '/assets/images/animales/cerdo.png',
            audioUrl: '/assets/audio/cerdo.mp3',
            adivinado: false
        },
        {
            nombre: 'vaca',
            image: '/assets/images/animales/vaca.png',
            audioUrl: '/assets/audio/vaca.mp3',
            adivinado: false
        },
        {
            nombre: 'elefante',
            image: '/assets/images/animales/elefante.png',
            audioUrl: '/assets/audio/elefante.mp3',
            adivinado: false
        },
        {
            nombre: 'pato',
            image: '/assets/images/animales/pato.png',
            audioUrl: '/assets/audio/pato.mp3',
            adivinado: false
        },
        {
            nombre: 'leon',
            image: '/assets/images/animales/leon.png',
            audioUrl: '/assets/audio/leon.mp3',
            adivinado: false
        },
        {
            nombre: 'lobo',
            image: '/assets/images/animales/lobo.png',
            audioUrl: '/assets/audio/lobo.mp3',
            adivinado: false
        },
        {
            nombre: 'pajaro',
            image: '/assets/images/animales/pajaro.png',
            audioUrl: '/assets/audio/pajaro.mp3',
            adivinado: false
        },
        {
            nombre: 'grillo',
            image: '/assets/images/animales/grillo.png',
            audioUrl: '/assets/audio/grillo.mp3',
            adivinado: false
        }
    ]
};
//# sourceMappingURL=mock-data.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/layouts/footer/footer.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layouts/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/layouts/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layouts/footer/footer.component.styl")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  header works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/layouts/header/header.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layouts/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/layouts/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layouts/header/header.component.styl")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/speech.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpeechService = (function () {
    function SpeechService() {
        var SpeechSynthesisUtterance = window.SpeechSynthesisUtterance;
        this.msg = new SpeechSynthesisUtterance();
        this.msg.volumen = 1;
        this.msg.rate = 1;
        this.msg.voiceURI = 'native';
        this.msg.pitch = 0.8;
        this.msg.lang = 'es-CO';
        this.speach = window.speechSynthesis;
    }
    SpeechService.prototype.habla = function (txt) {
        this.msg.voice = this.speach.getVoices().filter(function (voice) { return voice.name === 'Google español'; })[0];
        this.msg.text = txt;
        this.speach.speak(this.msg);
    };
    return SpeechService;
}());
SpeechService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SpeechService);

//# sourceMappingURL=speech.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
document.addEventListener('DOMContentLoaded', function () {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
});
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map