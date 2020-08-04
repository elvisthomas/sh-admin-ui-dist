(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-admin-pages-dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/admin-pages/dashboard/dashboard.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/admin-pages/dashboard/dashboard.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\r\n    <!-- Page Header -->\r\n    <div class=\"page-header\">\r\n      <div>\r\n        <h2 class=\"main-content-title tx-24 mg-b-5\">Welcome To Dashboard</h2>\r\n        <ol class=\"breadcrumb\">\r\n          <li class=\"breadcrumb-item\"><a [routerLink]=\"['/dashboard']\">Home</a></li>\r\n          <li class=\"breadcrumb-item active\" aria-current=\"page\">Sales Dashboard</li>\r\n        </ol>\r\n      </div>\r\n      <div class=\"d-flex\">\r\n        <div class=\"mr-2\">\r\n          <a class=\"btn ripple btn-outline-primary dropdown-toggle mb-0\" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\r\n            <i class=\"fe fe-external-link\"></i> Export <i class=\"fas fa-caret-down ml-1\"></i>\r\n          </a>\r\n          <div  class=\"dropdown-menu tx-13\">\r\n            <a class=\"dropdown-item\" href=\"#\"><i class=\"far fa-file-pdf mr-2\"></i>Export as Pdf</a>\r\n            <a class=\"dropdown-item\" href=\"#\"><i class=\"far fa-image mr-2\"></i>Export as Image</a>\r\n            <a class=\"dropdown-item\" href=\"#\"><i class=\"far fa-file-excel mr-2\"></i>Export as Excel</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"\">\r\n          <a href=\"#\" class=\"btn ripple btn-secondary navresponsive-toggler mb-0\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n            aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <i class=\"fe fe-filter mr-1\"></i>  Filter <i class=\"fas fa-caret-down ml-1\"></i>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- End Page Header -->\r\n\r\n    <!--Navbar-->\r\n    <div class=\"responsive-background\">\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <div class=\"advanced-search\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group mb-lg-0\">\r\n                    <label class=\"\">From :</label>\r\n                    <div class=\"input-group\">\r\n                      <div class=\"input-group-prepend\">\r\n                        <div class=\"input-group-text\">\r\n                          <i class=\"fe fe-calendar lh--9 op-6\"></i>\r\n                        </div>\r\n                      </div><input class=\"form-control fc-datepicker\" placeholder=\"11/01/2019\" type=\"text\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group mb-lg-0\">\r\n                    <label class=\"\">To :</label>\r\n                    <div class=\"input-group\">\r\n                      <div class=\"input-group-prepend\">\r\n                        <div class=\"input-group-text\">\r\n                          <i class=\"fe fe-calendar lh--9 op-6\"></i>\r\n                        </div>\r\n                      </div><input class=\"form-control fc-datepicker\" placeholder=\"11/08/2019\" type=\"text\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group mb-lg-0\">\r\n                <label class=\"\">Sales By Country :</label>\r\n                <select class=\"form-control select2-flag-search\" data-placeholder=\"Select Contry\">\r\n                  <option value=\"AF\">Afghanistan</option>\r\n                  <option value=\"AL\">Albania</option>\r\n                  <option value=\"AD\">Andorra</option>\r\n                  <option value=\"AG\">Antigua and Barbuda</option>\r\n                  <option value=\"AU\">Australia</option>\r\n                  <option value=\"AM\">Armenia</option>\r\n                  <option value=\"AO\">Angola</option>\r\n                  <option value=\"AR\">Argentina</option>\r\n                  <option value=\"AT\">Austria</option>\r\n                  <option value=\"AZ\">Azerbaijan</option>\r\n                  <option value=\"BA\">Bosnia and Herzegovina</option>\r\n                  <option value=\"BB\">Barbados</option>\r\n                  <option value=\"BD\">Bangladesh</option>\r\n                  <option value=\"BE\">Belgium</option>\r\n                  <option value=\"BF\">Burkina Faso</option>\r\n                  <option value=\"BG\">Bulgaria</option>\r\n                  <option value=\"BH\">Bahrain</option>\r\n                  <option value=\"BJ\">Benin</option>\r\n                  <option value=\"BN\">Brunei</option>\r\n                  <option value=\"BO\">Bolivia</option>\r\n                  <option value=\"BT\">Bhutan</option>\r\n                  <option value=\"BY\">Belarus</option>\r\n                  <option value=\"CD\">Congo</option>\r\n                  <option value=\"CA\">Canada</option>\r\n                  <option value=\"CF\">Central African Republic</option>\r\n                  <option value=\"CI\">Cote d'Ivoire</option>\r\n                  <option value=\"CL\">Chile</option>\r\n                  <option value=\"CM\">Cameroon</option>\r\n                  <option value=\"CN\">China</option>\r\n                  <option value=\"CO\">Colombia</option>\r\n                  <option value=\"CU\">Cuba</option>\r\n                  <option value=\"CV\">Cabo Verde</option>\r\n                  <option value=\"CY\">Cyprus</option>\r\n                  <option value=\"DJ\">Djibouti</option>\r\n                  <option value=\"DK\">Denmark</option>\r\n                  <option value=\"DM\">Dominica</option>\r\n                  <option value=\"DO\">Dominican Republic</option>\r\n                  <option value=\"EC\">Ecuador</option>\r\n                  <option value=\"EE\">Estonia</option>\r\n                  <option value=\"ER\">Eritrea</option>\r\n                  <option value=\"ET\">Ethiopia</option>\r\n                  <option value=\"FI\">Finland</option>\r\n                  <option value=\"FJ\">Fiji</option>\r\n                  <option value=\"FR\">France</option>\r\n                  <option value=\"GA\">Gabon</option>\r\n                  <option value=\"GD\">Grenada</option>\r\n                  <option value=\"GE\">Georgia</option>\r\n                  <option value=\"GH\">Ghana</option>\r\n                  <option value=\"GH\">Ghana</option>\r\n                  <option value=\"HN\">Honduras</option>\r\n                  <option value=\"HT\">Haiti</option>\r\n                  <option value=\"HU\">Hungary</option>\r\n                  <option value=\"ID\">Indonesia</option>\r\n                  <option value=\"IE\">Ireland</option>\r\n                  <option value=\"IL\">Israel</option>\r\n                  <option value=\"IN\">India</option>\r\n                  <option value=\"IQ\">Iraq</option>\r\n                  <option value=\"IR\">Iran</option>\r\n                  <option value=\"IS\">Iceland</option>\r\n                  <option value=\"IT\">Italy</option>\r\n                  <option value=\"JM\">Jamaica</option>\r\n                  <option value=\"JO\">Jordan</option>\r\n                  <option value=\"JP\">Japan</option>\r\n                  <option value=\"KE\">Kenya</option>\r\n                  <option value=\"KG\">Kyrgyzstan</option>\r\n                  <option value=\"KI\">Kiribati</option>\r\n                  <option value=\"KW\">Kuwait</option>\r\n                  <option value=\"KZ\">Kazakhstan</option>\r\n                  <option value=\"LA\">Laos</option>\r\n                  <option value=\"LB\">Lebanons</option>\r\n                  <option value=\"LI\">Liechtenstein</option>\r\n                  <option value=\"LR\">Liberia</option>\r\n                  <option value=\"LS\">Lesotho</option>\r\n                  <option value=\"LT\">Lithuania</option>\r\n                  <option value=\"LU\">Luxembourg</option>\r\n                  <option value=\"LV\">Latvia</option>\r\n                  <option value=\"LY\">Libya</option>\r\n                  <option value=\"MA\">Morocco</option>\r\n                  <option value=\"MC\">Monaco</option>\r\n                  <option value=\"MD\">Moldova</option>\r\n                  <option value=\"ME\">Montenegro</option>\r\n                  <option value=\"MG\">Madagascar</option>\r\n                  <option value=\"MH\">Marshall Islands</option>\r\n                  <option value=\"MK\">Macedonia (FYROM)</option>\r\n                  <option value=\"ML\">Mali</option>\r\n                  <option value=\"MM\">Myanmar (formerly Burma)</option>\r\n                  <option value=\"MN\">Mongolia</option>\r\n                  <option value=\"MR\">Mauritania</option>\r\n                  <option value=\"MT\">Malta</option>\r\n                  <option value=\"MV\">Maldives</option>\r\n                  <option value=\"MW\">Malawi</option>\r\n                  <option value=\"MX\">Mexico</option>\r\n                  <option value=\"MZ\">Mozambique</option>\r\n                  <option value=\"NA\">Namibia</option>\r\n                  <option value=\"NG\">Nigeria</option>\r\n                  <option value=\"NO\">Norway</option>\r\n                  <option value=\"NP\">Nepal</option>\r\n                  <option value=\"NR\">Nauru</option>\r\n                  <option value=\"NZ\">New Zealand</option>\r\n                  <option value=\"OM\">Oman</option>\r\n                  <option value=\"PA\">Panama</option>\r\n                  <option value=\"PF\">Paraguay</option>\r\n                  <option value=\"PG\">Papua New Guinea</option>\r\n                  <option value=\"PH\">Philippines</option>\r\n                  <option value=\"PK\">Pakistan</option>\r\n                  <option value=\"PL\">Poland</option>\r\n                  <option value=\"QA\">Qatar</option>\r\n                  <option value=\"RO\">Romania</option>\r\n                  <option value=\"RU\">Russia</option>\r\n                  <option value=\"RW\">Rwanda</option>\r\n                  <option value=\"SA\">Saudi Arabia</option>\r\n                  <option value=\"SB\">Solomon Islands</option>\r\n                  <option value=\"SC\">Seychelles</option>\r\n                  <option value=\"SD\">Sudan</option>\r\n                  <option value=\"SE\">Sweden</option>\r\n                  <option value=\"SG\">Singapore</option>\r\n                  <option value=\"TG\">Togo</option>\r\n                  <option value=\"TH\">Thailand</option>\r\n                  <option value=\"TJ\">Tajikistan</option>\r\n                  <option value=\"TL\">Timor-Leste</option>\r\n                  <option value=\"TM\">Turkmenistan</option>\r\n                  <option value=\"TN\">Tunisia</option>\r\n                  <option value=\"TO\">Tonga</option>\r\n                  <option value=\"TR\">Turkey</option>\r\n                  <option value=\"TT\">Trinidad and Tobago</option>\r\n                  <option value=\"TW\">Taiwan</option>\r\n                  <option value=\"UA\">Ukraine</option>\r\n                  <option value=\"UG\">Uganda</option>\r\n                  <option value=\"UM\">United States of America</option>\r\n                  <option value=\"UY\">Uruguay</option>\r\n                  <option value=\"UZ\">Uzbekistan</option>\r\n                  <option value=\"VA\">Vatican City (Holy See)</option>\r\n                  <option value=\"VE\">Venezuela</option>\r\n                  <option value=\"VN\">Vietnam</option>\r\n                  <option value=\"VU\">Vanuatu</option>\r\n                  <option value=\"YE\">Yemen</option>\r\n                  <option value=\"ZM\">Zambia</option>\r\n                  <option value=\"ZW\">Zimbabwe</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <div class=\"form-group mb-lg-0\">\r\n                <label class=\"\">Products :</label>\r\n                <select multiple=\"multiple\" class=\"group-filter\">\r\n                  <optgroup label=\"Mens\">\r\n                    <option value=\"1\">Foot wear</option>\r\n                    <option value=\"2\">Top wear</option>\r\n                    <option value=\"3\">Bootom wear</option>\r\n                    <option value=\"4\">Men's Groming</option>\r\n                    <option value=\"5\">Accessories</option>\r\n                  </optgroup>\r\n                  <optgroup label=\"Women\">\r\n                    <option value=\"1\">Western wear</option>\r\n                    <option value=\"2\">Foot wear</option>\r\n                    <option value=\"3\">Top wear</option>\r\n                    <option value=\"4\">Bootom wear</option>\r\n                    <option value=\"5\">Beuty Groming</option>\r\n                    <option value=\"6\" >Accessories</option>\r\n                    <option value=\"7\">Jewellery</option>\r\n                  </optgroup>\r\n                  <optgroup label=\"Baby & Kids\">\r\n                    <option value=\"1\">Boys clothing</option>\r\n                    <option value=\"2\">Girls Clothing</option>\r\n                    <option value=\"3\">Toys</option>\r\n                    <option value=\"4\">Baby Care</option>\r\n                    <option value=\"5\">Kids footwear</option>\r\n                  </optgroup>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group mb-lg-0\">\r\n                <label class=\"\">Sales Type :</label>\r\n                <select multiple=\"multiple\" class=\"multi-select\">\r\n                  <option value=\"1\">Online</option>\r\n                  <option value=\"2\">Offline</option>\r\n                  <option value=\"3\">Reseller</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <hr>\r\n          <div class=\"text-right\">\r\n            <a href=\"#\" class=\"btn btn-primary\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n            aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">Apply</a>\r\n            <a href=\"#\" class=\"btn btn-secondary\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n            aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">Reset</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--End Navbar -->\r\n\r\n    <!-- Row -->\r\n    <div class=\"row row-sm\">\r\n      <div class=\"col-sm-6 col-xl-3 col-lg-6\">\r\n        <div class=\"card custom-card\">\r\n          <div class=\"card-body dash1\">\r\n            <div class=\"d-flex\">\r\n              <p class=\"mb-1 tx-inverse\">Number Of Sales</p>\r\n              <div class=\"ml-auto\">\r\n                <i class=\"fas fa-chart-line fs-20 text-primary\"></i>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <h3 class=\"dash-25\">568</h3>\r\n            </div>\r\n            <div class=\"progress mb-1\">\r\n              <div aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"70\" class=\"progress-bar progress-bar-xs wd-70p\" role=\"progressbar\"></div>\r\n            </div>\r\n            <div class=\"expansion-label d-flex\">\r\n              <span class=\"text-muted\">Last Month</span>\r\n              <span class=\"ml-auto\"><i class=\"fas fa-caret-up mr-1 text-success\"></i>0.7%</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-6 col-xl-3 col-lg-6\">\r\n        <div class=\"card custom-card\">\r\n          <div class=\"card-body dash1\">\r\n            <div class=\"d-flex\">\r\n              <p class=\"mb-1 tx-inverse\">New Revenue</p>\r\n              <div class=\"ml-auto\">\r\n                <i class=\"fab fa-rev fs-20 text-secondary\"></i>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <h3 class=\"dash-25\">$12,897</h3>\r\n            </div>\r\n            <div class=\"progress mb-1\">\r\n              <div aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"70\" class=\"progress-bar progress-bar-xs wd-60p bg-secondary\" role=\"progressbar\"></div>\r\n            </div>\r\n            <div class=\"expansion-label d-flex\">\r\n              <span class=\"text-muted\">Last Month</span>\r\n              <span class=\"ml-auto\"><i class=\"fas fa-caret-down mr-1 text-danger\"></i>0.43%</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-6 col-xl-3 col-lg-6\">\r\n        <div class=\"card custom-card\">\r\n          <div class=\"card-body dash1\">\r\n            <div class=\"d-flex\">\r\n              <p class=\"mb-1 tx-inverse\">Total Cost</p>\r\n              <div class=\"ml-auto\">\r\n                <i class=\"fas fa-dollar-sign fs-20 text-success\"></i>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <h3 class=\"dash-25\">$11,234</h3>\r\n            </div>\r\n            <div class=\"progress mb-1\">\r\n              <div aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"70\" class=\"progress-bar progress-bar-xs wd-50p bg-success\" role=\"progressbar\"></div>\r\n            </div>\r\n            <div class=\"expansion-label d-flex text-muted\">\r\n              <span class=\"text-muted\">Last Month</span>\r\n              <span class=\"ml-auto\"><i class=\"fas fa-caret-down mr-1 text-danger\"></i>1.44%</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-6 col-xl-3 col-lg-6\">\r\n        <div class=\"card custom-card\">\r\n          <div class=\"card-body dash1\">\r\n            <div class=\"d-flex\">\r\n              <p class=\"mb-1 tx-inverse\">Profit By Sale</p>\r\n              <div class=\"ml-auto\">\r\n                <i class=\"fas fa-signal fs-20 text-info\"></i>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <h3 class=\"dash-25\">$789</h3>\r\n            </div>\r\n            <div class=\"progress mb-1\">\r\n              <div aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"70\" class=\"progress-bar progress-bar-xs wd-40p bg-info\" role=\"progressbar\"></div>\r\n            </div>\r\n            <div class=\"expansion-label d-flex text-muted\">\r\n              <span class=\"text-muted\">Last Month</span>\r\n              <span class=\"ml-auto\"><i class=\"fas fa-caret-up mr-1 text-success\"></i>0.9%</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--End  Row -->\r\n\r\n  </div>"

/***/ }),

/***/ "./src/app/views/admin-pages/dashboard/dashboard-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/admin-pages/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/views/admin-pages/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], pathMatch: 'full' }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/admin-pages/dashboard/dashboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/admin-pages/dashboard/dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_ui_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared-ui/global.service */ "./src/app/shared-ui/global.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(globalService) {
        this.globalService = globalService;
        this.totalData = {};
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.globalService.topscroll();
        this.getDashboardData();
    };
    DashboardComponent.prototype.getDashboardData = function () {
        /* this.globalService.getAdminDashboardCount().subscribe((data) => {
          if(data.status == 200){
            this.totalData = data.data;
          }
        }); */
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _shared_ui_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"] }
    ]; };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/admin-pages/dashboard/dashboard.component.html")
        }),
        __metadata("design:paramtypes", [_shared_ui_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/views/admin-pages/dashboard/dashboard.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/admin-pages/dashboard/dashboard.module.ts ***!
  \*****************************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared-ui/shared-ui.module */ "./src/app/shared-ui/shared-ui.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/views/admin-pages/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/views/admin-pages/dashboard/dashboard-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_2__["SharedUiModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__["DashboardRoutingModule"]
            ],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]],
            providers: []
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-admin-pages-dashboard-dashboard-module.js.map