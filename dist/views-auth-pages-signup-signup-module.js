(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-auth-pages-signup-signup-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/auth-pages/signup/signup.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/auth-pages/signup/signup.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page -->\n<div class=\"page main-signin-wrapper\">\n\n  <!-- Row -->\n  <div class=\"row text-center pl-0 pr-0 ml-0 mr-0\">\n    <div class=\"col-lg-3 d-block mx-auto\">\n      <div class=\"text-center mb-2\">\n        <img src=\"../assets/assets/img/brand/logo.png\" class=\"header-brand-img\" alt=\"logo\">\n      </div>\n      <div class=\"card custom-card\">\n        <div class=\"card-body\">\n          <h4 class=\"text-center\">Signup to Your Account</h4>\n          <app-alert></app-alert>\n          <form>\n            <div class=\"form-group text-left\">\n              <!-- <label>First Name</label> -->\n              <input class=\"form-control\" name=\"firstName\" [(ngModel)]=\"userInfo.firstName\" placeholder=\"Enter your First Name\" type=\"text\">\n            </div>\n            <div class=\"form-group text-left\">\n              <!-- <label>Last Name</label> -->\n              <input class=\"form-control\" name=\"lastName\" [(ngModel)]=\"userInfo.lastName\"  placeholder=\"Enter your Last Name\" type=\"text\">\n            </div>\n            <div class=\"form-group text-left\">\n              <!-- <label>Email</label> -->\n              <input class=\"form-control\" name=\"email\" [(ngModel)]=\"userInfo.email\" placeholder=\"Enter your email\" type=\"text\" (blur)=\"isExistEmail(userInfo.email)\">\n            </div>\n            <div class=\"form-group text-left\">\n              <!-- <label>Password</label> -->\n              <input class=\"form-control\" name=\"password\" [(ngModel)]=\"userInfo.password\" placeholder=\"Enter your password\" type=\"password\">\n            </div>\n            <div class=\"form-group text-left\">\n              <!-- <label>Confirm Password</label> -->\n              <input class=\"form-control\" name=\"confirmPassword\" [(ngModel)]=\"userInfo.confirmPassword\" placeholder=\"Enter your confirm password\" type=\"password\">\n            </div>\n            <button class=\"btn ripple btn-main-primary btn-block\" (click)=\"doSignup()\">Create Account</button>\n          </form>\n          <div class=\"mt-3 text-center\">\n            <p class=\"mb-0\">Already have an account? <a [routerLink]=\"['/signin']\">Sign In</a></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- End Row -->\n\n</div>\n<!-- End Page -->"

/***/ }),

/***/ "./src/app/views/auth-pages/signup/signup-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/auth-pages/signup/signup-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: SignupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupRoutingModule", function() { return SignupRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.component */ "./src/app/views/auth-pages/signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: "", component: _signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"], data: { title: 'SignUp' } }
];
var SignupRoutingModule = /** @class */ (function () {
    function SignupRoutingModule() {
    }
    SignupRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SignupRoutingModule);
    return SignupRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/auth-pages/signup/signup.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/views/auth-pages/signup/signup.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2F1dGgtcGFnZXMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/auth-pages/signup/signup.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/auth-pages/signup/signup.component.ts ***!
  \*************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _signup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.service */ "./src/app/views/auth-pages/signup/signup.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_ui_jwt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../shared-ui/jwt.service */ "./src/app/shared-ui/jwt.service.ts");
/* harmony import */ var _shared_ui_alert_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../shared-ui/alert/alert.service */ "./src/app/shared-ui/alert/alert.service.ts");
/* harmony import */ var _layouts_home_layout_user_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../layouts/home-layout/user.model */ "./src/app/layouts/home-layout/user.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SignupComponent = /** @class */ (function () {
    function SignupComponent(signupService, toastr, router, jwtService, alertService) {
        this.signupService = signupService;
        this.toastr = toastr;
        this.router = router;
        this.jwtService = jwtService;
        this.alertService = alertService;
        this.currentUser = new _layouts_home_layout_user_model__WEBPACK_IMPORTED_MODULE_7__["currentUser"];
        this.userInfo = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
        this.isisExistingEmail = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.currentUser = JSON.parse(this.jwtService.getCurrentUser());
        if (this.currentUser && this.currentUser.userType === _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].USERTYPE.ADMIN) {
            this.router.navigate(['/dashboard']);
        }
    };
    SignupComponent.prototype.doSignup = function () {
        var _this = this;
        this.alertService.clear();
        if (this.userInfo.firstName == "" || this.userInfo.lastName == "" || this.userInfo.email == "" || this.userInfo.password == "" || this.userInfo.confirmPassword == "") {
            this.alertService.error('*Please fill all mandatory fields first!');
            return;
        }
        if (this.userInfo.password != this.userInfo.confirmPassword) {
            this.alertService.error("*Password and Confirm Password doesn't match!");
            return;
        }
        if (this.isisExistingEmail) {
            this.alertService.error("Email already exist!");
            return;
        }
        delete this.userInfo.confirmPassword;
        this.userInfo.status = 'inactive';
        this.signupService.doSignup(this.userInfo).subscribe(function (data) {
            console.log("data is: ", data);
            if (data.status == 200) {
                _this.alertService.success("Account created successfully! Please check email for verifying your email address.");
                _this.toastr.success('Account created successfully! Please check email for verifying your email address.', 'Success');
                _this.router.navigate(['/signin']);
            }
            else {
                _this.alertService.error(data.message);
            }
        }, function (error) {
            _this.toastr.error('There are some server error! Please check connection.', 'Error');
        });
    };
    SignupComponent.prototype.isExistEmail = function (email) {
        var _this = this;
        this.isisExistingEmail = false;
        this.alertService.clear();
        this.signupService.isExistEmail(this.userInfo).subscribe(function (data) {
            console.log("data is: xxxxx  ", data);
            if (data.status == 200) {
                _this.isisExistingEmail = true;
                _this.alertService.error(data.message);
                return;
            }
        });
    };
    SignupComponent.ctorParameters = function () { return [
        { type: _signup_service__WEBPACK_IMPORTED_MODULE_1__["SignupService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_ui_jwt_service__WEBPACK_IMPORTED_MODULE_5__["JwtService"] },
        { type: _shared_ui_alert_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] }
    ]; };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/auth-pages/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/views/auth-pages/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [_signup_service__WEBPACK_IMPORTED_MODULE_1__["SignupService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_ui_jwt_service__WEBPACK_IMPORTED_MODULE_5__["JwtService"],
            _shared_ui_alert_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/views/auth-pages/signup/signup.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/auth-pages/signup/signup.module.ts ***!
  \**********************************************************/
/*! exports provided: SignupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModule", function() { return SignupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/views/auth-pages/signup/signup-routing.module.ts");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.component */ "./src/app/views/auth-pages/signup/signup.component.ts");
/* harmony import */ var _layouts_home_layout_ui_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../layouts/home-layout/ui.module */ "./src/app/layouts/home-layout/ui.module.ts");
/* harmony import */ var _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared-ui/shared-ui.module */ "./src/app/shared-ui/shared-ui.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SignupModule = /** @class */ (function () {
    function SignupModule() {
    }
    SignupModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _signup_routing_module__WEBPACK_IMPORTED_MODULE_2__["SignupRoutingModule"],
                _layouts_home_layout_ui_module__WEBPACK_IMPORTED_MODULE_4__["UiModule"],
                _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_5__["SharedUiModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ]
        })
    ], SignupModule);
    return SignupModule;
}());



/***/ }),

/***/ "./src/app/views/auth-pages/signup/signup.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/auth-pages/signup/signup.service.ts ***!
  \***********************************************************/
/*! exports provided: SignupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupService", function() { return SignupService; });
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



var SignupService = /** @class */ (function () {
    function SignupService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BASEURL;
    }
    SignupService.prototype.doSignup = function (param) {
        var apiURL = this.baseUrl + "users/DoSignup";
        return this.http.post(apiURL, param);
    };
    SignupService.prototype.isExistEmail = function (param) {
        var apiURL = this.baseUrl + "users/IsExistEmail";
        return this.http.post(apiURL, param);
    };
    SignupService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    SignupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SignupService);
    return SignupService;
}());



/***/ })

}]);
//# sourceMappingURL=views-auth-pages-signup-signup-module.js.map