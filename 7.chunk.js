webpackJsonp([7,24],{

/***/ 1032:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_position_component__ = __webpack_require__(956);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__book_position_component__["a" /* BookPositionComponent */],
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=book-position.routing.js.map

/***/ }),

/***/ 1034:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FootballPitchLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FootballPitchLayoutComponent = (function () {
    function FootballPitchLayoutComponent() {
        //pType: String = new String();
        this.fiveASide = false;
        this.sixASide = false;
        this.sevenASide = false;
        this.eightASide = false;
        this.nineASide = false;
        this.tenASide = false;
        this.elevenASide = false;
    }
    FootballPitchLayoutComponent.prototype.ngOnInit = function () {
        this.pitchType = "Five a Side";
        this.setPitchButtonsVisibility(this.pitchType);
    };
    //ngAfterViewChecked()	
    //{
    //console.log(this.pitchType);
    //this.setPitchButtonsVisibility(this.pitchType);
    //}
    // fiveASide: String[] =   ['b-lgoalkeeper', 'b-ldefender2', 'b-ldefender3', 'b-lmidfielder2', 'b-lforward2'];
    // sixASide: String[] =    ['b-lgoalkeeper', 'b-ldefender2', 'b-ldefender3', 'b-lmidfielder1', 'b-lmidfielder3', 
    //                          'b-lforward2'];
    // sevenASide: String[] =  ['b-lgoalkeeper', 'b-ldefender2', 'b-ldefender3', 'b-lmidfielder1', 'b-lmidfielder2',
    //                          'b-lmidfielder3', 'b-lforward2'];
    // eightASide: String[] =  ['b-lgoalkeeper', 'b-ldefender1', 'b-ldefender2', 'b-ldefender3', 'b-ldefender4', 
    //                          'b-lmidfielder1', 'b-lmidfielder3', 'b-lforward2'];
    // nineASide: String[] =   ['b-lgoalkeeper', 'b-ldefender1', 'b-ldefender2', 'b-ldefender3', 'b-ldefender4', 
    //                          'b-lmidfielder1', 'b-lmidfielder3', 'b-lforward1', 'b-lforward3'];
    // tenASide: String[] =    ['b-lgoalkeeper', 'b-ldefender1', 'b-ldefender2', 'b-ldefender3', 'b-ldefender4', 
    //                          'b-lmidfielder1', 'b-lmidfielder2', 'b-lmidfielder3', 'b-lforward1', 'b-lforward3'];
    // elevenASide: String[] = ['b-lgoalkeeper', 'b-ldefender1', 'b-ldefender2', 'b-ldefender3', 'b-ldefender4', 
    //                          'b-lmidfielder1', 'b-lmidfielder2', 'b-lmidfielder3', 'b-lforward1', 'b-lforward2', 
    //                          'b-lforward3'];
    FootballPitchLayoutComponent.prototype.setPitchButtonsVisibility = function (p) {
        if (p === 'Five a Side') {
            this.fiveASide = true;
        }
        else if (p === 'Six a Side') {
            this.sixASide = true;
        }
        else if (p === 'Seven a Side') {
            this.sevenASide = true;
        }
        else if (p === 'Eight a Side') {
            this.eightASide = true;
        }
        else if (p === 'Nine a Side') {
            this.nineASide = true;
        }
        else if (p === 'Ten a Side') {
            this.tenASide = true;
        }
        else if (p === 'Eleven a Side') {
            this.elevenASide = true;
        }
    };
    FootballPitchLayoutComponent.prototype.onClick = function (event) {
        //console.log(event);
        //console.log(event.srcElement.className);
        //console.log(event.srcElement.firstChild.className);
        if (event.srcElement.className.includes('btn-default')) {
            event.srcElement.className = 'btn btn-warning';
            event.srcElement.firstChild.className = 'ion-close-round';
        }
        else if (event.srcElement.className.includes('btn-warning')) {
            event.srcElement.className = 'btn btn-default';
            event.srcElement.firstChild.className = 'ion-plus-round';
        }
        else if (event.srcElement.className.includes('ion-close-round')) {
            event.srcElement.className = 'ion-plus-round';
            event.srcElement.parentElement.className = 'btn btn-default';
        }
        else if (event.srcElement.className.includes('ion-plus-round')) {
            event.srcElement.className = 'ion-close-round';
            event.srcElement.parentElement.className = 'btn btn-warning';
        }
    };
    return FootballPitchLayoutComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FootballPitchLayoutComponent.prototype, "pitchType", void 0);
FootballPitchLayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'football-pitch-layout',
        template: __webpack_require__(1233),
        styles: [__webpack_require__(1137)],
    })
], FootballPitchLayoutComponent);

//# sourceMappingURL=football-pitch-layout.component.js.map

/***/ }),

/***/ 1135:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1137:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".surface {\n  background: #44635c;\n  height: 520px;\n  width: 816px;\n  position: relative;\n  margin: 0 auto;\n  padding: 16px; }\n\n.pitch {\n  height: 100%;\n  width: 100%;\n  border: 1px solid white;\n  position: relative; }\n\n.half {\n  width: 50%;\n  height: 100%;\n  float: left;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.penalty {\n  width: 132px;\n  height: 320px;\n  border: 1px solid white;\n  position: relative; }\n\n.penalty:after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #44635c;\n  z-index: 0;\n  left: 0; }\n\n.penalty .center {\n  z-index: 0; }\n\n.penalty .goal {\n  z-index: 1; }\n\n.goal {\n  width: 44px;\n  height: 144px;\n  border: 1px solid white; }\n\n.center {\n  width: 144px;\n  height: 144px;\n  border: 1px solid white;\n  border-radius: 100%;\n  position: absolute;\n  top: calc(50% - 72px);\n  right: calc(50% - 72px); }\n\n.half:nth-child(1) {\n  border-right: 1px solid white; }\n\n.half:nth-child(1) .goal,\n.half:nth-child(1) .penalty {\n  border-left: none; }\n\n.half:nth-child(1) .center {\n  left: 20px;\n  right: auto; }\n\n.half:nth-child(2) {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse; }\n\n.half:nth-child(2) div {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse; }\n\n.half:nth-child(2) .goal,\n.half:nth-child(2) .penalty {\n  border-right: none; }\n\n.half:nth-child(2) .center {\n  right: 20px;\n  left: auto; }\n\n.penalty, .goal {\n  -ms-flex-item-align: center;\n      align-self: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1231:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\">\r\n    <div>\r\n        <football-pitch-layout [pitchType]=\"pitchType\"></football-pitch-layout>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 1233:
/***/ (function(module, exports) {

module.exports = "\r\n<ba-card title=\"Pitch Layout\" baCardClass=\"with-scroll\">\r\n    <!--<div class=\"form-control form-control-rounded\" style=\"width:100%; height:200px; border:2px solid #384f49;background-color:#44635c\">                \r\n    </div>-->\r\n\r\n    <div class=\"surface\">\r\n        <div class=\"pitch\">\r\n            <div class=\"half\">\r\n                <div class=\"penalty\">\r\n                    <div class=\"goal\"><button id=\"b-lgoalkeeper\" (click)=\"onClick($event)\" class=\"btn btn-default\"><span class=ion-plus-round></span></button> </div>\r\n                    <div class=\"center\">                        \r\n                    </div>\r\n                </div><!-- penalty -->\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-4\">\r\n                        <button id=\"b-ldefender1\" (click)=\"onClick($event)\" *ngIf=\"eightASide || nineASide || tenASide || elevenASide\"\r\n                            class=\"btn btn-default\" style=\"top:5%; position:absolute; width:50px; height:50px;\"><span class=ion-plus-round></span></button>\r\n                        <button id=\"b-ldefender2\" (click)=\"onClick($event)\" *ngIf=\"fiveASide || sixASide || sevenASide || eightASide || nineASide || tenASide || elevenASide\"\r\n                            class=\"btn btn-default\" style=\"top: calc(35% - 25px); position:absolute; width:50px; height:50px;\"><span class=ion-plus-round></span></button>\r\n                        <button id=\"b-ldefender3\" (click)=\"onClick($event)\" *ngIf=\"fiveASide || sixASide || sevenASide || eightASide || nineASide || tenASide || elevenASide\"\r\n                            class=\"btn btn-default\" style=\"top: calc(65% - 25px); position:absolute; width:50px; height:50px;\"><span class=ion-plus-round></span></button>\r\n                        <button id=\"b-ldefender4\" (click)=\"onClick($event)\" *ngIf=\"eightASide || nineASide || tenASide || elevenASide\"\r\n                            class=\"btn btn-default\" style=\"top: calc(95% - 50px); position:absolute; width:50px; height:50px;\"><span class=ion-plus-round></span></button>\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <button id=\"b-lmidfielder1\" (click)=\"onClick($event)\" *ngIf=\"sixASide || sevenASide || eightASide || nineASide || tenASide || elevenASide\"\r\n                            class=\"btn btn-default\" style=\"top: 15%; z-index: 10; position:relative; width:50px; height:50px;\"><span class=ion-plus-round></span></button>\r\n                        <button id=\"b-lmidfielder2\" (click)=\"onClick($event)\" *ngIf=\"fiveASide || sevenASide || tenASide || elevenASide\"\r\n                            class=\"btn btn-default\" style=\"top: 35%; z-index: 10; position:relative; width:50px; height:50px;\"><span class=ion-plus-round></span></button>\r\n                        <button id=\"b-lmidfielder3\" (click)=\"onClick($event)\" *ngIf=\"sixASide || sevenASide || eightASide || nineASide || tenASide || elevenASide\"\r\n                            class=\"btn btn-default\" style=\"top: 55%; z-index: 10; position:relative; width:50px; height:50px;\"><span class=ion-plus-round></span></button>\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <button id=\"b-lforward1\" (click)=\"onClick($event)\" *ngIf=\"nineASide || tenASide || elevenASide\"\r\n                            class=\"btn btn-default\" style=\"top: 15%; z-index: 10; position:relative; width:50px; height:50px;\"><span class=ion-plus-round></span></button>\r\n                        <button id=\"b-lforward2\" (click)=\"onClick($event)\" *ngIf=\"fiveASide || sixASide || sevenASide || eightASide || elevenASide\"\r\n                            class=\"btn btn-default\" style=\"top: 35%; z-index: 10; position:relative; width:50px; height:50px;\"><span class=ion-plus-round></span></button>\r\n                        <button id=\"b-lforward3\" (click)=\"onClick($event)\" *ngIf=\"nineASide || tenASide || elevenASide\"\r\n                            class=\"btn btn-default\" style=\"top: 55%; z-index: 10; position:relative; width:50px; height:50px;\"><span class=ion-plus-round></span></button>\r\n                    </div>\r\n                </div><!-- row -->     \r\n            </div><!-- half -->\r\n            \r\n            \r\n\r\n            <div class=\"half\">\r\n                <div class=\"penalty\">\r\n                    <div class=\"goal\"><button button id=\"b-rgoalkeeper\" (click)=\"onClick($event)\" class=\"btn btn-default\"><span class=ion-plus-round></span></button></div>\r\n                    <div class=\"center\"></div>\r\n                </div><!-- penalty -->\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-4\">\r\n                        <button id=\"b-rdefender1\" (click)=\"onClick($event)\" class=\"btn btn-default\" style=\"top:5%; right:15px; position:absolute; width:50px; height:50px;\"><span class=ion-plus-round></span></button>\r\n                        <button id=\"b-rdefender2\" (click)=\"onClick($event)\" class=\"btn btn-default\" style=\"top: calc(35% - 25px); right:15px; position:absolute; width:50px; height:50px;\"><span class=ion-plus-round></span></button>\r\n                        <button id=\"b-rdefender3\" (click)=\"onClick($event)\" class=\"btn btn-default\" style=\"top: calc(65% - 25px); right:15px; position:absolute; width:50px; height:50px;\"><span class=ion-plus-round></span></button>\r\n                        <button id=\"b-rdefender4\" (click)=\"onClick($event)\" class=\"btn btn-default\" style=\"top: calc(95% - 50px); right:15px; position:absolute; width:50px; height:50px;\"><span class=ion-plus-round></span></button>\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <button id=\"b-rmidfielder1\" (click)=\"onClick($event)\" class=\"btn btn-default\" style=\"top: 15%; z-index: 10; right:-25px; position:relative; width:50px; height:50px;\"><span class=ion-plus-round></span></button>\r\n                        <button id=\"b-rmidfielder2\" (click)=\"onClick($event)\" class=\"btn btn-default\" style=\"top: 35%; z-index: 10; right:-25px; position:relative; width:50px; height:50px;\"><span class=ion-plus-round></span></button>\r\n                        <button id=\"b-rmidfielder3\" (click)=\"onClick($event)\" class=\"btn btn-default\" style=\"top: 55%; z-index: 10; right:-25px; position:relative; width:50px; height:50px;\"><span class=ion-plus-round></span></button>\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <button id=\"b-rforward1\" (click)=\"onClick($event)\" class=\"btn btn-default\" style=\"top: 15%; z-index: 10; right:-25px; position:relative; width:50px; height:50px;\"><span class=ion-plus-round></span></button>\r\n                        <button id=\"b-rforward2\" (click)=\"onClick($event)\" class=\"btn btn-default\" style=\"top: 35%; z-index: 10; right:-25px; position:relative; width:50px; height:50px;\"><span class=ion-plus-round></span></button>\r\n                        <button id=\"b-rforward3\" (click)=\"onClick($event)\" class=\"btn btn-default\" style=\"top: 55%; z-index: 10; right:-25px; position:relative; width:50px; height:50px;\"><span class=ion-plus-round></span></button>\r\n                    </div>\r\n                </div><!-- row -->    \r\n\r\n            </div><!-- half -->\r\n\r\n            <div class=\"center\"></div>\r\n\r\n        </div><!-- pitch -->\r\n    </div><!-- surface -->\r\n</ba-card>"

/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__book_position_component__ = __webpack_require__(956);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__football_pitch_layout_football_pitch_layout_component__ = __webpack_require__(1034);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__book_position_routing__ = __webpack_require__(1032);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_main_service__ = __webpack_require__(645);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookPositionModule", function() { return BookPositionModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var BookPositionModule = (function () {
    function BookPositionModule() {
    }
    return BookPositionModule;
}());
BookPositionModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6__book_position_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__["a" /* NgaModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__book_position_component__["a" /* BookPositionComponent */],
            __WEBPACK_IMPORTED_MODULE_5__football_pitch_layout_football_pitch_layout_component__["a" /* FootballPitchLayoutComponent */],
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_4__book_position_component__["a" /* BookPositionComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__services_main_service__["a" /* MainService */],
        ],
    })
], BookPositionModule);

//# sourceMappingURL=book-position.module.js.map

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

/***/ 956:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookPositionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BookPositionComponent = (function () {
    function BookPositionComponent() {
    }
    BookPositionComponent.prototype.ngOnInit = function () {
        this.pitchType = 'Five a Side';
    };
    return BookPositionComponent;
}());
BookPositionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'book-position',
        template: __webpack_require__(1231),
        styles: [__webpack_require__(1135)],
    })
], BookPositionComponent);

//# sourceMappingURL=book-position.component.js.map

/***/ })

});
//# sourceMappingURL=7.chunk.js.map