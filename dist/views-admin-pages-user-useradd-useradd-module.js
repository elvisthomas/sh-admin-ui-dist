(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-admin-pages-user-useradd-useradd-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/admin-pages/user/useradd/useradd.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/admin-pages/user/useradd/useradd.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" [hidden]=\"loadingData\">\r\n\r\n  <!-- Page Header -->\r\n  <div class=\"page-header\">\r\n    <div>\r\n      <h2 class=\"main-content-title tx-24 mg-b-5\">{{ user?.userId ? 'Edit' : 'Add' }} User</h2>\r\n    </div>\r\n  </div>\r\n  <!-- End Page Header -->\r\n\r\n  <!-- Row -->\r\n  <div class=\"row sidemenu-height\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"card custom-card\">\r\n        <div class=\"card-body\">\r\n          \r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <div class=\"row row-xs mg-b-20\">\r\n                <div class=\"col-md-3\">\r\n                  <label class=\"mg-b-0\">Company:\r\n                    <sup> <i class=\"fa fa-star star-icon\" aria-hidden=\"true\"\r\n                      [ngClass]=\"{'text-danger': !user.company, 'text-primary': user.company}\"></i>\r\n                    </sup>\r\n                  </label>\r\n                </div>\r\n                <div class=\"col-md-8 mg-t-5 mg-md-t-0\">\r\n                  <select #s id=\"company\" class=\"form-control\" name=\"company\" [ngModel]=\"user.company\" (ngModelChange)=\"changeCompany(user.company, $event, s)\" *ngIf=\"permission.view\">\r\n                    <option value=\"\">Select Company</option>\r\n                    <option [ngValue]=\"company\" *ngFor=\"let company of companies;\">{{ company?.companyName }}</option>\r\n                  </select>\r\n                  <input class=\"form-control\" type=\"text\" [value]=\"user?.company?.companyName\" readonly *ngIf=\"!permission.view\">\r\n                </div>\r\n                <div class=\"col-md-1 mg-t-5 mg-md-t-0\" *ngIf=\"permission.view\">\r\n                  <button class=\"btn ripple btn-success btn-icon pull-right\" [routerLink]=\"['/company/add']\" tooltip=\"Add new company\"><i class=\"fe fe-plus\"></i></button>\r\n                </div>\r\n              </div>\r\n              <div class=\"row row-xs mg-b-20\">\r\n                <div class=\"col-md-3\">\r\n                  <label class=\"mg-b-0\">First Name:\r\n                    <sup> <i class=\"fa fa-star star-icon\" aria-hidden=\"true\"\r\n                      [ngClass]=\"{'text-danger': !user.firstName, 'text-primary': user.firstName}\"></i>\r\n                    </sup>\r\n                  </label>\r\n                </div>\r\n                <div class=\"col-md-9 mg-t-5 mg-md-t-0\">\r\n                  <input class=\"form-control\" placeholder=\"Enter First Name\" type=\"text\" [(ngModel)]=\"user.firstName\" name=\"firstName\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row row-xs mg-b-20\">\r\n                <div class=\"col-md-3\">\r\n                  <label class=\"mg-b-0\">Last Name:\r\n                    <sup> <i class=\"fa fa-star star-icon\" aria-hidden=\"true\"\r\n                      [ngClass]=\"{'text-danger': !user.lastName, 'text-primary': user.lastName}\"></i>\r\n                    </sup>\r\n                  </label>\r\n                </div>\r\n                <div class=\"col-md-9 mg-t-5 mg-md-t-0\">\r\n                  <input class=\"form-control\" placeholder=\"Enter Last Name\" type=\"text\" [(ngModel)]=\"user.lastName\" name=\"lastName\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row row-xs mg-b-20\">\r\n                <div class=\"col-md-3\">\r\n                  <label class=\"mg-b-0\">Email Address:\r\n                    <sup> <i class=\"fa fa-star star-icon\" aria-hidden=\"true\"\r\n                      [ngClass]=\"{'text-danger': !user.emailAddress, 'text-primary': user.emailAddress}\"></i>\r\n                    </sup>\r\n                  </label>\r\n                </div>\r\n                <div class=\"col-md-9 mg-t-5 mg-md-t-0\">\r\n                  <input class=\"form-control\" placeholder=\"Enter Email Address\" type=\"text\" [(ngModel)]=\"user.emailAddress\" name=\"emailAddress\" (ngModelChange)=\"checkValidEmail(user?.emailAddress)\">\r\n                  <p class=\"alert custom-p alert-danger validation-font-size  text-left\" role=\"alert\" *ngIf=\"!validEmail\">\r\n                    Your email address is invalid. Please enter a valid address.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n              <div class=\"row row-xs mg-b-20\">\r\n                <div class=\"col-md-3\">\r\n                  <label class=\"mg-b-0\">Active:</label>\r\n                </div>\r\n                <div class=\"col-md-9 mg-t-5 mg-md-t-0\">\r\n                  <label class=\"toggle-switch\">\r\n                    <input type=\"checkbox\" [(ngModel)]=\"user.isActive\" name=\"isActive\">\r\n                    <div class=\"slider\"></div>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"row row-xs mg-b-20\" [hidden]=\"isShDomain && permission.view\">\r\n                <div class=\"col-md-3\">\r\n                  <label class=\"mg-b-0\">Admin:</label>\r\n                </div>\r\n                <div class=\"col-md-9 mg-t-5 mg-md-t-0\">\r\n                  <label class=\"toggle-switch\">\r\n                    <input type=\"checkbox\" [(ngModel)]=\"user.isCustomerAdmin\" name=\"isCustomerAdmin\">\r\n                    <div class=\"slider\"></div>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"row row-xs mg-b-20\" *ngIf=\"permission.view && isShDomain\">\r\n                <div class=\"col-md-3\">\r\n                  <label class=\"mg-b-0\">SuccessHacker Admin:</label>\r\n                </div>\r\n                <div class=\"col-md-9 mg-t-5 mg-md-t-0\">\r\n                  <label class=\"toggle-switch\">\r\n                    <input type=\"checkbox\" [(ngModel)]=\"user.isSuccessHackerAdmin\" name=\"isSuccessHackerAdmin\">\r\n                    <div class=\"slider\"></div>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"row row-xs mg-b-20\">\r\n                <div class=\"col-md-3\">\r\n                  <label class=\"mg-b-0\">Reporting:</label>\r\n                </div>\r\n                <div class=\"col-md-9 mg-t-5 mg-md-t-0\">\r\n                  <label class=\"toggle-switch\">\r\n                    <input type=\"checkbox\" [(ngModel)]=\"user.reportingAccess\" name=\"reportingAccess\">\r\n                    <div class=\"slider\"></div>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"row row-xs mg-b-20\" *ngIf=\"user?.userId\">\r\n                <div class=\"col-md-3\">\r\n                  <label class=\"mg-b-0\">Created By:</label>\r\n                </div>\r\n                <div class=\"col-md-9 mg-t-5 mg-md-t-0\">\r\n                  {{ user?.createdBy?.fullName }} | {{ user?.createDate | date: 'yyyy-MM-dd' }}\r\n                </div>\r\n              </div>\r\n              <div class=\"row row-xs mg-b-20\" *ngIf=\"user?.userId && user?.modifiedBy\">\r\n                <div class=\"col-md-3\">\r\n                  <label class=\"mg-b-0\">Modified By:</label>\r\n                </div>\r\n                <div class=\"col-md-9 mg-t-5 mg-md-t-0\">\r\n                  {{ user?.modifiedBy?.fullName }} | {{ user?.modifiedDate | date: 'yyyy-MM-dd' }}\r\n                </div>\r\n              </div>\r\n              <div class=\"row row-xs mg-b-20\" *ngIf=\"user?.userId\">\r\n                <div class=\"col-md-3\">\r\n                  <label class=\"mg-b-0\">Last Login:</label>\r\n                </div>\r\n                <div class=\"col-md-9 mg-t-5 mg-md-t-0\">\r\n                  <span *ngIf=\"user?.lastSeenDate\">\r\n                    {{ user?.lastSeenDate | date: 'yyyy-MM-dd hh:mm' }}\r\n                  </span>\r\n                  <span *ngIf=\"!user?.lastSeenDate\">\r\n                    Never\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6\">\r\n              <div class=\"row row-xs mg-b-20\">\r\n                <div class=\"col-md-12 mg-b-20\">\r\n                  <div class=\"\">\r\n                    <div>\r\n                      Groups:\r\n                    </div>\r\n                    <div class=\"row\" [hidden]=\"!permission.view\">\r\n                      <div class=\"col-md-8 input-group\">\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"addedGroup\" name=\"addedGroup\" placeholder=\"Add new group\" (keyup.enter)=\"addGroup()\"/>\r\n                        <span class=\"input-group-btn\">\r\n                          <button class=\"btn ripple btn-success btn-icon\" (click)=\"addGroup()\" tooltip=\"{{ addedGroup ? 'Add this group' : 'Enter a group name to add a group' }}\"><i class=\"fe fe-plus\" ></i></button>\r\n                        </span>\r\n                        <span class=\"input-group-btn\">\r\n                          <button class=\"btn ripple btn-primary btn-icon\" [disabled]=\"user?.company?.companyId && permission.view\" [routerLink]=\"['/company/edit', user?.company?.companyId]\" tooltip=\"Company list\"><i class=\"fe fe-list\"></i></button>\r\n                        </span>\r\n                      </div>\r\n                    </div>  \r\n\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"tbody-scroll\" *ngIf=\"companiesGroup?.length\">\r\n                  <table class=\"table mg-b-0\">\r\n                    <thead class=\"nowrap\">\r\n                      <tr>\r\n                        <th>\r\n                          <input type=\"checkbox\" [(ngModel)]=\"multiSelect\" name=\"multiSelect\" (click)=\"multiSelectGroup(multiSelect)\"/>\r\n                        </th>\r\n                        <th [class.active]=\"groupOrder === 'name'\" (click)=\"setOrder()\">\r\n                          Name\r\n                          <span [hidden]=\"groupReverse\">▼</span>\r\n                          <span [hidden]=\"!groupReverse\">▲</span>\r\n                        </th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let group of companiesGroup; let i = index;\">\r\n                        <td><input type=\"checkbox\" [(ngModel)]=\"group.added\" name=\"group{{i}}\"/></td>\r\n                        <td>{{ group?.name }}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-group row justify-content-end mb-0\">\r\n                <div class=\"col-md-12\">\r\n                  <!-- <app-alert></app-alert> -->\r\n                  <button class=\"btn ripple btn-light pd-x-30 pull-right\" [routerLink]=\"['/user/list']\">Cancel</button>&nbsp;&nbsp;\r\n                  <button class=\"btn ripple btn-primary pd-x-30 mg-r-5 pull-right\" (click)=\"saveUser()\" *ngIf=\"!user?.userId\" [disabled]=\"!user.company || !user.firstName || !user.lastName || !user.emailAddress || !validEmail\">Save</button>\r\n                  <button class=\"btn ripple btn-primary pd-x-30 mg-r-5 pull-right\" (click)=\"updateUser()\" *ngIf=\"user?.userId\" [disabled]=\"!user.company || !user.firstName || !user.lastName || !user.emailAddress || !validEmail\">Save</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End Row -->\r\n\r\n</div>\r\n\r\n<div bsModal [config]=\"{backdrop: 'static', keyboard: false}\"  #addGroupModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\"\r\naria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\"><i class=\"fa fa-plus\"></i> Add Group</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"addGroupModal.hide();\" aria-label=\"Close\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"addedGroup\" name=\"addedGroup\" placeholder=\"Enter Group Name\" />\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"addGroupModal.hide();\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"addGroup()\" [disabled]=\"!addedGroup\">Add</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- <pre [innerHtml]=\"user | json\"></pre> -->"

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

module.exports = ".toggle-switch {\n  height: 26px;\n  width: 52px;\n  display: inline-block;\n  position: relative;\n}\n.toggle-switch input {\n  display: none;\n}\n.toggle-switch input:checked + .slider {\n  background-color: #03c895;\n  border-radius: 50px;\n}\n.toggle-switch input:checked + .slider::after {\n  -webkit-transform: translateX(26px);\n  transform: translateX(26px);\n}\n.toggle-switch .slider {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #c3c3c3;\n  border-radius: 50px;\n  transition: all 0.4s ease 0s;\n}\n.toggle-switch .slider::after {\n  position: absolute;\n  content: \"\";\n  height: 18px;\n  width: 18px;\n  background-color: white;\n  left: 4px;\n  bottom: 4px;\n  border-radius: 50px;\n  transition: all 0.4s ease 0s;\n}\n.group-list {\n  margin-bottom: 0rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYWRtaW4tcGFnZXMvdXNlci91c2VyYWRkL0Q6XFx4YW1wcFxcaHRkb2NzXFxzaC1hZG1pbi11aVxcYW5ndWxhci9zcmNcXGFwcFxcdmlld3NcXGFkbWluLXBhZ2VzXFx1c2VyXFx1c2VyYWRkXFx1c2VyYWRkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9hZG1pbi1wYWdlcy91c2VyL3VzZXJhZGQvdXNlcmFkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQUU7RUFDRSxhQUFBO0FDRUo7QURESTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUNHTjtBRERJO0VBQ0UsbUNBQUE7RUFFQSwyQkFBQTtBQ0dOO0FEQUU7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFFQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7QUNDSjtBREFJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtBQ0VOO0FER0E7RUFDRSxtQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvYWRtaW4tcGFnZXMvdXNlci91c2VyYWRkL3VzZXJhZGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9nZ2xlLXN3aXRjaCB7XHJcbiAgaGVpZ2h0OiAyNnB4O1xyXG4gIHdpZHRoOiA1MnB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaW5wdXQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgICY6Y2hlY2tlZCArIC5zbGlkZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDNjODk1O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgfVxyXG4gICAgJjpjaGVja2VkICsgLnNsaWRlcjo6YWZ0ZXIge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2xpZGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzNjM2MzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBsZWZ0OiA0cHg7XHJcbiAgICAgIGJvdHRvbTogNHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDBzO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmdyb3VwLWxpc3R7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHJlbTtcclxufSIsIi50b2dnbGUtc3dpdGNoIHtcbiAgaGVpZ2h0OiAyNnB4O1xuICB3aWR0aDogNTJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udG9nZ2xlLXN3aXRjaCBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udG9nZ2xlLXN3aXRjaCBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwM2M4OTU7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG4udG9nZ2xlLXN3aXRjaCBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjo6YWZ0ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xufVxuLnRvZ2dsZS1zd2l0Y2ggLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzNjM2MzO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDBzO1xufVxuLnRvZ2dsZS1zd2l0Y2ggLnNsaWRlcjo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMThweDtcbiAgd2lkdGg6IDE4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBsZWZ0OiA0cHg7XG4gIGJvdHRvbTogNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDBzO1xufVxuXG4uZ3JvdXAtbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDByZW07XG59Il19 */"

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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
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
    function UseraddComponent(jwtService, route, spinner, globalService, toastr, alertService, router) {
        var _this = this;
        this.jwtService = jwtService;
        this.route = route;
        this.spinner = spinner;
        this.globalService = globalService;
        this.toastr = toastr;
        this.alertService = alertService;
        this.router = router;
        this.permission = {
            view: false,
            edit: false,
            delete: false
        };
        this.currentUser = new _layouts_home_layout_user_model__WEBPACK_IMPORTED_MODULE_6__["currentUser"];
        this.companySearch = new _shared_ui_models_global_model__WEBPACK_IMPORTED_MODULE_7__["CompanySearch"];
        this.user = new _shared_ui_models_global_model__WEBPACK_IMPORTED_MODULE_7__["User"];
        this.selectedGroups = [];
        this.addedGroup = "";
        this.loadingData = false;
        this.groupOrder = 'name';
        this.groupReverse = false;
        this.companiesGroup = [];
        this.validEmail = true;
        this.globalService.setLoadingLabel('Loading... Please Wait.');
        this.currentUser = JSON.parse(this.jwtService.getCurrentUser());
        this.companySearch.user = this.currentUser.id;
        this.route.params.subscribe(function (res) {
            if (res.id) {
                _this.userID = res.id;
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
    UseraddComponent.prototype.setOrder = function () {
        this.groupReverse = !this.groupReverse;
        this.companiesGroup.reverse();
    };
    UseraddComponent.prototype.ngOnInit = function () {
        this.getCompanies();
    };
    UseraddComponent.prototype.getCompanies = function () {
        var _this = this;
        if (!this.currentUser['isSuccessHackerAdmin']) {
            this.user.company = this.currentUser['company'];
            if (this.userID) {
                this.getUser(this.userID);
            }
        }
        else {
            this.spinner.show();
            this.loadingData = true;
            this.globalService.getCompanies({ user: this.companySearch.user }).subscribe(function (data) {
                _this.spinner.hide();
                if (Object.keys(data).length) {
                    _this.companies = data.items;
                    if (_this.userID) {
                        _this.getUser(_this.userID);
                    }
                    else {
                        _this.loadingData = false;
                    }
                }
            }, function (error) {
                _this.spinner.hide();
                _this.loadingData = false;
                if (error && error.error && error.error.message) {
                    _this.toastr.error(error.error.message, 'Error ' + error.status);
                }
                else {
                    _this.toastr.error(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].reponseCode[error.status], 'Error');
                }
            });
        }
    };
    UseraddComponent.prototype.getUser = function (id) {
        var _this = this;
        this.spinner.show();
        var postData = {
            user: this.currentUser.id,
            company: this.currentUser['company'].companyId,
            id: id
        };
        this.globalService.getUserById(postData).subscribe(function (data) {
            if (Object.keys(data).length) {
                _this.user = data;
                if (_this.companies && _this.companies.length) {
                    var found = _this.companies.filter(function (e) { return e.companyId == _this.user.company.companyId; });
                    if (found.length) {
                        _this.user.company = found[0];
                    }
                    _this.user.company.groups.forEach(function (element) {
                        if (_this.user.groups && _this.user.groups.length) {
                            var foundGroup = _this.user.groups.filter(function (e) { return e == element; });
                            if (foundGroup.length) {
                                _this.companiesGroup.push({ name: element, added: true });
                            }
                            else {
                                _this.companiesGroup.push({ name: element });
                            }
                        }
                    });
                    _this.sortAlphaNum();
                }
            }
            _this.spinner.hide();
            _this.loadingData = false;
        }, function (error) {
            _this.spinner.hide();
            _this.loadingData = false;
            if (error && error.error && error.error.message) {
                _this.toastr.error(error.error.message, 'Error ' + error.status);
            }
            else {
                _this.toastr.error(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].reponseCode[error.status], 'Error');
            }
        });
    };
    UseraddComponent.prototype.saveUser = function () {
        var _this = this;
        this.alertService.clear();
        if (!this.user.firstName) {
            this.alertService.error('*Please fill all mandatory fields!');
        }
        this.globalService.setLoadingLabel("Inserting... Please Wait.");
        this.spinner.show();
        var tempGroups = [];
        this.companiesGroup.forEach(function (element) {
            if (element.added) {
                tempGroups.push(element.name);
            }
        });
        var postData = {
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            emailAddress: this.user.emailAddress,
            isActive: this.user.isActive ? 1 : 0,
            customerAdmin: this.user.isCustomerAdmin ? 1 : 0,
            successHackerAdmin: this.user.isSuccessHackerAdmin ? 1 : 0,
            reportingAccess: this.user.reportingAccess ? 1 : 0,
            groups: tempGroups,
            company: this.user.company.companyId,
            creator: this.currentUser.id
        };
        this.globalService.saveUser(postData).subscribe(function (data) {
            _this.spinner.hide();
            if (data && data.userId) {
                _this.toastr.success("Data saved successfully.", "Success");
                _this.router.navigate(['/user/list']);
            }
            else {
                _this.toastr.error("There are some error while inserting the data!", "Error");
            }
        }, function (error) {
            _this.spinner.hide();
            if (error && error.error && error.error.message) {
                _this.toastr.error(error.error.message, 'Error ' + error.status);
            }
            else {
                _this.toastr.error(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].reponseCode[error.status], 'Error');
            }
        });
    };
    UseraddComponent.prototype.updateUser = function () {
        var _this = this;
        var tempGroups = [];
        this.companiesGroup.forEach(function (element) {
            if (element.added) {
                tempGroups.push(element.name);
            }
        });
        var postData = {
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            emailAddress: this.user.emailAddress,
            isActive: this.user.isActive ? 1 : 0,
            customerAdmin: this.user.isCustomerAdmin ? 1 : 0,
            successHackerAdmin: this.user.isSuccessHackerAdmin ? 1 : 0,
            reportingAccess: this.user.reportingAccess ? 1 : 0,
            groups: tempGroups,
            company: this.user.company.companyId,
            modifier: this.currentUser.id
        };
        this.globalService.setLoadingLabel('Updating... Please Wait.');
        this.spinner.show();
        this.globalService.updateUser(postData, this.user['userId']).subscribe(function (data) {
            if (data && data.modifiedBy) {
                _this.toastr.success("Data updated successfully.", "Success");
                _this.router.navigate(['/user/list']);
            }
            else {
                _this.toastr.error("There are some error while updating the data!", "Error");
            }
            _this.spinner.hide();
        }, function (error) {
            _this.spinner.hide();
            if (error && error.error && error.error.message) {
                _this.toastr.error(error.error.message, 'Error ' + error.status);
            }
            else {
                _this.toastr.error(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].reponseCode[error.status], 'Error');
            }
        });
    };
    UseraddComponent.prototype.showAddGroupModal = function () {
        this.addedGroup = "";
        this.addGroupModal.show();
    };
    UseraddComponent.prototype.addGroup = function () {
        var _this = this;
        if (this.addedGroup != "") {
            var found = this.selectedGroups.filter(function (e) { return e.name == _this.addedGroup; });
            if (found.length) {
                this.toastr.info("This group is already exists!", 'Info');
                return;
            }
            else {
                if (this.user.company && !this.user.company['groups']) {
                    this.user.company['groups'] = [];
                }
                var tempGroups = Object.assign([], this.user.company.groups);
                tempGroups.push(this.addedGroup);
                var postData = {
                    name: this.user.company.companyName,
                    modifier: this.currentUser.id,
                    groups: tempGroups
                };
                this.globalService.setLoadingLabel('Updating... Please Wait.');
                this.spinner.show();
                this.globalService.updateCompany(postData, this.user.company.companyId).subscribe(function (data) {
                    _this.spinner.hide();
                    if (data && data.modifiedBy) {
                        _this.toastr.success("Data updated successfully.", "Success");
                        _this.user.company.groups.push(_this.addedGroup);
                        _this.companiesGroup.push({ name: _this.addedGroup });
                        _this.addedGroup = "";
                        _this.sortAlphaNum();
                    }
                    else {
                        _this.toastr.error("There are some server error while updating the data!", "Error");
                    }
                }, function (error) {
                    _this.spinner.hide();
                    if (error && error.error && error.error.message) {
                        _this.toastr.error(error.error.message, 'Error ' + error.status);
                    }
                    else {
                        _this.toastr.error(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].reponseCode[error.status], 'Error');
                    }
                });
            }
        }
    };
    UseraddComponent.prototype.multiSelectGroup = function (multiSelect) {
        this.companiesGroup.forEach(function (element) {
            if (multiSelect) {
                element.added = false;
            }
            else {
                element.added = true;
            }
        });
    };
    UseraddComponent.prototype.deleteGroup = function () {
        var _this = this;
        if (confirm("Are you sure to delete selected groups")) {
            this.selectedGroups.forEach(function (element) {
                _this.user.company.groups.splice(_this.user.company.groups.indexOf(element), 1);
                _this.selectedGroups.splice(_this.selectedGroups.indexOf(element), 1);
            });
        }
    };
    UseraddComponent.prototype.sortAlphaNum = function () {
        var reA = /[^a-zA-Z]/g;
        var reN = /[^0-9]/g;
        function sortAlphaNum(a, b) {
            var aA = a.name.replace(reA, "");
            var bA = b.name.replace(reA, "");
            if (aA === bA) {
                var aN = parseInt(a.name.replace(reN, ""), 10);
                var bN = parseInt(b.name.replace(reN, ""), 10);
                return aN === bN ? 0 : aN > bN ? 1 : -1;
            }
            else {
                return aA > bA ? 1 : -1;
            }
        }
        this.companiesGroup = this.companiesGroup.sort(sortAlphaNum);
    };
    UseraddComponent.prototype.changeCompany = function (previousCompany, company, companysEl) {
        var _this = this;
        // If we're changing company from "All" to any, it's OK
        if (previousCompany === "") {
            this.user.company = company;
            return;
        }
        // Otherwise we want the user to confirm that change
        if (confirm("Are you sure you want to change " + this.user.firstName + "'s company from " + previousCompany.companyName + " to " + company.companyName + "? This change will apply all consumption to " + company.companyName + ".")) {
            this.user.company = company;
            this.user.company.groups.forEach(function (element) {
                _this.companiesGroup.push({ name: element });
            });
            this.sortAlphaNum();
        }
        else {
            companysEl.selectedIndex = this.companies.indexOf(previousCompany) + 1;
        }
    };
    UseraddComponent.prototype.checkValidEmail = function (email) {
        this.validEmail = this.globalService.ValidateEmail(email);
        var domain = email.split('@');
        this.isShDomain = (this.currentUser['config']['successhacker-domains'].indexOf(domain[1]) > -1);
        if (this.isShDomain) {
            this.user.isCustomerAdmin = 0;
        }
        else {
            this.user.isSuccessHackerAdmin = 0;
        }
        return this.validEmail;
    };
    UseraddComponent.ctorParameters = function () { return [
        { type: _shared_ui_jwt_service__WEBPACK_IMPORTED_MODULE_1__["JwtService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _shared_ui_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _shared_ui_alert_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
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
            _shared_ui_alert_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot()
            ]
        })
    ], UseraddModule);
    return UseraddModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-admin-pages-user-useradd-useradd-module.js.map