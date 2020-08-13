(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-auth-pages-error404-error404-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/auth-pages/error404/error404.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/auth-pages/error404/error404.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<!-- Page -->\n  <div class=\"page error-bg main-error-wrapper\">\n\n    <!-- Main-error -->\n    <div class=\"row align-items-center d-flex flex-row\">\n      <div class=\"col-lg-6 pr-lg-4 tx-lg-right\">\n        <h1 class=\"display-1 mb-0\">404</h1>\n      </div>\n      <div class=\"col-lg-6 tx-lg-left\">\n        <h2>Oops. You are not a validate user.</h2>\n        <h6>You may have mistyped the address. Please try again.</h6>\n        <!-- <a class=\"btn ripple btn-primary text-center\" href=\"index.html\">Back to Home</a> -->\n      </div>\n    </div>\n    <!-- End Main-error -->\n\n  </div>\n  <!-- End Page -->"

/***/ }),

/***/ "./src/app/views/auth-pages/error404/error404-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/auth-pages/error404/error404-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: Error404RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404RoutingModule", function() { return Error404RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _error404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error404.component */ "./src/app/views/auth-pages/error404/error404.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _error404_component__WEBPACK_IMPORTED_MODULE_2__["Error404Component"], pathMatch: 'full' }
];
var Error404RoutingModule = /** @class */ (function () {
    function Error404RoutingModule() {
    }
    Error404RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], Error404RoutingModule);
    return Error404RoutingModule;
}());



/***/ }),

/***/ "./src/app/views/auth-pages/error404/error404.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/views/auth-pages/error404/error404.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2F1dGgtcGFnZXMvZXJyb3I0MDQvZXJyb3I0MDQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/auth-pages/error404/error404.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/auth-pages/error404/error404.component.ts ***!
  \*****************************************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
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

var Error404Component = /** @class */ (function () {
    function Error404Component() {
    }
    Error404Component.prototype.ngOnInit = function () {
    };
    Error404Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error404',
            template: __webpack_require__(/*! raw-loader!./error404.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/auth-pages/error404/error404.component.html"),
            styles: [__webpack_require__(/*! ./error404.component.scss */ "./src/app/views/auth-pages/error404/error404.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Error404Component);
    return Error404Component;
}());



/***/ }),

/***/ "./src/app/views/auth-pages/error404/error404.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/auth-pages/error404/error404.module.ts ***!
  \**************************************************************/
/*! exports provided: Error404Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Module", function() { return Error404Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _error404_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error404-routing.module */ "./src/app/views/auth-pages/error404/error404-routing.module.ts");
/* harmony import */ var _error404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error404.component */ "./src/app/views/auth-pages/error404/error404.component.ts");
/* harmony import */ var _layouts_home_layout_ui_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../layouts/home-layout/ui.module */ "./src/app/layouts/home-layout/ui.module.ts");
/* harmony import */ var _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared-ui/shared-ui.module */ "./src/app/shared-ui/shared-ui.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var Error404Module = /** @class */ (function () {
    function Error404Module() {
    }
    Error404Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_error404_component__WEBPACK_IMPORTED_MODULE_3__["Error404Component"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _error404_routing_module__WEBPACK_IMPORTED_MODULE_2__["Error404RoutingModule"],
                _layouts_home_layout_ui_module__WEBPACK_IMPORTED_MODULE_4__["UiModule"],
                _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_5__["SharedUiModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ]
        })
    ], Error404Module);
    return Error404Module;
}());



/***/ })

}]);
//# sourceMappingURL=views-auth-pages-error404-error404-module.js.map