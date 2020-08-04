(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-admin-pages-company-list-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/admin-pages/company/list/list.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/admin-pages/company/list/list.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\r\n  <!-- Page Header -->\r\n  <div class=\"page-header\">\r\n    <div>\r\n      <h2 class=\"main-content-title tx-24 mg-b-5\">Companies</h2>\r\n    </div>\r\n  </div>\r\n  <!-- End Page Header -->\r\n\r\n  <!-- Row -->\r\n  <div class=\"row sidemenu-height\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"card custom-card\">\r\n        <div class=\"card-body\">\r\n          \r\n          <!-- SALES TABEL -->\r\n          <div class=\"page-header\">\r\n            <div>\r\n              <h6 class=\"card-title mb-1 d-flex\"><span class=\"pt-2\">Companies:</span> &nbsp;&nbsp;&nbsp;\r\n                <button class=\"btn ripple btn-success btn-icon\" [routerLink]=\"['/company/add']\" ><i class=\"fe fe-plus\"></i></button>&nbsp;\r\n                <button class=\"btn ripple btn-secondary btn-icon\" (click)=\"showDeleteModal()\" *ngIf=\"selectedCompany?.length\"><i class=\"fe fe-trash\"></i></button>\r\n                <!-- <button class=\"btn ripple btn-info btn-icon\"><i class=\"far fa-edit\"></i></button> -->\r\n              </h6>\r\n            </div>\r\n          </div>\r\n          \r\n          <!-- Row -->\r\n\t\t\t\t\t<div class=\"row row-sm\" *ngIf=\"!companies?.length\">\r\n            <div class=\"col-md\">\r\n              <div class=\"card custom-card card-body text-center\">\r\n                <p class=\"card-text tx-24\">No data found!</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- End Row -->\r\n\r\n          <div class=\"table-responsive\" *ngIf=\"companies?.length\">\r\n            <table class=\"table table-striped mg-b-0\">\r\n              <thead class=\"nowrap\">\r\n                <tr>\r\n                  <th> <input type=\"checkbox\" [(ngModel)]=\"multiSelect\" name=\"multiSelect\" (click)=\"multiSelectCompany(multiSelect)\"/> </th>\r\n                  <th> Name </th>\r\n                  <th> Active </th>\r\n                  <th> Created By </th>\r\n                  <th> Date Created </th>\r\n                  <th> # Of Users </th>\r\n                  <th> Action </th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let company of companies; let i = index;\">\r\n                  <th> <input type=\"checkbox\" [(ngModel)]=\"company.added\" value=\"{{ company.id }}\" (change)=\"selectCompany(company)\" /> </th>\r\n                  <th> {{ company?.name }} </th>\r\n                  <th [ngClass]=\"{'text-danger': company?.isActive == 0, 'text-primary': company?.isActive == 1 }\"> {{ company?.isActive ? 'Active' : 'Inactive' }} </th>\r\n                  <th> {{ company?.createdBy?.fullName }}</th>\r\n                  <th> {{ company?.createDate | date: 'yyyy-MM-dd' }} </th>\r\n                  <th> {{ company?.userCount }} </th>\r\n                  <th>\r\n                    <div class=\"btn-icon-list\">\r\n                      <button class=\"btn ripple btn-secondary btn-icon\" (click)=\"showDeleteModal(company)\"><i class=\"fe fe-trash\"></i></button>\r\n                      <button class=\"btn ripple btn-info btn-icon\" [routerLink]=\"['/company/edit', company.id]\"><i class=\"far fa-edit\"></i></button>\r\n                    </div>\r\n                  </th>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n\r\n          <nav>\r\n            <ul class=\"pagination justify-content-end\">\r\n              <li class=\"page-item disabled\">\r\n                <a class=\"page-link\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Previous</a>\r\n              </li>\r\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\r\n              <li class=\"page-item active\" aria-current=\"page\">\r\n                <a class=\"page-link\" href=\"#\">2 <span class=\"sr-only\">(current)</span></a>\r\n              </li>\r\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n              <li class=\"page-item\">\r\n                <a class=\"page-link\" href=\"#\">Next</a>\r\n              </li>\r\n            </ul>\r\n          </nav>\r\n\r\n          <!-- <div >\r\n            <div class=\"card-footer pagination-bar text-right pb-0 pt-3\">\r\n              <ul *ngIf=\"pager?.pages && pager?.pages.length\" class=\"pagination justify-content-end\">\r\n                <li [ngClass]=\"{disabled:pager?.currentPage === 1}\" class=\"page-item first-item\">\r\n                  <a (click)=\"getSalesReport(1)\" class=\"page-link\">First</a>\r\n                </li>\r\n                <li [ngClass]=\"{disabled:pager?.currentPage === 1}\" class=\"page-item previous-item\">\r\n                  <a (click)=\"getSalesReport(pager?.currentPage - 1)\" class=\"page-link\">Previous</a>\r\n                </li>\r\n                <li *ngFor=\"let page of pager?.pages\" [ngClass]=\"{active:pager?.currentPage === page}\" class=\"page-item number-item\">\r\n                  <a (click)=\"getSalesReport(page)\" class=\"page-link\">{{page}}</a>\r\n                </li>\r\n                <li [ngClass]=\"{disabled:pager?.currentPage === pager?.totalPages}\" class=\"page-item next-item\">\r\n                  <a (click)=\"getSalesReport(pager?.currentPage + 1)\" class=\"page-link\">Next</a>\r\n                </li>\r\n                <li [ngClass]=\"{disabled:pager?.currentPage === pager?.totalPages}\" class=\"page-item last-item\">\r\n                  <a (click)=\"getSalesReport(pager?.totalPages)\" class=\"page-link\">Last</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div> -->\r\n          <!-- END SALES TABEL -->\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End Row -->\r\n\r\n</div>\r\n\r\n<div bsModal [config]=\"{backdrop: 'static', keyboard: false}\"  #deleteCompanyModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\"\r\naria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\"><i class=\"fa fa-trash\"></i> Delete Company</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"deleteCompanyModal.hide();\" aria-label=\"Close\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Are you sure want to delete this selected company?</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"deleteCompanyModal.hide();\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteCompany()\">Delete</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- <pre [innerHtml]=\"companies | json\"></pre> -->\r\n    "

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FkbWluLXBhZ2VzL2NvbXBhbnkvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

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
    function ListComponent(toastr, spinner, globalService) {
        this.toastr = toastr;
        this.spinner = spinner;
        this.globalService = globalService;
        this.pager = {};
        this.selectedCompany = [];
        this.globalService.sendActionChildToParent('companies');
    }
    ListComponent.prototype.ngOnInit = function () {
        this.getCompanies();
    };
    ListComponent.prototype.getCompanies = function () {
        var _this = this;
        this.spinner.show();
        this.globalService.getCompanies({}).subscribe(function (data) {
            console.log("data ------------ ", data);
            _this.spinner.hide();
            if (Object.keys(data).length) {
                _this.companies = data.Items;
                _this.pagination = data.meta;
            }
        }, function (error) {
            _this.toastr.error('There are some server error! Please check connection.', 'Error');
        });
    };
    ListComponent.prototype.showDeleteModal = function (company) {
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
        var found = this.selectedCompany.filter(function (e) { return e.id == company['id']; });
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
            isActive: 0,
        };
        this.globalService.updateCompany(postData, this.currentCompany['id']).subscribe(function (data) {
            _this.deleteCompanyModal.hide();
        });
    };
    ListComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] },
        { type: _shared_ui_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] }
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
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            _shared_ui_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
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
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
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
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot()
            ]
        })
    ], ListModule);
    return ListModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-admin-pages-company-list-list-module.js.map