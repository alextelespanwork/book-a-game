webpackJsonp([10,24],{

/***/ 1033:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_component__ = __webpack_require__(957);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__contact_component__["a" /* ContactComponent */],
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=contact.routing.js.map

/***/ }),

/***/ 1136:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1232:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_component__ = __webpack_require__(957);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_routing__ = __webpack_require__(1033);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_main_service__ = __webpack_require__(645);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModule", function() { return ContactModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ContactModule = (function () {
    function ContactModule() {
    }
    return ContactModule;
}());
ContactModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__contact_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__["a" /* NgaModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__contact_component__["a" /* ContactComponent */],
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_4__contact_component__["a" /* ContactComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__services_main_service__["a" /* MainService */],
        ],
    })
], ContactModule);

//# sourceMappingURL=contact.module.js.map

/***/ }),

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pitches__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pitch_types__ = __webpack_require__(646);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Angular





var MainService = (function () {
    function MainService(http) {
        this.http = http;
    }
    MainService.prototype.getPitches = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_3__pitches__["a" /* PITCHES */]);
    };
    MainService.prototype.getTypesForPitch = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_4__pitch_types__["a" /* PITCHTYPES */]);
    };
    return MainService;
}());
MainService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MainService);

var _a;
//# sourceMappingURL=main.service.js.map

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PITCHTYPES; });
var PITCHTYPES = [
    { id: 1, type: 'Five a Side' },
    { id: 2, type: 'Six a Side' },
    { id: 3, type: 'Seven a Side' },
    { id: 4, type: 'Eight a Side' },
    { id: 5, type: 'Nine a Side' },
    { id: 6, type: 'Ten a Side' },
    { id: 7, type: 'Eleven a Side' },
];
//# sourceMappingURL=pitch-types.js.map

/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PITCHES; });
var PITCHES = [
    { id: 1, name: 'Finsbury Leisure Centre', address: '1 Norman St, London EC1V 3PU', types: [1, 2, 3, 4, 5] },
    { id: 2, name: 'Ultimate5ASIDE', address: '86-90 Paul St, London EC2A 4NE', types: [1, 2, 5] },
    { id: 3, name: 'Dream Leagues', address: '35 Kingsland Rd, London E2 8AA', types: [3, 4, 5] },
    { id: 4, name: 'Blue Hut Youth Centre 5-a-side', address: 'Britannia Walk, London N1', types: [1, 2, 3] },
    { id: 5, name: 'Mulberry Sports & Leisure Centre', address: 'Richard St, London E1 2JP', types: [1, 2, 5] },
    { id: 6, name: 'Top Corner Battersea 6-a-side League', address: '149 Battersea Park Rd, London SW8 4BX', types: [1, 3, 4] },
    { id: 7, name: 'Clapham Sports Leagues - 5/7 a side football and netball leagues',
        address: 'Stewart\'s, Stewart\'s Rd, London SW8 4JB', types: [1, 2, 3, 4, 5] },
    { id: 8, name: 'Ferndale Community Sports Centre', address: 'Nursery Road, Brixton, London SW9 8BP', types: [1] },
    { id: 9, name: '5aside.org - 5-a-side football leagues',
        address: 'Eurolink Business Centre, 49 Effra Rd, Brixton, London SW2 1BZ', types: [1, 2] },
    { id: 10, name: 'Top Corner Brixton 7-A-Side Leagues',
        address: '255 Shakespeare Rd, Brixton, London SE24 0QN', types: [1, 2, 4, 5] },
    { id: 11, name: 'Powerleague Docklands',
        address: 'City Harbour NCP, Selsdon Way, Isle of Dogs, London E14 9GL', types: [1, 4, 5] },
    { id: 12, name: 'Ballerz League 5-a-side football',
        address: 'Timber pond road, Greater London SE16 6AT, London', types: [1, 2, 3] },
];
//# sourceMappingURL=pitches.js.map

/***/ }),

/***/ 957:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'contact',
        template: __webpack_require__(1232),
        styles: [__webpack_require__(1136)],
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ })

});
//# sourceMappingURL=10.chunk.js.map