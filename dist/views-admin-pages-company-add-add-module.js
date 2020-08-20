(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-admin-pages-company-add-add-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/admin-pages/company/add/add.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/admin-pages/company/add/add.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" [hidden]=\"loadingData\">\r\n\r\n  <!-- Page Header -->\r\n  <div class=\"page-header\">\r\n    <div>\r\n      <h2 class=\"main-content-title tx-24 mg-b-5\">{{ company?.companyId ? 'Edit' : 'Add' }} Company</h2>\r\n    </div>\r\n  </div>\r\n  <!-- End Page Header -->\r\n\r\n  <!-- Row -->\r\n  <div class=\"row sidemenu-height\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"card custom-card\">\r\n        <div class=\"card-body\">\r\n          \r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <div class=\"row row-xs mg-b-20\">\r\n                <div class=\"col-md-3\">\r\n                  <label class=\"mg-b-0\">Name:\r\n                    <sup> <i class=\"fa fa-star star-icon\" aria-hidden=\"true\"\r\n                      [ngClass]=\"{'text-danger': !company.companyName, 'text-primary': company.companyName}\"></i>\r\n                    </sup>\r\n                  </label>\r\n                </div>\r\n                <div class=\"col-md-9 mg-t-5 mg-md-t-0\">\r\n                  <input class=\"form-control\" [(ngModel)]=\"company.companyName\" placeholder=\"Enter Company Name\" type=\"text\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row row-xs mg-b-20\">\r\n                <div class=\"col-md-3\">\r\n                  <label class=\"mg-b-0\">Active:</label>\r\n                </div>\r\n                <div class=\"col-md-9 mg-t-5 mg-md-t-0\">\r\n                  <label class=\"toggle-switch\">\r\n                    <input type=\"checkbox\" [(ngModel)]=\"company.isActive\">\r\n                    <div class=\"slider\"></div>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"row row-xs mg-b-20\" *ngIf=\"company?.companyId\">\r\n                <div class=\"col-md-3\">\r\n                  <label class=\"mg-b-0\">Created By:</label>\r\n                </div>\r\n                <div class=\"col-md-9 mg-t-5 mg-md-t-0\">\r\n                  {{ company?.createdBy?.fullName }} | {{ company?.createDate | date: 'yyyy-MM-dd' }}\r\n                </div>\r\n              </div>\r\n              <div class=\"row row-xs mg-b-20\" *ngIf=\"company?.companyId && company?.modifiedBy\">\r\n                <div class=\"col-md-3\">\r\n                  <label class=\"mg-b-0\">Modified By:</label>\r\n                </div>\r\n                <div class=\"col-md-9 mg-t-5 mg-md-t-0\">\r\n                  {{ company?.modifiedBy?.fullName }} | {{ company?.modifiedDate | date: 'yyyy-MM-dd' }}\r\n                </div>\r\n              </div>\r\n              <div class=\"row row-xs mg-b-20\">\r\n                <div class=\"col-md-3\">\r\n                  <label class=\"mg-b-0\">Users:</label>\r\n                </div>\r\n                <div class=\"col-md-9 mg-t-5 mg-md-t-0\">\r\n                  {{ company?.activeUsers }} active / {{ company?.totalUsers }} total\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6\">\r\n              <div class=\"row row-xs mg-b-20\">\r\n                <div class=\"col-md-12 mg-b-20\">\r\n                  <div class=\"btn-icon-list\">\r\n                    Groups:\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-8 input-group\">\r\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"addedGroup\" name=\"addedGroup\" placeholder=\"Add new group\" (keyup.enter)=\"addGroup()\"/>\r\n                      <span class=\"input-group-btn\">\r\n                        <button class=\"btn ripple btn-success btn-icon\" (click)=\"addGroup()\" tooltip=\"{{ addedGroup ? 'Add this group' : 'Enter a group name to add a group' }}\"><i class=\"fe fe-plus\" ></i></button>\r\n                      </span>\r\n                      <span class=\"input-group-btn\">\r\n                        <button class=\"btn ripple btn-secondary btn-icon\" (click)=\"deleteGroup()\" [disabled]=\"!groupForRemove.length\" tooltip=\"Delete selected groups\"><i class=\"fe fe-trash\"></i></button>\r\n                      </span>\r\n                    </div>\r\n                  </div>  \r\n                </div>\r\n                <div *ngIf=\"selectedGroups?.length\">\r\n                  <table class=\"table mg-b-0\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th>\r\n                          <input type=\"checkbox\" [(ngModel)]=\"multiSelect\" name=\"multiSelect\" (click)=\"multiSelectGroup(multiSelect)\"/>\r\n                        </th>\r\n                        <th>Name</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let group of selectedGroups; let i = index;\">\r\n                        <td><input type=\"checkbox\" (change)=\"selectGroup(group)\" [(ngModel)]=\"group.added\" [disabled]=\"group.removed\" name=\"group{{i}}\"/></td>\r\n                        <td><label [ngClass]=\"{'text-crossed': group.removed}\">  {{ group?.name }} </label></td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            \r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-group row justify-content-end mb-0\">\r\n                <div class=\"col-md-12\">\r\n                  <button class=\"btn ripple btn-light pd-x-30 pull-right\" [routerLink]=\"['/company/list']\">Cancel</button>&nbsp;&nbsp;\r\n                  <button class=\"btn ripple btn-primary pd-x-30 mg-r-5 pull-right\" [disabled]=\"!company?.companyName\" (click)=\"saveCompany()\" *ngIf=\"!company?.companyId\">Save</button>\r\n                  <button class=\"btn ripple btn-primary pd-x-30 mg-r-5 pull-right\" [disabled]=\"!company?.companyName\" (click)=\"updateCompany()\" *ngIf=\"company?.companyId\">Save</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End Row -->\r\n\r\n</div>\r\n\r\n<div bsModal [config]=\"{backdrop: 'static', keyboard: false}\"  #addGroupModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\"\r\naria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\"><i class=\"fa fa-plus\"></i> Add Group</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"addGroupModal.hide();\" aria-label=\"Close\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"addedGroup\" name=\"addedGroup\" placeholder=\"Enter Group Name\" />\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"addGroupModal.hide();\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"addGroup()\" [disabled]=\"!addedGroup\">Add</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/admin-pages/company/add/add-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/admin-pages/company/add/add-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: AddRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRoutingModule", function() { return AddRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add.component */ "./src/app/views/admin-pages/company/add/add.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _add_component__WEBPACK_IMPORTED_MODULE_2__["AddComponent"], pathMatch: 'full' }
];
var AddRoutingModule = /** @class */ (function () {
    function AddRoutingModule() {
    }
    AddRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AddRoutingModule);
    return AddRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/admin-pages/company/add/add.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/views/admin-pages/company/add/add.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toggle-switch {\n  height: 26px;\n  width: 52px;\n  display: inline-block;\n  position: relative;\n}\n.toggle-switch input {\n  display: none;\n}\n.toggle-switch input:checked + .slider {\n  background-color: #03c895;\n  border-radius: 50px;\n}\n.toggle-switch input:checked + .slider::after {\n  -webkit-transform: translateX(26px);\n  transform: translateX(26px);\n}\n.toggle-switch .slider {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: grey;\n  border-radius: 50px;\n}\n.toggle-switch .slider::after {\n  position: absolute;\n  content: \"\";\n  height: 18px;\n  width: 18px;\n  background-color: white;\n  left: 4px;\n  bottom: 4px;\n  border-radius: 50px;\n}\n.group-list {\n  margin-bottom: 0rem;\n}\n.text-crossed {\n  text-decoration: line-through;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYWRtaW4tcGFnZXMvY29tcGFueS9hZGQvRDpcXHhhbXBwXFxodGRvY3NcXHNoLWFkbWluLXVpXFxhbmd1bGFyL3NyY1xcYXBwXFx2aWV3c1xcYWRtaW4tcGFnZXNcXGNvbXBhbnlcXGFkZFxcYWRkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9hZG1pbi1wYWdlcy9jb21wYW55L2FkZC9hZGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNDRjtBREFFO0VBQ0UsYUFBQTtBQ0VKO0FEREk7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FDR047QURESTtFQUNFLG1DQUFBO0VBRUEsMkJBQUE7QUNHTjtBREFFO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0VKO0FEREk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0dOO0FERUE7RUFDRSxtQkFBQTtBQ0NGO0FERUE7RUFDRSw2QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvYWRtaW4tcGFnZXMvY29tcGFueS9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvZ2dsZS1zd2l0Y2gge1xyXG4gIGhlaWdodDogMjZweDtcclxuICB3aWR0aDogNTJweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGlucHV0IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAmOmNoZWNrZWQgKyAuc2xpZGVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAzYzg5NTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIH1cclxuICAgICY6Y2hlY2tlZCArIC5zbGlkZXI6OmFmdGVyIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxuICAgIH1cclxuICB9XHJcbiAgLnNsaWRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICB3aWR0aDogMThweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGxlZnQ6IDRweDtcclxuICAgICAgYm90dG9tOiA0cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZ3JvdXAtbGlzdHtcclxuICBtYXJnaW4tYm90dG9tOiAwcmVtO1xyXG59XHJcblxyXG4udGV4dC1jcm9zc2VkIHtcclxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufSIsIi50b2dnbGUtc3dpdGNoIHtcbiAgaGVpZ2h0OiAyNnB4O1xuICB3aWR0aDogNTJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udG9nZ2xlLXN3aXRjaCBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udG9nZ2xlLXN3aXRjaCBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwM2M4OTU7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG4udG9nZ2xlLXN3aXRjaCBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjo6YWZ0ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xufVxuLnRvZ2dsZS1zd2l0Y2ggLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuLnRvZ2dsZS1zd2l0Y2ggLnNsaWRlcjo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMThweDtcbiAgd2lkdGg6IDE4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBsZWZ0OiA0cHg7XG4gIGJvdHRvbTogNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG4uZ3JvdXAtbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDByZW07XG59XG5cbi50ZXh0LWNyb3NzZWQge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/admin-pages/company/add/add.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/admin-pages/company/add/add.component.ts ***!
  \****************************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_ui_jwt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared-ui/jwt.service */ "./src/app/shared-ui/jwt.service.ts");
/* harmony import */ var _layouts_home_layout_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../layouts/home-layout/user.model */ "./src/app/layouts/home-layout/user.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_ui_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared-ui/global.service */ "./src/app/shared-ui/global.service.ts");
/* harmony import */ var _shared_ui_models_global_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared-ui/models/global.model */ "./src/app/shared-ui/models/global.model.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddComponent = /** @class */ (function () {
    function AddComponent(jwtService, route, spinner, globalService, toastr, router) {
        var _this = this;
        this.jwtService = jwtService;
        this.route = route;
        this.spinner = spinner;
        this.globalService = globalService;
        this.toastr = toastr;
        this.router = router;
        this.currentUser = new _layouts_home_layout_user_model__WEBPACK_IMPORTED_MODULE_2__["currentUser"];
        this.selectedGroups = [];
        this.groupForRemove = [];
        this.addedGroup = "";
        this.loadingData = false;
        this.company = new _shared_ui_models_global_model__WEBPACK_IMPORTED_MODULE_6__["Company"];
        this.globalService.setLoadingLabel('Loading... Please Wait.');
        this.currentUser = JSON.parse(this.jwtService.getCurrentUser());
        if (!this.currentUser['isSuccessHackerAdmin']) {
            this.router.navigate(['/user/list']);
            return;
        }
        this.route.params.subscribe(function (res) {
            if (res.id) {
                _this.getCompany(res.id);
            }
        });
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent.prototype.getCompany = function (id) {
        var _this = this;
        this.spinner.show();
        this.loadingData = true;
        var postData = {
            id: id,
            user: this.currentUser.id
        };
        this.globalService.getCompanyById(postData).subscribe(function (data) {
            if (Object.keys(data).length) {
                _this.company = data;
                if (_this.company.groups && _this.company.groups.length) {
                    _this.company.groups.forEach(function (element) {
                        _this.selectedGroups.push({ name: element });
                    });
                }
            }
            _this.spinner.hide();
            _this.loadingData = false;
        }, function (error) {
            _this.spinner.hide();
            _this.loadingData = false;
            _this.toastr.error(error.error.message, 'Error ' + error.status);
        });
    };
    AddComponent.prototype.saveCompany = function () {
        var _this = this;
        this.company.groups = [];
        if (this.selectedGroups.length) {
            this.selectedGroups.forEach(function (element) {
                if (!element.removed) {
                    _this.company.groups.push(element.name);
                }
            });
        }
        var postData = {
            name: this.company.companyName,
            isActive: this.company.isActive ? 1 : 0,
            creator: this.currentUser.id
        };
        if (this.company.groups.length) {
            postData['groups'] = this.company.groups;
        }
        this.globalService.setLoadingLabel('Inserting... Please Wait.');
        this.spinner.show();
        this.globalService.saveCompany(postData).subscribe(function (data) {
            _this.spinner.hide();
            if (data && data.companyId) {
                _this.toastr.success("Data saved successfully.", "Success");
                _this.router.navigate(['/company/list']);
            }
            else {
                _this.toastr.error("There are some error while inserting the data!", "Error");
            }
        }, function (error) {
            _this.spinner.hide();
            _this.toastr.error(error.error.message, 'Error ' + error.status);
        });
    };
    AddComponent.prototype.updateCompany = function () {
        var _this = this;
        this.company.groups = [];
        if (this.selectedGroups.length) {
            this.selectedGroups.forEach(function (element) {
                if (!element.removed) {
                    _this.company.groups.push(element.name);
                }
            });
        }
        var postData = {
            name: this.company.companyName,
            isActive: this.company.isActive ? 1 : 0,
            modifier: this.currentUser.id,
            groups: this.company.groups
        };
        this.globalService.setLoadingLabel('Updating... Please Wait.');
        this.spinner.show();
        this.globalService.updateCompany(postData, this.company['companyId']).subscribe(function (data) {
            _this.spinner.hide();
            if (data && data.modifiedBy) {
                _this.toastr.success("Data updated successfully.", "Success");
                _this.router.navigate(['/company/list']);
            }
            else {
                _this.toastr.error("There are some error while updating the data!", "Error");
            }
        }, function (error) {
            _this.spinner.hide();
            _this.toastr.error(error.error.message, 'Error ' + error.status);
        });
    };
    AddComponent.prototype.multiSelectGroup = function (multiSelect) {
        var _this = this;
        this.groupForRemove = [];
        this.selectedGroups.forEach(function (element) {
            if (multiSelect) {
                element.added = false;
                element.removed = false;
            }
            else {
                element.added = true;
                _this.groupForRemove.push(element);
            }
        });
    };
    AddComponent.prototype.selectGroup = function (group) {
        var found = this.groupForRemove.filter(function (e) { return e.name == group.name; });
        if (found.length) {
            this.groupForRemove.splice(this.groupForRemove.indexOf(found[0]), 1);
        }
        else {
            this.groupForRemove.push(group);
        }
    };
    AddComponent.prototype.showAddGroupModal = function () {
        this.addedGroup = "";
        this.addGroupModal.show();
    };
    AddComponent.prototype.addGroup = function () {
        var _this = this;
        if (this.addedGroup != "") {
            var found = this.selectedGroups.filter(function (e) { return e.name == _this.addedGroup; });
            if (found.length) {
                this.toastr.info("This group is already exists!", 'Info');
                return;
            }
            else {
                this.selectedGroups.push({ name: this.addedGroup });
                this.addedGroup = "";
            }
        }
    };
    AddComponent.prototype.deleteGroup = function () {
        var _this = this;
        this.selectedGroups.forEach(function (element) {
            var found = _this.groupForRemove.filter(function (e) { return e.name == element.name; });
            if (found.length) {
                element.removed = true;
            }
        });
    };
    AddComponent.ctorParameters = function () { return [
        { type: _shared_ui_jwt_service__WEBPACK_IMPORTED_MODULE_1__["JwtService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
        { type: _shared_ui_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("addGroupModal", { static: false }),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ModalDirective"])
    ], AddComponent.prototype, "addGroupModal", void 0);
    AddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/admin-pages/company/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/views/admin-pages/company/add/add.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_ui_jwt_service__WEBPACK_IMPORTED_MODULE_1__["JwtService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _shared_ui_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/views/admin-pages/company/add/add.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/admin-pages/company/add/add.module.ts ***!
  \*************************************************************/
/*! exports provided: AddModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddModule", function() { return AddModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-routing.module */ "./src/app/views/admin-pages/company/add/add-routing.module.ts");
/* harmony import */ var _add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add.component */ "./src/app/views/admin-pages/company/add/add.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AddModule = /** @class */ (function () {
    function AddModule() {
    }
    AddModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_add_component__WEBPACK_IMPORTED_MODULE_3__["AddComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _add_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot()
            ]
        })
    ], AddModule);
    return AddModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-admin-pages-company-add-add-module.js.map