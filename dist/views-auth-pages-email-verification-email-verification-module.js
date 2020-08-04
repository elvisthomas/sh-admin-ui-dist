(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-auth-pages-email-verification-email-verification-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/auth-pages/email-verification/email-verification.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/auth-pages/email-verification/email-verification.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-body auth-bg\">\n  <main class=\"main form-design-1 d-flex align-items-center\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 col-8 col-md-8 mx-auto\">\n          <div class=\"pt-30 pb-70 sm-pb-50\">\n            <div class=\"no-border \">\n              <div class=\"text-center\">\n                <a class=\"navbar-brand mb-60\" [routerLink]=\"['/']\"><img alt=\"\" class=\"max-width-305\" src=\"assets/assets/img/brand/lLogo.png\" width=\"320\"></a>\n                <h1 class=\"clr-white m-0 text-uppercase title\">Email Verification</h1>\n                <br>\n                <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"emailVerificationSccessMsg\">\n                  Your Email has been verified successfully. Please login to Continue.\n                </div>\n                <!-- <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"emailVerificationSccessMsg\">\n                  Your Email Verification has been verify successfully. Please login to Continue.\n                </div> -->\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"emailVerificationErrorMsg\">\n                   Already You have done Email Verification you don't need to again. Please login to Continue.\n                </div>\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"emailVerificationInvalidMsg\">\n                   This Email Verification link is not valid. Please check link\n                </div>\n                <button type=\"button\" [routerLink]=\"['/signin']\" class=\"btn btn-primary px-4\">Login</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n</div>"

/***/ }),

/***/ "./src/app/views/auth-pages/email-verification/email-verification-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/views/auth-pages/email-verification/email-verification-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: EmailVerificationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailVerificationRoutingModule", function() { return EmailVerificationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _email_verification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-verification.component */ "./src/app/views/auth-pages/email-verification/email-verification.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: "", component: _email_verification_component__WEBPACK_IMPORTED_MODULE_2__["EmailVerificationComponent"], data: { title: 'Email Verification' } }
];
var EmailVerificationRoutingModule = /** @class */ (function () {
    function EmailVerificationRoutingModule() {
    }
    EmailVerificationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], EmailVerificationRoutingModule);
    return EmailVerificationRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/auth-pages/email-verification/email-verification.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/views/auth-pages/email-verification/email-verification.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2F1dGgtcGFnZXMvZW1haWwtdmVyaWZpY2F0aW9uL2VtYWlsLXZlcmlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/auth-pages/email-verification/email-verification.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/auth-pages/email-verification/email-verification.component.ts ***!
  \*************************************************************************************/
/*! exports provided: EmailVerificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailVerificationComponent", function() { return EmailVerificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_ui_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../shared-ui/global.service */ "./src/app/shared-ui/global.service.ts");
/* harmony import */ var _email_verification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./email-verification.service */ "./src/app/views/auth-pages/email-verification/email-verification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EmailVerificationComponent = /** @class */ (function () {
    function EmailVerificationComponent(toastr, spinner, globalService, emailVerificationService, route) {
        var _this = this;
        this.toastr = toastr;
        this.spinner = spinner;
        this.globalService = globalService;
        this.emailVerificationService = emailVerificationService;
        this.route = route;
        this.userInfo = {};
        this.userId = '';
        this.token = '';
        this.emailVerificationSccessMsg = false;
        this.emailVerificationErrorMsg = false;
        this.emailVerificationInvalidMsg = false;
        this.globalService.topscroll();
        this.route.params.subscribe(function (res) {
            _this.userId = res.userId;
            _this.token = res.token;
        });
    }
    EmailVerificationComponent.prototype.ngOnInit = function () {
        if (this.userId && this.token) {
            this.getUsersData();
        }
    };
    EmailVerificationComponent.prototype.getUsersData = function () {
        var _this = this;
        this.spinner.show();
        this.emailVerificationService.getUserInfo({ id: this.userId, token: this.token }).subscribe(function (data) {
            console.log("this.userInfo -------- ", data);
            if (data.status === 200) {
                _this.userInfo = data.data;
                if (_this.userInfo.emailVerificationStatus) {
                    _this.spinner.hide();
                    _this.emailVerificationErrorMsg = true;
                }
                else {
                    _this.emailVerificationSccessMsg = true;
                    _this.updateData();
                }
            }
            else {
                _this.spinner.hide();
                _this.emailVerificationInvalidMsg = true;
                _this.toastr.warning(data.message, 'Error');
            }
        }, function (error) {
            _this.spinner.hide();
            _this.toastr.error('There are some server error! Please check connection.', 'Error');
        });
    };
    EmailVerificationComponent.prototype.updateData = function () {
        var _this = this;
        var postData = {
            id: this.userInfo.id,
            emailVerificationStatus: 1,
            status: 'active'
        };
        console.log("postData ------------ ", postData);
        this.emailVerificationService.updateUser(postData).subscribe(function (data) {
            _this.spinner.hide();
            if (data.status === 200) {
                _this.toastr.success('Email Verification successfully. ', 'Success');
            }
        }, function (error) {
            _this.spinner.hide();
            _this.toastr.error('There are some server Please check connection.', 'Error');
        });
    };
    EmailVerificationComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] },
        { type: _shared_ui_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] },
        { type: _email_verification_service__WEBPACK_IMPORTED_MODULE_5__["EmailVerificationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    EmailVerificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-email-verification',
            template: __webpack_require__(/*! raw-loader!./email-verification.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/auth-pages/email-verification/email-verification.component.html"),
            styles: [__webpack_require__(/*! ./email-verification.component.scss */ "./src/app/views/auth-pages/email-verification/email-verification.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            _shared_ui_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"],
            _email_verification_service__WEBPACK_IMPORTED_MODULE_5__["EmailVerificationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EmailVerificationComponent);
    return EmailVerificationComponent;
}());



/***/ }),

/***/ "./src/app/views/auth-pages/email-verification/email-verification.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/views/auth-pages/email-verification/email-verification.module.ts ***!
  \**********************************************************************************/
/*! exports provided: EmailVerificationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailVerificationModule", function() { return EmailVerificationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _email_verification_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-verification-routing.module */ "./src/app/views/auth-pages/email-verification/email-verification-routing.module.ts");
/* harmony import */ var _layouts_home_layout_ui_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layouts/home-layout/ui.module */ "./src/app/layouts/home-layout/ui.module.ts");
/* harmony import */ var _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared-ui/shared-ui.module */ "./src/app/shared-ui/shared-ui.module.ts");
/* harmony import */ var _email_verification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./email-verification.component */ "./src/app/views/auth-pages/email-verification/email-verification.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var EmailVerificationModule = /** @class */ (function () {
    function EmailVerificationModule() {
    }
    EmailVerificationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_email_verification_component__WEBPACK_IMPORTED_MODULE_5__["EmailVerificationComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _email_verification_routing_module__WEBPACK_IMPORTED_MODULE_2__["EmailVerificationRoutingModule"],
                _layouts_home_layout_ui_module__WEBPACK_IMPORTED_MODULE_3__["UiModule"],
                _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__["SharedUiModule"]
            ]
        })
    ], EmailVerificationModule);
    return EmailVerificationModule;
}());



/***/ }),

/***/ "./src/app/views/auth-pages/email-verification/email-verification.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/views/auth-pages/email-verification/email-verification.service.ts ***!
  \***********************************************************************************/
/*! exports provided: EmailVerificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailVerificationService", function() { return EmailVerificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmailVerificationService = /** @class */ (function () {
    function EmailVerificationService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BASEURL;
    }
    EmailVerificationService.prototype.getUserInfo = function (param) {
        var apiURL = this.baseUrl + "users/GetUserInfo";
        return this.http.post(apiURL, param);
    };
    EmailVerificationService.prototype.updateUser = function (param) {
        var apiURL = this.baseUrl + "users/UpdateUser";
        return this.http.post(apiURL, param);
    };
    EmailVerificationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    EmailVerificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EmailVerificationService);
    return EmailVerificationService;
}());



/***/ })

}]);
//# sourceMappingURL=views-auth-pages-email-verification-email-verification-module.js.map