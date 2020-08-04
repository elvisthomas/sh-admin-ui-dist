(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-admin-pages-user-useradd-useradd-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/admin-pages/user/useradd/useradd.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/admin-pages/user/useradd/useradd.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <!-- Page Header -->\n  <div class=\"page-header\">\n    <div>\n      <h2 class=\"main-content-title tx-24 mg-b-5\">{{ user.id ? 'Edit' : 'Add' }} User</h2>\n      <!-- <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\"><a [routerLink]=\"['/dashboard']\">Home</a></li>\n        <li class=\"breadcrumb-item active\" aria-current=\"page\">Add User</li>\n      </ol> -->\n    </div>\n  </div>\n  <!-- End Page Header -->\n\n  <!-- Row -->\n  <div class=\"row sidemenu-height\">\n    <div class=\"col-lg-12\">\n      <div class=\"card custom-card\">\n        <div class=\"card-body\">\n          \n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"row row-xs mg-b-20\">\n                <div class=\"col-md-3\">\n                  <label class=\"mg-b-0\">Company:\n                    <sup> <i class=\"fa fa-star star-icon\" aria-hidden=\"true\"\n                      [ngClass]=\"{'text-danger': !user.company, 'text-primary': user.company}\"></i>\n                    </sup>\n                  </label>\n                </div>\n                <div class=\"col-md-8 mg-t-5 mg-md-t-0\">\n                  <select class=\"form-control\" [(ngModel)]=\"user.company\">\n                    <option value=\"\">Select Company</option>\n                    <option [value]=\"company?.id\" *ngFor=\"let company of companies;\">{{ company?.name }}</option>\n                  </select>\n                </div>\n                <div class=\"col-md-1 mg-t-5 mg-md-t-0\">\n                  <button class=\"btn ripple btn-success btn-icon pull-right\" [routerLink]=\"['/company/add']\"><i class=\"fe fe-plus\"></i></button>\n                </div>\n              </div>\n              <div class=\"row row-xs mg-b-20\">\n                <div class=\"col-md-3\">\n                  <label class=\"mg-b-0\">First Name:\n                    <sup> <i class=\"fa fa-star star-icon\" aria-hidden=\"true\"\n                      [ngClass]=\"{'text-danger': !user.firstName, 'text-primary': user.firstName}\"></i>\n                    </sup>\n                  </label>\n                </div>\n                <div class=\"col-md-9 mg-t-5 mg-md-t-0\">\n                  <input class=\"form-control\" placeholder=\"Enter First Name\" type=\"text\" [(ngModel)]=\"user.firstName\" name=\"firstName\">\n                </div>\n              </div>\n              <div class=\"row row-xs mg-b-20\">\n                <div class=\"col-md-3\">\n                  <label class=\"mg-b-0\">Last Name:\n                    <sup> <i class=\"fa fa-star star-icon\" aria-hidden=\"true\"\n                      [ngClass]=\"{'text-danger': !user.lastName, 'text-primary': user.lastName}\"></i>\n                    </sup>\n                  </label>\n                </div>\n                <div class=\"col-md-9 mg-t-5 mg-md-t-0\">\n                  <input class=\"form-control\" placeholder=\"Enter Last Name\" type=\"text\" [(ngModel)]=\"user.lastName\" name=\"lastName\">\n                </div>\n              </div>\n              <div class=\"row row-xs mg-b-20\">\n                <div class=\"col-md-3\">\n                  <label class=\"mg-b-0\">Email Address:\n                    <sup> <i class=\"fa fa-star star-icon\" aria-hidden=\"true\"\n                      [ngClass]=\"{'text-danger': !user.emailAddress, 'text-primary': user.emailAddress}\"></i>\n                    </sup>\n                  </label>\n                </div>\n                <div class=\"col-md-9 mg-t-5 mg-md-t-0\">\n                  <input class=\"form-control\" placeholder=\"Enter Email Address\" type=\"text\" [(ngModel)]=\"user.emailAddress\" name=\"emailAddress\" (ngModelChange)=\"checkValidEmail(user?.emailAddress)\">\n                  <p class=\"alert custom-p alert-danger validation-font-size  text-left\" role=\"alert\" *ngIf=\"!validEmail\">\n                    Your email address is invalid. Please enter a valid address.\n                  </p>\n                </div>\n              </div>\n              <div class=\"row row-xs mg-b-20\">\n                <div class=\"col-md-3\">\n                  <label class=\"mg-b-0\">Active:</label>\n                </div>\n                <div class=\"col-md-9 mg-t-5 mg-md-t-0\">\n                  <label class=\"toggle-switch\">\n                    <input type=\"checkbox\" [(ngModel)]=\"user.isActive\" name=\"isActive\">\n                    <div class=\"slider\"></div>\n                  </label>\n                </div>\n              </div>\n              <div class=\"row row-xs mg-b-20\">\n                <div class=\"col-md-3\">\n                  <label class=\"mg-b-0\">Admin:</label>\n                </div>\n                <div class=\"col-md-9 mg-t-5 mg-md-t-0\">\n                  <label class=\"toggle-switch\">\n                    <input type=\"checkbox\" [(ngModel)]=\"user.isCustomerAdmin\" name=\"isCustomerAdmin\">\n                    <div class=\"slider\"></div>\n                  </label>\n                </div>\n              </div>\n              <div class=\"row row-xs mg-b-20\">\n                <div class=\"col-md-3\">\n                  <label class=\"mg-b-0\">SuccessHacker Admin:</label>\n                </div>\n                <div class=\"col-md-9 mg-t-5 mg-md-t-0\">\n                  <label class=\"toggle-switch\">\n                    <input type=\"checkbox\" [(ngModel)]=\"user.isSuccessHackerAdmin\" name=\"isSuccessHackerAdmin\">\n                    <div class=\"slider\"></div>\n                  </label>\n                </div>\n              </div>\n              <div class=\"row row-xs mg-b-20\" *ngIf=\"user?.id\">\n                <div class=\"col-md-3\">\n                  <label class=\"mg-b-0\">Created By:</label>\n                </div>\n                <div class=\"col-md-9 mg-t-5 mg-md-t-0\">\n                  <input class=\"form-control\" [value]=\"user?.modifiedBy?.fullName\" type=\"text\" readonly>\n                </div>\n              </div>\n              <div class=\"row row-xs mg-b-20\" *ngIf=\"user?.id\">\n                <div class=\"col-md-3\">\n                  <label class=\"mg-b-0\">Modified By:</label>\n                </div>\n                <div class=\"col-md-9 mg-t-5 mg-md-t-0\">\n                  <input class=\"form-control\" [value]=\"user?.modifiedBy?.fullName\" type=\"text\" readonly>\n                </div>\n              </div>\n              <div class=\"row row-xs mg-b-20\" *ngIf=\"user?.id\">\n                <div class=\"col-md-3\">\n                  <label class=\"mg-b-0\">Last Login:</label>\n                </div>\n                <div class=\"col-md-9 mg-t-5 mg-md-t-0\">\n                  <span *ngIf=\"user?.lastSeenDate\">\n                    {{ user?.lastSeenDate | date: 'yyyy-MM-dd hh:mm' }}\n                  </span>\n                  <span *ngIf=\"!user?.lastSeenDate\">\n                    Never\n                  </span>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-md-6\">\n              <div class=\"row row-xs mg-b-20\">\n                <div class=\"col-md-12 mg-b-20\">\n                  <span>Groups:\n                    <button class=\"btn ripple btn-primary btn-icon pull-right\" *ngIf=\"user?.company\" [routerLink]=\"['/company/edit', user?.company]\"><i class=\"fe fe-list\"></i></button>\n                    <button class=\"btn ripple btn-secondary btn-icon pull-right\" (click)=\"deleteGroup()\" *ngIf=\"selectedGroups?.length\"><i class=\"fe fe-trash\"></i></button>\n                    <button class=\"btn ripple btn-success btn-icon pull-right\" (click)=\"showAddGroupModal()\"><i class=\"fe fe-plus\"></i></button>\n                  </span>\n                </div>\n                <div *ngIf=\"user?.groups?.length\">\n                  <label *ngFor=\"let group of user.groups\">\n                    <input type=\"checkbox\" (change)=\"selectGroup(group)\" /> {{ group }} &nbsp;&nbsp;\n                  </label>\n                </div>\n              </div>\n            </div>\n            \n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group row justify-content-end mb-0\">\n                <div class=\"col-md-12\">\n                  <!-- <app-alert></app-alert> -->\n                  <button class=\"btn ripple btn-light pd-x-30 pull-right\" [routerLink]=\"['/user/list']\">Cancel</button>&nbsp;&nbsp;\n                  <button class=\"btn ripple btn-primary pd-x-30 mg-r-5 pull-right\" (click)=\"saveUser()\" *ngIf=\"!user?.id\">Save</button>\n                  <button class=\"btn ripple btn-primary pd-x-30 mg-r-5 pull-right\" (click)=\"updateUser()\" *ngIf=\"user?.id\">Edit</button>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- End Row -->\n\n</div>\n\n<div bsModal [config]=\"{backdrop: 'static', keyboard: false}\"  #addGroupModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\"\naria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\"><i class=\"fa fa-plus\"></i> Add Group</h4>\n        <button type=\"button\" class=\"close\" (click)=\"addGroupModal.hide();\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"addedGroup\" name=\"addedGroup\" placeholder=\"Enter Group Name\" />\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"addGroupModal.hide();\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"addGroup()\" [disabled]=\"!addedGroup\">Add</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<pre [innerHtml]=\"user | json\"></pre>"

/***/ }),

/***/ "./src/app/views/admin-pages/user/useradd/useradd-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/admin-pages/user/useradd/useradd-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: UseraddRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseraddRoutingModule", function() { return UseraddRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _useradd_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useradd.component */ "./src/app/views/admin-pages/user/useradd/useradd.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _useradd_component__WEBPACK_IMPORTED_MODULE_2__["UseraddComponent"], pathMatch: 'full' }
];
var UseraddRoutingModule = /** @class */ (function () {
    function UseraddRoutingModule() {
    }
    UseraddRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UseraddRoutingModule);
    return UseraddRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/admin-pages/user/useradd/useradd.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/views/admin-pages/user/useradd/useradd.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toggle-switch {\n  height: 26px;\n  width: 52px;\n  display: inline-block;\n  position: relative;\n}\n.toggle-switch input {\n  display: none;\n}\n.toggle-switch input:checked + .slider {\n  background-color: #03c895;\n  border-radius: 50px;\n}\n.toggle-switch input:checked + .slider::after {\n  -webkit-transform: translateX(26px);\n  transform: translateX(26px);\n}\n.toggle-switch .slider {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: grey;\n  border-radius: 50px;\n}\n.toggle-switch .slider::after {\n  position: absolute;\n  content: \"\";\n  height: 18px;\n  width: 18px;\n  background-color: white;\n  left: 4px;\n  bottom: 4px;\n  border-radius: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYWRtaW4tcGFnZXMvdXNlci91c2VyYWRkL0Q6XFx4YW1wcFxcaHRkb2NzXFxzaC1hZG1pbi11aVxcYW5ndWxhci9zcmNcXGFwcFxcdmlld3NcXGFkbWluLXBhZ2VzXFx1c2VyXFx1c2VyYWRkXFx1c2VyYWRkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9hZG1pbi1wYWdlcy91c2VyL3VzZXJhZGQvdXNlcmFkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQUU7RUFDRSxhQUFBO0FDRUo7QURESTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUNHTjtBRERJO0VBQ0UsbUNBQUE7RUFFQSwyQkFBQTtBQ0dOO0FEQUU7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDRUo7QURESTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDR04iLCJmaWxlIjoic3JjL2FwcC92aWV3cy9hZG1pbi1wYWdlcy91c2VyL3VzZXJhZGQvdXNlcmFkZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b2dnbGUtc3dpdGNoIHtcclxuICBoZWlnaHQ6IDI2cHg7XHJcbiAgd2lkdGg6IDUycHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBpbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgJjpjaGVja2VkICsgLnNsaWRlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwM2M4OTU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAmOmNoZWNrZWQgKyAuc2xpZGVyOjphZnRlciB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zbGlkZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBsZWZ0OiA0cHg7XHJcbiAgICAgIGJvdHRvbTogNHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgfVxyXG4gIH1cclxufSIsIi50b2dnbGUtc3dpdGNoIHtcbiAgaGVpZ2h0OiAyNnB4O1xuICB3aWR0aDogNTJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udG9nZ2xlLXN3aXRjaCBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udG9nZ2xlLXN3aXRjaCBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwM2M4OTU7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG4udG9nZ2xlLXN3aXRjaCBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjo6YWZ0ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xufVxuLnRvZ2dsZS1zd2l0Y2ggLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuLnRvZ2dsZS1zd2l0Y2ggLnNsaWRlcjo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMThweDtcbiAgd2lkdGg6IDE4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBsZWZ0OiA0cHg7XG4gIGJvdHRvbTogNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/views/admin-pages/user/useradd/useradd.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/admin-pages/user/useradd/useradd.component.ts ***!
  \*********************************************************************/
/*! exports provided: UseraddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseraddComponent", function() { return UseraddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_ui_jwt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared-ui/jwt.service */ "./src/app/shared-ui/jwt.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_ui_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared-ui/global.service */ "./src/app/shared-ui/global.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _layouts_home_layout_user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../layouts/home-layout/user.model */ "./src/app/layouts/home-layout/user.model.ts");
/* harmony import */ var _shared_ui_models_global_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared-ui/models/global.model */ "./src/app/shared-ui/models/global.model.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _shared_ui_alert_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared-ui/alert/alert.service */ "./src/app/shared-ui/alert/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var UseraddComponent = /** @class */ (function () {
    function UseraddComponent(jwtService, route, spinner, globalService, toastr, alertService) {
        var _this = this;
        this.jwtService = jwtService;
        this.route = route;
        this.spinner = spinner;
        this.globalService = globalService;
        this.toastr = toastr;
        this.alertService = alertService;
        this.currentUser = new _layouts_home_layout_user_model__WEBPACK_IMPORTED_MODULE_6__["currentUser"];
        this.user = new _shared_ui_models_global_model__WEBPACK_IMPORTED_MODULE_7__["User"];
        this.selectedGroups = [];
        this.addedGroup = "";
        this.validEmail = true;
        this.currentUser = JSON.parse(this.jwtService.getCurrentUser());
        this.route.params.subscribe(function (res) {
            if (res.id) {
                _this.getUser(res.id);
            }
        });
    }
    UseraddComponent.prototype.ngOnInit = function () {
        this.getCompanies();
    };
    UseraddComponent.prototype.getCompanies = function () {
        var _this = this;
        this.spinner.show();
        this.globalService.getCompanies({}).subscribe(function (data) {
            _this.spinner.hide();
            if (Object.keys(data).length) {
                _this.companies = data.Items;
            }
        }, function (error) {
            _this.toastr.error('There are some server error! Please check connection.', 'Error');
        });
    };
    UseraddComponent.prototype.getUser = function (id) {
        var _this = this;
        this.spinner.show();
        this.globalService.getUser({ id: id }).subscribe(function (data) {
            if (Object.keys(data).length) {
                data.items.forEach(function (element) {
                    if (element['id'] == id) {
                        _this.user = element;
                        _this.user.company = element.company.id;
                    }
                });
            }
            _this.spinner.hide();
        }, function (error) {
            _this.toastr.error('There are some server error! Please check connection.', 'Error');
        });
    };
    UseraddComponent.prototype.saveUser = function () {
        this.alertService.clear();
        if (!this.user.firstName) {
            this.alertService.error('*Please fill all mandatory fields!');
        }
        var postData = {
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            emailAddress: this.user.firstName,
            isActive: this.user.isActive ? 1 : 0,
            customerAdmin: this.user.isActive ? 1 : 0,
            successHackerAdmin: this.user.isActive ? 1 : 0,
            groups: this.user.groups,
            company: this.user.company,
            creator: this.currentUser.id
        };
        this.globalService.saveUser(postData).subscribe(function (data) {
        });
    };
    UseraddComponent.prototype.updateUser = function () {
        var postData = {
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            emailAddress: this.user.firstName,
            isActive: this.user.isActive ? 1 : 0,
            customerAdmin: this.user.isActive ? 1 : 0,
            successHackerAdmin: this.user.isActive ? 1 : 0,
            groups: this.user.groups,
            company: this.user.company,
            modifier: this.currentUser.id
        };
        this.globalService.updateUser(postData, this.user['id']).subscribe(function (data) {
        });
    };
    UseraddComponent.prototype.selectGroup = function (group) {
        var found = this.selectedGroups.filter(function (e) { return e == group; });
        if (found.length) {
            this.selectedGroups.splice(this.selectedGroups.indexOf(found[0]), 1);
        }
        else {
            this.selectedGroups.push(group);
        }
    };
    UseraddComponent.prototype.showAddGroupModal = function () {
        this.addedGroup = "";
        this.addGroupModal.show();
    };
    UseraddComponent.prototype.addGroup = function () {
        this.user.groups.push(this.addedGroup);
        this.addGroupModal.hide();
    };
    UseraddComponent.prototype.deleteGroup = function () {
        var _this = this;
        if (confirm("Are you sure to delete selected groups")) {
            this.selectedGroups.forEach(function (element) {
                _this.user.groups.splice(_this.user.groups.indexOf(element), 1);
                _this.selectedGroups.splice(_this.selectedGroups.indexOf(element), 1);
            });
        }
    };
    UseraddComponent.prototype.checkValidEmail = function (email) {
        this.validEmail = this.globalService.ValidateEmail(email);
        return this.validEmail;
    };
    UseraddComponent.ctorParameters = function () { return [
        { type: _shared_ui_jwt_service__WEBPACK_IMPORTED_MODULE_1__["JwtService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _shared_ui_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _shared_ui_alert_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("addGroupModal", { static: false }),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ModalDirective"])
    ], UseraddComponent.prototype, "addGroupModal", void 0);
    UseraddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-useradd',
            template: __webpack_require__(/*! raw-loader!./useradd.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/admin-pages/user/useradd/useradd.component.html"),
            styles: [__webpack_require__(/*! ./useradd.component.scss */ "./src/app/views/admin-pages/user/useradd/useradd.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_ui_jwt_service__WEBPACK_IMPORTED_MODULE_1__["JwtService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _shared_ui_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _shared_ui_alert_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"]])
    ], UseraddComponent);
    return UseraddComponent;
}());



/***/ }),

/***/ "./src/app/views/admin-pages/user/useradd/useradd.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/admin-pages/user/useradd/useradd.module.ts ***!
  \******************************************************************/
/*! exports provided: UseraddModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseraddModule", function() { return UseraddModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _useradd_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useradd-routing.module */ "./src/app/views/admin-pages/user/useradd/useradd-routing.module.ts");
/* harmony import */ var _useradd_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useradd.component */ "./src/app/views/admin-pages/user/useradd/useradd.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var UseraddModule = /** @class */ (function () {
    function UseraddModule() {
    }
    UseraddModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_useradd_component__WEBPACK_IMPORTED_MODULE_3__["UseraddComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _useradd_routing_module__WEBPACK_IMPORTED_MODULE_2__["UseraddRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot()
            ]
        })
    ], UseraddModule);
    return UseraddModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-admin-pages-user-useradd-useradd-module.js.map