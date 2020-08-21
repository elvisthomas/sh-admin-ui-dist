(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/admin-layout/default-layout.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/admin-layout/default-layout.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\t<head>\r\n\r\n\t\t<meta charset=\"utf-8\">\r\n\t\t<meta content=\"width=device-width, initial-scale=1, shrink-to-fit=no\" name=\"viewport\">\r\n\t\t<meta name=\"description\" content=\"Dashlead -  Admin Panel HTML Dashboard Template\">\r\n\t\t<meta name=\"author\" content=\"Spruko Technologies Private Limited\">\r\n\t\t<meta name=\"keywords\" content=\"sales dashboard, admin dashboard, bootstrap 4 admin template, html admin template, admin panel design, admin panel design, bootstrap 4 dashboard, admin panel template, html dashboard template, bootstrap admin panel, sales dashboard design, best sales dashboards, sales performance dashboard, html5 template, dashboard template\">\r\n\r\n\t\t<!-- Favicon -->\r\n\t\t<link rel=\"icon\" href=\"assets/assets/img/brand/favicon.ico\" type=\"image/x-icon\"/>\r\n\r\n\t\t<!-- Title -->\r\n\t\t<title>Dashlead -  Admin Panel HTML Dashboard Template</title>\r\n\r\n\t\t\r\n\r\n\t</head>\r\n\r\n\t<body class=\"main-body\">\r\n\r\n\t\t<!-- Loader -->\r\n\t\t<!-- <div id=\"global-loader\" style=\"display: none;\">\r\n\t\t\t<img src=\"assets/assets/img/loader.svg\" class=\"loader-img\" alt=\"Loader\">\r\n\t\t</div> -->\r\n\t\t<!-- End Loader -->\r\n\r\n\t\t<!-- Page -->\r\n\t\t<div class=\"page\">\r\n\r\n\t\t\t<!-- Sidemenu -->\r\n\t\t\t<div class=\"main-sidebar main-sidebar-sticky side-menu\">\r\n\t\t\t\t<div class=\"sidemenu-logo\">\r\n\t\t\t\t\t<a class=\"main-logo\" href=\"index.html\">\r\n\t\t\t\t\t\t<img src=\"assets/assets/img/brand/logo.png\" class=\"header-brand-img desktop-logo\" alt=\"logo\">\r\n\t\t\t\t\t\t<img src=\"assets/assets/img/brand/icon.png\" class=\"header-brand-img icon-logo\" alt=\"logo\">\r\n\t\t\t\t\t\t<img src=\"assets/assets/img/brand/logo-light.png\" class=\"header-brand-img desktop-logo theme-logo\" alt=\"logo\">\r\n\t\t\t\t\t\t<img src=\"assets/assets/img/brand/icon-light.png\" class=\"header-brand-img icon-logo theme-logo\" alt=\"logo\">\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"main-sidebar-body\">\r\n\t\t\t\t\t<ul class=\"nav\">\r\n\t\t\t\t\t\t<!-- <li class=\"nav-item\">\r\n\t\t\t\t\t\t\t<a class=\"nav-link\" [routerLink]=\"['/dashboard']\"><i class=\"fe fe-airplay\"></i><span class=\"sidemenu-label\">Dashboard</span></a>\r\n\t\t\t\t\t\t</li> -->\r\n\t\t\t\t\t\t<li class=\"nav-item\" [ngClass]=\"{'active': currentPage == 'companies'}\" *ngIf=\"currentUser?.isSuccessHackerAdmin\">\r\n\t\t\t\t\t\t\t<a class=\"nav-link\" [routerLink]=\"['/company/list']\"><i class=\"fe fe-list\"></i><span class=\"sidemenu-label\">Companies</span></a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"nav-item\" [ngClass]=\"{'active': currentPage == 'users'}\">\r\n\t\t\t\t\t\t\t<a class=\"nav-link\" [routerLink]=\"['/user/list']\"><i class=\"fe fe-users\"></i><span class=\"sidemenu-label\">Users</span></a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"nav-item\" [ngClass]=\"{'active': currentPage == 'bulkimport'}\">\r\n\t\t\t\t\t\t\t<a class=\"nav-link\" [routerLink]=\"['/bulk-import-status']\"><i class=\"fe fe-users\"></i><span class=\"sidemenu-label\">Bulk Import Status</span></a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- End Sidemenu -->\r\n\r\n\t\t\t<!-- Main Content-->\r\n\t\t\t<div class=\"main-content side-content pt-0\">\r\n\r\n\t\t\t\t<!-- Main Header-->\r\n\t\t\t\t<div class=\"main-header side-header sticky\">\r\n\t\t\t\t\t<div class=\"container-fluid\">\r\n\t\t\t\t\t\t<div class=\"main-header-left\">\r\n\t\t\t\t\t\t\t<a class=\"main-logo d-lg-none\" href=\"index.html\">\r\n\t\t\t\t\t\t\t\t<img src=\"assets/assets/img/brand/logo.png\" class=\"header-brand-img desktop-logo\" alt=\"logo\">\r\n\t\t\t\t\t\t\t\t<img src=\"assets/assets/img/brand/icon.png\" class=\"header-brand-img icon-logo\" alt=\"logo\">\r\n\t\t\t\t\t\t\t\t<img src=\"assets/assets/img/brand/logo-light.png\" class=\"header-brand-img desktop-logo theme-logo\" alt=\"logo\">\r\n\t\t\t\t\t\t\t\t<img src=\"assets/assets/img/brand/icon-light.png\" class=\"header-brand-img icon-logo theme-logo\" alt=\"logo\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<a class=\"main-header-menu-icon\"  id=\"mainSidebarToggle\"><span></span></a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"main-header-right\">\r\n\t\t\t\t\t\t\t<div class=\"dropdown d-md-flex\">\r\n\t\t\t\t\t\t\t\t<a class=\"main-content-title tx-20 mg-b-5\">{{ currentUser?.firstName }} {{ currentUser?.lastName }}</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"dropdown d-md-flex\">\r\n\t\t\t\t\t\t\t\t<a class=\"nav-link icon\" (click)=\"logout()\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-power-off\"></i>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- End Main Header-->\r\n\t\t\t\t<app-loading></app-loading>\r\n        <router-outlet></router-outlet>\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t\t\t<!-- End Main Content-->\r\n\r\n\t\t\t<!-- Main Footer-->\r\n\t\t\t<div class=\"main-footer text-center\">\r\n\t\t\t\t<div class=\"container\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<span>Copyright © {{ fullYear }} <a href=\"#\">Success Hacker</a>. Designed by <a href=\"https://amwebtech.com/\" target=\"_blank\">AM Webtech</a> All rights reserved.</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!--End Footer-->\r\n\r\n\t\t</div>\r\n\t\t<!-- End Page -->\r\n\r\n\t\t<!-- Back-to-top -->\r\n\t\t<a href=\"#top\" id=\"back-to-top\"><i class=\"fe fe-arrow-up\"></i></a>\r\n\r\n\t</body>\r\n</html>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/auth-layout/auth-layout.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/auth-layout/auth-layout.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\t<head>\r\n\r\n\t\t<meta charset=\"utf-8\">\r\n\t\t<meta content=\"width=device-width, initial-scale=1, shrink-to-fit=no\" name=\"viewport\">\r\n\t\t<meta name=\"description\" content=\"Success Hacker\">\r\n\t\t<meta name=\"author\" content=\"AM Webtech Pvt Ltd\">\r\n\t\t<meta name=\"keywords\" content=\"\">\r\n\r\n\t\t<!-- Favicon -->\r\n\t\t<link rel=\"icon\" href=\"../assets/img/brand/favicon.ico\" type=\"image/x-icon\"/>\r\n\r\n\t\t<!-- Title -->\r\n\t\t<title>Success Hacker</title>\r\n\r\n\t</head>\r\n\r\n\t<body class=\"main-body\">\r\n\t\t\r\n\t\t<!-- Loader -->\r\n\t\t<!-- <div id=\"global-loader\">\r\n\t\t\t<img src=\"assets/assets/img/loader.svg\" class=\"loader-img\" alt=\"Loader\">\r\n\t\t</div> -->\r\n\t\t<!-- End Loader -->\r\n\t\t<!-- <app-loading></app-loading> -->\r\n    <router-outlet></router-outlet>\r\n\r\n\t</body>\r\n</html>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/home-layout/ui.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/home-layout/ui.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- icon css -->\r\n<!-- @todo: pull the icon set css classes from the site api -->\r\n<!-- <link rel=\"stylesheet\" href=\"assets/dist/fonts/aro-icon-general.css\"> -->\r\n<!-- general interface icons -->\r\n<!-- <link rel=\"stylesheet\" href=\"assets/dist/fonts/aro-realestate.css\"> -->\r\n<!-- Real Estate Icon Set -->\r\n<!-- <link rel=\"stylesheet\" href=\"assets/dist/fonts/aro-social-native.css\"> -->\r\n<!-- Social Icon Set -->\r\n\r\n<!-- <link rel=\"stylesheet\" href=\"assets/dist/css/blueimp-gallery.min.css\">\r\n    <link rel=\"stylesheet\" href=\"assets/dist/css/bootstrap-image-gallery.min.css\">\r\n    <link rel=\"stylesheet\" href=\"assets/dist/css/bootstrap-select.min.css\"> -->\r\n\r\n<!-- load site and template css -->\r\n<!-- <link type=\"text/css\" rel=\"stylesheet\" media=\"all\" href=\"assets/dist/css/owl.carousel.css\">\r\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"all\" href=\"assets/dist/css/owl.transitions.css\">\r\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"all\" href=\"assets/dist/css/select2.css\">\r\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"all\" href=\"assets/dist/css/select2-bootstrap.css\">\r\n    <link rel=\"stylesheet\" href=\"assets/dist/css/site.css\"> -->\r\n<!-- Mobile Navigation -->\r\n<nav class=\"mobile-menu pushy pushy-right  mobile-menu-default mobile-menu-arrows-aligned\" role=\"navigation\">\r\n  <ul class=\"nav mobile-menu-nav\">\r\n    <a href=\"javascript:void(0);\" class=\"mobile-menu-close\" title=\"Close\"><i class=\"icon-general-cross2\"></i></a>\r\n    <li class=\"active\">\r\n      <a href=\"#\" [routerLink]=\"['/']\" target=\"_self\">\r\n        Home\r\n      </a>\r\n    </li>\r\n\r\n    <li class=\"dropdown\" dropdown>\r\n      <a id=\"button-basic\" dropdownToggle class=\"dropdown-toggle\" aria-controls=\"menu1\">Buy\r\n      </a>\r\n      <ul id=\"menu1\" *dropdownMenu class=\"dropdown-menu mobile-menu-nav\" role=\"menu\" aria-labelledby=\"button-basic\">\r\n        <li>\r\n          <a href=\"#\" [routerLink]=\"['/buy']\">\r\n            Businesses For Sale\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\" [routerLink]=\"['/new-business-alerts']\" target=\"_self\">\r\n            New Business Alerts\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\" [routerLink]=\"['/buyer-register']\" *ngIf=\"!currentUser?.id\" target=\"_self\">\r\n            Register as Buyer\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </li>\r\n\r\n    <li class=\"dropdown\" dropdown>\r\n      <a id=\"button-basic\" dropdownToggle class=\"dropdown-toggle\" aria-controls=\"menu2\">Sell\r\n      </a>\r\n      <ul id=\"menu2\" *dropdownMenu class=\"dropdown-menu mobile-menu-nav\" role=\"menu\" aria-labelledby=\"button-basic\">\r\n        <li>\r\n          <a href=\"#\" [routerLink]=\"['/appraisal-request']\" target=\"_self\">\r\n            Obligation free Appraisal\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\" [routerLink]=\"['/seller-register']\" *ngIf=\"!currentUser?.id\" target=\"_self\">\r\n            Register as Seller\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </li>\r\n\r\n    <li class=\"dropdown\" dropdown>\r\n      <a id=\"button-basic\" dropdownToggle class=\"dropdown-toggle\" aria-controls=\"menu3\">About\r\n      </a>\r\n      <ul id=\"menu3\" *dropdownMenu class=\"dropdown-menu mobile-menu-nav\" role=\"menu\" aria-labelledby=\"button-basic\">\r\n        <li>\r\n          <a href=\"#\" [routerLink]=\"['/our-team']\" target=\"_self\">\r\n            Our Team\r\n          </a>\r\n        </li>\r\n\r\n      </ul>\r\n    </li>\r\n    <li>\r\n      <a href=\"#\" [routerLink]=\"['/contact']\" target=\"_self\">\r\n        Contact\r\n      </a>\r\n    </li>\r\n\r\n    <li class=\"dropdown\" dropdown *ngIf=\"currentUser?.id\">\r\n      <a id=\"profileButton\" dropdownToggle class=\"dropdown-toggle\" aria-controls=\"menu4\">\r\n        My Profile\r\n      </a>\r\n      <ul id=\"menu4\" *dropdownMenu class=\"dropdown-menu mobile-menu-nav\" role=\"menu\" aria-labelledby=\"profileButton\">\r\n        <li class=\"\">\r\n          <a href=\"#\" [routerLink]=\"['/account-settings']\">\r\n            Account Settings\r\n          </a>\r\n        </li>\r\n        <li class=\"\" *ngIf=\"currentUser?.userType == 'seller'\">\r\n          <a href=\"#\" [routerLink]=\"['/my-business-info']\">\r\n            My Business Info\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </li>\r\n    <li class=\"\">\r\n      <a href=\"#\" [routerLink]=\"['/signin']\" *ngIf=\"!currentUser?.id\"> Login </a>\r\n      <a href=\"#\" (click)=\"logout()\" *ngIf=\"currentUser?.id\"> Logout </a>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n<!-- end -->\r\n\r\n<div class=\"site-overlay\"></div>\r\n<div id=\"container\" class=\"body-wrap home-page \">\r\n  <div class=\"header-affix-clone\"></div>\r\n  <!-- desktop Menu -->\r\n  <div class=\"header-wrap header-menuTop  affix\" data-spy=\"affix\" data-offset-top=\"0\" data-offset-bottom=\"\"\r\n    style=\"position: fixed;\">\r\n    <header>\r\n      <div class=\"header-main\">\r\n        <div class=\"header-main-inner\">\r\n          <div class=\"row\">\r\n            <!-- <div class=\"col-xs-2\">\r\n                                <p class=\"contact-phone\"><i class=\"icon-general-contact-us color-primary\"></i> 07 5343 0777</p>\r\n                                <div class=\"menu-quick-contact pull-left \">\r\n                                    <a data-toggle=\"modal\" data-target=\"#quick-contact-modal\" class=\"btn btn-primary\"><i class=\"icon-general-contact-us\"></i></a>\r\n                                </div>\r\n                            </div> -->\r\n            <div class=\"header-main-logo col-sm-4 col-8\">\r\n              <a href=\"#\" [routerLink]=\"['/']\" title=\"\" class=\"desktop-logo\">\r\n                <img src=\"assets/dist/img/Transwold_Logo_White_On_Navy.jpg\" alt=\"logo\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-sm-8 col-4\">\r\n              <div class=\"pull-right hidden-xs\">\r\n                <div class=\"pt-2 text-white\" title=\"Quick property search\" (click)=\"quickSearchOverlayWrap.show()\">\r\n                  <a role=\"button\"  class=\"btn btn-link\"><i\r\n                      class=\"icon-general-search\"></i><span></span></a>\r\n                </div>\r\n              </div>\r\n              <div class=\"menu-wrap\">\r\n                <ul class=\"sf-menu desktop-menu sf-menu-dropdown-default sf-menu-right sf-js-enabled\" id=\"MobileMenu\">\r\n                  <li class=\"active\">\r\n                    <a href=\"#\" [routerLink]=\"['/']\">Home</a>\r\n                  </li>\r\n                  <li class=\"\">\r\n                    <a href=\"javascript:void(0)\" class=\"sf-with-ul\">\r\n                      Buy\r\n                    </a>\r\n                    <ul style=\"display: none;\">\r\n                      <li class=\"\">\r\n                        <a href=\"#\" [routerLink]=\"['/buy']\">\r\n                          Businesses For Sale\r\n                        </a>\r\n                      </li>\r\n                      <li class=\"\">\r\n                        <a href=\"#\" [routerLink]=\"['/new-business-alerts']\">\r\n                          New Business Alerts\r\n                        </a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"#\" [routerLink]=\"['/buyer-register']\" target=\"_self\" *ngIf=\"!currentUser?.id\">\r\n                          Register as Buyer\r\n                        </a>\r\n                      </li>\r\n                    </ul>\r\n                  </li>\r\n                  <li class=\"\">\r\n                    <a href=\"javascript:void(0)\" class=\"sf-with-ul\">\r\n                      Sell\r\n                    </a>\r\n                    <ul style=\"display: none;\">\r\n\r\n                      <li class=\"\">\r\n                        <a href=\"#\" [routerLink]=\"['/appraisal-request']\">\r\n                          Obligation free Appraisal\r\n                        </a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"#\" [routerLink]=\"['/seller-register']\" target=\"_self\" *ngIf=\"!currentUser?.id\">\r\n                          Register as Seller\r\n                        </a>\r\n                      </li>\r\n                    </ul>\r\n                  </li>\r\n                  <li class=\"\">\r\n                    <a href=\"javascript:void(0)\" class=\"sf-with-ul\">\r\n                      About\r\n                    </a>\r\n                    <ul style=\"display: none;\">\r\n                      <li class=\"\">\r\n                        <a href=\"#\" [routerLink]=\"['/our-team']\">\r\n                          Our Team\r\n                        </a>\r\n                      </li>\r\n                    </ul>\r\n                  </li>\r\n                  <li class=\"\">\r\n                    <a href=\"#\" [routerLink]=\"['/contact']\">\r\n                      Contact\r\n                    </a>\r\n                  </li>\r\n\r\n\r\n                  <li class=\"\" *ngIf=\"currentUser?.id\">\r\n                    <a href=\"javascript:void(0)\" class=\"sf-with-ul\">\r\n                      My Profile\r\n                    </a>\r\n                    <ul style=\"display: none;\">\r\n                      <li class=\"\">\r\n                        <a href=\"#\" [routerLink]=\"['/account-settings']\">\r\n                          Account Settings\r\n                        </a>\r\n                      </li>\r\n                      <li class=\"\" *ngIf=\"currentUser?.userType == 'seller'\">\r\n                        <a href=\"#\" [routerLink]=\"['/my-business-info']\">\r\n                          My Business Info\r\n                        </a>\r\n                      </li>\r\n                    </ul>\r\n                  </li>\r\n                  <li class=\"\">\r\n                    <a href=\"#\" [routerLink]=\"['/signin']\" *ngIf=\"!currentUser?.id\"> Login </a>\r\n                    <a href=\"#\" (click)=\"logout()\" *ngIf=\"currentUser?.id\"> Logout </a>\r\n                  </li>\r\n\r\n\r\n                </ul>\r\n                <button type=\"button\" class=\"menu-toggle btn btn-primary menu-btn hide-text pull-right\">\r\n                  <span class=\"menu-toggle-text pull-left\">Menu</span>\r\n                  <span class=\"menu-toggle-bars pull-right\">\r\n                    <span></span>\r\n                    <span></span>\r\n                    <span></span>\r\n                  </span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </header>\r\n  </div>\r\n  <!-- End -->\r\n\r\n  <div class=\"modal fade\" id=\"quick-contact-modal\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">×</span><span\r\n              class=\"sr-only\">Close</span></button>\r\n          <h4 class=\"modal-title\">Contact us</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"contact iconfwWrap \">\r\n            <span class=\"contact-address\">\r\n              <i class=\"icon-general-map\"></i>9/21 Birtwill street, Coolum Beach, QLD, 4573\r\n            </span>\r\n            <span class=\"contact-phone\"><i class=\"icon-general-contact-phone\"></i> 07 5343 0777</span>\r\n            <span class=\"contact-fax\"><i class=\"icon-general-contact-fax\"></i> 07 3251 0840</span>\r\n            <span class=\"contact-email\"><i class=\"icon-general-contact-email\"></i> <a\r\n                href=\"mailto:mail@arore.com.au\">Email us</a></span>\r\n          </div>\r\n          <br>\r\n          <iframe width=\"100%\" height=\"300\" frameborder=\"0\"\r\n            src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14721.136811065166!2d75.86131248233644!3d22.717675625578252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd6d5c629411%3A0xa180774ed9945696!2sTransworld+Shiping+Services+India+Limited!5e0!3m2!1sen!2sin!4v1562655887421!5m2!1sen!2sin\"\r\n            marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\">\r\n          </iframe>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n  <!-- /.modal -->\r\n\r\n  <app-loading></app-loading>\r\n  <router-outlet></router-outlet>\r\n\r\n  <footer>\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <div class=\"container-wrap  \">\r\n          <div class=\"container-inner\">\r\n            <div class=\"container container-standard\">\r\n              <div class=\"row\">\r\n                <div class=\"region-column-left col-sm-4\">\r\n                  <div class=\"wrapper \">\r\n                    <h4>Quicklinks</h4>\r\n                  </div>\r\n                  <div class=\"wrapper \">\r\n\r\n                    <div class=\"quicklinks-links quicklinks-wrap  quicklinks-align-left \">\r\n                      <ul class=\"quicklinks list-unstyled\">\r\n                        <li class=\"quicklink col-12\">\r\n                          <a [routerLink]=\"['/new-business-alerts']\">New Business\r\n                            Alerts</a>\r\n                        </li>\r\n                        <li class=\"quicklink col-12\">\r\n                          <a [routerLink]=\"['/appraisal-request']\">Obligation free Appraisal</a>\r\n                        </li>\r\n                        <li class=\"quicklink col-12\">\r\n                          <a [routerLink]=\"['/our-team']\">Our Team</a>\r\n                        </li>\r\n                        <li class=\"quicklink  col-12 \">\r\n                          <a [routerLink]=\"['/contact']\">Contact Us</a>\r\n                        </li>\r\n                      </ul>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"region-column-middle col-sm-4\">\r\n                  <div class=\"wrapper \">\r\n                    <div class=\"wrapper\">\r\n                      <h4>Contact Us</h4>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"wrapper \">\r\n\r\n                    <ul class=\"contact iconfwWrap list-unstyled\">\r\n                      <li class=\"contact-address\">\r\n                        <i class=\"icon-general-map\"></i> PO Box 484\r\n                        <br>Ormeau QLD 4208\r\n                      </li>\r\n                      <li class=\"contact-phone\"><i class=\"icon-general-contact-phone\"></i>Jim\r\n                        Roddy 0437 838 094</li>\r\n                      <li class=\"contact-phone\"><i class=\"icon-general-contact-phone\"></i>Tony\r\n                        Hancock 0404 070 056</li>\r\n                      <li class=\"contact-email\"><i class=\"icon-general-contact-email\"></i> <a\r\n                          href=\"mailto:support@tworldgc.com.au\">Email us</a></li>\r\n                          <!-- href=\"support@tworldgc.com.au\">Email us</a></li> -->\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n                <div class=\"region-column-right col-sm-4\">\r\n                  <div class=\"wrapper \">\r\n                    <div class=\"row\">\r\n                      <div class=\"region-column-left col-sm-12\">\r\n                        <div class=\"wrapper \">\r\n                          <div class=\"wrapper\">\r\n                            <h4>Get Social</h4>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"wrapper \">\r\n                          <div\r\n                            class=\"social-icons social-icons-icons social-icons-client-color iconfwWrap social-icons-sm\">\r\n                            <a class=\"social-twitter\" href=\"https://twitter.com/TransworldGC\" target=\"_blank\" tooltip=\"Twitter\"\r\n                              tooltip-placement=\"top\">\r\n                              <i class=\"icon-social-twitter\"></i>\r\n                            </a>\r\n                            <a class=\"social-linkedInCompany\" href=\"https://www.linkedin.com\" target=\"_blank\"\r\n                              tooltip=\"Linkedin\" tooltip-placement=\"top\">\r\n                              <i class=\"icon-social-linkedincompany\"></i>\r\n                            </a>\r\n                            <a class=\"social-youtube\" href=\"https://www.youtube.com\" target=\"_blank\" tooltip=\"YouTube\"\r\n                              tooltip-placement=\"top\">\r\n                              <i class=\"icon-social-youtube\"></i>\r\n                            </a>\r\n                            <a class=\"social-facebook\" href=\"https://www.facebook.com/TransworldGoldCoast/?ref=bookmarks\" target=\"_blank\"\r\n                              tooltip=\"Facebook\" tooltip-placement=\"top\">\r\n                              <i class=\"icon-social-facebook\"></i>\r\n                            </a>\r\n                            <a class=\"social-googlePlus\" href=\"https://plus.google.com/\" target=\"_blank\"\r\n                              tooltip=\"Google +\" tooltip-placement=\"top\">\r\n                              <i class=\"icon-social-googleplus\"></i>\r\n                            </a>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"wrapper \">\r\n                          <div class=\"modal fade\" id=\"form_15af59a87a489574\">\r\n                            <div class=\"modal-dialog\">\r\n                              <div class=\"modal-content\">\r\n                                <div class=\"modal-header\">\r\n                                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span\r\n                                      aria-hidden=\"true\">×</span><span class=\"sr-only\">Close</span></button>\r\n                                  <h4 class=\"modal-title\">Email a friend</h4>\r\n                                </div>\r\n                                <div class=\"modal-body\">\r\n                                  <p>Select your email service</p>\r\n                                  <div class=\"email-friend\">\r\n                                    <a class=\"email-friend-email\" href=\"#\" target=\"_blank\">\r\n                                      <i class=\"icon-general-envelope\"></i>\r\n                                      <span>Email</span>\r\n                                    </a>\r\n                                    <a class=\"email-friend-gmail\" href=\"#\" target=\"_blank\">\r\n                                      <i class=\"icon-general-logo-google\"></i>\r\n                                      <span>Gmail</span>\r\n                                    </a>\r\n                                    <a class=\"email-friend-yahoo\" href=\"#\" target=\"_blank\">\r\n                                      <i class=\"icon-general-logo-yahoo\"></i>\r\n                                      <span>Yahoo!</span>\r\n                                    </a>\r\n                                    <a class=\"email-friend-outlook\" href=\"#\" target=\"_blank\">\r\n                                      <i class=\"icon-general-logo-outlook\"></i>\r\n                                      <span>Outlook</span>\r\n                                    </a>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <!-- /.modal-content -->\r\n                            </div>\r\n                            <!-- /.modal-dialog -->\r\n                          </div>\r\n                          <!-- /.modal -->\r\n\r\n                          <div class=\"btn-group social-icons social-share iconfwWrap\" dropdown>\r\n                            <button id=\"button-basic\" dropdownToggle type=\"button\"\r\n                              class=\"btn btn-primary dropdown-toggle\" aria-controls=\"dropdown-basic\">\r\n                              <i class=\"icon-general-share\"></i> Share This <span class=\"caret\"></span>\r\n                            </button>\r\n                            <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu\" role=\"menu\"\r\n                              aria-labelledby=\"button-basic\">\r\n                              <li><a target=\"_blank\" href=\"https://www.facebook.com/TransworldGoldCoast/?ref=bookmarks\"><i\r\n                                    class=\"icon-social-facebook\"></i> Share on\r\n                                  Facebook</a></li>\r\n                              <li><a target=\"_blank\" href=\"https://twitter.com/TransworldGC\"><i class=\"icon-social-twitter\"></i>\r\n                                  Share on\r\n                                  Twitter</a></li>\r\n                              <li><a target=\"_blank\" href=\"https://www.linkedin.com\"><i\r\n                                    class=\"icon-social-linkedin\"></i> Share on\r\n                                  LinkedIn</a></li>\r\n                              <!-- <li><a href=\"#\" data-toggle=\"modal\" data-target=\"#form_15af59a87a489574\"><i\r\n                                    class=\"icon-general-contact-email\"></i> Email a\r\n                                  Friend</a></li> -->\r\n                            </ul>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"wrapper text-white\"> \r\n                    <p>\r\n                     <strong>                        \r\n                      <a href=\"https://www.tworld.com/\" target=\"_blank\">\r\n                        Visit Global Website\r\n                      </a> \r\n                     </strong>\r\n                    </p>                           \r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"container-wrap copyright-section\">\r\n          <div class=\"container-inner\">\r\n            <div class=\"container container-standard\">\r\n              <div class=\"row\">\r\n                <div class=\"region-column-left col-sm-6\">\r\n                  <div class=\"wrapper \">\r\n                    <ul class=\"list-inline \">\r\n                      <li><a href=\"#\" >Home</a></li>\r\n                      <li><a href=\"#\" >Privacy</a></li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n                <div class=\"region-column-right col-sm-6\">\r\n                  <div class=\"wrapper \">\r\n                    <div class=\"footer-copy\">\r\n                      © copyright - {{ fullYear }}\r\n                      <a href=\"#\">Transworld</a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </footer>\r\n\r\n</div>\r\n<!-- /body-wrap -->\r\n\r\n<div id=\"quickSearchOverlayWrap\" bsModal #quickSearchOverlayWrap=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n\taria-hidden=\"true\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8 offset-md-2\">\r\n        <div id=\"quickSearchOverlayFormWrap\">  \r\n          <div id=\"quickSearchFormWrap\" class=\"quick-search-with-icon quick-search\">\r\n            <a (click)=\"quickSearchOverlayWrap.hide()\" class=\"float-right\"><i class=\"icon-general-cross\"></i></a>\r\n            <form role=\"form\" class=\"ng-valid ng-dirty\">\r\n              <div class=\"form-group has-feedback\">\r\n                <input id=\"quickSearchText\" type=\"text\" name=\"quickSearchText\" [(ngModel)]=\"quickSearchText.searchText\" class=\"form-control ng-valid ng-dirty\" aria-autocomplete=\"list\"\r\n                  aria-expanded=\"false\" aria-owns=\"typeahead-00E-5349\" placeholder=\"Please enter property title, property location or ID\">\r\n                <ul class=\"dropdown-menu\" style=\"display: block; top: 65px; left: 0px;\" role=\"listbox\"\r\n                  aria-hidden=\"false\" active=\"activeIdx\" position=\"position\">\r\n                  <li class=\"active\" *ngFor=\"let property of quickSearchList; let i = index\" [ngClass]=\"{'pt-4': i == 0 }\">\r\n                    <a *ngIf=\"!property.type\" (click)=\"redirect(property.id)\">\r\n                      <div class=\"row search-results-item list-view\">\r\n                        <div class=\"col-sm-2 hidden-xs\">\r\n                          <div class=\"media-list-image-wrap propertyList-slide-wrap\" style=\"overflow: hidden;\">\r\n                            <div class=\"property-status-banner property-status-banner-just-listed\">\r\n                              Just Listed</div>\r\n                            <div class=\"property-status-banner property-status-banner-auctione\">\r\n                              Auction</div>\r\n                            <div class=\"property-status-banner property-status-banner-under-offer\">\r\n                              Under Offer</div>\r\n                            <div class=\"property-status-banner property-status-banner-sold\">\r\n                              Sold</div>\r\n                            <div class=\"property-status-banner property-status-banner-leasee\">\r\n                              Leased</div>\r\n                            <div *ngIf=\"property.fileName?.length\">\r\n                              <img class=\"lazyOwl img-fluid\" width=\"300\" height=\"300\"\r\n                                [src]=\"property?.fileName[0]\">\r\n                            </div>\r\n                            <div *ngIf=\"!property.fileName?.length\">\r\n                                <img class=\"lazyOwl img-fluid\" width=\"300\" height=\"300\"\r\n                                  src=\"assets/dist/img/elegant-best-modern-house-designs-in-australia-regarding.jpg\">\r\n                              </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-xs-8 col-sm-6\" style=\"white-space: normal;\">\r\n                          <p>\r\n                            <span class=\"\">\r\n                              <strong class=\"\">{{i+1}} {{property?.title}}</strong>\r\n                            </span>\r\n                            <span class=\"hidden-xs \"><br><strong>ID</strong> {{property?.id}}</span>\r\n                          </p>\r\n                        </div>\r\n                        <div class=\"col-xs-4 col-sm-4\">\r\n                          <p class=\"\">${{property?.sellingPrice}}</p>\r\n                          <p class=\"\">{{property?.businessCategory}}</p>\r\n                        </div>\r\n                      </div>\r\n                    </a>\r\n                    <a class=\"text-center pt-5\" *ngIf=\"property.type\">\r\n                      <span class=\"text-white\"> {{property?.name}} </span>\r\n                    </a>\r\n                  </li>\r\n                </ul>\r\n                <div class=\"col-sm-12 text-center\" *ngIf=\"loadingListings\">\r\n                  <span class=\"aroLoader form-control-feedback\"></span>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- <script type=\"text/javascript\" src=\"assets/dist/js/twitter-bootstrap-hover-dropdown.min.js\"></script> -->\r\n<!-- <script type=\"text/javascript\" src=\"assets/dist/js/jquery.blueimp-gallery.min.js\"></script> -->\r\n\r\n\r\n<!-- <script type=\"text/javascript\" src=\"assets/dist/js/owl.carousel.min.js\"></script>\r\n    <script type=\"text/javascript\" src=\"assets/dist/js/off-canvas.min.js\"></script>\r\n    <script type=\"text/javascript\" src=\"assets/dist/js/mobile-menu.min.js\"></script>\r\n    <script type=\"text/javascript\" src=\"assets/dist/js/aro-utility.js\"></script>\r\n    <script type=\"text/javascript\" src=\"assets/dist/js/aro-search-overlay.min.js\"></script>\r\n    <script type=\"text/javascript\" src=\"assets/dist/js/hoverIntent.js\"></script>\r\n    <script type=\"text/javascript\" src=\"assets/dist/js/superfish.min.js\"></script> -->\r\n\r\n<!-- JavaScript Code Context: page-->\r\n<script>\r\n</script>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared-ui/alert/alert.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared-ui/alert/alert.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let alert of alerts\" class=\"{{ cssClass(alert) }} alert-dismissable\">\r\n    <span style=\"color: red;\">{{alert.message}}</span>\r\n    <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared-ui/loading/loading.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared-ui/loading/loading.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner\r\n  bdOpacity = 1\r\n  bdColor = \"rgba(186,186,186,0.42)\"\r\n  size = \"medium\"\r\n  color = \"#001231\"\r\n  type = \"timer\"\r\n  [fullScreen] = \"true\"\r\n>\r\n  <p style=\"color: #001131; font-weight: 500;\" > {{loadingLabel}}  </p>\r\n</ngx-spinner>"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_nav.ts":
/*!*************************!*\
  !*** ./src/app/_nav.ts ***!
  \*************************/
/*! exports provided: navItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navItems", function() { return navItems; });
var navItems = [
    {
        name: 'Dashboard dddd',
        url: '/dashboard',
        icon: 'icon-speedometer'
    },
    {
        name: 'Users',
        url: '/',
        icon: 'icon-user',
        children: [
            {
                name: 'Business Owners',
                url: '/',
                icon: 'fa fa-users'
            }
        ]
    },
    {
        name: 'Sales Data',
        url: '/',
        icon: 'icon-list'
    },
    {
        name: 'Manage Listings',
        url: '/',
        icon: 'icon-list'
    },
    {
        name: 'Account Settings',
        url: '/newsletter',
        icon: 'fa fa-cogs'
    }
];


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layouts_home_layout_ui_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/home-layout/ui.component */ "./src/app/layouts/home-layout/ui.component.ts");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "./src/app/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _layouts_admin_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/admin-layout/default-layout.component */ "./src/app/layouts/admin-layout/default-layout.component.ts");
/* harmony import */ var _shared_ui_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared-ui/auth.guard */ "./src/app/shared-ui/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: 'company/list', pathMatch: 'full' },
    { path: 'auth', component: _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_3__["AuthLayoutComponent"], data: { title: 'Auth' }, pathMatch: 'full' },
    { path: 'ui', component: _layouts_home_layout_ui_component__WEBPACK_IMPORTED_MODULE_2__["UiComponent"], data: { title: 'Home' }, pathMatch: 'full' },
    { path: 'admin', component: _layouts_admin_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutComponent"], data: { title: 'Home' }, pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [_shared_ui_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Repeat Sales System';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _shared_ui_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared-ui/auth.guard */ "./src/app/shared-ui/auth.guard.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _layouts_auth_layout_auth_layout_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.module */ "./src/app/layouts/auth-layout/auth-layout.module.ts");
/* harmony import */ var _layouts_home_layout_ui_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layouts/home-layout/ui.module */ "./src/app/layouts/home-layout/ui.module.ts");
/* harmony import */ var _layouts_admin_layout_default_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/admin-layout/default.module */ "./src/app/layouts/admin-layout/default.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _layouts_home_layout_ui_module__WEBPACK_IMPORTED_MODULE_10__["UiModule"],
                _layouts_auth_layout_auth_layout_module__WEBPACK_IMPORTED_MODULE_9__["AuthLayoutModule"],
                _layouts_admin_layout_default_module__WEBPACK_IMPORTED_MODULE_11__["DefaultModule"]
            ],
            providers: [_shared_ui_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"], {
                    provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"],
                    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_8__["HashLocationStrategy"]
                },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/default-layout.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/default-layout.component.ts ***!
  \******************************************************************/
/*! exports provided: DefaultLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function() { return DefaultLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_nav */ "./src/app/_nav.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_ui_jwt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared-ui/jwt.service */ "./src/app/shared-ui/jwt.service.ts");
/* harmony import */ var _home_layout_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home-layout/user.model */ "./src/app/layouts/home-layout/user.model.ts");
/* harmony import */ var _shared_ui_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared-ui/global.service */ "./src/app/shared-ui/global.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DefaultLayoutComponent = /** @class */ (function () {
    function DefaultLayoutComponent(router, jwtService, globalService) {
        var _this = this;
        this.router = router;
        this.jwtService = jwtService;
        this.globalService = globalService;
        this.currentUser = new _home_layout_user_model__WEBPACK_IMPORTED_MODULE_4__["currentUser"];
        this.fullYear = new Date().getFullYear();
        this.navItems = _nav__WEBPACK_IMPORTED_MODULE_1__["navItems"];
        this.sidebarMinimized = true;
        this.subscription = this.globalService.getActionChildToParent().subscribe(function (item) {
            if (item) {
                _this.currentPage = item.text;
            }
        });
    }
    DefaultLayoutComponent.prototype.ngOnInit = function () {
        this.currentUser = JSON.parse(this.jwtService.getCurrentUser());
        // this.router.navigate(['/dashboard']);
    };
    DefaultLayoutComponent.prototype.ngOnDestroy = function () {
        // this.changes.disconnect();
    };
    DefaultLayoutComponent.prototype.logout = function () {
        this.jwtService.destroyToken();
        this.router.navigate(['/thank-you']);
    };
    DefaultLayoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_ui_jwt_service__WEBPACK_IMPORTED_MODULE_3__["JwtService"] },
        { type: _shared_ui_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] }
    ]; };
    DefaultLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./default-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/admin-layout/default-layout.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_ui_jwt_service__WEBPACK_IMPORTED_MODULE_3__["JwtService"],
            _shared_ui_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"]])
    ], DefaultLayoutComponent);
    return DefaultLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/default-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/default-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: DefaultRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultRoutingModule", function() { return DefaultRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _default_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default-layout.component */ "./src/app/layouts/admin-layout/default-layout.component.ts");
/* harmony import */ var _shared_ui_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared-ui/auth.guard */ "./src/app/shared-ui/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: "",
        component: _default_layout_component__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutComponent"],
        children: [
            {
                path: "dashboard",
                loadChildren: function () { return __webpack_require__.e(/*! import() | views-admin-pages-dashboard-dashboard-module */ "views-admin-pages-dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./../../views/admin-pages/dashboard/dashboard.module */ "./src/app/views/admin-pages/dashboard/dashboard.module.ts")).then(function (mod) { return mod.DashboardModule; }); },
                canActivate: [_shared_ui_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: "company/list",
                loadChildren: function () { return Promise.all(/*! import() | views-admin-pages-company-list-list-module */[__webpack_require__.e("common"), __webpack_require__.e("views-admin-pages-company-list-list-module")]).then(__webpack_require__.bind(null, /*! ./../../views/admin-pages/company/list/list.module */ "./src/app/views/admin-pages/company/list/list.module.ts")).then(function (mod) { return mod.ListModule; }); },
                canActivate: [_shared_ui_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: "company/add",
                loadChildren: function () { return Promise.all(/*! import() | views-admin-pages-company-add-add-module */[__webpack_require__.e("common"), __webpack_require__.e("views-admin-pages-company-add-add-module")]).then(__webpack_require__.bind(null, /*! ./../../views/admin-pages/company/add/add.module */ "./src/app/views/admin-pages/company/add/add.module.ts")).then(function (mod) { return mod.AddModule; }); },
                canActivate: [_shared_ui_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: "company/edit/:id",
                loadChildren: function () { return Promise.all(/*! import() | views-admin-pages-company-add-add-module */[__webpack_require__.e("common"), __webpack_require__.e("views-admin-pages-company-add-add-module")]).then(__webpack_require__.bind(null, /*! ./../../views/admin-pages/company/add/add.module */ "./src/app/views/admin-pages/company/add/add.module.ts")).then(function (mod) { return mod.AddModule; }); },
                canActivate: [_shared_ui_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: "user/list",
                loadChildren: function () { return Promise.all(/*! import() | views-admin-pages-user-userlist-userlist-module */[__webpack_require__.e("common"), __webpack_require__.e("views-admin-pages-user-userlist-userlist-module")]).then(__webpack_require__.bind(null, /*! ./../../views/admin-pages/user/userlist/userlist.module */ "./src/app/views/admin-pages/user/userlist/userlist.module.ts")).then(function (mod) { return mod.UserlistModule; }); },
                canActivate: [_shared_ui_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: "user/list/:companyId",
                loadChildren: function () { return Promise.all(/*! import() | views-admin-pages-user-userlist-userlist-module */[__webpack_require__.e("common"), __webpack_require__.e("views-admin-pages-user-userlist-userlist-module")]).then(__webpack_require__.bind(null, /*! ./../../views/admin-pages/user/userlist/userlist.module */ "./src/app/views/admin-pages/user/userlist/userlist.module.ts")).then(function (mod) { return mod.UserlistModule; }); },
                canActivate: [_shared_ui_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: "user/add",
                loadChildren: function () { return Promise.all(/*! import() | views-admin-pages-user-useradd-useradd-module */[__webpack_require__.e("common"), __webpack_require__.e("views-admin-pages-user-useradd-useradd-module")]).then(__webpack_require__.bind(null, /*! ./../../views/admin-pages/user/useradd/useradd.module */ "./src/app/views/admin-pages/user/useradd/useradd.module.ts")).then(function (mod) { return mod.UseraddModule; }); },
                canActivate: [_shared_ui_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: "user/edit/:id",
                loadChildren: function () { return Promise.all(/*! import() | views-admin-pages-user-useradd-useradd-module */[__webpack_require__.e("common"), __webpack_require__.e("views-admin-pages-user-useradd-useradd-module")]).then(__webpack_require__.bind(null, /*! ./../../views/admin-pages/user/useradd/useradd.module */ "./src/app/views/admin-pages/user/useradd/useradd.module.ts")).then(function (mod) { return mod.UseraddModule; }); },
                canActivate: [_shared_ui_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            },
            {
                path: "bulk-import-status",
                loadChildren: function () { return Promise.all(/*! import() | views-admin-pages-bulk-import-status-bulk-import-status-module */[__webpack_require__.e("common"), __webpack_require__.e("views-admin-pages-bulk-import-status-bulk-import-status-module")]).then(__webpack_require__.bind(null, /*! ./../../views/admin-pages/bulk-import-status/bulk-import-status.module */ "./src/app/views/admin-pages/bulk-import-status/bulk-import-status.module.ts")).then(function (mod) { return mod.BulkImportStatusModule; }); },
                canActivate: [_shared_ui_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
            }
        ]
    }
];
var DefaultRoutingModule = /** @class */ (function () {
    function DefaultRoutingModule() {
    }
    DefaultRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DefaultRoutingModule);
    return DefaultRoutingModule;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/default.module.ts":
/*!********************************************************!*\
  !*** ./src/app/layouts/admin-layout/default.module.ts ***!
  \********************************************************/
/*! exports provided: DefaultModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultModule", function() { return DefaultModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _default_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default-routing.module */ "./src/app/layouts/admin-layout/default-routing.module.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared-ui/shared-ui.module */ "./src/app/shared-ui/shared-ui.module.ts");
/* harmony import */ var _default_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./default-layout.component */ "./src/app/layouts/admin-layout/default-layout.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @coreui/angular */ "./node_modules/@coreui/angular/fesm5/coreui-angular.js");
/* harmony import */ var _shared_ui_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared-ui/auth.guard */ "./src/app/shared-ui/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var APP_CONTAINERS = [_default_layout_component__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutComponent"]];


var DefaultModule = /** @class */ (function () {
    function DefaultModule() {
    }
    DefaultModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _coreui_angular__WEBPACK_IMPORTED_MODULE_7__["AppAsideModule"],
                _coreui_angular__WEBPACK_IMPORTED_MODULE_7__["AppHeaderModule"],
                _coreui_angular__WEBPACK_IMPORTED_MODULE_7__["AppFooterModule"],
                _coreui_angular__WEBPACK_IMPORTED_MODULE_7__["AppSidebarModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                _default_routing_module__WEBPACK_IMPORTED_MODULE_2__["DefaultRoutingModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"].forRoot(),
                _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__["SharedUiModule"]
            ],
            declarations: [_default_layout_component__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutComponent"]].concat(APP_CONTAINERS),
            providers: [_shared_ui_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
        })
    ], DefaultModule);
    return DefaultModule;
}());



/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: AuthLayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutRoutingModule", function() { return AuthLayoutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-layout.component */ "./src/app/layouts/auth-layout/auth-layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _auth_layout_component__WEBPACK_IMPORTED_MODULE_2__["AuthLayoutComponent"],
        children: [
            {
                path: 'validateUser/:email/:createdt',
                loadChildren: function () { return __webpack_require__.e(/*! import() | views-auth-pages-iframe-access-iframe-access-module */ "views-auth-pages-iframe-access-iframe-access-module").then(__webpack_require__.bind(null, /*! ./../../views/auth-pages/iframe-access/iframe-access.module */ "./src/app/views/auth-pages/iframe-access/iframe-access.module.ts")).then(function (mod) { return mod.IframeAccessModule; }); }
            },
            {
                path: '404',
                loadChildren: function () { return __webpack_require__.e(/*! import() | views-auth-pages-error404-error404-module */ "views-auth-pages-error404-error404-module").then(__webpack_require__.bind(null, /*! ./../../views/auth-pages/error404/error404.module */ "./src/app/views/auth-pages/error404/error404.module.ts")).then(function (mod) { return mod.Error404Module; }); }
            },
            {
                path: 'thank-you',
                loadChildren: function () { return __webpack_require__.e(/*! import() | views-auth-pages-thank-you-thank-you-module */ "views-auth-pages-thank-you-thank-you-module").then(__webpack_require__.bind(null, /*! ./../../views/auth-pages/thank-you/thank-you.module */ "./src/app/views/auth-pages/thank-you/thank-you.module.ts")).then(function (mod) { return mod.ThankYouModule; }); }
            }
        ]
    }
];
var AuthLayoutRoutingModule = /** @class */ (function () {
    function AuthLayoutRoutingModule() {
    }
    AuthLayoutRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AuthLayoutRoutingModule);
    return AuthLayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYXV0aC1sYXlvdXQvYXV0aC1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
    };
    AuthLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth-layout',
            template: __webpack_require__(/*! raw-loader!./auth-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/auth-layout/auth-layout.component.html"),
            styles: [__webpack_require__(/*! ./auth-layout.component.scss */ "./src/app/layouts/auth-layout/auth-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.module.ts ***!
  \***********************************************************/
/*! exports provided: AuthLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutModule", function() { return AuthLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth_layout_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-layout-routing.module */ "./src/app/layouts/auth-layout/auth-layout-routing.module.ts");
/* harmony import */ var _auth_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-layout.component */ "./src/app/layouts/auth-layout/auth-layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AuthLayoutModule = /** @class */ (function () {
    function AuthLayoutModule() {
    }
    AuthLayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_auth_layout_component__WEBPACK_IMPORTED_MODULE_3__["AuthLayoutComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _auth_layout_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthLayoutRoutingModule"]
            ]
        })
    ], AuthLayoutModule);
    return AuthLayoutModule;
}());



/***/ }),

/***/ "./src/app/layouts/home-layout/ui-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layouts/home-layout/ui-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: UiRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiRoutingModule", function() { return UiRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ui_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui.component */ "./src/app/layouts/home-layout/ui.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: "",
        component: _ui_component__WEBPACK_IMPORTED_MODULE_2__["UiComponent"],
        children: []
    }
];
var UiRoutingModule = /** @class */ (function () {
    function UiRoutingModule() {
    }
    UiRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UiRoutingModule);
    return UiRoutingModule;
}());



/***/ }),

/***/ "./src/app/layouts/home-layout/ui.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layouts/home-layout/ui.component.ts ***!
  \*****************************************************/
/*! exports provided: UiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiComponent", function() { return UiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.model */ "./src/app/layouts/home-layout/user.model.ts");
/* harmony import */ var _shared_ui_jwt_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared-ui/jwt.service */ "./src/app/shared-ui/jwt.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _shared_ui_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared-ui/global.service */ "./src/app/shared-ui/global.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UiComponent = /** @class */ (function () {
    function UiComponent(jwtService, router, globalService, toastr) {
        var _this = this;
        this.jwtService = jwtService;
        this.router = router;
        this.globalService = globalService;
        this.toastr = toastr;
        this.fullYear = new Date().getFullYear();
        this.currentUser = new _user_model__WEBPACK_IMPORTED_MODULE_1__["currentUser"];
        this.quickSearchList = [];
        this.quickSearchText = {
            searchText: ""
        };
        this.loadingListings = false;
        this.currentUser = JSON.parse(this.jwtService.getCurrentUser());
        this.subscription = this.globalService.getActionChildToParent().subscribe(function (message) {
            if (message) {
                _this.currentUser = JSON.parse(_this.jwtService.getCurrentUser());
            }
        });
    }
    UiComponent.prototype.ngOnInit = function () {
        this.currentUser = JSON.parse(this.jwtService.getCurrentUser());
    };
    UiComponent.prototype.logout = function () {
        this.jwtService.destroyToken();
        this.router.navigate(['/']);
        this.toastr.success('You have logged out successfully. ', 'Success');
        this.globalService.sendActionChildToParent('loggedOut');
        this.currentUser = JSON.parse(this.jwtService.getCurrentUser());
    };
    UiComponent.ctorParameters = function () { return [
        { type: _shared_ui_jwt_service__WEBPACK_IMPORTED_MODULE_2__["JwtService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_ui_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('quickSearchOverlayWrap', { static: false }),
        __metadata("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalDirective"])
    ], UiComponent.prototype, "quickSearchOverlayWrap", void 0);
    UiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ui',
            template: __webpack_require__(/*! raw-loader!./ui.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/home-layout/ui.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_shared_ui_jwt_service__WEBPACK_IMPORTED_MODULE_2__["JwtService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_ui_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], UiComponent);
    return UiComponent;
}());



/***/ }),

/***/ "./src/app/layouts/home-layout/ui.module.ts":
/*!**************************************************!*\
  !*** ./src/app/layouts/home-layout/ui.module.ts ***!
  \**************************************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ui_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui-routing.module */ "./src/app/layouts/home-layout/ui-routing.module.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared-ui/shared-ui.module */ "./src/app/shared-ui/shared-ui.module.ts");
/* harmony import */ var _ui_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui.component */ "./src/app/layouts/home-layout/ui.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_ui_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared-ui/auth.guard */ "./src/app/shared-ui/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    UiModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _ui_routing_module__WEBPACK_IMPORTED_MODULE_2__["UiRoutingModule"],
                _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__["SharedUiModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(),
            ],
            declarations: [_ui_component__WEBPACK_IMPORTED_MODULE_5__["UiComponent"]],
            providers: [_shared_ui_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
        })
    ], UiModule);
    return UiModule;
}());



/***/ }),

/***/ "./src/app/layouts/home-layout/user.model.ts":
/*!***************************************************!*\
  !*** ./src/app/layouts/home-layout/user.model.ts ***!
  \***************************************************/
/*! exports provided: currentUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentUser", function() { return currentUser; });
var currentUser = /** @class */ (function () {
    function currentUser() {
    }
    return currentUser;
}());



/***/ }),

/***/ "./src/app/shared-ui/alert/alert.component.ts":
/*!****************************************************!*\
  !*** ./src/app/shared-ui/alert/alert.component.ts ***!
  \****************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _alert_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.model */ "./src/app/shared-ui/alert/alert.model.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.service */ "./src/app/shared-ui/alert/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
        this.alerts = [];
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getAlert().subscribe(function (alert) {
            if (!alert) {
                // clear alerts when an empty alert is received
                _this.alerts = [];
                return;
            }
            // add alert to array
            _this.alerts.push(alert);
        });
    };
    AlertComponent.prototype.removeAlert = function (alert) {
        this.alerts = this.alerts.filter(function (x) { return x !== alert; });
    };
    AlertComponent.prototype.cssClass = function (alert) {
        if (!alert) {
            return;
        }
        // return css class based on alert type
        switch (alert.type) {
            case _alert_model__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Success:
                return 'alert alert-success';
            case _alert_model__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Error:
                return 'alert alert-danger';
            case _alert_model__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Info:
                return 'alert alert-info';
            case _alert_model__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Warning:
                return 'alert alert-warning';
        }
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlertComponent.ctorParameters = function () { return [
        { type: _alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }
    ]; };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared-ui/alert/alert.component.html")
        }),
        __metadata("design:paramtypes", [_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/shared-ui/alert/alert.model.ts":
/*!************************************************!*\
  !*** ./src/app/shared-ui/alert/alert.model.ts ***!
  \************************************************/
/*! exports provided: Alert, AlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
var Alert = /** @class */ (function () {
    function Alert(init) {
        Object.assign(this, init);
    }
    Alert.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return Alert;
}());

var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ "./src/app/shared-ui/alert/alert.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared-ui/alert/alert.service.ts ***!
  \**************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _alert_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert.model */ "./src/app/shared-ui/alert/alert.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterRouteChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterRouteChange) {
                    // only keep for a single location change
                    _this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.getAlert = function () {
        return this.subject.asObservable();
    };
    AlertService.prototype.success = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(_alert_model__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Success, message, keepAfterRouteChange);
    };
    AlertService.prototype.error = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(_alert_model__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Error, message, keepAfterRouteChange);
    };
    AlertService.prototype.info = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(_alert_model__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Info, message, keepAfterRouteChange);
    };
    AlertService.prototype.warning = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(_alert_model__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Warning, message, keepAfterRouteChange);
    };
    AlertService.prototype.alert = function (type, message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: type, message: message });
    };
    AlertService.prototype.clear = function () {
        this.subject.next();
    };
    AlertService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/shared-ui/alert/index.ts":
/*!******************************************!*\
  !*** ./src/app/shared-ui/alert/index.ts ***!
  \******************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ "./src/app/shared-ui/alert/alert.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });




/***/ }),

/***/ "./src/app/shared-ui/auth.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/shared-ui/auth.guard.ts ***!
  \*****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt.service */ "./src/app/shared-ui/jwt.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(jwtService, router) {
        this.jwtService = jwtService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var currentUser = JSON.parse(this.jwtService.getCurrentUser());
        // if(currentUser && currentUser.id){
        if (this.jwtService.getToken()) {
            return true;
        }
        else {
            this.router.navigate(['/404']);
        }
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _jwt_service__WEBPACK_IMPORTED_MODULE_1__["JwtService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_jwt_service__WEBPACK_IMPORTED_MODULE_1__["JwtService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared-ui/global.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared-ui/global.service.ts ***!
  \*********************************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GlobalService = /** @class */ (function () {
    function GlobalService(http) {
        this.http = http;
        this.apiKey = 'fdHSuR2s$jYX!Vw@TK^naVjq^Xi6ro0giTRlC7jLZWR^exuMxdWtZ&Z69SoVBJZq';
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASEURL;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.companySubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    GlobalService.prototype.getActionChildToParent = function () {
        return this.subject.asObservable();
    };
    GlobalService.prototype.sendActionChildToParent = function (action) {
        this.subject.next({ text: action });
    };
    GlobalService.prototype.getLoadingLabel = function () {
        return this.loadingSubject.asObservable();
    };
    GlobalService.prototype.setLoadingLabel = function (action) {
        this.loadingSubject.next({ text: action });
    };
    GlobalService.prototype.getCompanyObject = function () {
        return this.companySubject.asObservable();
    };
    GlobalService.prototype.setCompanyObject = function (object) {
        this.companySubject.next(object);
    };
    GlobalService.prototype.getAccess = function (param) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'api-key': this.apiKey });
        var url = this.baseUrl + "validateUser?email=" + param['email'] + "&createdt=" + param['createdt'] + "&source=" + param['source'];
        return this.http.get(url, { headers: headers });
    };
    GlobalService.prototype.getConfig = function (param) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'api-key': this.apiKey });
        var url = this.baseUrl + "config";
        return this.http.get(url, { headers: headers });
    };
    GlobalService.prototype.getCompanies = function (param) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'api-key': this.apiKey });
        var url = this.baseUrl + "companies?user=" + param['user'];
        if (param['page']) {
            url += "&page=" + param['page'];
        }
        if (param['limit']) {
            url += "&limit=" + param['limit'];
        }
        if (param['isActive'] && param['isActive'] != "") {
            url += "&isActive=" + param['isActive'];
        }
        if (param['sort']) {
            url += "&sort=" + param['sort'];
        }
        if (param['sortOrder']) {
            url += "&sortOrder=" + param['sortOrder'];
        }
        return this.http.get(url, { headers: headers });
    };
    GlobalService.prototype.getUsers = function (param) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'api-key': this.apiKey });
        var url = this.baseUrl + "users?company=" + param['company'] + "&user=" + param['user'];
        if (param['page']) {
            url += "&page=" + param['page'];
        }
        if (param['group']) {
            url += "&group=" + param['group'];
        }
        if (param['limit']) {
            url += "&limit=" + param['limit'];
        }
        if (param['isActive'] == 1) {
            url += "&isActive=1";
        }
        if (param['isActive'] == 0) {
            url += "&isActive=0";
        }
        if (param['sortOrder']) {
            url += "&sortOrder=" + param['sortOrder'];
        }
        if (param['sort']) {
            url += "&sort=" + param['sort'];
        }
        if (param['search']) {
            url += "&search=" + param['search'];
        }
        return this.http.get(url, { headers: headers });
    };
    GlobalService.prototype.getStatus = function (param) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'api-key': this.apiKey });
        var url = this.baseUrl + "bulkImportStatus?company=" + param['company'] + "&user=" + param['user'];
        if (param['source']) {
            url += "&source=" + param['source'];
        }
        if (param['status']) {
            url += "&status=" + param['status'];
        }
        if (param['page']) {
            url += "&page=" + param['page'];
        }
        if (param['limit']) {
            url += "&limit=" + param['limit'];
        }
        if (param['sort']) {
            url += "&sort=" + param['sort'];
        }
        if (param['sortOrder']) {
            url += "&sortOrder=" + param['sortOrder'];
        }
        return this.http.get(url, { headers: headers });
    };
    GlobalService.prototype.getUserById = function (param) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'api-key': this.apiKey });
        var url = this.baseUrl + "users/" + param['id'] + "?company=" + param['company'] + "&user=" + param['user'];
        return this.http.get(url, { headers: headers });
    };
    GlobalService.prototype.getCompanyById = function (param) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'api-key': this.apiKey });
        var url = this.baseUrl + "companies/" + param['id'] + "?user=" + param['user'];
        return this.http.get(url, { headers: headers });
    };
    GlobalService.prototype.saveCompany = function (param) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'api-key': this.apiKey });
        var url = this.baseUrl + "companies";
        return this.http.post(url, param, { headers: headers });
    };
    GlobalService.prototype.updateCompany = function (param, id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'api-key': this.apiKey });
        var url = this.baseUrl + "companies/" + id;
        return this.http.put(url, param, { headers: headers });
    };
    GlobalService.prototype.saveUser = function (param) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'api-key': this.apiKey });
        var url = this.baseUrl + "users";
        return this.http.post(url, param, { headers: headers });
    };
    GlobalService.prototype.updateUser = function (param, id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'api-key': this.apiKey });
        var url = this.baseUrl + "users/" + id;
        return this.http.put(url, param, { headers: headers });
    };
    GlobalService.prototype.emailAlreadyExits = function (param) {
        var apiURL = this.baseUrl + "users/emailAlreadyExits";
        return this.http.post(apiURL, param);
    };
    GlobalService.prototype.ValidateEmail = function (inputText) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (inputText.match(mailformat)) {
            return true;
        }
        else {
            return false;
        }
    };
    GlobalService.prototype.topscroll = function () {
        var top = document.getElementById('container');
        var top2 = document.getElementById('admin-container');
        if (top !== null) {
            top.scrollIntoView();
            top = null;
        }
        else if (top2 !== null) {
            top2.scrollIntoView();
            top2 = null;
        }
    };
    GlobalService.prototype.uploadFile = function (file, param) {
        var newName = file.name.replace(/ /g, '-');
        var formData = new FormData();
        formData.append('csv', file, newName);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'api-key': this.apiKey, 'Content-Type': 'text/csv' });
        var url = this.baseUrl + "bulkImport?company=" + param['company'] + "&user=" + param['user'];
        return this.http.post(url, file, { headers: headers });
    };
    GlobalService.prototype.exportData = function (param) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'api-key': this.apiKey, 'Content-Type': 'text/csv', Accept: 'application/csv' });
        var url = this.baseUrl + "bulkExport?company=" + param['company'] + "&user=" + param['user'];
        if (param['isActive'] && param['isActive'] != "") {
            url += "&isActive=" + param['isActive'];
        }
        if (param['group']) {
            url += "&group=" + param['group'];
        }
        if (param['search']) {
            url += "&search=" + param['search'];
        }
        return this.http.get(url, { headers: headers });
        /* let httpOptions = {
          headers: headers,
          responseType: 'text/csv'
          };
        return this.http.get(url, { httpOptions }); */
    };
    GlobalService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    GlobalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GlobalService);
    return GlobalService;
}());



/***/ }),

/***/ "./src/app/shared-ui/grd-filter.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/shared-ui/grd-filter.pipe.ts ***!
  \**********************************************/
/*! exports provided: GrdFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrdFilterPipe", function() { return GrdFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GrdFilterPipe = /** @class */ (function () {
    function GrdFilterPipe() {
    }
    GrdFilterPipe.prototype.transform = function (items, filter, defaultFilter) {
        if (!filter) {
            return items;
        }
        if (!Array.isArray(items)) {
            return items;
        }
        if (filter && Array.isArray(items)) {
            var filterKeys_1 = Object.keys(filter);
            var found = filterKeys_1.filter(function (obj) {
                return filter[obj];
            });
            if (!found.length) {
                return items;
            }
            if (defaultFilter) {
                return items.filter(function (item) {
                    return filterKeys_1.reduce(function (x, keyName) {
                        return (x && new RegExp(filter[keyName], 'gi').test(item[keyName])) && filter[keyName] !== "";
                    }, true);
                });
            }
            else {
                return items.filter(function (item) {
                    return filterKeys_1.some(function (keyName) {
                        return filter[keyName] !== "" && new RegExp(filter[keyName], 'gi').test(item[keyName]);
                        // return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] == "";
                    });
                });
            }
        }
    };
    GrdFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'grdFilter'
        })
    ], GrdFilterPipe);
    return GrdFilterPipe;
}());



/***/ }),

/***/ "./src/app/shared-ui/jwt.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared-ui/jwt.service.ts ***!
  \******************************************/
/*! exports provided: JwtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return JwtService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JwtService = /** @class */ (function () {
    function JwtService() {
    }
    JwtService.prototype.saveToken = function (token) {
        window.localStorage.setItem('jwtToken', token);
    };
    JwtService.prototype.getToken = function () {
        return window.localStorage.getItem('jwtToken');
    };
    JwtService.prototype.saveCurrentUser = function (userDetails) {
        window.localStorage.setItem('currentUser', userDetails);
    };
    JwtService.prototype.getCurrentUser = function () {
        return window.localStorage.getItem('currentUser');
    };
    JwtService.prototype.destroyToken = function () {
        window.localStorage.removeItem('jwtToken');
        window.localStorage.removeItem('username');
        window.localStorage.removeItem('currentUser');
    };
    JwtService.prototype.saveUsername = function (username) {
        localStorage.setItem('username', username);
    };
    JwtService.prototype.getUsername = function () {
        return localStorage.getItem('username');
    };
    JwtService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], JwtService);
    return JwtService;
}());



/***/ }),

/***/ "./src/app/shared-ui/loading/loading.component.css":
/*!*********************************************************!*\
  !*** ./src/app/shared-ui/loading/loading.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC11aS9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shared-ui/loading/loading.component.ts":
/*!********************************************************!*\
  !*** ./src/app/shared-ui/loading/loading.component.ts ***!
  \********************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global.service */ "./src/app/shared-ui/global.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingComponent = /** @class */ (function () {
    function LoadingComponent(globalService) {
        var _this = this;
        this.globalService = globalService;
        this.loadingLabel = "Loading... Please Wait.";
        this.subscription = this.globalService.getLoadingLabel().subscribe(function (message) {
            if (message) {
                _this.loadingLabel = message.text;
            }
        });
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent.ctorParameters = function () { return [
        { type: _global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"] }
    ]; };
    LoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! raw-loader!./loading.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared-ui/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.css */ "./src/app/shared-ui/loading/loading.component.css")]
        }),
        __metadata("design:paramtypes", [_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/shared-ui/onlycharacter.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/shared-ui/onlycharacter.directive.ts ***!
  \******************************************************/
/*! exports provided: CharacterOnlyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterOnlyDirective", function() { return CharacterOnlyDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CharacterOnlyDirective = /** @class */ (function () {
    function CharacterOnlyDirective(el) {
        this.el = el;
        // Allow decimal numbers. The \. is only allowed once to occur
        this.regex = new RegExp(/^[a-zA-Z ]*$/g);
        // Allow key codes for special events. Reflect :
        // Backspace, tab, end, home
        this.specialKeys = ['Backspace', 'Tab', 'End', 'Home'];
    }
    CharacterOnlyDirective.prototype.onKeyDown = function (event) {
        // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        // Do not use event.keycode this is deprecated.
        // See: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
        var current = this.el.nativeElement.value;
        current = current.replace(/\s/g, '');
        // We need this because the current value on the DOM element
        // is not yet updated with the value from this event
        var next = current.concat(event.key);
        if (current) {
            if (next && !String(next).match(this.regex)) {
                event.preventDefault();
            }
        }
        else {
            // event.preventDefault();
            var newRegex = new RegExp(/^[a-zA-Z]*$/g);
            if (next && !String(next).match(newRegex)) {
                event.preventDefault();
            }
        }
    };
    CharacterOnlyDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], CharacterOnlyDirective.prototype, "onKeyDown", null);
    CharacterOnlyDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[characterOnly]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], CharacterOnlyDirective);
    return CharacterOnlyDirective;
}());



/***/ }),

/***/ "./src/app/shared-ui/onlynumber.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/shared-ui/onlynumber.directive.ts ***!
  \***************************************************/
/*! exports provided: NumberOnlyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberOnlyDirective", function() { return NumberOnlyDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NumberOnlyDirective = /** @class */ (function () {
    function NumberOnlyDirective(el) {
        this.el = el;
        // Allow decimal numbers. The \. is only allowed once to occur
        this.regex = new RegExp(/^[0-9]+(\.[0-9]*){0,1}$/g);
        // Allow key codes for special events. Reflect :
        // Backspace, tab, end, home
        this.specialKeys = ['Backspace', 'Tab', 'End', 'Home'];
    }
    NumberOnlyDirective.prototype.onKeyDown = function (event) {
        // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        // Do not use event.keycode this is deprecated.
        // See: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
        var current = this.el.nativeElement.value;
        // We need this because the current value on the DOM element
        // is not yet updated with the value from this event
        var next = current.concat(event.key);
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    };
    NumberOnlyDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], NumberOnlyDirective.prototype, "onKeyDown", null);
    NumberOnlyDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[numbersOnly]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NumberOnlyDirective);
    return NumberOnlyDirective;
}());



/***/ }),

/***/ "./src/app/shared-ui/shared-ui-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared-ui/shared-ui-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SharedUiRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedUiRoutingModule", function() { return SharedUiRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var SharedUiRoutingModule = /** @class */ (function () {
    function SharedUiRoutingModule() {
    }
    SharedUiRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SharedUiRoutingModule);
    return SharedUiRoutingModule;
}());



/***/ }),

/***/ "./src/app/shared-ui/shared-ui.module.ts":
/*!***********************************************!*\
  !*** ./src/app/shared-ui/shared-ui.module.ts ***!
  \***********************************************/
/*! exports provided: SharedUiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedUiModule", function() { return SharedUiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_ui_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared-ui-routing.module */ "./src/app/shared-ui/shared-ui-routing.module.ts");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading/loading.component */ "./src/app/shared-ui/loading/loading.component.ts");
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alert */ "./src/app/shared-ui/alert/index.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _onlycharacter_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./onlycharacter.directive */ "./src/app/shared-ui/onlycharacter.directive.ts");
/* harmony import */ var _onlynumber_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./onlynumber.directive */ "./src/app/shared-ui/onlynumber.directive.ts");
/* harmony import */ var _grd_filter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./grd-filter.pipe */ "./src/app/shared-ui/grd-filter.pipe.ts");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _progress_kendo_angular_pdf_export__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @progress/kendo-angular-pdf-export */ "./node_modules/@progress/kendo-angular-pdf-export/dist/fesm5/index.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/fesm5/ngx-order-pipe.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var SHARED_COMPONENTS = [
    _loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"],
    _alert__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"],
    _onlycharacter_directive__WEBPACK_IMPORTED_MODULE_10__["CharacterOnlyDirective"],
    _onlynumber_directive__WEBPACK_IMPORTED_MODULE_11__["NumberOnlyDirective"],
    _grd_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["GrdFilterPipe"],
];
var SharedUiModule = /** @class */ (function () {
    function SharedUiModule() {
    }
    SharedUiModule_1 = SharedUiModule;
    SharedUiModule.forRoot = function () {
        return {
            ngModule: SharedUiModule_1,
            providers: []
        };
    };
    var SharedUiModule_1;
    SharedUiModule = SharedUiModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _shared_ui_routing_module__WEBPACK_IMPORTED_MODULE_4__["SharedUiRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot({
                    closeButton: true,
                    positionClass: "toast-bottom-right",
                    preventDuplicates: true,
                }),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_16__["NgxPaginationModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_17__["OrderModule"],
                ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_13__["OwlModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["BsDropdownModule"].forRoot(),
                _progress_kendo_angular_pdf_export__WEBPACK_IMPORTED_MODULE_14__["PDFExportModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_15__["AgmCoreModule"].forRoot({
                    apiKey: "",
                    libraries: ["places"]
                }),
            ],
            providers: [],
            declarations: SHARED_COMPONENTS,
            exports: SHARED_COMPONENTS,
            entryComponents: []
        })
    ], SharedUiModule);
    return SharedUiModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    BASEURL: 'https://shadminapidev.azurewebsites.net/api/',
    reponseCode: {
        '200': 'Success',
        '204': 'No content (GET returning no matches)',
        '400': 'Bad request',
        '401': 'Unauthorized',
        '500': 'Internal error'
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], {
    useJit: true,
    preserveWhitespaces: true
})
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\xampp\htdocs\sh-admin-ui\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map