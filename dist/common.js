(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared-ui/models/global.model.ts":
/*!**************************************************!*\
  !*** ./src/app/shared-ui/models/global.model.ts ***!
  \**************************************************/
/*! exports provided: Company, User, CompanySearch, UserSearch, ImportStatusSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Company", function() { return Company; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanySearch", function() { return CompanySearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSearch", function() { return UserSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportStatusSearch", function() { return ImportStatusSearch; });
var Company = /** @class */ (function () {
    function Company() {
        this.groups = [];
    }
    return Company;
}());

var User = /** @class */ (function () {
    function User() {
        this.isActive = true;
        this.groups = [];
        this.company = "";
    }
    return User;
}());

var CompanySearch = /** @class */ (function () {
    function CompanySearch() {
        this.page = 1;
        this.limit = 25;
        this.isActive = "";
        this.sort = "companyName";
        this.sortOrder = "ASC";
    }
    return CompanySearch;
}());

var UserSearch = /** @class */ (function () {
    function UserSearch() {
        this.page = 1;
        this.limit = 25;
        this.company = "";
        this.user = "";
        this.isActive = "";
        this.group = "";
        this.search = "";
        this.sort = "lastName";
        this.sortOrder = 'ASC';
    }
    return UserSearch;
}());

var ImportStatusSearch = /** @class */ (function () {
    function ImportStatusSearch() {
        this.company = "";
        this.user = "";
        this.source = "";
        this.status = "";
        this.method = "";
        this.page = 1;
        this.limit = 25;
        this.sort = "insertTimestamp";
        this.sortOrder = 'ASC';
    }
    return ImportStatusSearch;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map