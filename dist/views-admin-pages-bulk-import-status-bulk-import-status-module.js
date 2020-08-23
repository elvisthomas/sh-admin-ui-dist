(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-admin-pages-bulk-import-status-bulk-import-status-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/admin-pages/bulk-import-status/bulk-import-status.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/admin-pages/bulk-import-status/bulk-import-status.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" [hidden]=\"loadingData\">\n\n  <!-- Page Header -->\n  <div class=\"page-header\">\n    <div>\n      <h2 class=\"main-content-title tx-24 mg-b-5\">Bulk Import Status</h2>\n    </div>\n  </div>\n  <!-- End Page Header -->\n\n  <!-- Row -->\n  <div class=\"row sidemenu-height\">\n    <div class=\"col-lg-12\">\n      <div class=\"card custom-card\">\n        <div class=\"card-body\">\n          \n          <!-- SALES TABEL -->\n            <div class=\"col-md-12\">\n              <div class=\"row row-xs align-items-center mg-b-20\">\n                <div class=\"col-md-1\">\n                  <label class=\"mg-b-0\">Company:</label>\n                </div>\n                <div class=\"col-md-5 mg-t-5 mg-md-t-0\">\n                  <select class=\"form-control\" [(ngModel)]=\"importStatusSearch.company\" (change)=\"getStatus();\" *ngIf=\"permission.view\" name=\"company\">\n                    <option value=\"\">Select Company</option>\n                    <option [ngValue]=\"company\" *ngFor=\"let company of companies;\">{{ company?.companyName }}</option>\n                  </select>\n                  <input class=\"form-control\" type=\"text\" [value]=\"importStatusSearch?.company?.companyName\" readonly *ngIf=\"!permission.view\">\n                </div>\n                <div class=\"col-md-6 mg-t-5 mg-md-t-0\">\n                  <div class=\"btn-icon-list\">\n                    <button class=\"btn ripple btn-secondary btn-icon\" (click)=\"getStatus()\" tooltip=\"Refresh list\"><i class=\"fe fe-refresh-ccw\"></i></button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            \n            <div class=\"col-md-12\">\n              <div class=\"row row-xs align-items-center mg-b-20\">\n                <div class=\"col-md-1 mg-t-5 mg-md-t-0\">\n                  Filter:\n                </div>\n                <div class=\"col-md-11 btn-icon-list\">\n                  <select class=\"form-control\" style=\"width: 18%\" [(ngModel)]=\"importStatusSearch.source\" name=\"source\" (change)=\"getStatus();\">\n                    <option value=\"\">Any Source</option>\n                    <option value=\"Bulk Import\">Bulk Import</option>\n                    <option value=\"Portal\">Portal</option>\n                  </select>\n                  &nbsp; &nbsp; &nbsp;\n\n                  <select class=\"form-control\" style=\"width: 18%\" [(ngModel)]=\"importStatusSearch.status\" name=\"status\" (change)=\"getStatus();\">\n                    <option value=\"\">All Status</option>\n                    <option value=\"Complete\">Complete</option>\n                    <option value=\"Error\">Error</option>\n                    <option value=\"Pending\">Pending</option>\n                  </select>\n                  &nbsp; &nbsp; &nbsp;\n                  \n                  <select class=\"form-control\" style=\"width: 18%\" [(ngModel)]=\"importStatusSearch.method\" name=\"method\" (change)=\"getStatus();\">\n                    <option value=\"\">All Method</option>\n                    <option value=\"Bulk\">Bulk</option>\n                    <option value=\"Create\">Create</option>\n                    <option value=\"Update\">Update</option>\n                  </select>\n                  &nbsp; &nbsp; &nbsp;\n\n                  <select class=\"form-control page-limit-bar\" [(ngModel)]=\"importStatusSearch.limit\" name=\"limit\" (change)=\"getStatus();\">\n                    <option value=\"\">Limit per page</option>\n                    <option [ngValue]=\"25\">25</option>\n                    <option [ngValue]=\"50\">50</option>\n                    <option [ngValue]=\"100\">100</option>\n                    <option [ngValue]=\"150\">150</option>\n                    <option [ngValue]=\"200\">200</option>\n                  </select>\n                  &nbsp; &nbsp; &nbsp;\n\n                  <button class=\"btn ripple btn-secondary btn-icon\" (click)=\"clearFilter()\" tooltip=\"Clear filters\"><i class=\"fe fe-rotate-ccw\"></i></button>\n                </div>\n              </div>\n            </div>\n\n\n          <!-- Row -->\n\t\t\t\t\t<div class=\"row row-sm\" *ngIf=\"!bulkStatus?.length || !importStatusSearch.company\">\n            <div class=\"col-md\">\n              <div class=\"card custom-card card-body text-center\">\n                <p class=\"card-text tx-24\"> {{ !importStatusSearch.company? 'Please select a company first!' : 'No bulk import status' }}</p>\n              </div>\n            </div>\n          </div>\n          <!-- End Row -->\n\n          <div class=\"table-responsive\" *ngIf=\"bulkStatus?.length\">\n            <table class=\"table table-striped mg-b-0\">\n              <thead class=\"nowrap\">\n                <tr>\n                  <th> User Name </th>\n                  <th>Email Address</th>\n                  <th [class.active]=\"order === 'insertTimestamp'\" (click)=\"setOrder('insertTimestamp')\"> \n                    Request Date\n                    <span [hidden]=\"reverse\">▼</span>\n                    <span [hidden]=\"!reverse\">▲</span>\n                  </th>\n                  <th [class.active]=\"order === 'adminUser'\" (click)=\"setOrder('adminUser')\"> \n                    Requested By\n                    <span [hidden]=\"reverse\">▼</span>\n                    <span [hidden]=\"!reverse\">▲</span>\n                  </th>\n                  <th [class.active]=\"order === 'status'\" (click)=\"setOrder('status')\"> \n                    Status\n                    <span [hidden]=\"reverse\">▼</span>\n                    <span [hidden]=\"!reverse\">▲</span>\n                  </th>\n                  <th [class.active]=\"order === 'updateTimestamp'\" (click)=\"setOrder('updateTimestamp')\"> \n                    Last Update\n                    <span [hidden]=\"reverse\">▼</span>\n                    <span [hidden]=\"!reverse\">▲</span>\n                  </th>\n                  <th>Method</th>\n                  <th>Source</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let status of bulkStatus; let i = index;\">\n                  <th> {{ status?.data.firstName + \" \" + status?.data?.lastName }}</th>\n                  <th> {{ status?.data?.emailAddress }}</th>\n                  <th> {{ status?.insertTimestamp | date: 'yyyy-MM-dd' }} </th>\n                  <th> {{ status?.adminUser?.fullName + \" (\" + status?.adminUser.company + \")\" }}</th>\n                  <th> {{ status?.status }}</th>\n                  <th> {{ status?.updateTimestamp | date: 'yyyy-MM-dd' }} </th>\n                  <th> {{ status?.method }}</th>\n                  <th> {{ status?.source }}</th>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n\n          <div >\n            <div class=\"card-footer pagination-bar text-right pb-0 pt-3\">\n              <h3>{{ pagination?.entries_info }}</h3>\n              <ul *ngIf=\"pagination && pagination?.total_pages\" class=\"pagination justify-content-end\">\n                <li [ngClass]=\"{disabled: !pagination?.prev_page}\" class=\"page-item previous-item\" (click)=\"importStatusSearch.page = pagination?.prev_page; getStatus();\">\n                  <a class=\"page-link\">Previous</a>\n                </li>\n                <li class=\"page-item number-item active\">\n                  <a class=\"page-link\">{{ pagination?.current_page }}</a>\n                </li>\n                <li [ngClass]=\"{disabled: !pagination?.next_page}\" class=\"page-item next-item\" (click)=\"importStatusSearch.page = pagination?.next_page; getStatus();\">\n                  <a class=\"page-link\">Next</a>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <!-- END SALES TABEL -->\n\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- End Row -->\n\n</div>\n\n<!-- <pre [innerHtml]=\"bulkStatus | json\"></pre> -->"

/***/ }),

/***/ "./src/app/views/admin-pages/bulk-import-status/bulk-import-status-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/admin-pages/bulk-import-status/bulk-import-status-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: BulkImportStatusRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulkImportStatusRoutingModule", function() { return BulkImportStatusRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bulk_import_status_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bulk-import-status.component */ "./src/app/views/admin-pages/bulk-import-status/bulk-import-status.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _bulk_import_status_component__WEBPACK_IMPORTED_MODULE_2__["BulkImportStatusComponent"], pathMatch: 'full' }
];
var BulkImportStatusRoutingModule = /** @class */ (function () {
    function BulkImportStatusRoutingModule() {
    }
    BulkImportStatusRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BulkImportStatusRoutingModule);
    return BulkImportStatusRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/admin-pages/bulk-import-status/bulk-import-status.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/views/admin-pages/bulk-import-status/bulk-import-status.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-limit-bar {\n  width: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYWRtaW4tcGFnZXMvYnVsay1pbXBvcnQtc3RhdHVzL0Q6XFx4YW1wcFxcaHRkb2NzXFxzaC1hZG1pbi11aVxcYW5ndWxhci9zcmNcXGFwcFxcdmlld3NcXGFkbWluLXBhZ2VzXFxidWxrLWltcG9ydC1zdGF0dXNcXGJ1bGstaW1wb3J0LXN0YXR1cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvYWRtaW4tcGFnZXMvYnVsay1pbXBvcnQtc3RhdHVzL2J1bGstaW1wb3J0LXN0YXR1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FkbWluLXBhZ2VzL2J1bGstaW1wb3J0LXN0YXR1cy9idWxrLWltcG9ydC1zdGF0dXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1saW1pdC1iYXJ7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbn0iLCIucGFnZS1saW1pdC1iYXIge1xuICB3aWR0aDogODBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/admin-pages/bulk-import-status/bulk-import-status.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/views/admin-pages/bulk-import-status/bulk-import-status.component.ts ***!
  \**************************************************************************************/
/*! exports provided: BulkImportStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulkImportStatusComponent", function() { return BulkImportStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_ui_jwt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared-ui/jwt.service */ "./src/app/shared-ui/jwt.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_ui_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared-ui/global.service */ "./src/app/shared-ui/global.service.ts");
/* harmony import */ var _layouts_home_layout_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../layouts/home-layout/user.model */ "./src/app/layouts/home-layout/user.model.ts");
/* harmony import */ var _shared_ui_models_global_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared-ui/models/global.model */ "./src/app/shared-ui/models/global.model.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BulkImportStatusComponent = /** @class */ (function () {
    function BulkImportStatusComponent(jwtService, toastr, spinner, globalService) {
        this.jwtService = jwtService;
        this.toastr = toastr;
        this.spinner = spinner;
        this.globalService = globalService;
        this.permission = {
            view: false,
            edit: false,
            delete: false
        };
        this.currentUser = new _layouts_home_layout_user_model__WEBPACK_IMPORTED_MODULE_5__["currentUser"];
        this.importStatusSearch = new _shared_ui_models_global_model__WEBPACK_IMPORTED_MODULE_6__["ImportStatusSearch"];
        this.companySearch = new _shared_ui_models_global_model__WEBPACK_IMPORTED_MODULE_6__["CompanySearch"];
        this.loadingData = false;
        this.loadingCount = 1;
        this.order = 'insertTimestamp';
        this.reverse = true;
        this.globalService.sendActionChildToParent('bulkimport');
        this.globalService.setLoadingLabel('Loading... Please Wait.');
        this.currentUser = JSON.parse(this.jwtService.getCurrentUser());
        this.companySearch.user = this.currentUser.id;
        if (this.currentUser['isSuccessHackerAdmin']) {
            this.permission = {
                view: true,
                edit: true,
                delete: true
            };
        }
    }
    BulkImportStatusComponent.prototype.ngOnInit = function () {
        this.getCompanies();
    };
    BulkImportStatusComponent.prototype.setOrder = function (value) {
        this.order = value;
        if (this.order === value) {
            this.importStatusSearch.sortOrder = this.reverse ? "DESC" : "ASC";
            this.importStatusSearch.sort = value;
            this.reverse = !this.reverse;
            this.getStatus();
        }
    };
    BulkImportStatusComponent.prototype.getCompanies = function () {
        var _this = this;
        if (!this.currentUser['isSuccessHackerAdmin']) {
            this.importStatusSearch.company = this.currentUser['company'];
            this.getStatus();
            this.loadingData = true;
        }
        else {
            this.companies = [];
            this.spinner.show();
            this.loadingData = true;
            this.globalService.getCompanies({ user: this.companySearch.user }).subscribe(function (data) {
                if (Object.keys(data).length) {
                    _this.companies = data.items;
                    var found = _this.companies.filter(function (e) { return e.companyId == _this.currentUser['company'].companyId; });
                    if (_this.currentUser['company']) {
                        _this.importStatusSearch.company = found[0];
                        _this.getStatus();
                    }
                }
                _this.spinner.hide();
            }, function (error) {
                _this.spinner.hide();
                _this.loadingData = false;
                if (error && error.error && error.error.message) {
                    _this.toastr.error(error.error.message, 'Error ' + error.status);
                }
                else {
                    _this.toastr.error(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].reponseCode[error.status], 'Error');
                }
            });
        }
    };
    BulkImportStatusComponent.prototype.getStatus = function () {
        var _this = this;
        var postData = {
            company: this.importStatusSearch.company.companyId,
            user: this.currentUser.id,
            source: this.importStatusSearch.source,
            status: this.importStatusSearch.status,
            method: this.importStatusSearch.method,
            page: this.importStatusSearch.page,
            limit: this.importStatusSearch.limit,
            sort: this.importStatusSearch.sort,
            sortOrder: this.importStatusSearch.sortOrder
        };
        this.spinner.show();
        if (this.loadingCount < 2) {
            this.loadingData = true;
        }
        this.globalService.getStatus(postData).subscribe(function (data) {
            _this.loadingData = false;
            _this.loadingCount++;
            if (data && Object.keys(data).length) {
                _this.bulkStatus = data.items;
                _this.pagination = data.meta.pagination;
            }
            _this.spinner.hide();
        }, function (error) {
            _this.spinner.hide();
            _this.loadingData = false;
            if (error && error.error && error.error.message) {
                _this.toastr.error(error.error.message, 'Error ' + error.status);
            }
            else {
                _this.toastr.error(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].reponseCode[error.status], 'Error');
            }
        });
    };
    BulkImportStatusComponent.prototype.clearFilter = function () {
        this.importStatusSearch.source = "";
        this.importStatusSearch.status = "";
        this.importStatusSearch.method = "";
        this.importStatusSearch.limit = 25;
        this.importStatusSearch.sort = "insertTimestamp";
        this.importStatusSearch.sortOrder = 'ASC';
        this.reverse = true;
        this.getStatus();
    };
    BulkImportStatusComponent.ctorParameters = function () { return [
        { type: _shared_ui_jwt_service__WEBPACK_IMPORTED_MODULE_1__["JwtService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _shared_ui_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] }
    ]; };
    BulkImportStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bulk-import-status',
            template: __webpack_require__(/*! raw-loader!./bulk-import-status.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/admin-pages/bulk-import-status/bulk-import-status.component.html"),
            styles: [__webpack_require__(/*! ./bulk-import-status.component.scss */ "./src/app/views/admin-pages/bulk-import-status/bulk-import-status.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_ui_jwt_service__WEBPACK_IMPORTED_MODULE_1__["JwtService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _shared_ui_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]])
    ], BulkImportStatusComponent);
    return BulkImportStatusComponent;
}());



/***/ }),

/***/ "./src/app/views/admin-pages/bulk-import-status/bulk-import-status.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/views/admin-pages/bulk-import-status/bulk-import-status.module.ts ***!
  \***********************************************************************************/
/*! exports provided: BulkImportStatusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulkImportStatusModule", function() { return BulkImportStatusModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _bulk_import_status_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bulk-import-status-routing.module */ "./src/app/views/admin-pages/bulk-import-status/bulk-import-status-routing.module.ts");
/* harmony import */ var _bulk_import_status_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bulk-import-status.component */ "./src/app/views/admin-pages/bulk-import-status/bulk-import-status.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var BulkImportStatusModule = /** @class */ (function () {
    function BulkImportStatusModule() {
    }
    BulkImportStatusModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_bulk_import_status_component__WEBPACK_IMPORTED_MODULE_3__["BulkImportStatusComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _bulk_import_status_routing_module__WEBPACK_IMPORTED_MODULE_2__["BulkImportStatusRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot()
            ]
        })
    ], BulkImportStatusModule);
    return BulkImportStatusModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-admin-pages-bulk-import-status-bulk-import-status-module.js.map