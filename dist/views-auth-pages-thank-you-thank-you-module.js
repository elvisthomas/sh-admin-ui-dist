(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-auth-pages-thank-you-thank-you-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/auth-pages/thank-you/thank-you.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/auth-pages/thank-you/thank-you.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<!-- Page -->\n  <div class=\"page error-bg main-error-wrapper\">\n\n    <!-- Main-error -->\n    <div class=\"row align-items-center d-flex flex-row\">\n      <div class=\"col-lg-6 pr-lg-4 tx-lg-right\">\n        <h1 class=\"display-1 mb-0\"><img src=\"assets/assets/img/pngs/check-correct.png\" class=\"header-brand-img\" alt=\"check-correct\"></h1>\n      </div>\n      <div class=\"col-lg-6 tx-lg-left\">\n        <h2>Thank you, You have logged out successfully.</h2>\n        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>\n      </div>\n    </div>\n    <!-- End Main-error -->\n\n  </div>\n  <!-- End Page -->"

/***/ }),

/***/ "./src/app/views/auth-pages/thank-you/thank-you-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/auth-pages/thank-you/thank-you-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ThankYouRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouRoutingModule", function() { return ThankYouRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _thank_you_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./thank-you.component */ "./src/app/views/auth-pages/thank-you/thank-you.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _thank_you_component__WEBPACK_IMPORTED_MODULE_2__["ThankYouComponent"], pathMatch: 'full' }
];
var ThankYouRoutingModule = /** @class */ (function () {
    function ThankYouRoutingModule() {
    }
    ThankYouRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ThankYouRoutingModule);
    return ThankYouRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/auth-pages/thank-you/thank-you.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/views/auth-pages/thank-you/thank-you.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-brand-img {\n  height: 12rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYXV0aC1wYWdlcy90aGFuay15b3UvRDpcXHhhbXBwXFxodGRvY3NcXHNoLWFkbWluLXVpXFxhbmd1bGFyL3NyY1xcYXBwXFx2aWV3c1xcYXV0aC1wYWdlc1xcdGhhbmsteW91XFx0aGFuay15b3UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2F1dGgtcGFnZXMvdGhhbmsteW91L3RoYW5rLXlvdS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2F1dGgtcGFnZXMvdGhhbmsteW91L3RoYW5rLXlvdS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItYnJhbmQtaW1nIHtcclxuICBoZWlnaHQ6IDEycmVtO1xyXG59IiwiLmhlYWRlci1icmFuZC1pbWcge1xuICBoZWlnaHQ6IDEycmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/views/auth-pages/thank-you/thank-you.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/auth-pages/thank-you/thank-you.component.ts ***!
  \*******************************************************************/
/*! exports provided: ThankYouComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouComponent", function() { return ThankYouComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThankYouComponent = /** @class */ (function () {
    function ThankYouComponent() {
    }
    ThankYouComponent.prototype.ngOnInit = function () {
    };
    ThankYouComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-thank-you',
            template: __webpack_require__(/*! raw-loader!./thank-you.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/auth-pages/thank-you/thank-you.component.html"),
            styles: [__webpack_require__(/*! ./thank-you.component.scss */ "./src/app/views/auth-pages/thank-you/thank-you.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ThankYouComponent);
    return ThankYouComponent;
}());



/***/ }),

/***/ "./src/app/views/auth-pages/thank-you/thank-you.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/auth-pages/thank-you/thank-you.module.ts ***!
  \****************************************************************/
/*! exports provided: ThankYouModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouModule", function() { return ThankYouModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _thank_you_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./thank-you-routing.module */ "./src/app/views/auth-pages/thank-you/thank-you-routing.module.ts");
/* harmony import */ var _thank_you_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./thank-you.component */ "./src/app/views/auth-pages/thank-you/thank-you.component.ts");
/* harmony import */ var _layouts_home_layout_ui_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../layouts/home-layout/ui.module */ "./src/app/layouts/home-layout/ui.module.ts");
/* harmony import */ var _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared-ui/shared-ui.module */ "./src/app/shared-ui/shared-ui.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ThankYouModule = /** @class */ (function () {
    function ThankYouModule() {
    }
    ThankYouModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_thank_you_component__WEBPACK_IMPORTED_MODULE_3__["ThankYouComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _thank_you_routing_module__WEBPACK_IMPORTED_MODULE_2__["ThankYouRoutingModule"],
                _layouts_home_layout_ui_module__WEBPACK_IMPORTED_MODULE_4__["UiModule"],
                _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_5__["SharedUiModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ]
        })
    ], ThankYouModule);
    return ThankYouModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-auth-pages-thank-you-thank-you-module.js.map