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
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true })],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_resultados_service__ = __webpack_require__("../../../../../src/app/services/resultados.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__layouts_footer_footer_component__ = __webpack_require__("../../../../../src/app/layouts/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__layouts_header_header_component__ = __webpack_require__("../../../../../src/app/layouts/header/header.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_11__layouts_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__layouts_header_header_component__["a" /* HeaderComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__services_speech_service__["a" /* SpeechService */], __WEBPACK_IMPORTED_MODULE_10__services_resultados_service__["a" /* ResultadosService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cont-all-default cont-intro-home\">\r\n    <div class=\"cont-logo-app\">\r\n\r\n    </div>\r\n    <button class=\"btn-default-app\" routerLink=\"/inicia\">Iniciar</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html,\nbody,\nspan,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nblockquote,\npre,\nabbr,\naddress,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\nsamp,\nsmall,\nstrong,\nsub,\nsup,\nvar,\nb,\ni,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  border: 0;\n  font-size: 100%;\n  outline: 0;\n  padding: 0;\n  vertical-align: baseline;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nimg,\nmenu,\nnav,\nsection {\n  display: block;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote quotes none before,\nq quotes none before,\nblockquote quotes none :after,\nq quotes none :after {\n  content: none;\n}\nblockquote a,\nq a {\n  font-size: 100%;\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  vertical-align: baseline;\n}\nblockquote button,\nq button {\n  background: none;\n  border: 0;\n  padding: 0;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nhr {\n  border: 0;\n  display: block;\n  height: 1px;\n  margin: 1em 0;\n  padding: 0;\n}\ninput,\nselect {\n  vertical-align: middle;\n}\naddress {\n  font-style: normal;\n}\ninput :-ms-clear {\n  display: none;\n}\n.cont-intro-home {\n  padding-top: 40%;\n}\n.cont-logo-app {\n  background: #546cf7;\n  height: 150px;\n  margin: 0 auto 30px;\n  width: 90%;\n}\n", ""]);

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

module.exports = "<div class=\"cont-all-default\">\r\n    <!--Grabar-->\r\n    <div *ngIf=\"!textoEscuchado\">\r\n        <p class=\"text-intro-app\">\r\n            Oprime el botón y di tu nombre.\r\n        </p>\r\n        <div class=\"cont-btn-micro\" >\r\n            <button class=\"btn-default-app btn-micro-app\" [ngClass]=\"{'grabar': recognizing}\" (click)=\"escuchar()\">\r\n                <img class=\"img-responsive\" [ngClass]=\"{'desaparece': recognizing}\" src=\"assets/images/icon-img-micro.png\" alt=\"\">\r\n                <div class=\"punto\" *ngIf=\"recognizing\"></div>\r\n            </button>\r\n        </div>\r\n    </div>\r\n\r\n    <!--Repetir *ngIf=\"textoEscuchado\"-->\r\n    <div *ngIf=\"textoEscuchado\">\r\n        <p class=\"text-intro-app\">\r\n            Hola, {{textoEscuchado}}<br>\r\n            Listo para jugar?\r\n        </p>\r\n        <div class=\"cont-btn-micro\">\r\n            <button class=\"btn-default-app btn-micro-app\" (click)=\"escuchar()\">\r\n                <img class=\"img-responsive\" src=\"assets/images/icon-img-micro.png\" alt=\"\">\r\n            </button>\r\n        </div>\r\n        <div class=\"cont-btn-double\">\r\n            <button class=\"btn-default-app btn-left\" (click)=\"repito()\">No Soy {{textoEscuchado}}</button>\r\n            <button class=\"btn-default-app\" routerLink=\"/nivel\">Sí</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/inicio-voz/inicio-voz.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cont-btn-micro {\n  margin: auto;\n  width: 250px;\n}\n.btn-micro-app {\n  position: relative;\n}\n.grabar {\n  animation: pulse 1.5s infinite linear;\n}\n.punto {\n  position: absolute;\n  background-color: #fff;\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  left: calc(50% - (15px / 2));\n  top: calc(50% - (15px / 2));\n}\n.desaparece {\n  transition: opacity 1s;\n  opacity: 0;\n}\n@keyframes pulse {\n  0% {\n    box-shadow: 0px 0px 5px 0px rgba(173,0,0,0.3);\n  }\n  65% {\n    box-shadow: 0px 0px 5px 13px rgba(173,0,0,0.3);\n  }\n  90% {\n    box-shadow: 0px 0px 5px 13px rgba(173,0,0,0);\n  }\n}\n", ""]);

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
        // const {SpeechRecognition}: IWindow = <IWindow>window;
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
        this.cd.detectChanges();
    };
    InicioVozComponent.prototype.reconocer = function (listen) {
        for (var i = listen.resultIndex; i < listen.results.length; i++) {
            if (listen.results[i].isFinal) {
                this.textoEscuchado = listen.results[i][0].transcript;
                this.recognizing = false;
            }
        }
        if (!this.recognizing && this.textoEscuchado !== undefined) {
            this.hablador.habla('Hola, ' + this.textoEscuchado + '. ¿Listo Para Jugar?');
            this.cd.detectChanges();
        }
    };
    InicioVozComponent.prototype.repito = function () {
        this.textoEscuchado = undefined;
        this.cd.detectChanges();
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

module.exports = "<div class=\"cont-all-default\">\r\n    <!--Intento-->\r\n    <div class=\"cont-sound-animal\">\r\n        <p class=\"text-intro-app time\">\r\n            <span id=\"timer\" #Timer>2:00</span>\r\n\t\t</p>\r\n    </div>\r\n     <!--Opciones-->\r\n    <div *ngIf=\"adivino === 'ND'\">\r\n        <p class=\"text-intro-app\">\r\n            ¿Que animal escuchaste?\r\n        </p>\r\n        <div class=\"cont-btn-animals\">\r\n            <div class=\"btn-animals\" *ngFor=\"let animal of animales\">\r\n                <div *ngIf=\"!animal.adivinado\">\r\n                    <button class=\"btn-animal\" (click)=\"seleccionarAnimal(animal.nombre)\">\r\n                        <img class=\"img-responsive\" src=\"{{animal.image}}\">\r\n                    </button>\r\n                </div>\r\n\t\t\t</div>\r\n\t\t\t<button class=\"btn-default-app btn-left\" (click)=\"repetir()\">Repetir</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"cont-answer-result\">\r\n    <div *ngIf=\"adivino === 'SI'\">\r\n        <p class=\"text-intro-app title-result\">\r\n            FELICIDADES\r\n        </p>\r\n        <p class=\"text-intro-app\">\r\n            ¡Adivinaste el animal!\r\n        </p>\r\n\r\n        <div class=\"cont-face-result\">\r\n            <img class=\"img-responsive\" src=\"assets/images/img-icon-smile.png\" alt=\"\">\r\n        </div>\r\n\r\n        <button class=\"btn-default-app\" (click)=\"siguiente()\">Siguente</button>\r\n    </div>\r\n\r\n    <div *ngIf=\"adivino === 'NO'\">\r\n        <p class=\"text-intro-app title-result\">\r\n            MAL\r\n        </p>\r\n        <p class=\"text-intro-app\">\r\n            ¡NO Adivinaste el animal!\r\n        </p>\r\n\r\n        <div class=\"cont-face-result\">\r\n            <img class=\"img-responsive\" src=\"assets/images/img-icon-sad.png\" alt=\"\">\r\n\t\t</div>\r\n        <button class=\"btn-default-app\" (click)=\"repetir()\">Volver A Escuchar</button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/juego/juego.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".time {\n  font-size: 2.4rem;\n  line-height: 2.4rem;\n  margin: 0 0 20px;\n}\n.cont-btn-micro {\n  margin: 0 auto 30px;\n  width: 250px;\n}\n.cont-btn-animals {\n  margin: 30px auto;\n  width: 200px;\n}\n.cont-btn-animals .btn-animals {\n  margin: 30px auto;\n  width: 120px;\n}\n.cont-btn-animals .btn-animals .btn-animal {\n  background: transparent;\n  border: none;\n}\n.cont-answer-result {\n  margin: 30px auto;\n  width: 90%;\n}\n.cont-answer-result .text-intro-app.title-result {\n  font-size: 2rem;\n}\n.cont-answer-result .cont-face-result {\n  margin: 20px auto;\n  width: 40%;\n}\n", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_resultados_service__ = __webpack_require__("../../../../../src/app/services/resultados.service.ts");
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
    function JuegoComponent(route, hablador, cd, router, resultados) {
        this.route = route;
        this.hablador = hablador;
        this.cd = cd;
        this.router = router;
        this.resultados = resultados;
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
        this.contador();
    };
    JuegoComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    JuegoComponent.prototype.sonidoAnimal = function () {
        this.adivino = 'ND';
        this.animalesDisponibles = this.animales.filter(function (animal) { return !animal.adivinado; });
        if (this.animalesDisponibles.length > 0) {
            var numAnimal = this.getRndInteger(0, this.animalesDisponibles.length);
            this.animalAdivinar = this.animalesDisponibles[numAnimal];
            var sonido_1 = new Audio(this.animalAdivinar.audioUrl);
            sonido_1.play();
            setTimeout(function () {
                sonido_1.pause();
            }, 3000);
        }
        else {
            this.finalJuego();
        }
        this.cd.detectChanges();
    };
    JuegoComponent.prototype.seleccionarAnimal = function (nombre) {
        if (this.animalAdivinar.nombre === nombre) {
            this.adivino = 'SI';
            this.hablador.habla('MUY BIEN');
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
    JuegoComponent.prototype.repetir = function () {
        this.adivino = 'ND';
        this.cd.detectChanges();
        var sonido = new Audio(this.animalAdivinar.audioUrl);
        sonido.play();
        setTimeout(function () {
            sonido.pause();
        }, 3000);
    };
    JuegoComponent.prototype.finalJuego = function () {
        this.resultados.guardaResultado(this.animales);
        this.router.navigate(['/resultado']);
    };
    JuegoComponent.prototype.contador = function () {
        var _this = this;
        var tiempoActual = this.timer.nativeElement.innerHTML;
        var timeArray = tiempoActual.split(/[:]+/);
        var m = timeArray[0];
        var s = this.checkSecond((timeArray[1] - 1));
        if (s === 59) {
            m = m - 1;
        }
        if (m < 0) {
            this.finalJuego();
        }
        if (s < 10 && s >= 0) {
            s = '0' + s;
        }
        ; // add zero in front of numbers < 10
        this.timer.nativeElement.innerHTML = m + ':' + s;
        setTimeout(function () {
            _this.contador();
        }, 1000);
    };
    JuegoComponent.prototype.checkSecond = function (sec) {
        if (sec < 0) {
            sec = '59';
        }
        ;
        return parseInt(sec, 0);
    };
    JuegoComponent.prototype.getRndInteger = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    return JuegoComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('Timer'),
    __metadata("design:type", Object)
], JuegoComponent.prototype, "timer", void 0);
JuegoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-juego',
        template: __webpack_require__("../../../../../src/app/components/juego/juego.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/juego/juego.component.styl")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_speech_service__["a" /* SpeechService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_speech_service__["a" /* SpeechService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ChangeDetectorRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_resultados_service__["a" /* ResultadosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_resultados_service__["a" /* ResultadosService */]) === "function" && _e || Object])
], JuegoComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=juego.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/nivel/nivel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cont-all-default\">\r\n    <p class=\"text-intro-app\">Selecciona la cantidad\r\n            de animales que quieres adivinar.</p>\r\n    <div class=\"cont-btn-level\">\r\n        <button class=\"btn-default-app btn-micro-app\" (click)=\"irNivel(3)\">\r\n            <img class=\"img-responsive pato\" src=\"assets/images/img-btn-pato.png\" alt=\"\">\r\n        </button>\r\n        <p class=\"text-btn-level morado-c\">3<br>animales</p>\r\n    </div>\r\n    <hr class=\"division-btn\">\r\n    <div class=\"cont-btn-level\">\r\n        <button class=\"btn-default-app btn-micro-app\"  (click)=\"irNivel(6)\">\r\n            <img class=\"img-responsive tortuga\" src=\"assets/images/img-btn-tortuga.png\" alt=\"\">\r\n        </button>\r\n        <p class=\"text-btn-level morado-m\">6<br>animales</p>\r\n    </div>\r\n    <hr class=\"division-btn\">\r\n    <div class=\"cont-btn-level\">\r\n        <button class=\"btn-default-app btn-micro-app\"  (click)=\"irNivel(9)\">\r\n            <img class=\"img-responsive delfin\" src=\"assets/images/img-btn-delfin.png\" alt=\"\">\r\n        </button>\r\n        <p class=\"text-btn-level morado-d\">9<br>animales</p>\r\n    </div>\r\n    <button class=\"btn-default-app\" routerLink=\"/inicia\">Volver</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/nivel/nivel.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html,\nbody,\nspan,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nblockquote,\npre,\nabbr,\naddress,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\nsamp,\nsmall,\nstrong,\nsub,\nsup,\nvar,\nb,\ni,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  border: 0;\n  font-size: 100%;\n  outline: 0;\n  padding: 0;\n  vertical-align: baseline;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nimg,\nmenu,\nnav,\nsection {\n  display: block;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote quotes none before,\nq quotes none before,\nblockquote quotes none :after,\nq quotes none :after {\n  content: none;\n}\nblockquote a,\nq a {\n  font-size: 100%;\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  vertical-align: baseline;\n}\nblockquote button,\nq button {\n  background: none;\n  border: 0;\n  padding: 0;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nhr {\n  border: 0;\n  display: block;\n  height: 1px;\n  margin: 1em 0;\n  padding: 0;\n}\ninput,\nselect {\n  vertical-align: middle;\n}\naddress {\n  font-style: normal;\n}\ninput :-ms-clear {\n  display: none;\n}\n.cont-all-default {\n  margin-bottom: 100px;\n}\n.cont-btn-level {\n  margin: 40px auto;\n  width: 200px;\n}\n.btn-micro-app {\n  height: 200px;\n  width: 200px;\n}\n.btn-micro-app .pato {\n  margin: -16px 0 0 -2px;\n  max-width: 132px;\n}\n.btn-micro-app .tortuga,\n.btn-micro-app .delfin {\n  margin: -27px 0 0 2px;\n  max-width: 200px;\n}\nhr.division-btn {\n  border-bottom: 10px dotted #fff;\n  margin: auto;\n  width: 300px;\n}\n.text-btn-level {\n  font-size: 2rem;\n  text-align: center;\n}\n.morado-d {\n  color: #546cf7;\n}\n.morado-m {\n  color: #7879ff;\n}\n.morado-c {\n  color: #8c89ff;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nivel/nivel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_speech_service__ = __webpack_require__("../../../../../src/app/services/speech.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function NivelComponent(hablador, router) {
        this.hablador = hablador;
        this.router = router;
    }
    NivelComponent.prototype.ngOnInit = function () {
        this.hablador.habla('Selecciona la cantidad	de animales que quieres adivinar. 3 , 6 o 9');
    };
    NivelComponent.prototype.irNivel = function (num) {
        this.router.navigate(['/juego', num]);
    };
    return NivelComponent;
}());
NivelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-nivel',
        template: __webpack_require__("../../../../../src/app/components/nivel/nivel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/nivel/nivel.component.styl")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_speech_service__["a" /* SpeechService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_speech_service__["a" /* SpeechService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], NivelComponent);

var _a, _b;
//# sourceMappingURL=nivel.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/resultados/resultados.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cont-all-default\">\r\n    <p class=\"text-intro-app\">\r\n        RESULTADOS\r\n    </p>\r\n    <div class=\"cont-list-result\">\r\n        <div class=\"list-result\" *ngFor=\"let animal of animales\">\r\n            <img class=\"img-responsive\" src=\"{{animal.image}}\" alt=\"\">\r\n            <i class=\"icon-answer\" [ngClass]=\"animal.adivinado? 'correct' : 'wrong'\"></i>\r\n        </div>\r\n    </div>\r\n    <button class=\"btn-default-app\"  routerLink=\"/nivel\">Inicio</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/resultados/resultados.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html,\nbody,\nspan,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nblockquote,\npre,\nabbr,\naddress,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\nsamp,\nsmall,\nstrong,\nsub,\nsup,\nvar,\nb,\ni,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  border: 0;\n  font-size: 100%;\n  outline: 0;\n  padding: 0;\n  vertical-align: baseline;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nimg,\nmenu,\nnav,\nsection {\n  display: block;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote quotes none before,\nq quotes none before,\nblockquote quotes none :after,\nq quotes none :after {\n  content: none;\n}\nblockquote a,\nq a {\n  font-size: 100%;\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  vertical-align: baseline;\n}\nblockquote button,\nq button {\n  background: none;\n  border: 0;\n  padding: 0;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nhr {\n  border: 0;\n  display: block;\n  height: 1px;\n  margin: 1em 0;\n  padding: 0;\n}\ninput,\nselect {\n  vertical-align: middle;\n}\naddress {\n  font-style: normal;\n}\ninput :-ms-clear {\n  display: none;\n}\n.text-intro-app {\n  font-size: 2.4rem;\n}\n.cont-list-result {\n  margin: 30px auto;\n  width: 40%;\n}\n.cont-list-result .list-result {\n  margin-bottom: 40px;\n  position: relative;\n}\n.cont-list-result .icon-answer {\n  background-repeat: no-repeat;\n  display: inline-block;\n  height: 50px;\n  position: absolute;\n  top: 50%;\n  right: -10px;\n  width: 50px;\n}\n.cont-list-result .wrong {\n  background-image: url(\"/animals-for-kids/assets/images/img-icon-wrong.svg\");\n}\n.cont-list-result .correct {\n  background-image: url(\"/animals-for-kids/assets/images/img-icon-correct.svg\");\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/resultados/resultados.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_resultados_service__ = __webpack_require__("../../../../../src/app/services/resultados.service.ts");
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
    function ResultadosComponent(resultados) {
        this.resultados = resultados;
    }
    ResultadosComponent.prototype.ngOnInit = function () {
        this.animales = this.resultados.getResultado();
        console.log(this.animales);
    };
    return ResultadosComponent;
}());
ResultadosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-resultados',
        template: __webpack_require__("../../../../../src/app/components/resultados/resultados.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/resultados/resultados.component.styl")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_resultados_service__["a" /* ResultadosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_resultados_service__["a" /* ResultadosService */]) === "function" && _a || Object])
], ResultadosComponent);

var _a;
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

module.exports = "<div class=\"cont-img-footer-hoja\">\r\n    <img class=\"img-responsive\" src=\"assets/images/bkg-img-hojas-a.png\" alt=\"\">\r\n</div>\r\n<div class=\"cont-img-footer-hoja hoja-verde\">\r\n        <img class=\"img-responsive\" src=\"assets/images/bkg-img-hojas-v.png\" alt=\"\">\r\n</div>\r\n\r\n<div class=\"cont-img-footer\">\r\n    <img class=\"img-responsive\" src=\"assets/images/bkg-img-pasto.png\" alt=\"\">\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layouts/footer/footer.component.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cont-img-footer {\n  bottom: 0;\n  position: fixed;\n  width: 100%;\n  z-index: -2;\n}\n.cont-img-footer-hoja {\n  bottom: 0;\n  position: fixed;\n  right: 0;\n  width: 32%;\n  z-index: -1;\n}\n.hoja-verde {\n  bottom: 56px;\n  left: 0;\n  width: 32%;\n  z-index: -1;\n}\n", ""]);

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

module.exports = "<div class=\"cot-icon-go-home\">\r\n        <button class=\"btn-default-app btn-icon-app\" routerLink=\"/home\">\r\n            <img class=\"img-responsive\" src=\"assets/images/icon-img-home.png\" alt=\"\">\r\n        </button>\r\n</div>\r\n"

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

/***/ "../../../../../src/app/services/resultados.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultadosService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResultadosService = (function () {
    function ResultadosService() {
    }
    ResultadosService.prototype.guardaResultado = function (result) {
        this.resultados = result;
    };
    ResultadosService.prototype.getResultado = function () {
        return this.resultados;
    };
    return ResultadosService;
}());
ResultadosService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ResultadosService);

//# sourceMappingURL=resultados.service.js.map

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var SpeechService = (function () {
    function SpeechService() {
    }
    SpeechService.prototype.habla = function (txt) {
        var _this = this;
        var lang = 'es-ES';
        var voiceIndex = 51;
        var speak = function (text) { return __awaiter(_this, void 0, void 0, function () {
            var SpeechSynthesisUtterance, message, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!speechSynthesis) {
                            return [2 /*return*/];
                        }
                        SpeechSynthesisUtterance = window.SpeechSynthesisUtterance;
                        message = new SpeechSynthesisUtterance(text);
                        _a = message;
                        return [4 /*yield*/, chooseVoice()];
                    case 1:
                        _a.voice = _b.sent();
                        speechSynthesis.speak(message);
                        return [2 /*return*/];
                }
            });
        }); };
        var getVoices = function () {
            return new Promise(function (resolve) {
                var voices = speechSynthesis.getVoices();
                if (voices.length) {
                    resolve(voices);
                    return;
                }
                speechSynthesis.onvoiceschanged = function () {
                    voices = speechSynthesis.getVoices();
                    resolve(voices);
                };
            });
        };
        var chooseVoice = function () { return __awaiter(_this, void 0, void 0, function () {
            var voices;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getVoices()];
                    case 1:
                        voices = (_a.sent());
                        return [2 /*return*/, new Promise(function (resolve) {
                                resolve(voices[voiceIndex]);
                            })];
                }
            });
        }); };
        speak(txt);
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