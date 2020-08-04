(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-admin-pages-user-userlist-userlist-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/admin-pages/user/userlist/userlist.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/admin-pages/user/userlist/userlist.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\r\n  <!-- Page Header -->\r\n  <div class=\"page-header\">\r\n    <div>\r\n      <h2 class=\"main-content-title tx-24 mg-b-5\">Users</h2>\r\n      <ol class=\"breadcrumb\">\r\n          <li class=\"breadcrumb-item\"><a [routerLink]=\"['/dashboard']\">Home</a></li>\r\n        <li class=\"breadcrumb-item active\" aria-current=\"page\">Users</li>\r\n      </ol>\r\n    </div>\r\n  </div>\r\n  <!-- End Page Header -->\r\n\r\n  <!-- Row -->\r\n  <div class=\"row sidemenu-height\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"card custom-card\">\r\n        <div class=\"card-body\">\r\n          \r\n          <!-- SALES TABEL -->\r\n            <div class=\"col-md-12\">\r\n              <div class=\"row row-xs align-items-center mg-b-20\">\r\n                <div class=\"col-md-1\">\r\n                  <label class=\"mg-b-0\">Company:</label>\r\n                </div>\r\n                <div class=\"col-md-5 mg-t-5 mg-md-t-0\">\r\n                  <select class=\"form-control\" [(ngModel)]=\"userSearch.company\" name=\"company\" (change)=\"getGroups(userSearch.company)\">\r\n                    <option value=\"\">Select Company</option>\r\n                    <option [value]=\"company?.id\" *ngFor=\"let company of companies;\">{{ company?.name }}</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"col-md-6 mg-t-5 mg-md-t-0\">\r\n                  <div class=\"btn-icon-list\">\r\n                    <button class=\"btn ripple btn-success btn-icon\" [routerLink]=\"['/company/add']\"><i class=\"fe fe-plus\"></i></button>\r\n                    <button class=\"btn ripple btn-primary btn-icon\" [routerLink]=\"['/company/list']\"><i class=\"fe fe-list\"></i></button>\r\n                    <button class=\"btn ripple btn-info btn-icon\" [routerLink]=\"['/company/edit', userSearch.company]\" *ngIf=\"userSearch.company\"><i class=\"fe fe-edit\"></i></button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            \r\n            <div class=\"col-md-12\">\r\n              <div class=\"row row-xs align-items-center mg-b-20\">\r\n                <div class=\"col-md-1\">\r\n                  <label class=\"mg-b-0\">Users:</label>\r\n                </div>\r\n                <div class=\"col-md-2 mg-t-5 mg-md-t-0\">\r\n                  <div class=\"btn-icon-list\">\r\n                    <button class=\"btn ripple btn-success btn-icon\" [routerLink]=\"['/user/add']\" ><i class=\"fe fe-plus\"></i></button>\r\n                    <button class=\"btn ripple btn-secondary btn-icon\" *ngIf=\"selectedUsers?.length\" (click)=\"showDeleteModal()\"><i class=\"fe fe-trash\"></i></button>\r\n                    <input type=\"file\" class=\"custom-file-input\" accept=\"image/csv\" (change)=\"uploadFile($event)\"> \r\n                    <!-- <button class=\"btn ripple btn-info btn-icon\"><i class=\"far fa-arrow-alt-circle-up\"></i></button> -->\r\n                    <button class=\"btn ripple btn-info btn-icon\"><i class=\"far fa-arrow-alt-circle-down\"></i></button>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-2 mg-t-5 mg-md-t-0\">\r\n                  <select class=\"form-control\" [(ngModel)]=\"userSearch.active\" name=\"active\">\r\n                    <option value=\"\">All Users</option>\r\n                    <option value=\"\">Active</option>\r\n                    <option value=\"\">Inactive”</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"col-md-2 mg-t-5 mg-md-t-0\">\r\n                  <select class=\"form-control\" [(ngModel)]=\"userSearch.group\" name=\"group\">\r\n                    <option value=\"\">Select Group</option>\r\n                    <option value=\"\">Group 1</option>\r\n                    <option value=\"\">Group 2</option>\r\n                    <option value=\"\">Group 3</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"col-md-2 mg-t-5 mg-md-t-0\">\r\n                  <button class=\"btn ripple btn-primary pd-x-30 mg-r-5\">Search</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n          <!-- Row -->\r\n\t\t\t\t\t<div class=\"row row-sm\" *ngIf=\"!users?.length\">\r\n            <div class=\"col-md\">\r\n              <div class=\"card custom-card card-body text-center\">\r\n                <p class=\"card-text tx-24\">No data found!</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- End Row -->\r\n\r\n          <div class=\"table-responsive\" *ngIf=\"users?.length\">\r\n            <table class=\"table table-striped mg-b-0\">\r\n              <thead class=\"nowrap\">\r\n                <tr>\r\n                  <th> <input type=\"checkbox\" [(ngModel)]=\"multiSelect\" name=\"multiSelect\" (click)=\"multiSelectCompany(multiSelect)\"/> </th>\r\n                  <th [class.active]=\"order === 'name'\" (click)=\"setOrder('name')\">\r\n                    Name\r\n                    <span [hidden]=\"reverse\">▼</span>\r\n                    <span [hidden]=\"!reverse\">▲</span>\r\n                  </th>\r\n                  <th [class.active]=\"order === 'email'\" (click)=\"setOrder('email')\">\r\n                    Email\r\n                    <span [hidden]=\"reverse\">▼</span>\r\n                    <span [hidden]=\"!reverse\">▲</span>\r\n                  </th>\r\n                  <th [class.active]=\"order === 'status'\" (click)=\"setOrder('status')\">\r\n                    Active\r\n                    <span [hidden]=\"reverse\">▼</span>\r\n                    <span [hidden]=\"!reverse\">▲</span>\r\n                  </th>\r\n                  <th [class.active]=\"order === 'createdBy'\" (click)=\"setOrder('createdBy')\">\r\n                    Created By\r\n                    <span [hidden]=\"reverse\">▼</span>\r\n                    <span [hidden]=\"!reverse\">▲</span>\r\n                  </th>\r\n                  <th [class.active]=\"order === 'dateCreated'\" (click)=\"setOrder('dateCreated')\">\r\n                    Date Created\r\n                    <span [hidden]=\"reverse\">▼</span>\r\n                    <span [hidden]=\"!reverse\">▲</span>\r\n                  </th>\r\n                  <th [class.active]=\"order === 'lastlogin'\" (click)=\"setOrder('lastlogin')\">\r\n                    Last Login\r\n                    <span [hidden]=\"reverse\">▼</span>\r\n                    <span [hidden]=\"!reverse\">▲</span>\r\n                  </th>\r\n                  <th [class.active]=\"order === 'groups'\" (click)=\"setOrder('groups')\">\r\n                    Groups\r\n                    <span [hidden]=\"reverse\">▼</span>\r\n                    <span [hidden]=\"!reverse\">▲</span>\r\n                  </th>\r\n                  <th [class.active]=\"order === 'company'\" (click)=\"setOrder('company')\">\r\n                    Company\r\n                    <span [hidden]=\"reverse\">▼</span>\r\n                    <span [hidden]=\"!reverse\">▲</span>\r\n                  </th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let user of users; let i = index;\">\r\n                  <th><input type=\"checkbox\" [(ngModel)]=\"user.added\" value=\"{{ user.id }}\" (change)=\"selectUser(user)\" /></th>\r\n                  <th>{{ user?.fullName }}</th>\r\n                  <th>{{ user?.emailAddress }}</th>\r\n                  <th [ngClass]=\"{'text-danger': user?.isActive == 0, 'text-primary': user?.isActive == 1 }\"> {{ user?.isActive ? 'Active' : 'Inactive' }} </th>\r\n                  <th> {{ user?.createdBy?.fullName }}</th>\r\n                  <th> {{ user?.createDate | date: 'yyyy-MM-dd' }} </th>\r\n                  <th> {{ user?.lastSeenDate | date: 'yyyy-MM-dd  hh:mm' }} </th>\r\n                  <th><span *ngFor=\"let group of user?.groups;\"> {{ group }} </span></th>\r\n                  <th> {{ user?.company?.name }} </th>\r\n                  <th>\r\n                    <div class=\"btn-icon-list\">\r\n                      <button class=\"btn ripple btn-secondary btn-icon\" (click)=\"showDeleteModal(user)\"><i class=\"fe fe-trash\"></i></button>\r\n                      <button class=\"btn ripple btn-info btn-icon\" [routerLink]=\"['/user/edit', user?.id]\"><i class=\"far fa-edit\"></i></button>\r\n                    </div>\r\n                  </th>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n\r\n          <nav>\r\n            <ul class=\"pagination justify-content-end\">\r\n              <li class=\"page-item disabled\">\r\n                <a class=\"page-link\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Previous</a>\r\n              </li>\r\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\r\n              <li class=\"page-item active\" aria-current=\"page\">\r\n                <a class=\"page-link\" href=\"#\">2 <span class=\"sr-only\">(current)</span></a>\r\n              </li>\r\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n              <li class=\"page-item\">\r\n                <a class=\"page-link\" href=\"#\">Next</a>\r\n              </li>\r\n            </ul>\r\n          </nav>\r\n          <!-- <div >\r\n            <div class=\"card-footer pagination-bar text-right pb-0 pt-3\">\r\n              <ul *ngIf=\"pager?.pages && pager?.pages.length\" class=\"pagination justify-content-end\">\r\n                <li [ngClass]=\"{disabled:pager?.currentPage === 1}\" class=\"page-item first-item\">\r\n                  <a class=\"page-link\">First</a>\r\n                </li>\r\n                <li [ngClass]=\"{disabled:pager?.currentPage === 1}\" class=\"page-item previous-item\">\r\n                  <a class=\"page-link\">Previous</a>\r\n                </li>\r\n                <li *ngFor=\"let page of pager?.pages\" [ngClass]=\"{active:pager?.currentPage === page}\" class=\"page-item number-item\">\r\n                  <a class=\"page-link\">{{page}}</a>\r\n                </li>\r\n                <li [ngClass]=\"{disabled:pager?.currentPage === pager?.totalPages}\" class=\"page-item next-item\">\r\n                  <a class=\"page-link\">Next</a>\r\n                </li>\r\n                <li [ngClass]=\"{disabled:pager?.currentPage === pager?.totalPages}\" class=\"page-item last-item\">\r\n                  <a class=\"page-link\">Last</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div> -->\r\n          <!-- END SALES TABEL -->\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End Row -->\r\n\r\n</div>\r\n\r\n<div bsModal [config]=\"{backdrop: 'static', keyboard: false}\"  #deleteUserModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\"\r\naria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\"><i class=\"fa fa-trash\"></i> Delete User</h4>\r\n              <button type=\"button\" class=\"close\" (click)=\"deleteUserModal.hide();\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n              <p>Are you sure want to delete this user?</p>\r\n              <p>\r\n\r\n              </p>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-light\" (click)=\"deleteUserModal.hide();\">Close</button>\r\n              <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteUser()\">Delete</button>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FkbWluLXBhZ2VzL3VzZXIvdXNlcmxpc3QvdXNlcmxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

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
    function UserlistComponent(toastr, spinner, globalService) {
        this.toastr = toastr;
        this.spinner = spinner;
        this.globalService = globalService;
        this.pager = {};
        this.selectedUsers = [];
        this.order = 'name';
        this.reverse = false;
        this.userSearch = new _shared_ui_models_global_model__WEBPACK_IMPORTED_MODULE_4__["UserSearch"];
        this.globalService.sendActionChildToParent('users');
    }
    UserlistComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    UserlistComponent.prototype.ngOnInit = function () {
        this.getCompanies();
        this.getUsers();
    };
    UserlistComponent.prototype.getCompanies = function () {
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
    UserlistComponent.prototype.getGroups = function (companyId) {
        var _this = this;
        this.globalService.getCompanies({}).subscribe(function (data) {
            _this.spinner.hide();
            if (Object.keys(data).length) {
                _this.companies = data.Items;
            }
        }, function (error) {
            _this.toastr.error('There are some server error! Please check connection.', 'Error');
        });
    };
    UserlistComponent.prototype.getUsers = function () {
        var _this = this;
        this.spinner.show();
        this.globalService.getUsers({}).subscribe(function (data) {
            _this.spinner.hide();
            if (Object.keys(data).length) {
                _this.users = data.items;
                _this.pagination = data.meta;
            }
        }, function (error) {
            _this.toastr.error('There are some server error! Please check connection.', 'Error');
        });
    };
    UserlistComponent.prototype.showDeleteModal = function (user) {
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
            isActive: 0,
        };
        this.globalService.updateUser(postData, this.selectedUser['id']).subscribe(function (data) {
            _this.deleteUserModal.hide();
        });
    };
    UserlistComponent.prototype.uploadFile = function ($event) {
        var file = $event.target.files[0];
        console.log("file ------- ", file);
        this.globalService.uploadFile(file).subscribe(function (data) {
        });
    };
    UserlistComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] },
        { type: _shared_ui_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] }
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
            _shared_ui_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
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