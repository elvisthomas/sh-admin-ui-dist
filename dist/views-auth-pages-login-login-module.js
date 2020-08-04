(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-auth-pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/auth-pages/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/auth-pages/login/login.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<!-- Page -->\r\n  <div class=\"page main-signin-wrapper\">\r\n\r\n    <!-- Row -->\r\n    <div class=\"row text-center pl-0 pr-0 ml-0 mr-0\">\r\n      <div class=\"col-lg-3 d-block mx-auto\">\r\n        <div class=\"text-center mb-2\">\r\n          <img src=\"assets/assets/img/brand/logo.png\" class=\"header-brand-img\" alt=\"logo\">\r\n        </div>\r\n        <div class=\"card custom-card\">\r\n          <div class=\"card-body\">\r\n            <h4 class=\"text-center\">Signin to Your Account</h4>\r\n            <app-alert></app-alert>\r\n            <form>\r\n              <div class=\"form-group text-left\">\r\n                <label>Email</label>\r\n                <input class=\"form-control\" placeholder=\"Enter your email\" type=\"email\" [(ngModel)]=\"loginInfo.email\" name=\"email\" required id=\"email\">\r\n              </div>\r\n              <div class=\"form-group text-left\">\r\n                <label>Password</label>\r\n                <input class=\"form-control\" placeholder=\"Enter your password\" type=\"password\" [(ngModel)]=\"loginInfo.password\" name=\"password\" required id=\"password\">\r\n              </div>\r\n              <button class=\"btn ripple btn-main-primary btn-block\" (click)=\"doSignin()\" [ngStyle]=\"{'font-weight': 'bold'}\" [disabled]=\"loginInfo.email == '' || loginInfo.password == ''\">Sign In</button>\r\n            </form>\r\n            <div class=\"mt-3 text-center\">\r\n              <!-- <p class=\"mb-1\"><a [routerLink]=\"['/forgot-password']\">Forgot password?</a></p> -->\r\n              <!-- <p class=\"mb-0\">Don't have an account? <a [routerLink]=\"['/signup']\">Create an Account</a></p> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Row -->\r\n\r\n  </div>\r\n  <!-- End Page -->"

/***/ }),

/***/ "./src/app/views/auth-pages/login/login-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/auth-pages/login/login-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/views/auth-pages/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: "", component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], data: { title: 'Login' } }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/auth-pages/login/login.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/auth-pages/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ "./src/app/views/auth-pages/login/login.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_ui_jwt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../shared-ui/jwt.service */ "./src/app/shared-ui/jwt.service.ts");
/* harmony import */ var _shared_ui_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../shared-ui/alert/alert.service */ "./src/app/shared-ui/alert/alert.service.ts");
/* harmony import */ var _layouts_home_layout_user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../layouts/home-layout/user.model */ "./src/app/layouts/home-layout/user.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, toastr, router, jwtService, alertService) {
        this.loginService = loginService;
        this.toastr = toastr;
        this.router = router;
        this.jwtService = jwtService;
        this.alertService = alertService;
        this.currentUser = new _layouts_home_layout_user_model__WEBPACK_IMPORTED_MODULE_6__["currentUser"];
        this.loginInfo = {
            email: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.currentUser = JSON.parse(this.jwtService.getCurrentUser());
        this.router.navigate(['/company/list']);
    };
    LoginComponent.prototype.doSignin = function () {
        var _this = this;
        this.alertService.clear();
        this.loginService.doSignin(this.loginInfo).subscribe(function (data) {
            if (Object.keys(data).length) {
                var userDetails = {
                    id: data.id,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    fullName: data.fullName,
                    emailAddress: data.emailAddress,
                    customerAdmin: data.customerAdmin,
                    successHackerAdmin: data.successHackerAdmin,
                };
                _this.jwtService.saveCurrentUser(JSON.stringify(userDetails));
                _this.router.navigate(['/company/list']);
            }
            else {
                _this.alertService.error('Invalid email or password!');
            }
        }, function (error) {
            _this.toastr.error('There are some server error! Please check connection.', 'Error');
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_ui_jwt_service__WEBPACK_IMPORTED_MODULE_4__["JwtService"] },
        { type: _shared_ui_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/auth-pages/login/login.component.html")
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_ui_jwt_service__WEBPACK_IMPORTED_MODULE_4__["JwtService"],
            _shared_ui_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/auth-pages/login/login.module.ts":
/*!********************************************************!*\
  !*** ./src/app/views/auth-pages/login/login.module.ts ***!
  \********************************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/views/auth-pages/login/login-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../shared-ui/shared-ui.module */ "./src/app/shared-ui/shared-ui.module.ts");
/* harmony import */ var _layouts_home_layout_ui_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../layouts/home-layout/ui.module */ "./src/app/layouts/home-layout/ui.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.component */ "./src/app/views/auth-pages/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoginRoutingModule"],
                _layouts_home_layout_ui_module__WEBPACK_IMPORTED_MODULE_5__["UiModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__["SharedUiModule"],
            ],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]],
            providers: []
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/views/auth-pages/login/login.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/auth-pages/login/login.service.ts ***!
  \*********************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _environments_static__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../environments/static */ "./src/environments/static.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BASEURL;
        this.loggedInUser = _environments_static__WEBPACK_IMPORTED_MODULE_3__["staticJson"].loggedinUser;
    }
    LoginService.prototype.doSignin = function (param) {
        if (param['email'] == 'admin@admin.com' && param['password'] == 'password') {
            return this.http.get('./assets/loggedInUser.json');
        }
        else {
            return this.http.get('./assets/notFound.json');
        }
        /* let apiURL = `${this.baseUrl}users/doSignin`;
        return this.http.post(apiURL, param); */
    };
    LoginService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/environments/static.ts":
/*!************************************!*\
  !*** ./src/environments/static.ts ***!
  \************************************/
/*! exports provided: staticJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticJson", function() { return staticJson; });
var staticJson = {
    "companies": {
        "Items": [
            {
                "Id": "1",
                "name": "Smart Axiom",
                "isActive": 1,
                "createDate": "Thu Jul 12 2020 11:04:02 GMT+0530 (India Standard Time)",
                "createdBy": { "id": 10, "fullName": "Juergen D'Souza" },
                "modifiedDate": "Thu Jul 15 2020 11:04:02 GMT+0530 (India Standard Time)",
                "modifiedBy": { "id": 10, "fullName": "Juergen D'Souza" },
                "userCount": 20,
                "groups": ["Group 1", "Group 2"]
            },
            {
                "Id": "1",
                "name": "Syska",
                "isActive": 1,
                "createDate": "Thu Jul 13 2020 11:04:02 GMT+0530 (India Standard Time)",
                "createdBy": { "id": 11, "fullName": "Jeffery Setty" },
                "modifiedDate": "Thu Jul 14 2020 11:04:02 GMT+0530 (India Standard Time)",
                "modifiedBy": { "id": 11, "fullName": "Jeffery Setty" },
                "userCount": 5,
                "groups": ["Group 2"]
            },
            {
                "Id": "1",
                "name": "LNT",
                "isActive": 0,
                "createDate": "Thu Jul 14 2020 11:04:02 GMT+0530 (India Standard Time)",
                "createdBy": { "id": 17, "fullName": "Ishraque Khan" },
                "modifiedDate": "Thu Jul 15 2020 11:04:02 GMT+0530 (India Standard Time)",
                "modifiedBy": { "id": 17, "fullName": "Ishraque Khan" },
                "userCount": 7,
                "groups": ["Group 2", "Group 3"]
            },
            {
                "Id": "1",
                "name": "BPCL",
                "isActive": 1,
                "createDate": "Thu Jul 15 2020 11:04:02 GMT+0530 (India Standard Time)",
                "createdBy": { "id": 12, "fullName": "Aby John" },
                "modifiedDate": "Thu Jul 17 2020 11:04:02 GMT+0530 (India Standard Time)",
                "modifiedBy": { "id": 12, "fullName": "Aby John" },
                "userCount": 11,
                "groups": ["Group 2"]
            },
            {
                "Id": "1",
                "name": "RVNL",
                "isActive": 0,
                "createDate": "Thu Jul 19 2020 11:04:02 GMT+0530 (India Standard Time)",
                "createdBy": { "id": 14, "fullName": "Kevin" },
                "modifiedDate": "Thu Jul 23 2020 11:04:02 GMT+0530 (India Standard Time)",
                "modifiedBy": { "id": 14, "fullName": "Kevin" },
                "userCount": 13,
                "groups": ["Group 1"]
            }
        ],
        "meta": {
            "pagination": {
                "current_page": 1,
                "next_page": 2,
                "prev_page": 0,
                "total_pages": 10,
                "total_items": 250,
                "entries_info": "1-25 of 250"
            }
        }
    },
    "users": {
        "Items": [
            {
                "id": 12,
                "firstName": "Aby",
                "lastName": "John",
                "fullName": "Aby John",
                "emailAddress": "aby@gmail.com",
                "isActive": 1,
                "customerAdmin": 1,
                "successHackerAdmin": 0,
                "createDate": "Thu Jul 19 2020 11:04:02 GMT+0530 (India Standard Time)",
                "createdBy": { "id": 1, "fullName": "John Doe" },
                "modifiedDate": "Thu Jul 19 2020 11:04:02 GMT+0530 (India Standard Time)",
                "modifiedBy": { "id": 1, "fullName": "John Doe" },
                "lastLoginDate": "Thu Jul 19 2020 11:04:02 GMT+0530 (India Standard Time)",
                "company": {
                    "Id": "1",
                    "name": "BPCL",
                    "isActive": 1,
                    "createDate": "Thu Jul 15 2020 11:04:02 GMT+0530 (India Standard Time)",
                    "createdBy": { "id": 12, "fullName": "Aby John" },
                    "modifiedDate": "Thu Jul 17 2020 11:04:02 GMT+0530 (India Standard Time)",
                    "modifiedBy": { "id": 12, "fullName": "Aby John" },
                    "userCount": 20,
                    "groups": ["Group 2"]
                },
                "groups": ["Group 2"]
            },
            {
                "id": 12,
                "firstName": "Jeffery",
                "lastName": "Setty",
                "fullName": "Jeffery Setty",
                "emailAddress": "jeffery@gmail.com",
                "isActive": 1,
                "customerAdmin": 1,
                "successHackerAdmin": 0,
                "createDate": "Thu Jul 19 2020 11:04:02 GMT+0530 (India Standard Time)",
                "createdBy": { "id": 1, "fullName": "John Doe" },
                "modifiedDate": "Thu Jul 19 2020 11:04:02 GMT+0530 (India Standard Time)",
                "modifiedBy": { "id": 1, "fullName": "John Doe" },
                "lastLoginDate": "Thu Jul 19 2020 11:04:02 GMT+0530 (India Standard Time)",
                "company": {
                    "Id": "1",
                    "name": "Syska",
                    "isActive": 1,
                    "createDate": "Thu Jul 13 2020 11:04:02 GMT+0530 (India Standard Time)",
                    "createdBy": { "id": 11, "fullName": "Jeffery Setty" },
                    "modifiedDate": "Thu Jul 14 2020 11:04:02 GMT+0530 (India Standard Time)",
                    "modifiedBy": { "id": 11, "fullName": "Jeffery Setty" },
                    "userCount": 5,
                    "groups": ["Group 2"]
                },
                "groups": ["Group 2"]
            }
        ],
        "meta": {
            "pagination": {
                "current_page": 1,
                "next_page": 2,
                "prev_page": 0,
                "total_pages": 10,
                "total_items": 250,
                "entries_info": "1-25 of 250"
            }
        }
    },
    "loggedinUser": {
        "emailAddress": "kr@friskmethods.net",
        "lastName": "Ravakoli",
        "firstName": "Kuya",
        "isSuccessHackerAdmin": 0,
        "lastSeenDate": "2019-10-05 17:28:08.310",
        "createDate": "2018-06-15 19:03:51.277",
        "company": {
            "modifiedBy": {
                "id": 3908,
                "fullName": "Data Pipeline"
            },
            "userCount": 1,
            "groups": [
                "Frisk Methods Test Group"
            ],
            "id": 1,
            "modifiedDate": "2019-02-01",
            "createdBy": {
                "id": 3908,
                "fullName": "Data Pipeline"
            },
            "createDate": "2019-01-01",
            "name": "friskmethods",
            "isActive": 1
        },
        "modifiedBy": {
            "userId": "3908",
            "fullName": "Data Pipeline"
        },
        "userId": 15,
        "fullName": "Kuya Ravakoli",
        "isCustomerAdmin": 0,
        "createdBy": {
            "userId": "3908",
            "fullName": "Data Pipeline"
        },
        "modifiedDate": "2019-10-05 17:28:08.310",
        "groups": [
            "Frisk Methods Test Group"
        ],
        "isActive": 1
    }
};


/***/ })

}]);
//# sourceMappingURL=views-auth-pages-login-login-module.js.map