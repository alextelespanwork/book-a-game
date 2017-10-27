webpackJsonp([12,24],{

/***/ 1030:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_football_pitch_component__ = __webpack_require__(954);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__add_football_pitch_component__["a" /* AddFootballPitchComponent */],
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=add-football-pitch.routing.js.map

/***/ }),

/***/ 1133:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".surface {\n  background: #44635c;\n  height: 520px;\n  width: 816px;\n  position: relative;\n  margin: 0 auto;\n  padding: 16px; }\n\n.pitch {\n  height: 100%;\n  width: 100%;\n  border: 1px solid white;\n  position: relative; }\n\n.half {\n  width: 50%;\n  height: 100%;\n  float: left;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.penalty {\n  width: 132px;\n  height: 320px;\n  border: 1px solid white;\n  position: relative; }\n\n.penalty:after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #44635c;\n  z-index: 0;\n  left: 0; }\n\n.penalty .center {\n  z-index: 0; }\n\n.penalty .goal {\n  z-index: 1; }\n\n.goal {\n  width: 44px;\n  height: 144px;\n  border: 1px solid white; }\n\n.center {\n  width: 144px;\n  height: 144px;\n  border: 1px solid white;\n  border-radius: 100%;\n  position: absolute;\n  top: calc(50% - 72px);\n  right: calc(50% - 72px); }\n\n.half:nth-child(1) {\n  border-right: 1px solid white; }\n\n.half:nth-child(1) .goal,\n.half:nth-child(1) .penalty {\n  border-left: none; }\n\n.half:nth-child(1) .center {\n  left: 20px;\n  right: auto; }\n\n.half:nth-child(2) {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse; }\n\n.half:nth-child(2) div {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse; }\n\n.half:nth-child(2) .goal,\n.half:nth-child(2) .penalty {\n  border-right: none; }\n\n.half:nth-child(2) .center {\n  right: 20px;\n  left: auto; }\n\n.penalty, .goal {\n  -ms-flex-item-align: center;\n      align-self: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1229:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-8\">\r\n    <div>\r\n        <ba-card baCardClass=\"with-scroll\">\r\n            <form class=\"form-horizontal\" #form=\"ngForm\">                    \r\n                <!--Name-->\r\n                <div class=\"form-group row\">\r\n                    <label for=\"inputName1\" class=\"col-sm-2 form-control-label\">Pitch Name</label>\r\n                    <div class=\"col-sm-10\" [ngClass]=\"{'has-error':name.invalid && name.touched}\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"inputName1\" name=\"name\" [(ngModel)]=\"inputName\" #name=\"ngModel\"\r\n                            placeholder=\"Pitch Name\" required>\r\n                        <span class=\"help-block\" *ngIf=\"name.invalid && name.touched\">Pitch Name is required.</span>\r\n                    </div>\r\n                </div>\r\n                <!--Address-->\r\n                <div class=\"form-group row\">\r\n                    <label for=\"inputAddress1\" class=\"col-sm-2 form-control-label\">Address</label>\r\n                    <div class=\"col-sm-10\" [ngClass]=\"{'has-error':address.invalid && address.touched}\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"inputAddress1\" name=\"address\" [(ngModel)]=\"inputAddress\" \r\n                            #address=\"ngModel\" placeholder=\"Address\" required>\r\n                        <span class=\"help-block\" *ngIf=\"address.invalid && address.touched\">Address is required.</span>                     \r\n                    </div>\r\n                </div>\r\n                <!--Pitch Type-->\r\n                <div class=\"form-group row\">\r\n                    <label for=\"inputPitchType1\" class=\"col-sm-2 form-control-label\">Pitch Type</label>\r\n                    <div class=\"col-sm-10 row\">\r\n                        <div class=\"col-sm-11\" [ngClass]=\"{'has-error':pitchType.invalid && pitchType.touched}\">\r\n                            <select class=\"form-control\" id=\"inputPitchType1\" name=\"pitchType\" [ngModel]=\"inputTypePitch\" (ngModelChange)=\"pitchTypeChanged($event)\" #pitchType=\"ngModel\" \r\n                                    placeholder=\"Pitch Type\" required >\r\n                                <option *ngFor=\"let pitchType of pitchTypes\" [ngValue]=\"pitchType\">{{pitchType.type}}</option>\r\n                            </select>\r\n                            <span class=\"help-block\" *ngIf=\"pitchType.invalid && pitchType.touched\">Pitch Type is required.</span>                              \r\n                        </div>\r\n                        <div class=\"col-sm-1\">\r\n                            <button class=\"btn btn-default\" (click)=\"addInput()\"><span class=ion-plus-round></span></button> \r\n                        </div>\r\n                    </div>                                 \r\n                </div>\r\n                <div class=\"form-group row\" *ngFor=\"let input of inputs\">\r\n                    <!--Empty label to keep the same styling-->\r\n                    <label class=\"col-sm-2 form-control-label\"></label>\r\n\r\n                    <div class=\"col-sm-10 row\">\r\n                        <div class=\"col-sm-11\" [ngClass]=\"{'has-error':pitchType.invalid && pitchType.touched}\">\r\n                                <select class=\"form-control\" id=\"input.value\" name=\"input.value\" [(ngModel)]=\"input.value\" \r\n                                        placeholder=\"Pitch Type\" required>\r\n                                    <option *ngFor=\"let pitchType of pitchTypes\" [value]=\"pitchType.type\">{{pitchType.type}}</option>\r\n                                </select>\r\n                                <span class=\"help-block\" *ngIf=\"input.value.invalid && input.value.touched\">Pitch Type is required.</span>                              \r\n                        </div>\r\n\r\n                        <div class=\"col-sm-1\">\r\n                            <button class=\"btn btn-default\" (click)=\"deleteInput(input)\"><span class=ion-minus-round></span></button>\r\n                        </div>\r\n                    </div>        \r\n                </div>\r\n\r\n                <!--Add Button-->            \r\n                <div class=\"form-group row\">\r\n                    <div class=\"offset-sm-2 col-sm-10\">\r\n                        <button class=\"btn btn-primary\" (click)=\"addPitch()\">Save Pitch</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n\r\n        </ba-card>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_football_pitch_component__ = __webpack_require__(954);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_football_pitch_routing__ = __webpack_require__(1030);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_main_service__ = __webpack_require__(645);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFootballPitchModule", function() { return AddFootballPitchModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AddFootballPitchModule = (function () {
    function AddFootballPitchModule() {
    }
    return AddFootballPitchModule;
}());
AddFootballPitchModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__add_football_pitch_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__["a" /* NgaModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__add_football_pitch_component__["a" /* AddFootballPitchComponent */],
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_4__add_football_pitch_component__["a" /* AddFootballPitchComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__services_main_service__["a" /* MainService */],
        ],
    })
], AddFootballPitchModule);

//# sourceMappingURL=add-football-pitch.module.js.map

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

/***/ 954:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_main_service__ = __webpack_require__(645);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFootballPitchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddFootballPitchComponent = (function () {
    function AddFootballPitchComponent(mainService) {
        this.mainService = mainService;
        this.inputName = new String();
        this.inputAddress = new String();
        this.inputs = [];
        this.pitchTypes = [{ id: 5, type: 'Five a Side' },
            { id: 6, type: 'Six a Side' },
            { id: 7, type: 'Seven a Side' },
            { id: 8, type: 'Eight a Side' },
            { id: 9, type: 'Nine a Side' },
            { id: 10, type: 'Ten a Side' },
            { id: 11, type: 'Eleven a Side' }];
    }
    AddFootballPitchComponent.prototype.getPitches = function () {
        var _this = this;
        this.mainService.getPitches().then(function (pitches) { return _this.pitches = pitches; });
    };
    AddFootballPitchComponent.prototype.ngOnInit = function () {
        this.inputTypePitch = this.pitchTypes[0];
        this.getPitches();
        console.log("----ngOnInit");
    };
    AddFootballPitchComponent.prototype.pitchTypeChanged = function (newInputPitchType) {
        console.log("----pitchTypeChanged");
        this.inputTypePitch = newInputPitchType;
    };
    AddFootballPitchComponent.prototype.addPitch = function () {
        //console.log(this.inputName);
        //console.log(this.inputAddress);
        //console.log(this.inputTypePitch);
        //https://scotch.io/tutorials/how-to-deal-with-different-form-controls-in-angular-2
        console.log(this.inputs);
    };
    AddFootballPitchComponent.prototype.addInput = function () {
        this.inputs.push({ value: this.pitchTypes[0].type });
    };
    AddFootballPitchComponent.prototype.deleteInput = function (input) {
        var p = this.inputs.findIndex(function (x) { return x.value === input.value; });
        this.inputs.splice(p, 1);
    };
    return AddFootballPitchComponent;
}());
AddFootballPitchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'add-football-pitch',
        template: __webpack_require__(1229),
        styles: [__webpack_require__(1133)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_main_service__["a" /* MainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_main_service__["a" /* MainService */]) === "function" && _a || Object])
], AddFootballPitchComponent);

var _a;
//# sourceMappingURL=add-football-pitch.component.js.map

/***/ })

});
//# sourceMappingURL=12.chunk.js.map