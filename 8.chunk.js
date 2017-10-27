webpackJsonp([8,24],{

/***/ 1035:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__football_pitches_component__ = __webpack_require__(958);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__football_pitches_component__["a" /* FootballPitchesComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=football-pitches.routing.js.map

/***/ }),

/***/ 1036:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NameSearchPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NameSearchPipe = (function () {
    function NameSearchPipe() {
    }
    NameSearchPipe.prototype.transform = function (items, filter) {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(function (item) { return item.name.toLowerCase().includes(filter)
            || item.address.toLowerCase().includes(filter); });
    };
    return NameSearchPipe;
}());
NameSearchPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'namesearch',
        pure: false,
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], NameSearchPipe);

//# sourceMappingURL=name-search.pipe.js.map

/***/ }),

/***/ 1138:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".google-maps-pitch {\n  width: 100%;\n  height: 500px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1234:
/***/ (function(module, exports) {

module.exports = "<div class=\"widgets\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n        <ba-card title=\"Search for a Pitch\" class=\"football-pitches\">          \r\n          <div *ngIf=\"pitches\">\r\n            <div class=\"form-group row\">\r\n              <input #searchBox id=\"search-box\" class=\"form-control form-control-rounded\" \r\n                    [(ngModel)]=\"searchInput\" placeholder=\"Search for pitch name\"/>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <button class=\"btn btn-default\" style=\"width: 100%;white-space: normal;\"\r\n                      *ngFor=\"let pitch of pitches | namesearch:searchInput\"\r\n                      (click)=\"showMapForPitch(pitch)\"\r\n                      [class.active]=\"pitch === activePitch\">                    \r\n                      <div>{{pitch.name}}</div> \r\n              </button>\r\n            </div>\r\n            <br>\r\n          </div>   \r\n        </ba-card>     \r\n    </div>\r\n    <div class=\"col-sm-8\">\r\n      <div *ngIf=\"activePitch\">        \r\n        <ba-card title=\"Pitch Address\" class=\"football-pitches\">\r\n          <h3>Address: <span class=\"badge badge-default\">{{activePitch.address}}</span></h3>          \r\n\r\n          <div>\r\n            <button class=\"btn btn-primary\" (click)=\"bookgame(activePitch)\">\r\n              Book a Game\r\n            </button>\r\n          </div>\r\n\r\n          <div #googlemap class=\"google-maps-pitch\"></div>\r\n        </ba-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 630:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__football_pitches_component__ = __webpack_require__(958);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__football_pitches_routing__ = __webpack_require__(1035);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__name_search_pipe__ = __webpack_require__(1036);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_main_service__ = __webpack_require__(645);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootballPitchesModule", function() { return FootballPitchesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var FootballPitchesModule = (function () {
    function FootballPitchesModule() {
    }
    return FootballPitchesModule;
}());
FootballPitchesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__football_pitches_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__["a" /* NgaModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__football_pitches_component__["a" /* FootballPitchesComponent */],
            __WEBPACK_IMPORTED_MODULE_6__name_search_pipe__["a" /* NameSearchPipe */],
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_4__football_pitches_component__["a" /* FootballPitchesComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__services_main_service__["a" /* MainService */],
        ],
    })
], FootballPitchesModule);

//# sourceMappingURL=football-pitches.module.js.map

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

/***/ 694:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {

	if (root === null) {
		throw new Error('Google-maps package can be used only in browser');
	}

	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.GoogleMapsLoader = factory();
	}

})(typeof window !== 'undefined' ? window : null, function() {


	'use strict';


	var googleVersion = '3.18';

	var script = null;

	var google = null;

	var loading = false;

	var callbacks = [];

	var onLoadEvents = [];

	var originalCreateLoaderMethod = null;


	var GoogleMapsLoader = {};


	GoogleMapsLoader.URL = 'https://maps.googleapis.com/maps/api/js';

	GoogleMapsLoader.KEY = null;

	GoogleMapsLoader.LIBRARIES = [];

	GoogleMapsLoader.CLIENT = null;

	GoogleMapsLoader.CHANNEL = null;

	GoogleMapsLoader.LANGUAGE = null;

	GoogleMapsLoader.REGION = null;

	GoogleMapsLoader.VERSION = googleVersion;

	GoogleMapsLoader.WINDOW_CALLBACK_NAME = '__google_maps_api_provider_initializator__';


	GoogleMapsLoader._googleMockApiObject = {};


	GoogleMapsLoader.load = function(fn) {
		if (google === null) {
			if (loading === true) {
				if (fn) {
					callbacks.push(fn);
				}
			} else {
				loading = true;

				window[GoogleMapsLoader.WINDOW_CALLBACK_NAME] = function() {
					ready(fn);
				};

				GoogleMapsLoader.createLoader();
			}
		} else if (fn) {
			fn(google);
		}
	};


	GoogleMapsLoader.createLoader = function() {
		script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = GoogleMapsLoader.createUrl();

		document.body.appendChild(script);
	};


	GoogleMapsLoader.isLoaded = function() {
		return google !== null;
	};


	GoogleMapsLoader.createUrl = function() {
		var url = GoogleMapsLoader.URL;

		url += '?callback=' + GoogleMapsLoader.WINDOW_CALLBACK_NAME;

		if (GoogleMapsLoader.KEY) {
			url += '&key=' + GoogleMapsLoader.KEY;
		}

		if (GoogleMapsLoader.LIBRARIES.length > 0) {
			url += '&libraries=' + GoogleMapsLoader.LIBRARIES.join(',');
		}

		if (GoogleMapsLoader.CLIENT) {
			url += '&client=' + GoogleMapsLoader.CLIENT + '&v=' + GoogleMapsLoader.VERSION;
		}

		if (GoogleMapsLoader.CHANNEL) {
			url += '&channel=' + GoogleMapsLoader.CHANNEL;
		}

		if (GoogleMapsLoader.LANGUAGE) {
			url += '&language=' + GoogleMapsLoader.LANGUAGE;
		}

		if (GoogleMapsLoader.REGION) {
			url += '&region=' + GoogleMapsLoader.REGION;
		}

		return url;
	};


	GoogleMapsLoader.release = function(fn) {
		var release = function() {
			GoogleMapsLoader.KEY = null;
			GoogleMapsLoader.LIBRARIES = [];
			GoogleMapsLoader.CLIENT = null;
			GoogleMapsLoader.CHANNEL = null;
			GoogleMapsLoader.LANGUAGE = null;
			GoogleMapsLoader.REGION = null;
			GoogleMapsLoader.VERSION = googleVersion;

			google = null;
			loading = false;
			callbacks = [];
			onLoadEvents = [];

			if (typeof window.google !== 'undefined') {
				delete window.google;
			}

			if (typeof window[GoogleMapsLoader.WINDOW_CALLBACK_NAME] !== 'undefined') {
				delete window[GoogleMapsLoader.WINDOW_CALLBACK_NAME];
			}

			if (originalCreateLoaderMethod !== null) {
				GoogleMapsLoader.createLoader = originalCreateLoaderMethod;
				originalCreateLoaderMethod = null;
			}

			if (script !== null) {
				script.parentElement.removeChild(script);
				script = null;
			}

			if (fn) {
				fn();
			}
		};

		if (loading) {
			GoogleMapsLoader.load(function() {
				release();
			});
		} else {
			release();
		}
	};


	GoogleMapsLoader.onLoad = function(fn) {
		onLoadEvents.push(fn);
	};


	GoogleMapsLoader.makeMock = function() {
		originalCreateLoaderMethod = GoogleMapsLoader.createLoader;

		GoogleMapsLoader.createLoader = function() {
			window.google = GoogleMapsLoader._googleMockApiObject;
			window[GoogleMapsLoader.WINDOW_CALLBACK_NAME]();
		};
	};


	var ready = function(fn) {
		var i;

		loading = false;

		if (google === null) {
			google = window.google;
		}

		for (i = 0; i < onLoadEvents.length; i++) {
			onLoadEvents[i](google);
		}

		if (fn) {
			fn(google);
		}

		for (i = 0; i < callbacks.length; i++) {
			callbacks[i](google);
		}

		callbacks = [];
	};


	return GoogleMapsLoader;

});


/***/ }),

/***/ 958:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_google_maps__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_google_maps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_google_maps__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_main_service__ = __webpack_require__(645);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FootballPitchesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FootballPitchesComponent = (function () {
    function FootballPitchesComponent(mainService) {
        this.mainService = mainService;
    }
    FootballPitchesComponent.prototype.getPitches = function () {
        var _this = this;
        this.mainService.getPitches().then(function (pitches) { return _this.pitches = pitches; });
    };
    FootballPitchesComponent.prototype.ngOnInit = function () {
        this.getPitches();
    };
    FootballPitchesComponent.prototype.showMapForPitch = function (pitch) {
        var _this = this;
        this.activePitch = pitch;
        //This is used when you know the lat and lng
        // GoogleMapsLoader.load((google) => {            
        //     var uluru = {lat: -34.397, lng: 150.644};
        //     var map = new google.maps.Map(this.el.nativeElement, {
        //         center: {lat: -34.397, lng: 150.644},
        //         zoom: 8            
        //     });
        //     var marker = new google.maps.Marker({
        //         position: uluru,
        //         map: map
        //     });
        // });
        __WEBPACK_IMPORTED_MODULE_1_google_maps__["load"](function (google) {
            var geocoder = new google.maps.Geocoder();
            var address = _this.activePitch.address;
            var uluru = { lat: -34.397, lng: 150.644 };
            var resultsMap = new google.maps.Map(_this.el.nativeElement, {
                zoom: 15
            });
            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status === 'OK') {
                    resultsMap.setCenter(results[0].geometry.location);
                    var marker = new google.maps.Marker({
                        map: resultsMap,
                        position: results[0].geometry.location
                    });
                }
                else {
                    //alert('Geocode was not successful for the following reason: ' + status);
                    alert('The address is not a valid address. Please contact the website manager.');
                }
            });
        });
    };
    FootballPitchesComponent.prototype.onPitchCreated = function (event) {
        this.pitches.push(event.pitch);
    };
    return FootballPitchesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('googlemap'),
    __metadata("design:type", Object)
], FootballPitchesComponent.prototype, "el", void 0);
FootballPitchesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'football-pitches',
        template: __webpack_require__(1234),
        styles: [__webpack_require__(1138)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_main_service__["a" /* MainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_main_service__["a" /* MainService */]) === "function" && _a || Object])
], FootballPitchesComponent);

var _a;
//# sourceMappingURL=football-pitches.component.js.map

/***/ })

});
//# sourceMappingURL=8.chunk.js.map