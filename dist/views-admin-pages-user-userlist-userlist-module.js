(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-admin-pages-user-userlist-userlist-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/admin-pages/user/userlist/userlist.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/admin-pages/user/userlist/userlist.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" *ngIf=\"!loadingData\">\r\n\r\n  <!-- Page Header -->\r\n  <div class=\"page-header\">\r\n    <div>\r\n      <h2 class=\"main-content-title tx-24 mg-b-5\">Users</h2>\r\n    </div>\r\n  </div>\r\n  <!-- End Page Header -->\r\n\r\n  <!-- Row -->\r\n  <div class=\"row sidemenu-height\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"card custom-card\">\r\n        <div class=\"card-body\">\r\n          \r\n          <!-- SALES TABEL -->\r\n            <div class=\"col-md-12\">\r\n              <div class=\"row row-xs align-items-center mg-b-20\">\r\n                <div class=\"col-md-1\">\r\n                  <label class=\"mg-b-0\">Company:</label>\r\n                </div>\r\n                <div class=\"col-md-5 mg-t-5 mg-md-t-0\">\r\n                  <select class=\"form-control\" [(ngModel)]=\"userSearch.company\" (change)=\"getGroups(userSearch.company); getUsers();\" *ngIf=\"permission.view\">\r\n                    <option value=\"\">Select Company</option>\r\n                    <option [ngValue]=\"company\" *ngFor=\"let company of companies;\">{{ company?.companyName }}</option>\r\n                  </select>\r\n                  <input class=\"form-control\" type=\"text\" [value]=\"userSearch?.company?.companyName\" readonly *ngIf=\"!permission.view\">\r\n                </div>\r\n                <div class=\"col-md-6 mg-t-5 mg-md-t-0\">\r\n                  <div class=\"btn-icon-list\"  *ngIf=\"permission.view\">\r\n                    <button class=\"btn ripple btn-success btn-icon\" [routerLink]=\"['/company/add']\" tooltip=\"Add new company\"><i class=\"fe fe-plus\" ></i></button>\r\n                    <button class=\"btn ripple btn-primary btn-icon\" [routerLink]=\"['/company/list']\" tooltip=\"Company list\"><i class=\"fe fe-list\"></i></button>\r\n                    <button class=\"btn ripple btn-info btn-icon\" tooltip=\"Edit this company\" [routerLink]=\"['/company/edit', userSearch?.company?.companyId]\" *ngIf=\"userSearch?.company?.companyId\"><i class=\"fe fe-edit\"></i></button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            \r\n            <div class=\"col-md-12\">\r\n              <div class=\"row row-xs align-items-center mg-b-20\">\r\n                <div class=\"col-md-1\">\r\n                  <label class=\"mg-b-0\">Users:</label>\r\n                </div>\r\n                <div class=\"col-md-11 mg-t-5 mg-md-t-0\">\r\n                  <div class=\"btn-icon-list\">\r\n                    <button class=\"btn ripple btn-success btn-icon\" [routerLink]=\"['/user/add']\" tooltip=\"Add new user\"><i class=\"fe fe-plus\"></i></button>\r\n                    <button class=\"btn ripple btn-secondary btn-icon\" [disabled]=\"!selectedUsers?.length\" (click)=\"showDeleteModal('all', '')\" tooltip=\"Inactivate selected users\"><i class=\"fe fe-x\"></i></button>\r\n\r\n                    <input type=\"file\" id=\"fileSelect\" class=\"custom-file-input custom-file-select\" accept=\"image/csv\" (change)=\"uploadFile($event)\"> \r\n                    <button class=\"btn ripple btn-info btn-icon mb-0 ml-1 upload-btn\" [disabled]=\"!userSearch?.company?.companyId\" tooltip=\"Import users\"><label for=\"fileSelect\"><i class=\"far fa-arrow-alt-circle-up\"></i></label></button>\r\n\r\n                    <button class=\"btn ripple btn-info btn-icon\" (click)=\"exportData();\" [disabled]=\"!userSearch?.company?.companyId\" tooltip=\"Export users\"><i class=\"far fa-arrow-alt-circle-down\"></i></button>\r\n\r\n                    <button class=\"btn ripple btn-secondary btn-icon\" (click)=\"getUsers()\" tooltip=\"Refresh user list\"><i class=\"fe fe-refresh-ccw\"></i></button>&nbsp;&nbsp;\r\n                    \r\n                    <select class=\"form-control\" [(ngModel)]=\"userSearch.isActive\" name=\"isActive\" (change)=\"getUsers();\">\r\n                      <option value=\"\">All Users</option>\r\n                      <option value=\"1\">Active</option>\r\n                      <option value=\"0\">Inactive</option>\r\n                    </select>\r\n                    &nbsp; &nbsp; &nbsp;\r\n\r\n                    <select class=\"form-control\" [(ngModel)]=\"userSearch.group\" name=\"group\" (change)=\"getUsers();\">\r\n                      <option value=\"\">Filter by Group</option>\r\n                      <option [ngValue]=\"group\" *ngFor=\"let group of groups;\">{{ group }}</option>\r\n                    </select>\r\n                    &nbsp; &nbsp; &nbsp;\r\n\r\n                    <input type=\"text\" name=\"search\" class=\"form-control\" [(ngModel)]=\"userSearch.search\" placeholder=\"Search by name/email\" (keyup)=\"onKeySearch($event)\">\r\n                    &nbsp; &nbsp; &nbsp;\r\n\r\n                    <select class=\"form-control page-limit-bar\" [(ngModel)]=\"userSearch.limit\" name=\"limit\" (change)=\"getUsers();\">\r\n                      <option value=\"\">Limit per page</option>\r\n                      <option [ngValue]=\"25\">25</option>\r\n                      <option [ngValue]=\"50\">50</option>\r\n                      <option [ngValue]=\"100\">100</option>\r\n                      <option [ngValue]=\"150\">150</option>\r\n                      <option [ngValue]=\"200\">200</option>\r\n                    </select>\r\n                    &nbsp; &nbsp; &nbsp;\r\n\r\n                    <button class=\"btn ripple btn-secondary btn-icon\" (click)=\"clearFilter()\" tooltip=\"Clear filters\"><i class=\"fe fe-rotate-ccw\"></i></button>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n          <!-- Row -->\r\n\t\t\t\t\t<div class=\"row row-sm\" *ngIf=\"!users?.length || !userSearch.company\">\r\n            <div class=\"col-md\">\r\n              <div class=\"card custom-card card-body text-center\">\r\n                <p class=\"card-text tx-24\"> {{ !userSearch.company? 'Please select a company first!' : 'No Users' }}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- End Row -->\r\n\r\n          <div class=\"table-responsive\" *ngIf=\"users?.length\">\r\n            <table class=\"table table-striped mg-b-0\">\r\n              <thead class=\"nowrap\">\r\n                <tr>\r\n                  <th> <input type=\"checkbox\" [(ngModel)]=\"multiSelect\" name=\"multiSelect\" (click)=\"multiSelectCompany(multiSelect)\"/> </th>\r\n                  <th [class.active]=\"order === 'fullName'\" (click)=\"setOrder('fullName')\">\r\n                    Name\r\n                    <span [hidden]=\"reverse\">▼</span>\r\n                    <span [hidden]=\"!reverse\">▲</span>\r\n                  </th>\r\n                  <th> Email </th>\r\n                  <th [class.active]=\"order === 'isActive'\" (click)=\"setOrder('isActive')\">\r\n                    Active\r\n                    <span [hidden]=\"reverse\">▼</span>\r\n                    <span [hidden]=\"!reverse\">▲</span>\r\n                  </th>\r\n                  <th [class.active]=\"order === 'createdByUserId'\" (click)=\"setOrder('createdByUserId')\">\r\n                    Created By\r\n                    <span [hidden]=\"reverse\">▼</span>\r\n                    <span [hidden]=\"!reverse\">▲</span>\r\n                  </th>\r\n                  <th [class.active]=\"order === 'createDate'\" (click)=\"setOrder('createDate')\">\r\n                    Date Created\r\n                    <span [hidden]=\"reverse\">▼</span>\r\n                    <span [hidden]=\"!reverse\">▲</span>\r\n                  </th>\r\n                  <th [class.active]=\"order === 'modifiedByUserId'\" (click)=\"setOrder('modifiedByUserId')\">\r\n                    Modified By\r\n                    <span [hidden]=\"reverse\">▼</span>\r\n                    <span [hidden]=\"!reverse\">▲</span>\r\n                  </th>\r\n                  <th [class.active]=\"order === 'modifiedDate'\" (click)=\"setOrder('modifiedDate')\">\r\n                    Date Modified\r\n                    <span [hidden]=\"reverse\">▼</span>\r\n                    <span [hidden]=\"!reverse\">▲</span>\r\n                  </th>\r\n                  <th [class.active]=\"order === 'lastSeenDate'\" (click)=\"setOrder('lastSeenDate')\">\r\n                    Last Login\r\n                    <span [hidden]=\"reverse\">▼</span>\r\n                    <span [hidden]=\"!reverse\">▲</span>\r\n                  </th>\r\n                  <th> Groups </th>\r\n                  <th *ngIf=\"permission.view\"> Company </th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let user of users; let i = index;\">\r\n                  <th><input type=\"checkbox\" [(ngModel)]=\"user.added\" (change)=\"selectUser(user)\" [disabled]=\"!user.isActive\"/></th>\r\n                  <th>\r\n                    <a [routerLink]=\"['/user/edit', user.userId]\" *ngIf=\"user?.createdBy?.fullName\">{{ user?.fullName }}</a>\r\n                    <span  *ngIf=\"!user?.createdBy?.fullName\"> {{ user?.fullName }} </span>\r\n                  </th>\r\n                  <th>{{ user?.emailAddress }}</th>\r\n                  <th> {{ user?.isActive ? 'Active' : 'Inactive' }} </th>\r\n                  <th> {{ user?.createdBy?.fullName ? user?.createdBy?.fullName : 'Pending' }}</th>\r\n                  <th> {{ user?.createDate | date: 'yyyy-MM-dd' }} </th>\r\n                  <th> {{ user?.modifiedBy?.fullName }}</th>\r\n                  <th> {{ user?.modifiedDate | date: 'yyyy-MM-dd' }} </th>\r\n                  <th> {{ user?.lastSeenDate | date: 'yyyy-MM-dd  hh:mm' }} </th>\r\n                  <th><span *ngFor=\"let group of user?.company?.groups;\" title=\"{{ group }}\"> {{ group }},  </span></th>\r\n                  <th *ngIf=\"permission.view\"> {{ user?.company?.companyName }} </th>\r\n                  <th>\r\n                    <div class=\"btn-icon-list\">\r\n                      <button class=\"btn ripple btn-info btn-icon\" [routerLink]=\"['/user/edit', user?.userId]\" tooltip=\"Edit this user\"><i class=\"far fa-edit\"></i></button>\r\n                      <button class=\"btn ripple btn-secondary btn-icon\" (click)=\"showDeleteModal('single', user)\" [disabled]=\"!user.isActive\" tooltip=\"Inactivate this user\"><i class=\"fe fe-x\" ></i></button>\r\n                    </div>\r\n                  </th>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n\r\n          <div >\r\n            <div class=\"card-footer pagination-bar text-right pb-0 pt-3\">\r\n              <h3>{{ pagination?.entries_info }}</h3>\r\n              <ul *ngIf=\"pagination && pagination?.total_pages\" class=\"pagination justify-content-end\">\r\n                <li [ngClass]=\"{disabled: !pagination?.prev_page}\" class=\"page-item previous-item\" (click)=\"companySearch.page = pagination?.prev_page; getCompanies();\">\r\n                  <a class=\"page-link\">Previous</a>\r\n                </li>\r\n                <li class=\"page-item number-item active\">\r\n                  <a class=\"page-link\">{{ pagination?.current_page }}</a>\r\n                </li>\r\n                <li [ngClass]=\"{disabled: !pagination?.next_page}\" class=\"page-item next-item\" (click)=\"companySearch.page = pagination?.next_page; getCompanies();\">\r\n                  <a class=\"page-link\">Next</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n          <!-- END SALES TABEL -->\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End Row -->\r\n\r\n</div>\r\n\r\n<div bsModal [config]=\"{backdrop: 'static', keyboard: false}\"  #deleteUserModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\"\r\naria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\"><i class=\"fe fe-x\"></i> Inactivate User</h4>\r\n              <button type=\"button\" class=\"close\" (click)=\"deleteUserModal.hide();\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n              <p>Are you sure want to inactivate selected users?</p>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-light\" (click)=\"deleteUserModal.hide();\">Close</button>\r\n              <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteUser()\" *ngIf=\"userDeleteOption == 'single'\">Inactivate</button>\r\n              <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteAllUser()\" *ngIf=\"userDeleteOption == 'all'\">Inactivate</button>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- <pre [innerHtml]=\"users | json\"></pre> -->"

/***/ }),

/***/ "./src/app/views/admin-pages/user/userlist/userlist-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/admin-pages/user/userlist/userlist-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: UserlistRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserlistRoutingModule", function() { return UserlistRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _userlist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userlist.component */ "./src/app/views/admin-pages/user/userlist/userlist.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _userlist_component__WEBPACK_IMPORTED_MODULE_2__["UserlistComponent"], pathMatch: 'full' }
];
var UserlistRoutingModule = /** @class */ (function () {
    function UserlistRoutingModule() {
    }
    UserlistRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UserlistRoutingModule);
    return UserlistRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/admin-pages/user/userlist/userlist.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/views/admin-pages/user/userlist/userlist.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-file-select {\n  position: absolute;\n  left: -1000%;\n}\n\n.upload-btn label {\n  margin-bottom: -0.2rem;\n  cursor: pointer;\n}\n\n.page-limit-bar {\n  width: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYWRtaW4tcGFnZXMvdXNlci91c2VybGlzdC9EOlxceGFtcHBcXGh0ZG9jc1xcc2gtYWRtaW4tdWlcXGFuZ3VsYXIvc3JjXFxhcHBcXHZpZXdzXFxhZG1pbi1wYWdlc1xcdXNlclxcdXNlcmxpc3RcXHVzZXJsaXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9hZG1pbi1wYWdlcy91c2VyL3VzZXJsaXN0L3VzZXJsaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxzQkFBQTtFQUNBLGVBQUE7QUNFRjs7QURBQTtFQUNFLFdBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FkbWluLXBhZ2VzL3VzZXIvdXNlcmxpc3QvdXNlcmxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLWZpbGUtc2VsZWN0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogLTEwMDAlO1xyXG59XHJcbi51cGxvYWQtYnRuIGxhYmVse1xyXG4gIG1hcmdpbi1ib3R0b206IC0wLjJyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5wYWdlLWxpbWl0LWJhcntcclxuICB3aWR0aDogODBweDtcclxufSIsIi5jdXN0b20tZmlsZS1zZWxlY3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0xMDAwJTtcbn1cblxuLnVwbG9hZC1idG4gbGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiAtMC4ycmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wYWdlLWxpbWl0LWJhciB7XG4gIHdpZHRoOiA4MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/views/admin-pages/user/userlist/userlist.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/admin-pages/user/userlist/userlist.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserlistComponent", function() { return UserlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_ui_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared-ui/global.service */ "./src/app/shared-ui/global.service.ts");
/* harmony import */ var _shared_ui_models_global_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared-ui/models/global.model */ "./src/app/shared-ui/models/global.model.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _layouts_home_layout_user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../layouts/home-layout/user.model */ "./src/app/layouts/home-layout/user.model.ts");
/* harmony import */ var _shared_ui_jwt_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared-ui/jwt.service */ "./src/app/shared-ui/jwt.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var UserlistComponent = /** @class */ (function () {
    function UserlistComponent(toastr, spinner, globalService, jwtService, route) {
        var _this = this;
        this.toastr = toastr;
        this.spinner = spinner;
        this.globalService = globalService;
        this.jwtService = jwtService;
        this.route = route;
        this.permission = {
            view: false,
            edit: false,
            delete: false
        };
        this.currentUser = new _layouts_home_layout_user_model__WEBPACK_IMPORTED_MODULE_6__["currentUser"];
        this.pager = {};
        this.selectedUsers = [];
        this.order = 'fullName';
        this.reverse = true;
        this.userSearch = new _shared_ui_models_global_model__WEBPACK_IMPORTED_MODULE_4__["UserSearch"];
        this.companySearch = new _shared_ui_models_global_model__WEBPACK_IMPORTED_MODULE_4__["CompanySearch"];
        this.loadingData = false;
        this.timeout = null;
        this.currentUser = JSON.parse(this.jwtService.getCurrentUser());
        this.globalService.setLoadingLabel('Loading... Please Wait.');
        this.globalService.sendActionChildToParent('users');
        this.companySearch.user = this.currentUser.id;
        this.route.params.subscribe(function (res) {
            if (res.companyId) {
                _this.companyId = res.companyId;
            }
        });
        if (this.currentUser['isSuccessHackerAdmin']) {
            this.permission = {
                view: true,
                edit: true,
                delete: true
            };
        }
    }
    UserlistComponent.prototype.setOrder = function (value) {
        this.order = value;
        if (this.order === value) {
            this.userSearch.sortOrder = this.reverse ? "DESC" : "ASC";
            this.userSearch.sort = value;
            this.reverse = !this.reverse;
            this.getUsers();
        }
    };
    UserlistComponent.prototype.ngOnInit = function () {
        this.getCompanies();
    };
    UserlistComponent.prototype.getCompanies = function () {
        var _this = this;
        if (!this.currentUser['isSuccessHackerAdmin']) {
            this.userSearch.company = this.currentUser['company'];
        }
        else {
            this.companies = [];
            this.spinner.show();
            this.loadingData = true;
            this.globalService.getCompanies({ user: this.companySearch.user }).subscribe(function (data) {
                _this.spinner.hide();
                if (Object.keys(data).length) {
                    _this.companies = data.items;
                    var found = _this.companies.filter(function (e) { return e.companyId == _this.currentUser['company'].companyId; });
                    if (_this.companyId) {
                        var foundc = _this.companies.filter(function (e) { return e.companyId == _this.companyId; });
                        if (foundc.length) {
                            _this.userSearch.company = foundc[0];
                            _this.getGroups(_this.userSearch.company);
                            _this.getUsers();
                        }
                    }
                    else {
                        if (_this.currentUser['company']) {
                            _this.userSearch.company = found[0];
                            _this.getGroups(_this.userSearch.company);
                            _this.getUsers();
                        }
                    }
                }
            }, function (error) {
                _this.loadingData = false;
                _this.spinner.hide();
                _this.toastr.error(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].reponseCode[error.status], 'Error');
            });
        }
    };
    UserlistComponent.prototype.getGroups = function (company) {
        if (company && company.groups && company.groups.length) {
            this.groups = company.groups;
        }
    };
    UserlistComponent.prototype.getUsers = function () {
        var _this = this;
        this.users = [];
        this.pagination = {};
        if (this.userSearch.company) {
            var postObject = {
                page: this.userSearch.page,
                limit: this.userSearch.limit,
                company: this.userSearch.company.companyId,
                user: this.currentUser.id,
                group: this.userSearch.group,
                search: this.userSearch.search,
                sort: this.userSearch.sort,
                sortOrder: this.userSearch.sortOrder,
            };
            if (this.userSearch.isActive) {
                postObject['isActive'] = Number(this.userSearch.isActive);
            }
            this.globalService.setLoadingLabel('Loading... Please Wait.');
            this.spinner.show();
            this.loadingData = true;
            this.globalService.getUsers(postObject).subscribe(function (data) {
                _this.loadingData = false;
                _this.spinner.hide();
                if (data && Object.keys(data).length) {
                    _this.users = data.items;
                    _this.pagination = data.meta.pagination;
                }
            }, function (error) {
                _this.spinner.hide();
                _this.loadingData = false;
                _this.toastr.error(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].reponseCode[error.status], 'Error');
            });
        }
        else {
            alert("Please select the company first!");
        }
    };
    UserlistComponent.prototype.showDeleteModal = function (type, user) {
        this.userDeleteOption = type;
        this.selectedUser = user;
        this.deleteUserModal.show();
    };
    UserlistComponent.prototype.multiSelectCompany = function (multiSelect) {
        var _this = this;
        this.selectedUsers = [];
        this.users.forEach(function (element) {
            if (multiSelect) {
                element.added = false;
            }
            else {
                element.added = true;
                _this.selectedUsers.push(element);
            }
        });
    };
    UserlistComponent.prototype.selectUser = function (user) {
        var found = this.selectedUsers.filter(function (e) { return e.userId == user['userId']; });
        if (found.length) {
            this.selectedUsers.splice(this.selectedUsers.indexOf(found[0]), 1);
        }
        else {
            this.selectedUsers.push(user);
        }
    };
    UserlistComponent.prototype.deleteUser = function () {
        var _this = this;
        var postData = {
            firstName: this.selectedUser.firstName,
            lastName: this.selectedUser.lastName,
            emailAddress: this.selectedUser.emailAddress,
            isActive: 0,
            customerAdmin: this.selectedUser.isCustomerAdmin,
            successHackerAdmin: this.selectedUser.isSuccessHackerAdmin,
            company: this.selectedUser.company.companyId,
            groups: this.selectedUser.groups,
            modifier: this.currentUser.id,
        };
        this.globalService.setLoadingLabel('Updating... Please Wait.');
        this.spinner.show();
        this.globalService.updateUser(postData, this.selectedUser['userId']).subscribe(function (data) {
            _this.spinner.hide();
            if (data && data.modifiedBy) {
                _this.toastr.success("Data updated successfully.", "Success");
                _this.selectedUser.isActive = data.isActive;
            }
            else {
                _this.toastr.error("There are some error while updating the data!", "Error");
            }
            _this.deleteUserModal.hide();
        }, function (error) {
            _this.spinner.hide();
            _this.deleteUserModal.hide();
            _this.toastr.error(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].reponseCode[error.status], 'Error');
        });
    };
    UserlistComponent.prototype.deleteAllUser = function () {
        var _this = this;
        this.globalService.setLoadingLabel('Updating... Please Wait.');
        this.spinner.show();
        this.selectedUsers.forEach(function (element, index) {
            var postData = {
                firstName: element.firstName,
                lastName: element.lastName,
                emailAddress: element.emailAddress,
                isActive: 0,
                customerAdmin: element.isCustomerAdmin,
                successHackerAdmin: element.isSuccessHackerAdmin,
                company: element.company.companyId,
                groups: element.groups,
                modifier: _this.currentUser.id,
            };
            _this.globalService.updateUser(postData, element['userId']).subscribe(function (data) {
                if (index == _this.selectedUsers.length - 1) {
                    _this.spinner.hide();
                    _this.deleteUserModal.hide();
                    _this.getUsers();
                    _this.toastr.success("Data updated successfully.", "Success");
                }
            }, function (error) {
                _this.spinner.hide();
                _this.deleteUserModal.hide();
                _this.toastr.error(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].reponseCode[error.status], 'Error');
            });
        });
    };
    UserlistComponent.prototype.uploadFile = function ($event) {
        var _this = this;
        var file = $event.target.files[0];
        var postData = {
            company: this.userSearch.company.companyId,
            user: this.currentUser.id
        };
        this.spinner.show();
        this.globalService.uploadFile(file, postData).subscribe(function (data) {
            _this.spinner.hide();
            _this.toastr.success('Data imported successfully.', 'Success');
            _this.getUsers();
        }, function (error) {
            _this.spinner.hide();
            _this.toastr.error(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].reponseCode[error.status], 'Error');
        });
    };
    UserlistComponent.prototype.exportData = function () {
        var _this = this;
        this.globalService.setLoadingLabel('Exporting... Please Wait.');
        this.spinner.show();
        var postObject = {
            company: this.userSearch.company.companyId,
            group: this.userSearch.group,
            search: this.userSearch.search,
            user: this.currentUser.id
        };
        if (this.userSearch.isActive) {
            postObject['isActive'] = Number(this.userSearch.isActive);
        }
        console.log("postObject ---------- ", postObject);
        this.globalService.exportData(postObject).subscribe(function (data) {
            console.log("data xxxxx ============= ", data);
            _this.spinner.hide();
            if (data) {
            }
        }, function (error) {
            console.log("error ============ ", error);
            _this.spinner.hide();
            _this.toastr.error(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].reponseCode[error.status], 'Error');
        });
    };
    UserlistComponent.prototype.callUserFunction = function () {
        var time = 3000;
        if (this.userSearch.search != "") {
            setTimeout(function () {
            }, time);
        }
    };
    UserlistComponent.prototype.onKeySearch = function (event) {
        clearTimeout(this.timeout);
        var $this = this;
        this.timeout = setTimeout(function () {
            if (event.keyCode != 13) {
                $this.getUsers();
            }
        }, 1000);
    };
    UserlistComponent.prototype.clearFilter = function () {
        this.userSearch.search = "";
        this.userSearch.isActive = "";
        this.userSearch.group = "";
        this.userSearch.sort = "lastName";
        this.userSearch.sortOrder = 'ASC';
        this.reverse = true;
        this.getUsers();
    };
    UserlistComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] },
        { type: _shared_ui_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] },
        { type: _shared_ui_jwt_service__WEBPACK_IMPORTED_MODULE_7__["JwtService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("deleteUserModal", { static: false }),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDirective"])
    ], UserlistComponent.prototype, "deleteUserModal", void 0);
    UserlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userlist',
            template: __webpack_require__(/*! raw-loader!./userlist.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/admin-pages/user/userlist/userlist.component.html"),
            styles: [__webpack_require__(/*! ./userlist.component.scss */ "./src/app/views/admin-pages/user/userlist/userlist.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            _shared_ui_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"],
            _shared_ui_jwt_service__WEBPACK_IMPORTED_MODULE_7__["JwtService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]])
    ], UserlistComponent);
    return UserlistComponent;
}());



/***/ }),

/***/ "./src/app/views/admin-pages/user/userlist/userlist.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/admin-pages/user/userlist/userlist.module.ts ***!
  \********************************************************************/
/*! exports provided: UserlistModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserlistModule", function() { return UserlistModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _userlist_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userlist-routing.module */ "./src/app/views/admin-pages/user/userlist/userlist-routing.module.ts");
/* harmony import */ var _userlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userlist.component */ "./src/app/views/admin-pages/user/userlist/userlist.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var UserlistModule = /** @class */ (function () {
    function UserlistModule() {
    }
    UserlistModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_userlist_component__WEBPACK_IMPORTED_MODULE_3__["UserlistComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _userlist_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserlistRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot()
            ]
        })
    ], UserlistModule);
    return UserlistModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-admin-pages-user-userlist-userlist-module.js.map