(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-auth-pages-iframe-access-iframe-access-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/auth-pages/iframe-access/iframe-access.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/auth-pages/iframe-access/iframe-access.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<!-- Page -->\r\n  <div class=\"page error-bg main-error-wrapper\">\r\n\r\n    <!-- Main-error -->\r\n    <div class=\"row align-items-center d-flex flex-row\">\r\n      <div class=\"col-lg-12 pr-lg-8 tx-lg-center\">\r\n        <h1 class=\"display-1 mb-0\"><img src=\"assets/assets/img/pngs/loading.gif\" class=\"header-brand-img\" alt=\"check-correct\"></h1>\r\n        <h2>Please wait, We are verifying your details.</h2>\r\n      </div>\r\n    </div>\r\n    <!-- End Main-error -->\r\n\r\n  </div>\r\n  <!-- End Page -->"

/***/ }),

/***/ "./src/app/views/auth-pages/iframe-access/iframe-access-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/views/auth-pages/iframe-access/iframe-access-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: IframeAccessRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IframeAccessRoutingModule", function() { return IframeAccessRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _iframe_access_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iframe-access.component */ "./src/app/views/auth-pages/iframe-access/iframe-access.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _iframe_access_component__WEBPACK_IMPORTED_MODULE_2__["IframeAccessComponent"], pathMatch: 'full' }
];
var IframeAccessRoutingModule = /** @class */ (function () {
    function IframeAccessRoutingModule() {
    }
    IframeAccessRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], IframeAccessRoutingModule);
    return IframeAccessRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/auth-pages/iframe-access/iframe-access.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/views/auth-pages/iframe-access/iframe-access.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-brand-img {\n  height: 7rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYXV0aC1wYWdlcy9pZnJhbWUtYWNjZXNzL0Q6XFx4YW1wcFxcaHRkb2NzXFxzaC1hZG1pbi11aVxcYW5ndWxhci9zcmNcXGFwcFxcdmlld3NcXGF1dGgtcGFnZXNcXGlmcmFtZS1hY2Nlc3NcXGlmcmFtZS1hY2Nlc3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2F1dGgtcGFnZXMvaWZyYW1lLWFjY2Vzcy9pZnJhbWUtYWNjZXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvYXV0aC1wYWdlcy9pZnJhbWUtYWNjZXNzL2lmcmFtZS1hY2Nlc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWJyYW5kLWltZyB7XHJcbiAgaGVpZ2h0OiA3cmVtO1xyXG59IiwiLmhlYWRlci1icmFuZC1pbWcge1xuICBoZWlnaHQ6IDdyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/views/auth-pages/iframe-access/iframe-access.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/views/auth-pages/iframe-access/iframe-access.component.ts ***!
  \***************************************************************************/
/*! exports provided: IframeAccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IframeAccessComponent", function() { return IframeAccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_ui_jwt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared-ui/jwt.service */ "./src/app/shared-ui/jwt.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_ui_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared-ui/global.service */ "./src/app/shared-ui/global.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var IframeAccessComponent = /** @class */ (function () {
    function IframeAccessComponent(jwtService, route, spinner, globalService, toastr, router) {
        var _this = this;
        this.jwtService = jwtService;
        this.route = route;
        this.spinner = spinner;
        this.globalService = globalService;
        this.toastr = toastr;
        this.router = router;
        this.possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890&$#@";
        this.lengthOfCode = 80;
        this.route.params.subscribe(function (res) {
            console.log("res ====== ", res);
            if (res.email && res.createdt) {
                _this.getAccess(res.email, res.createdt);
            }
        });
    }
    IframeAccessComponent.prototype.ngOnInit = function () {
    };
    IframeAccessComponent.prototype.getAccess = function (email, createdt) {
        var _this = this;
        this.spinner.show();
        var postObject = {
            email: email,
            createdt: createdt,
            source: 'Admin Portal'
        };
        this.globalService.getConfig(postObject).subscribe(function (configDdata) {
            _this.globalService.getAccess(postObject).subscribe(function (data) {
                console.log("data ================ ", data);
                if (data != "") {
                    _this.jwtService.saveToken(_this.makeRandom(_this.lengthOfCode, _this.possible));
                    var userDetails = {
                        id: data.userId,
                        firstName: data.firstName,
                        lastName: data.lastName,
                        fullName: data.fullName,
                        emailAddress: data.emailAddress,
                        isCustomerAdmin: data.isCustomerAdmin,
                        isSuccessHackerAdmin: data.isSuccessHackerAdmin,
                        company: data.company,
                        config: configDdata
                    };
                    userDetails.isSuccessHackerAdmin = 1;
                    _this.jwtService.saveCurrentUser(JSON.stringify(userDetails));
                    if (userDetails.isSuccessHackerAdmin) {
                        _this.router.navigate(['/company/list']);
                    }
                    else {
                        _this.router.navigate(['/user/list']);
                    }
                    _this.toastr.success("Verified successfully.", "Success");
                }
                else {
                    _this.router.navigate(['/404']);
                }
            }, function (error) {
            });
        });
    };
    IframeAccessComponent.prototype.makeRandom = function (lengthOfCode, possible) {
        var text = "";
        for (var i = 0; i < lengthOfCode; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
    IframeAccessComponent.ctorParameters = function () { return [
        { type: _shared_ui_jwt_service__WEBPACK_IMPORTED_MODULE_1__["JwtService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _shared_ui_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    IframeAccessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-iframe-access',
            template: __webpack_require__(/*! raw-loader!./iframe-access.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/auth-pages/iframe-access/iframe-access.component.html"),
            styles: [__webpack_require__(/*! ./iframe-access.component.scss */ "./src/app/views/auth-pages/iframe-access/iframe-access.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_ui_jwt_service__WEBPACK_IMPORTED_MODULE_1__["JwtService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _shared_ui_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], IframeAccessComponent);
    return IframeAccessComponent;
}());



/***/ }),

/***/ "./src/app/views/auth-pages/iframe-access/iframe-access.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/auth-pages/iframe-access/iframe-access.module.ts ***!
  \************************************************************************/
/*! exports provided: IframeAccessModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IframeAccessModule", function() { return IframeAccessModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _iframe_access_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iframe-access-routing.module */ "./src/app/views/auth-pages/iframe-access/iframe-access-routing.module.ts");
/* harmony import */ var _iframe_access_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iframe-access.component */ "./src/app/views/auth-pages/iframe-access/iframe-access.component.ts");
/* harmony import */ var _layouts_home_layout_ui_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../layouts/home-layout/ui.module */ "./src/app/layouts/home-layout/ui.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared-ui/shared-ui.module */ "./src/app/shared-ui/shared-ui.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var IframeAccessModule = /** @class */ (function () {
    function IframeAccessModule() {
    }
    IframeAccessModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_iframe_access_component__WEBPACK_IMPORTED_MODULE_3__["IframeAccessComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _iframe_access_routing_module__WEBPACK_IMPORTED_MODULE_2__["IframeAccessRoutingModule"],
                _layouts_home_layout_ui_module__WEBPACK_IMPORTED_MODULE_4__["UiModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_6__["SharedUiModule"],
            ]
        })
    ], IframeAccessModule);
    return IframeAccessModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-auth-pages-iframe-access-iframe-access-module.js.map