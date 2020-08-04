(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-auth-pages-recover-password-recover-password-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/auth-pages/recover-password/recover-password.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/auth-pages/recover-password/recover-password.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page -->\r\n<div class=\"page main-signin-wrapper\">\r\n\r\n  <!-- Row -->\r\n  <div class=\"row text-center pl-0 pr-0 ml-0 mr-0\">\r\n    <div class=\"col-lg-3 col-md-12 d-block mx-auto\">\r\n      <div class=\"text-center mb-2\">\r\n        <img src=\"assets/assets/img/brand/logo.png\" class=\"header-brand-img\" alt=\"logo\">\r\n      </div>\r\n      <div class=\"card custom-card\">\r\n        <div class=\"card-body\">\r\n          <h4 class=\"text-center\">Reset Your Password</h4>\r\n          <app-alert></app-alert>\r\n          <form>\r\n            <div class=\"form-group text-left\">\r\n              <label>New Password</label>\r\n              <input class=\"form-control\" placeholder=\"Enter your password\" type=\"password\" [(ngModel)]=\"userData.password\" (keypress)=\"AvoidSpace($event)\" id=\"newPass\" name=\"newPass\">\r\n            </div>\r\n            <div class=\"form-group text-left\">\r\n              <label>Confirm Password</label>\r\n              <input class=\"form-control\" placeholder=\"Enter your password\" type=\"password\" id=\"confPass\" name=\"confPass\" [(ngModel)]=\"userData.confirmPassword\" (keypress)=\"AvoidSpace($event)\">\r\n            </div>\r\n            <button class=\"btn ripple btn-main-primary btn-block\" [disabled]=\"(userData.password == '' || userData.confirmPassword == '')\"\r\n            (click)=\"recoverPassword()\">Reset Password</button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End Row -->\r\n\r\n</div>\r\n<!-- End Page -->"

/***/ }),

/***/ "./src/app/views/auth-pages/recover-password/recover-password-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/views/auth-pages/recover-password/recover-password-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: RecoverPasswordRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoverPasswordRoutingModule", function() { return RecoverPasswordRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _recover_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recover-password.component */ "./src/app/views/auth-pages/recover-password/recover-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: "", component: _recover_password_component__WEBPACK_IMPORTED_MODULE_2__["RecoverPasswordComponent"], data: { title: 'Recover Password' } }
];
var RecoverPasswordRoutingModule = /** @class */ (function () {
    function RecoverPasswordRoutingModule() {
    }
    RecoverPasswordRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RecoverPasswordRoutingModule);
    return RecoverPasswordRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/auth-pages/recover-password/recover-password.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/views/auth-pages/recover-password/recover-password.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2F1dGgtcGFnZXMvcmVjb3Zlci1wYXNzd29yZC9yZWNvdmVyLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/auth-pages/recover-password/recover-password.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/auth-pages/recover-password/recover-password.component.ts ***!
  \*********************************************************************************/
/*! exports provided: RecoverPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoverPasswordComponent", function() { return RecoverPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _recover_password_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recover-password.service */ "./src/app/views/auth-pages/recover-password/recover-password.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_ui_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../shared-ui/global.service */ "./src/app/shared-ui/global.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_ui_alert_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../shared-ui/alert/alert.service */ "./src/app/shared-ui/alert/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RecoverPasswordComponent = /** @class */ (function () {
    function RecoverPasswordComponent(toastr, router, globalService, spinner, recoverPasswordService, route, alertService) {
        var _this = this;
        this.toastr = toastr;
        this.router = router;
        this.globalService = globalService;
        this.spinner = spinner;
        this.recoverPasswordService = recoverPasswordService;
        this.route = route;
        this.alertService = alertService;
        this.userData = {
            password: '',
            confirmPassword: ''
        };
        this.errorMessage = 'New password does not match with Confirm password';
        this.userInfo = {};
        this.expiredLinkErrorMsg = '';
        this.globalService.topscroll();
        this.route.params.subscribe(function (res) {
            _this.userId = res.userId;
            _this.link = res.token;
        });
    }
    RecoverPasswordComponent.prototype.ngOnInit = function () {
        if (this.userId && this.link) {
            this.getUsersData();
        }
    };
    RecoverPasswordComponent.prototype.getUsersData = function () {
        var _this = this;
        this.expiredLinkErrorMsg = '';
        this.spinner.show();
        this.recoverPasswordService.getUserInfo({ id: this.userId, link: this.link }).subscribe(function (data) {
            if (data.status === 200) {
                _this.userInfo = data.data;
                if (!_this.userInfo.forgotLink) {
                    _this.expiredLinkErrorMsg = 'Forgot Password Link has been expired. Please check link or again you can request for forgot password!';
                }
                _this.spinner.hide();
            }
            else {
                _this.spinner.hide();
                _this.expiredLinkErrorMsg = 'Forgot Password Link has been expired. Please check link or again you can request for forgot password!';
            }
        }, function (error) {
            _this.spinner.hide();
            _this.toastr.error('There are some server Please check connection.', 'Error');
        });
    };
    RecoverPasswordComponent.prototype.recoverPassword = function () {
        var _this = this;
        this.alertService.clear();
        if (this.userData.password != this.userData.confirmPassword) {
            this.alertService.error("*Password and Confirm Password doesn't match!");
            return;
        }
        var userNewInfo = {
            id: this.userId,
            forgotLink: '',
            forgotStatus: 0,
            password: this.userData.password,
            newPassword: this.userData.confirmPassword
        };
        this.spinner.show();
        this.recoverPasswordService.updateUser(userNewInfo).subscribe(function (data) {
            _this.spinner.hide();
            if (data.status === 200) {
                _this.toastr.success('Your password has been changed successfully. Please login to continue.', 'Success');
                _this.router.navigate(['/signin']);
            }
        }, function (error) {
            _this.spinner.hide();
            _this.toastr.error('There are some server Please check connection.', 'Error');
        });
    };
    RecoverPasswordComponent.prototype.AvoidSpace = function (event) {
        var k = event ? event.which : event.keyCode;
        if (k === 32) {
            return false;
        }
    };
    RecoverPasswordComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _shared_ui_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: _recover_password_service__WEBPACK_IMPORTED_MODULE_2__["RecoverPasswordService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _shared_ui_alert_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] }
    ]; };
    RecoverPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recover-password',
            template: __webpack_require__(/*! raw-loader!./recover-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/auth-pages/recover-password/recover-password.component.html"),
            styles: [__webpack_require__(/*! ./recover-password.component.scss */ "./src/app/views/auth-pages/recover-password/recover-password.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_ui_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _recover_password_service__WEBPACK_IMPORTED_MODULE_2__["RecoverPasswordService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_ui_alert_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]])
    ], RecoverPasswordComponent);
    return RecoverPasswordComponent;
}());



/***/ }),

/***/ "./src/app/views/auth-pages/recover-password/recover-password.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/auth-pages/recover-password/recover-password.module.ts ***!
  \******************************************************************************/
/*! exports provided: RecoverPasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoverPasswordModule", function() { return RecoverPasswordModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _recover_password_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recover-password-routing.module */ "./src/app/views/auth-pages/recover-password/recover-password-routing.module.ts");
/* harmony import */ var _layouts_home_layout_ui_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layouts/home-layout/ui.module */ "./src/app/layouts/home-layout/ui.module.ts");
/* harmony import */ var _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared-ui/shared-ui.module */ "./src/app/shared-ui/shared-ui.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _recover_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recover-password.component */ "./src/app/views/auth-pages/recover-password/recover-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var RecoverPasswordModule = /** @class */ (function () {
    function RecoverPasswordModule() {
    }
    RecoverPasswordModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_recover_password_component__WEBPACK_IMPORTED_MODULE_6__["RecoverPasswordComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _recover_password_routing_module__WEBPACK_IMPORTED_MODULE_2__["RecoverPasswordRoutingModule"],
                _layouts_home_layout_ui_module__WEBPACK_IMPORTED_MODULE_3__["UiModule"],
                _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__["SharedUiModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ]
        })
    ], RecoverPasswordModule);
    return RecoverPasswordModule;
}());



/***/ }),

/***/ "./src/app/views/auth-pages/recover-password/recover-password.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/auth-pages/recover-password/recover-password.service.ts ***!
  \*******************************************************************************/
/*! exports provided: RecoverPasswordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoverPasswordService", function() { return RecoverPasswordService; });
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



var RecoverPasswordService = /** @class */ (function () {
    function RecoverPasswordService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BASEURL;
    }
    RecoverPasswordService.prototype.getUserInfo = function (param) {
        var apiURL = this.baseUrl + "users/GetUserInfo";
        return this.http.post(apiURL, param);
    };
    RecoverPasswordService.prototype.updateUser = function (param) {
        var apiURL = this.baseUrl + "users/UpdateUser";
        return this.http.post(apiURL, param);
    };
    RecoverPasswordService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    RecoverPasswordService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RecoverPasswordService);
    return RecoverPasswordService;
}());



/***/ })

}]);
//# sourceMappingURL=views-auth-pages-recover-password-recover-password-module.js.map