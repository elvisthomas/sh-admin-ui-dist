(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-admin-pages-user-userlist-userlist-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/admin-pages/user/userlist/userlist.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/admin-pages/user/userlist/userlist.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\r\n  <!-- Page Header -->\r\n  <div class=\"page-header\">\r\n    <div>\r\n      <h2 class=\"main-content-title tx-24 mg-b-5\">Users</h2>\r\n    </div>\r\n  </div>\r\n  <!-- End Page Header -->\r\n\r\n  <!-- Row -->\r\n  <div class=\"row sidemenu-height\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"card custom-card\">\r\n        <div class=\"card-body\">\r\n          \r\n          <!-- SALES TABEL -->\r\n            <div class=\"col-md-12\">\r\n              <div class=\"row row-xs align-items-center mg-b-20\">\r\n                <div class=\"col-md-1\">\r\n                  <label class=\"mg-b-0\">Company:</label>\r\n                </div>\r\n                <div class=\"col-md-5 mg-t-5 mg-md-t-0\">\r\n                  <select class=\"form-control\" [(ngModel)]=\"userSearch.company\" (change)=\"getGroups(userSearch.company); getUsers();\" *ngIf=\"permission.view\">\r\n                    <option value=\"\">Select Company</option>\r\n                    <option [ngValue]=\"company\" *ngFor=\"let company of companies;\">{{ company?.companyName }}</option>\r\n                  </select>\r\n                  <input class=\"form-control\" type=\"text\" [value]=\"userSearch?.company?.companyName\" readonly *ngIf=\"!permission.view\">\r\n                </div>\r\n                <div class=\"col-md-6 mg-t-5 mg-md-t-0\">\r\n                  <div class=\"btn-icon-list\"  *ngIf=\"permission.view\">\r\n                    <button class=\"btn ripple btn-success btn-icon\" [routerLink]=\"['/company/add']\"><i class=\"fe fe-plus\"></i></button>\r\n                    <button class=\"btn ripple btn-primary btn-icon\" [routerLink]=\"['/company/list']\"><i class=\"fe fe-list\"></i></button>\r\n                    <button class=\"btn ripple btn-info btn-icon\" [routerLink]=\"['/company/edit', userSearch?.company?.companyId]\" *ngIf=\"userSearch?.company?.companyId\"><i class=\"fe fe-edit\"></i></button>\r\n                    <button class=\"btn ripple btn-secondary btn-icon\" (click)=\"getUsers()\"><i class=\"fe fe-refresh-ccw\"></i></button>\r\n                  </div>\r\n                  <div class=\"btn-icon-list\"  *ngIf=\"!permission.view\">\r\n                    <button class=\"btn ripple btn-secondary btn-icon\" (click)=\"getUsers()\" title=\"Refresh users list\"><i class=\"fe fe-refresh-ccw\"></i></button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            \r\n            <div class=\"col-md-12\">\r\n              <div class=\"row row-xs align-items-center mg-b-20\">\r\n                <div class=\"col-md-1\">\r\n                  <label class=\"mg-b-0\">Users:</label>\r\n                </div>\r\n                <div class=\"col-md-2 mg-t-5 mg-md-t-0\">\r\n                  <div class=\"btn-icon-list\">\r\n                    <button class=\"btn ripple btn-success btn-icon\" [routerLink]=\"['/user/add']\" title=\"Add new user\"><i class=\"fe fe-plus\"></i></button>\r\n                    <button class=\"btn ripple btn-secondary btn-icon\" *ngIf=\"selectedUsers?.length\" (click)=\"showDeleteModal('all', '')\" title=\"Inactive user\"><i class=\"fe fe-x\"></i></button>\r\n                    <input type=\"file\" id=\"fileSelect\" class=\"custom-file-input custom-file-select\" accept=\"image/csv\" (change)=\"uploadFile($event)\"> \r\n                    <button class=\"btn ripple btn-info btn-icon mb-0 ml-1 upload-btn\" [disabled]=\"!userSearch?.company?.companyId\" title=\"Import users\"><label for=\"fileSelect\"><i class=\"far fa-arrow-alt-circle-up\"></i></label></button>\r\n                    <button class=\"btn ripple btn-info btn-icon\" (click)=\"exportData();\" [disabled]=\"!userSearch?.company?.companyId\" title=\"Export users\"><i class=\"far fa-arrow-alt-circle-down\"></i></button>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-2 mg-t-5 mg-md-t-0\">\r\n                  <select class=\"form-control\" [(ngModel)]=\"userSearch.active\" name=\"active\" (change)=\"getUsers();\">\r\n                    <option value=\"\">All Users</option>\r\n                    <option value=\"1\">Active</option>\r\n                    <option value=\"0\">inactive</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"col-md-2 mg-t-5 mg-md-t-0\">\r\n                  <select class=\"form-control\" [(ngModel)]=\"userSearch.group\" name=\"group\" (change)=\"getUsers();\">\r\n                    <option value=\"\">Select Group</option>\r\n                    <option [ngValue]=\"group\" *ngFor=\"let group of groups;\">{{ group }}</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"col-md-2 mg-t-5 mg-md-t-0\">\r\n                  <input type=\"text\" name=\"search\" class=\"form-control\" [(ngModel)]=\"userSearch.search\" placeholder=\"Please enter text value\" (focusout)=\"getUsers()\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n          <!-- Row -->\r\n\t\t\t\t\t<div class=\"row row-sm\" *ngIf=\"!users?.length || !userSearch.company\">\r\n            <div class=\"col-md\">\r\n              <div class=\"card custom-card card-body text-center\">\r\n                <p class=\"card-text tx-24\"> {{ !userSearch.company? 'Please select a company first!' : 'No data found!' }}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- End Row -->\r\n\r\n          <div class=\"table-responsive\" *ngIf=\"users?.length\">\r\n            <table class=\"table table-striped mg-b-0\">\r\n              <thead class=\"nowrap\">\r\n                <tr>\r\n                  <th> <input type=\"checkbox\" [(ngModel)]=\"multiSelect\" name=\"multiSelect\" (click)=\"multiSelectCompany(multiSelect)\"/> </th>\r\n                  <th [class.active]=\"order === 'name'\" (click)=\"setOrder('name')\">\r\n                    Name\r\n                    <span [hidden]=\"reverse\">▼</span>\r\n                    <span [hidden]=\"!reverse\">▲</span>\r\n                  </th>\r\n                  <th [class.active]=\"order === 'email'\" (click)=\"setOrder('email')\">\r\n                    Email\r\n                    <span [hidden]=\"reverse\">▼</span>\r\n                    <span [hidden]=\"!reverse\">▲</span>\r\n                  </th>\r\n                  <th [class.active]=\"order === 'status'\" (click)=\"setOrder('status')\">\r\n                    Active\r\n                    <span [hidden]=\"reverse\">▼</span>\r\n                    <span [hidden]=\"!reverse\">▲</span>\r\n                  </th>\r\n                  <th [class.active]=\"order === 'createdBy'\" (click)=\"setOrder('createdBy')\">\r\n                    Created By\r\n                    <span [hidden]=\"reverse\">▼</span>\r\n                    <span [hidden]=\"!reverse\">▲</span>\r\n                  </th>\r\n                  <th [class.active]=\"order === 'dateCreated'\" (click)=\"setOrder('dateCreated')\">\r\n                    Date Created\r\n                    <span [hidden]=\"reverse\">▼</span>\r\n                    <span [hidden]=\"!reverse\">▲</span>\r\n                  </th>\r\n                  <th [class.active]=\"order === 'modifiedBy'\" (click)=\"setOrder('modifiedBy')\">\r\n                    Modified By\r\n                    <span [hidden]=\"reverse\">▼</span>\r\n                    <span [hidden]=\"!reverse\">▲</span>\r\n                  </th>\r\n                  <th [class.active]=\"order === 'modifiedDate'\" (click)=\"setOrder('modifiedDate')\">\r\n                    Date Modified\r\n                    <span [hidden]=\"reverse\">▼</span>\r\n                    <span [hidden]=\"!reverse\">▲</span>\r\n                  </th>\r\n                  <th [class.active]=\"order === 'lastlogin'\" (click)=\"setOrder('lastlogin')\">\r\n                    Last Login\r\n                    <span [hidden]=\"reverse\">▼</span>\r\n                    <span [hidden]=\"!reverse\">▲</span>\r\n                  </th>\r\n                  <th [class.active]=\"order === 'groups'\" (click)=\"setOrder('groups')\">\r\n                    Groups\r\n                    <span [hidden]=\"reverse\">▼</span>\r\n                    <span [hidden]=\"!reverse\">▲</span>\r\n                  </th>\r\n                  <th [class.active]=\"order === 'company'\" (click)=\"setOrder('company')\"  *ngIf=\"permission.view\">\r\n                    Company\r\n                    <span [hidden]=\"reverse\">▼</span>\r\n                    <span [hidden]=\"!reverse\">▲</span>\r\n                  </th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let user of users; let i = index;\">\r\n                  <th><input type=\"checkbox\" [(ngModel)]=\"user.added\" value=\"{{ user.userId }}\" (change)=\"selectUser(user)\" *ngIf=\"user.isActive\"/></th>\r\n                  <th>\r\n                    <a [routerLink]=\"['/user/edit', user.userId]\" *ngIf=\"user?.createdBy?.fullName\">{{ user?.fullName }}</a>\r\n                    <span  *ngIf=\"!user?.createdBy?.fullName\"> {{ user?.fullName }} </span>\r\n                  </th>\r\n                  <th>{{ user?.emailAddress }}</th>\r\n                  <th [ngClass]=\"{'text-danger': user?.isActive == 0, 'text-primary': user?.isActive == 1 }\"> {{ user?.isActive ? 'Active' : 'Inactive' }} </th>\r\n                  <th> {{ user?.createdBy?.fullName ? user?.createdBy?.fullName : 'Pending' }}</th>\r\n                  <!-- <th> {{ user?.createDate ? user?.createDate | date: 'yyyy-MM-dd' : '' }} </th> -->\r\n                  <th> {{ user?.modifiedBy?.fullName }}</th>\r\n                  <th> {{ user?.modifiedDate | date: 'yyyy-MM-dd' }} </th>\r\n                  <th> {{ user?.lastSeenDate | date: 'yyyy-MM-dd  hh:mm' }} </th>\r\n                  <th><span *ngFor=\"let group of user?.company?.groups;\" title=\"{{ group }}\"> {{ group }},  </span></th>\r\n                  <th *ngIf=\"permission.view\"> {{ user?.company?.companyName }} </th>\r\n                  <th>\r\n                    <div class=\"btn-icon-list\">\r\n                      <button class=\"btn ripple btn-secondary btn-icon\" (click)=\"showDeleteModal(single, user)\" *ngIf=\"user.isActive\" title=\"Inactive user\"><i class=\"fe fe-x\" ></i></button>\r\n                      <button class=\"btn ripple btn-info btn-icon\" [routerLink]=\"['/user/edit', user?.userId]\" title=\"Edit user\"><i class=\"far fa-edit\"></i></button>\r\n                    </div>\r\n                  </th>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n\r\n          <div >\r\n            <div class=\"card-footer pagination-bar text-right pb-0 pt-3\">\r\n              <h3>{{ pagination?.entries_info }}</h3>\r\n              <ul *ngIf=\"pagination && pagination?.total_pages\" class=\"pagination justify-content-end\">\r\n                <li [ngClass]=\"{disabled: !pagination?.prev_page}\" class=\"page-item previous-item\" (click)=\"userSearch.page = pagination?.prev_page; getUsers();\">\r\n                  <a class=\"page-link\">Previous</a>\r\n                </li>\r\n                <li class=\"page-item number-item active\">\r\n                  <a class=\"page-link\">{{ pagination?.current_page }}</a>\r\n                </li>\r\n                <li [ngClass]=\"{disabled: !pagination?.next_page}\" class=\"page-item next-item\" (click)=\"userSearch.page = pagination?.next_page; getUsers();\">\r\n                  <a class=\"page-link\">Next</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n          <!-- END SALES TABEL -->\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End Row -->\r\n\r\n</div>\r\n\r\n<div bsModal [config]=\"{backdrop: 'static', keyboard: false}\"  #deleteUserModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\"\r\naria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\"><i class=\"fe fe-x\"></i> Inactive User</h4>\r\n              <button type=\"button\" class=\"close\" (click)=\"deleteUserModal.hide();\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n              <p>Are you sure want to inactive selected user?</p>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-light\" (click)=\"deleteUserModal.hide();\">Close</button>\r\n              <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteUser()\" *ngIf=\"userDeleteOption == 'single'\">Inactive</button>\r\n              <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteAllUser()\" *ngIf=\"userDeleteOption == 'all'\">Inactive</button>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- <pre [innerHtml]=\"users | json\"></pre> -->"

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

module.exports = ".custom-file-select {\n  position: absolute;\n  left: -1000%;\n}\n\n.upload-btn label {\n  margin-bottom: -0.2rem;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYWRtaW4tcGFnZXMvdXNlci91c2VybGlzdC9EOlxceGFtcHBcXGh0ZG9jc1xcc2gtYWRtaW4tdWlcXGFuZ3VsYXIvc3JjXFxhcHBcXHZpZXdzXFxhZG1pbi1wYWdlc1xcdXNlclxcdXNlcmxpc3RcXHVzZXJsaXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9hZG1pbi1wYWdlcy91c2VyL3VzZXJsaXN0L3VzZXJsaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxzQkFBQTtFQUNBLGVBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FkbWluLXBhZ2VzL3VzZXIvdXNlcmxpc3QvdXNlcmxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLWZpbGUtc2VsZWN0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogLTEwMDAlO1xyXG59XHJcbi51cGxvYWQtYnRuIGxhYmVse1xyXG4gIG1hcmdpbi1ib3R0b206IC0wLjJyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59IiwiLmN1c3RvbS1maWxlLXNlbGVjdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTEwMDAlO1xufVxuXG4udXBsb2FkLWJ0biBsYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IC0wLjJyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

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
    function UserlistComponent(toastr, spinner, globalService, jwtService) {
        this.toastr = toastr;
        this.spinner = spinner;
        this.globalService = globalService;
        this.jwtService = jwtService;
        this.permission = {
            view: false,
            edit: false,
            delete: false
        };
        this.currentUser = new _layouts_home_layout_user_model__WEBPACK_IMPORTED_MODULE_6__["currentUser"];
        this.pager = {};
        this.selectedUsers = [];
        this.order = 'name';
        this.reverse = false;
        this.userSearch = new _shared_ui_models_global_model__WEBPACK_IMPORTED_MODULE_4__["UserSearch"];
        this.currentUser = JSON.parse(this.jwtService.getCurrentUser());
        this.globalService.setLoadingLabel('Loading... Please Wait.');
        this.globalService.sendActionChildToParent('users');
        if (this.currentUser['isSuccessHackerAdmin']) {
            this.permission = {
                view: true,
                edit: true,
                delete: true
            };
        }
        console.log(" this.currentUser ======== ", this.currentUser);
    }
    UserlistComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    UserlistComponent.prototype.ngOnInit = function () {
        this.getCompanies();
    };
    UserlistComponent.prototype.getCompanies = function () {
        var _this = this;
        this.companies = [];
        this.spinner.show();
        this.globalService.getCompanies({}).subscribe(function (data) {
            _this.spinner.hide();
            if (Object.keys(data).length) {
                _this.companies = data.items;
                var found = _this.companies.filter(function (e) { return e.companyId == _this.currentUser['company'].companyId; });
                if (!_this.currentUser['isSuccessHackerAdmin']) {
                    _this.userSearch.company = found[0];
                }
                if (_this.currentUser['company']) {
                    _this.userSearch.company = found[0];
                    _this.getUsers();
                }
            }
        }, function (error) {
            _this.spinner.hide();
            _this.toastr.error('There are some server error! Please check connection.', 'Error');
        });
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
                group: this.userSearch.group,
                search: this.userSearch.search,
                sort: this.userSearch.sort,
                sortOrder: this.userSearch.sortOrder,
            };
            if (this.userSearch.active) {
                postObject['active'] = Number(this.userSearch.active);
            }
            this.globalService.setLoadingLabel('Loading... Please Wait.');
            this.spinner.show();
            this.globalService.getUsers(postObject).subscribe(function (data) {
                _this.spinner.hide();
                if (data && Object.keys(data).length) {
                    _this.users = data.items;
                    _this.pagination = data.meta.pagination;
                }
            }, function (error) {
                _this.spinner.hide();
                _this.toastr.error('There are some server error! Please check connection.', 'Error');
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
        var found = this.selectedUsers.filter(function (e) { return e.id == user['id']; });
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
                }
            });
        });
    };
    UserlistComponent.prototype.uploadFile = function ($event) {
        var file = $event.target.files[0];
        var postData = {
            company: this.userSearch.company.companyId,
            user: this.currentUser.id
        };
        this.globalService.uploadFile(file, postData).subscribe(function (data) {
            console.log(" uploadFile data xxxxxxxxxxx====== ", data);
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
        if (this.userSearch.active) {
            postObject['active'] = Number(this.userSearch.active);
        }
        console.log("postObject ---------- ", postObject);
        this.globalService.exportData(postObject).subscribe(function (data) {
            console.log("data xxxxx ============= ", data);
            _this.spinner.hide();
            if (data) {
            }
        });
    };
    UserlistComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] },
        { type: _shared_ui_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] },
        { type: _shared_ui_jwt_service__WEBPACK_IMPORTED_MODULE_7__["JwtService"] }
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
            _shared_ui_jwt_service__WEBPACK_IMPORTED_MODULE_7__["JwtService"]])
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
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot()
            ]
        })
    ], UserlistModule);
    return UserlistModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-admin-pages-user-userlist-userlist-module.js.map