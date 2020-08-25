(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-admin-pages-company-list-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/admin-pages/company/list/list.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/admin-pages/company/list/list.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" *ngIf=\"!currentUser?.isSuccessHackerAdmin\">\r\n  <div class=\"row sidemenu-height\">\r\n    <div class=\"col-md-12 text-center mt-20 not-access\">\r\n      <h3> Oops Sorry! You are not a authorized user for accessing this screen. </h3>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container-fluid\" *ngIf=\"currentUser?.isSuccessHackerAdmin && !loadingData\">\r\n\r\n  <!-- Page Header -->\r\n  <div class=\"page-header\">\r\n    <div>\r\n      <h2 class=\"main-content-title tx-24 mg-b-5\">Companies</h2>\r\n    </div>\r\n  </div>\r\n  <!-- End Page Header -->\r\n  <!-- Row -->\r\n  <div class=\"row sidemenu-height\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"card custom-card\">\r\n        <div class=\"card-body\">\r\n          \r\n          <!-- SALES TABEL -->\r\n          <div class=\"col-md-12\">\r\n            <h6 class=\"card-title mb-1 d-flex\"><span class=\"pt-2\">Companies:</span> &nbsp;&nbsp;&nbsp;\r\n              <button class=\"btn ripple btn-success btn-icon\" [routerLink]=\"['/company/add']\" tooltip=\"Add new company\"><i class=\"fe fe-plus\"></i></button>&nbsp;\r\n              <button class=\"btn ripple btn-secondary btn-icon\" (click)=\"showDeleteModal('all', '')\" [disabled]=\"!selectedCompany?.length\" tooltip=\"Deactivate selected companies\"><i class=\"fe fe-x\"></i></button>&nbsp;\r\n              <button class=\"btn ripple btn-secondary btn-icon\" (click)=\"getCompanies()\" tooltip=\"Refresh list\"><i class=\"fe fe-refresh-ccw\"></i></button>&nbsp;&nbsp;\r\n            </h6>\r\n          </div>\r\n\r\n          <div class=\"col-md-12\">\r\n            <div class=\"row row-xs align-items-center mg-b-20\">\r\n              <div class=\"col-md-1\">\r\n                <label class=\"mg-b-0\">Filter:</label>\r\n              </div>\r\n              \r\n              <div class=\"col-md-11 btn-icon-list\">\r\n                <select class=\"form-control\" style=\"width: 18%;\" [(ngModel)]=\"companySearch.isActive\" name=\"isActive\" (change)=\"getCompanies();\">\r\n                  <option value=\"\">All Companies</option>\r\n                  <option value=\"1\">Active</option>\r\n                  <option value=\"0\">Inactive</option>\r\n                </select>\r\n                &nbsp; &nbsp; &nbsp;\r\n                \r\n                <select class=\"form-control page-limit-bar\" [(ngModel)]=\"companySearch.limit\" name=\"limit\" (change)=\"getCompanies();\">\r\n                  <option value=\"\">Limit per page</option>\r\n                  <option [ngValue]=\"25\">25</option>\r\n                  <option [ngValue]=\"50\">50</option>\r\n                  <option [ngValue]=\"100\">100</option>\r\n                  <option [ngValue]=\"150\">150</option>\r\n                  <option [ngValue]=\"200\">200</option>\r\n                </select>\r\n                &nbsp; &nbsp; &nbsp;\r\n\r\n                <button class=\"btn ripple btn-secondary btn-icon\" (click)=\"clearFilter()\" tooltip=\"Clear filters\"><i class=\"fe fe-rotate-ccw\"></i></button>\r\n                \r\n              </div>\r\n            </div>\r\n          </div>\r\n          \r\n          <!-- Row -->\r\n\t\t\t\t\t<div class=\"row row-sm\" *ngIf=\"!companies?.length\">\r\n            <div class=\"col-md\">\r\n              <div class=\"card custom-card card-body text-center\">\r\n                <p class=\"card-text tx-24\">No Companies</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- End Row -->\r\n\r\n          <div class=\"table-responsive\" *ngIf=\"companies?.length\">\r\n            <table class=\"table table-striped mg-b-0\">\r\n              <thead class=\"nowrap\">\r\n                <tr>\r\n                  <th> <input type=\"checkbox\" [(ngModel)]=\"multiSelect\" name=\"multiSelect\" (click)=\"multiSelectCompany(multiSelect)\"/> </th>\r\n                  <th [class.active]=\"order === 'companyName'\" (click)=\"setOrder('companyName')\"> \r\n                    Name\r\n                    <span [hidden]=\"reverse\">▼</span>\r\n                    <span [hidden]=\"!reverse\">▲</span>\r\n                  </th>\r\n                  <th> Active </th>\r\n                  <th [class.active]=\"order === 'createdByUserId'\" (click)=\"setOrder('createdByUserId')\"> \r\n                    Created By\r\n                    <span [hidden]=\"reverse\">▼</span>\r\n                    <span [hidden]=\"!reverse\">▲</span>\r\n                  </th>\r\n                  <th [class.active]=\"order === 'createDate'\" (click)=\"setOrder('createDate')\"> \r\n                    Date Created\r\n                    <span [hidden]=\"reverse\">▼</span>\r\n                    <span [hidden]=\"!reverse\">▲</span>\r\n                  </th>\r\n                  <th [class.active]=\"order === 'modifiedByUserId'\" (click)=\"setOrder('modifiedByUserId')\"> \r\n                    Modified By\r\n                    <span [hidden]=\"reverse\">▼</span>\r\n                    <span [hidden]=\"!reverse\">▲</span>\r\n                  </th>\r\n                  <th [class.active]=\"order === 'modifiedDate'\" (click)=\"setOrder('modifiedDate')\"> \r\n                    Date Modified\r\n                    <span [hidden]=\"reverse\">▼</span>\r\n                    <span [hidden]=\"!reverse\">▲</span>\r\n                  </th>\r\n                  <th> # Of Users </th>\r\n                  <th> Action </th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let company of companies; let i = index;\">\r\n                  <th> <input type=\"checkbox\" [(ngModel)]=\"company.added\" value=\"{{ company?.companyId }}\" (change)=\"selectCompany(company)\" [disabled]=\"!company.isActive\"/> </th>\r\n                  <th> <a [routerLink]=\"['/user/list', company?.companyId]\">{{ company?.companyName }} </a> </th>\r\n                  <th> {{ company?.isActive ? 'Active' : 'Inactive' }} </th>\r\n                  <th> {{ company?.createdBy?.fullName }}</th>\r\n                  <th> {{ company?.createDate | date: 'yyyy-MM-dd' }} </th>\r\n                  <th> {{ company?.modifiedBy?.fullName }}</th>\r\n                  <th> {{ company?.modifiedDate | date: 'yyyy-MM-dd' }} </th>\r\n                  <th> {{ company?.userCount }} </th>\r\n                  <th>\r\n                    <div class=\"btn-icon-list\">\r\n                      <button class=\"btn ripple btn-info btn-icon\" [routerLink]=\"['/company/edit', company?.companyId]\" tooltip=\"Edit this company\"><i class=\"far fa-edit\"></i></button>\r\n                      <button class=\"btn ripple btn-secondary btn-icon\" [disabled]=\"!company.isActive\" (click)=\"showDeleteModal('single', company)\" tooltip=\"Deactivate this company\"><i class=\"fe fe-x\"></i></button>\r\n                    </div>\r\n                  </th>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n\r\n          <div>\r\n            <div class=\"card-footer pagination-bar text-right pb-0 pt-3\">\r\n              <h3>{{ pagination?.entries_info }}</h3>\r\n              <ul *ngIf=\"pagination && pagination?.total_pages\" class=\"pagination justify-content-end\">\r\n                <li [ngClass]=\"{disabled: !pagination?.prev_page}\" class=\"page-item previous-item\" (click)=\"companySearch.page = pagination?.prev_page; getCompanies();\">\r\n                  <a class=\"page-link\">Previous</a>\r\n                </li>\r\n                <li class=\"page-item number-item active\">\r\n                  <a class=\"page-link\">{{ pagination?.current_page }}</a>\r\n                </li>\r\n                <li [ngClass]=\"{disabled: !pagination?.next_page}\" class=\"page-item next-item\" (click)=\"companySearch.page = pagination?.next_page; getCompanies();\">\r\n                  <a class=\"page-link\">Next</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End Row -->\r\n\r\n</div>\r\n\r\n<div bsModal [config]=\"{backdrop: 'static', keyboard: false}\"  #deleteCompanyModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\"\r\naria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\"><i class=\"fe fe-x\"></i> Deactivate Company</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"deleteCompanyModal.hide();\" aria-label=\"Close\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p *ngIf=\"companyDeleteOption == 'all'\">Are you sure you want to deactivate the selected companies?</p>\r\n        <p *ngIf=\"companyDeleteOption == 'single'\">Are you sure you want to deactivate {{ currentCompany?.companyName }}?</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"deleteCompanyModal.hide();\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteCompany()\" *ngIf=\"companyDeleteOption == 'single'\">Deactivate</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteAllCompany()\" *ngIf=\"companyDeleteOption == 'all'\">Deactivate</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- <pre [innerHtml]=\"companies | json\"></pre> -->\r\n    "

/***/ }),

/***/ "./src/app/views/admin-pages/company/list/list-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/admin-pages/company/list/list-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListRoutingModule", function() { return ListRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.component */ "./src/app/views/admin-pages/company/list/list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"], pathMatch: 'full' }
];
var ListRoutingModule = /** @class */ (function () {
    function ListRoutingModule() {
    }
    ListRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ListRoutingModule);
    return ListRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/admin-pages/company/list/list.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/views/admin-pages/company/list/list.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".not-access {\n  margin-top: 7rem;\n}\n\n.page-limit-bar {\n  width: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYWRtaW4tcGFnZXMvY29tcGFueS9saXN0L0Q6XFx4YW1wcFxcaHRkb2NzXFxzaC1hZG1pbi11aVxcYW5ndWxhci9zcmNcXGFwcFxcdmlld3NcXGFkbWluLXBhZ2VzXFxjb21wYW55XFxsaXN0XFxsaXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9hZG1pbi1wYWdlcy9jb21wYW55L2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxXQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9hZG1pbi1wYWdlcy9jb21wYW55L2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3QtYWNjZXNze1xyXG4gIG1hcmdpbi10b3A6IDdyZW07XHJcbn1cclxuLnBhZ2UtbGltaXQtYmFye1xyXG4gIHdpZHRoOiA4MHB4O1xyXG59IiwiLm5vdC1hY2Nlc3Mge1xuICBtYXJnaW4tdG9wOiA3cmVtO1xufVxuXG4ucGFnZS1saW1pdC1iYXIge1xuICB3aWR0aDogODBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/admin-pages/company/list/list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/admin-pages/company/list/list.component.ts ***!
  \******************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_ui_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared-ui/global.service */ "./src/app/shared-ui/global.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _layouts_home_layout_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../layouts/home-layout/user.model */ "./src/app/layouts/home-layout/user.model.ts");
/* harmony import */ var _shared_ui_jwt_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared-ui/jwt.service */ "./src/app/shared-ui/jwt.service.ts");
/* harmony import */ var _shared_ui_models_global_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared-ui/models/global.model */ "./src/app/shared-ui/models/global.model.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ListComponent = /** @class */ (function () {
    function ListComponent(jwtService, toastr, spinner, globalService, router) {
        this.jwtService = jwtService;
        this.toastr = toastr;
        this.spinner = spinner;
        this.globalService = globalService;
        this.router = router;
        this.currentUser = new _layouts_home_layout_user_model__WEBPACK_IMPORTED_MODULE_5__["currentUser"];
        this.pager = {};
        this.selectedCompany = [];
        this.companyDeleteOption = 'single';
        this.companySearch = new _shared_ui_models_global_model__WEBPACK_IMPORTED_MODULE_7__["CompanySearch"];
        this.loadingData = false;
        this.loadingCount = 1;
        this.order = 'companyName';
        this.reverse = true;
        this.previousOrder = 'companyName';
        this.globalService.setLoadingLabel('Loading... Please Wait.');
        this.currentUser = JSON.parse(this.jwtService.getCurrentUser());
        if (!this.currentUser['isSuccessHackerAdmin']) {
            this.router.navigate(['/user/list']);
            return;
        }
        this.globalService.sendActionChildToParent('companies');
        this.companySearch.user = this.currentUser.id;
    }
    ListComponent.prototype.setOrder = function (value) {
        this.order = value;
        if (this.previousOrder != value) {
            this.previousOrder = value;
            this.reverse = false;
        }
        this.companySearch.sortOrder = this.reverse ? "DESC" : "ASC";
        this.companySearch.sort = value;
        this.reverse = !this.reverse;
        this.getCompanies();
    };
    ListComponent.prototype.ngOnInit = function () {
        this.getCompanies();
    };
    ListComponent.prototype.setCompanyObject = function (company) {
        this.globalService.setCompanyObject(company);
    };
    ListComponent.prototype.getCompanies = function () {
        var _this = this;
        if (this.loadingCount < 2) {
            this.loadingData = true;
        }
        this.spinner.show();
        var postObject = {
            page: this.companySearch.page,
            limit: this.companySearch.limit,
            user: this.companySearch.user,
            sort: this.companySearch.sort,
            sortOrder: this.companySearch.sortOrder,
        };
        if (this.companySearch.isActive) {
            postObject['isActive'] = Number(this.companySearch.isActive);
        }
        this.globalService.getCompanies(postObject).subscribe(function (data) {
            _this.loadingCount++;
            _this.spinner.hide();
            if (Object.keys(data).length) {
                _this.companies = data.items;
                _this.pagination = data.meta.pagination;
            }
            _this.loadingData = false;
        }, function (error) {
            _this.spinner.hide();
            _this.loadingData = false;
            if (error && error.error && error.error.message) {
                _this.toastr.error(error.error.message, 'Error ' + error.status);
            }
            else {
                _this.toastr.error(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].reponseCode[error.status], 'Error');
            }
        });
    };
    ListComponent.prototype.showDeleteModal = function (type, company) {
        this.companyDeleteOption = type;
        this.currentCompany = company;
        this.deleteCompanyModal.show();
    };
    ListComponent.prototype.multiSelectCompany = function (multiSelect) {
        var _this = this;
        this.selectedCompany = [];
        this.companies.forEach(function (element) {
            if (multiSelect) {
                element.added = false;
            }
            else {
                element.added = true;
                _this.selectedCompany.push(element);
            }
        });
    };
    ListComponent.prototype.selectCompany = function (company) {
        var found = this.selectedCompany.filter(function (e) { return e.companyId == company['companyId']; });
        if (found.length) {
            this.selectedCompany.splice(this.selectedCompany.indexOf(found[0]), 1);
        }
        else {
            this.selectedCompany.push(company);
        }
    };
    ListComponent.prototype.deleteCompany = function () {
        var _this = this;
        var postData = {
            name: this.currentCompany.companyName,
            isActive: 0,
            modifier: this.currentUser.id,
        };
        this.globalService.setLoadingLabel('Updating... Please Wait.');
        this.spinner.show();
        this.globalService.updateCompany(postData, this.currentCompany['companyId']).subscribe(function (data) {
            _this.spinner.hide();
            if (data && data.modifiedBy) {
                _this.toastr.success("Data updated successfully.", "Success");
                _this.currentCompany.isActive = data.isActive;
            }
            else {
                _this.toastr.error("There are some error while updating the data!", "Error");
            }
            _this.deleteCompanyModal.hide();
        }, function (error) {
            _this.spinner.hide();
            _this.deleteCompanyModal.hide();
            if (error && error.error && error.error.message) {
                _this.toastr.error(error.error.message, 'Error ' + error.status);
            }
            else {
                _this.toastr.error(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].reponseCode[error.status], 'Error');
            }
        });
    };
    ListComponent.prototype.deleteAllCompany = function () {
        var _this = this;
        this.globalService.setLoadingLabel('Updating... Please Wait.');
        this.spinner.show();
        this.selectedCompany.forEach(function (element, index) {
            var postData = {
                name: element.companyName,
                isActive: 0,
                modifier: _this.currentUser.id,
            };
            _this.globalService.updateCompany(postData, element['companyId']).subscribe(function (data) {
                if (index == _this.selectedCompany.length - 1) {
                    _this.spinner.hide();
                    _this.deleteCompanyModal.hide();
                    _this.getCompanies();
                    _this.toastr.success("Data updated successfully.", "Success");
                }
            });
        }, function (error) {
            _this.spinner.hide();
            _this.deleteCompanyModal.hide();
            if (error && error.error && error.error.message) {
                _this.toastr.error(error.error.message, 'Error ' + error.status);
            }
            else {
                _this.toastr.error(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].reponseCode[error.status], 'Error');
            }
        });
    };
    ListComponent.prototype.clearFilter = function () {
        this.companySearch.isActive = "";
        this.companySearch.page = 1;
        this.companySearch.limit = 25;
        this.companySearch.sort = "companyName";
        this.companySearch.sortOrder = 'ASC';
        this.previousOrder = 'companyName';
        this.reverse = true;
        this.getCompanies();
    };
    ListComponent.ctorParameters = function () { return [
        { type: _shared_ui_jwt_service__WEBPACK_IMPORTED_MODULE_6__["JwtService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] },
        { type: _shared_ui_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("deleteCompanyModal", { static: false }),
        __metadata("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalDirective"])
    ], ListComponent.prototype, "deleteCompanyModal", void 0);
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/admin-pages/company/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/views/admin-pages/company/list/list.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_ui_jwt_service__WEBPACK_IMPORTED_MODULE_6__["JwtService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            _shared_ui_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/views/admin-pages/company/list/list.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/admin-pages/company/list/list.module.ts ***!
  \***************************************************************/
/*! exports provided: ListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListModule", function() { return ListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _list_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-routing.module */ "./src/app/views/admin-pages/company/list/list-routing.module.ts");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list.component */ "./src/app/views/admin-pages/company/list/list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ListModule = /** @class */ (function () {
    function ListModule() {
    }
    ListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _list_routing_module__WEBPACK_IMPORTED_MODULE_2__["ListRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot()
            ]
        })
    ], ListModule);
    return ListModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-admin-pages-company-list-list-module.js.map