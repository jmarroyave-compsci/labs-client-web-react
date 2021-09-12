"use strict";
(self["webpackChunkreact"] = self["webpackChunkreact"] || []).push([["src_project_components_app_footer_footer_js"],{

/***/ "./src/framework/core/ui/_.js":
/*!************************************!*\
  !*** ./src/framework/core/ui/_.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  links_disabled: false
});

/***/ }),

/***/ "./src/framework/core/ui/layout/proxy.js":
/*!***********************************************!*\
  !*** ./src/framework/core/ui/layout/proxy.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Hidden */ "./node_modules/@material-ui/core/esm/Hidden/Hidden.js");
/* harmony import */ var _components_with_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/with-module */ "./src/framework/core/components/with-module.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var PageComponent = /*#__PURE__*/function (_React$Component) {
  _inherits(PageComponent, _React$Component);

  var _super = _createSuper(PageComponent);

  function PageComponent() {
    _classCallCheck(this, PageComponent);

    return _super.apply(this, arguments);
  }

  _createClass(PageComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          xs = _this$props.xs,
          sm = _this$props.sm,
          md = _this$props.md,
          lg = _this$props.lg,
          xl = _this$props.xl;
      xs = xs ? xs : null;
      sm = sm ? sm : xs;
      md = md ? md : sm;
      lg = lg ? lg : md;
      xl = xl ? xl : lg;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: {
          width: '100%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_2__["default"], {
        only: ['sm', 'md', 'lg', 'xl']
      }, xs), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_2__["default"], {
        only: ['xs', 'md', 'lg', 'xl']
      }, sm), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_2__["default"], {
        only: ['xs', 'sm', 'lg', 'xl']
      }, md), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_2__["default"], {
        only: ['xs', 'sm', 'md', 'xl']
      }, lg), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_2__["default"], {
        only: ['xs', 'sm', 'md', 'lg']
      }, xl));
    }
  }]);

  return PageComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_components_with_module__WEBPACK_IMPORTED_MODULE_1__["default"])(PageComponent));

/***/ }),

/***/ "./src/framework/core/ui/link.js":
/*!***************************************!*\
  !*** ./src/framework/core/ui/link.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_ */ "./src/framework/core/ui/_.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var _Link = /*#__PURE__*/function (_React$Component) {
  _inherits(_Link, _React$Component);

  var _super = _createSuper(_Link);

  function _Link() {
    _classCallCheck(this, _Link);

    return _super.apply(this, arguments);
  }

  _createClass(_Link, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          to = _this$props.to,
          href = _this$props.href,
          style = _this$props.style,
          external = _this$props.external;
      to = to ? to : href;
      to = to ? to : "http://localhost";
      children = to ? children : "NO LINK DEFINED";
      style = style ? style : {};
      external = external === true;
      if (to && typeof to !== "string") return "INVALID URL";
      var internal = external || to && to.indexOf('http') === 0 ? false : true;
      var jump = to.indexOf("#") === 0 ? true : false;
      var raised = true;
      var color = 'inherit';
      var target = !internal ? "_blank" : '_self';
      return jump == false && internal == true && ___WEBPACK_IMPORTED_MODULE_1__["default"].links_disabled == false ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
        className: className,
        to: to,
        style: style
      }, children) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        className: className,
        href: to,
        style: style,
        target: target
      }, children);
    }
  }]);

  return _Link;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Link);

/***/ }),

/***/ "./src/framework/shared/globals/footer/footer.js":
/*!*******************************************************!*\
  !*** ./src/framework/shared/globals/footer/footer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var shared_globals_footer_links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/globals/footer_links */ "./src/framework/shared/globals/footer_links/index.js");
/* harmony import */ var shared_globals_social_networks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/globals/social_networks */ "./src/framework/shared/globals/social_networks/index.js");
/* harmony import */ var shared_globals_version__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/globals/version */ "./src/framework/shared/globals/version/index.js");
/* harmony import */ var core_ui_layout_grid_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core/ui/layout/grid_container */ "./src/framework/core/ui/layout/grid_container.js");
/* harmony import */ var core_ui_layout_grid_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/ui/layout/grid_item */ "./src/framework/core/ui/layout/grid_item.js");
/* harmony import */ var core_ui_layout_proxy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core/ui/layout/proxy */ "./src/framework/core/ui/layout/proxy.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _templateObject;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var Container = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    background: #333;\n    background: linear-gradient(90deg, #333 0%, rgba(0,0,0,1) 100%);\n    color: white;\n    padding: 1rem;\n"])));

var Footer = /*#__PURE__*/function (_React$Component) {
  _inherits(Footer, _React$Component);

  var _super = _createSuper(Footer);

  function Footer() {
    _classCallCheck(this, Footer);

    return _super.apply(this, arguments);
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          socialNetworksLinks = _this$props.socialNetworksLinks,
          footerLinks = _this$props.footerLinks,
          version = _this$props.version;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(core_ui_layout_proxy__WEBPACK_IMPORTED_MODULE_6__["default"], {
        xs: this.renderSection(socialNetworksLinks, footerLinks, version, '1.5rem'),
        sm: this.renderSection(socialNetworksLinks, footerLinks, version, '2rem'),
        md: this.renderSection(socialNetworksLinks, footerLinks, version, '3rem')
      });
    }
  }, {
    key: "renderSection",
    value: function renderSection(socialNetworksLinks, footerLinks, version, padding) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(core_ui_layout_grid_container__WEBPACK_IMPORTED_MODULE_4__["default"], {
        spacing: 0,
        fill: true,
        className: "footer",
        style: {
          padding: padding
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(core_ui_layout_grid_item__WEBPACK_IMPORTED_MODULE_5__["default"], {
        fill: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(shared_globals_footer_links__WEBPACK_IMPORTED_MODULE_1__["default"], {
        links: footerLinks
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(core_ui_layout_grid_item__WEBPACK_IMPORTED_MODULE_5__["default"], {
        fill: true,
        center: true,
        style: {
          paddingTop: '1rem'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(shared_globals_social_networks__WEBPACK_IMPORTED_MODULE_2__["default"], {
        links: socialNetworksLinks
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(core_ui_layout_grid_item__WEBPACK_IMPORTED_MODULE_5__["default"], {
        fill: true,
        center: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(shared_globals_version__WEBPACK_IMPORTED_MODULE_3__["default"], {
        version: version
      }))));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ }),

/***/ "./src/framework/shared/globals/footer/index.js":
/*!******************************************************!*\
  !*** ./src/framework/shared/globals/footer/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.js */ "./src/framework/shared/globals/footer/footer.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_footer_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/framework/shared/globals/footer_links/footer_links.js":
/*!*******************************************************************!*\
  !*** ./src/framework/shared/globals/footer_links/footer_links.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FooterLinks)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var core_ui_layout_grid_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/ui/layout/grid_container */ "./src/framework/core/ui/layout/grid_container.js");
/* harmony import */ var core_ui_layout_grid_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/ui/layout/grid_item */ "./src/framework/core/ui/layout/grid_item.js");
/* harmony import */ var core_ui_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/ui/link */ "./src/framework/core/ui/link.js");
/* harmony import */ var _footer_links_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer_links.scss */ "./src/framework/shared/globals/footer_links/footer_links.scss");





function FooterLinks(_ref) {
  var links = _ref.links;
  var idx = 0;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(core_ui_layout_grid_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    spacing: 1,
    className: "mod-footer"
  }, links.map(function (section) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(core_ui_layout_grid_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: idx++,
      xs: 12,
      sm: 6,
      md: 4
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
      className: "section"
    }, section.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(core_ui_layout_grid_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
      spacing: 1
    }, section.items.map(function (item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(core_ui_layout_grid_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: idx++,
        xs: 6,
        sm: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(core_ui_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
        border: false,
        className: "link",
        to: item.link
      }, item.name));
    })));
  }));
}

/***/ }),

/***/ "./src/framework/shared/globals/footer_links/index.js":
/*!************************************************************!*\
  !*** ./src/framework/shared/globals/footer_links/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _footer_links__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer_links */ "./src/framework/shared/globals/footer_links/footer_links.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_footer_links__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/framework/shared/globals/social_networks/index.js":
/*!***************************************************************!*\
  !*** ./src/framework/shared/globals/social_networks/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _social_networks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./social_networks */ "./src/framework/shared/globals/social_networks/social_networks.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_social_networks__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/framework/shared/globals/social_networks/social_networks.js":
/*!*************************************************************************!*\
  !*** ./src/framework/shared/globals/social_networks/social_networks.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SocialNetworks)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _social_networks_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social_networks.scss */ "./src/framework/shared/globals/social_networks/social_networks.scss");


function SocialNetworks(_ref) {
  var size = _ref.size,
      links = _ref.links;

  switch (size) {
    case "sm":
      size = "sm";
      break;

    default:
      size = "lg";
      break;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mod-social-icons ".concat(size, " layout-align-center-center layout-column flex")
  }, links.map(function (item, key) {
    return item.enable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      key: key,
      href: item.url
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "fa-stack fa-".concat(size)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-square-o fa-stack-2x"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "fa fa-".concat(item.icon, " fa-stack-1x"),
      style: {
        color: item.color
      }
    })));
  }));
}

/***/ }),

/***/ "./src/framework/shared/globals/version/index.js":
/*!*******************************************************!*\
  !*** ./src/framework/shared/globals/version/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version */ "./src/framework/shared/globals/version/version.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_version__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/framework/shared/globals/version/version.js":
/*!*********************************************************!*\
  !*** ./src/framework/shared/globals/version/version.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Version)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function Version(_ref) {
  var version = _ref.version;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "version"
  }, "v.", version);
}

/***/ }),

/***/ "./src/project/components/app/footer/footer.js":
/*!*****************************************************!*\
  !*** ./src/project/components/app/footer/footer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var config_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! config/constants */ "./src/project/config/constants.js");
/* harmony import */ var config_social_networks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! config/social-networks */ "./src/project/config/social-networks.js");
/* harmony import */ var config_footer_links__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! config/footer-links */ "./src/project/config/footer-links.js");
/* harmony import */ var shared_globals_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/globals/footer */ "./src/framework/shared/globals/footer/index.js");





function FooterComponent() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(shared_globals_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    version: config_constants__WEBPACK_IMPORTED_MODULE_1__["default"].VERSION,
    footerLinks: config_footer_links__WEBPACK_IMPORTED_MODULE_3__["default"],
    socialNetworksLinks: config_social_networks__WEBPACK_IMPORTED_MODULE_2__["default"]
  });
}

/***/ }),

/***/ "./src/project/config/footer-links.js":
/*!********************************************!*\
  !*** ./src/project/config/footer-links.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _links__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./links */ "./src/project/config/links.js");

var links = [{
  "name": "jmarroyave",
  items: [{
    "name": "blog",
    "link": _links__WEBPACK_IMPORTED_MODULE_0__["default"].blog
  }]
}, {
  "name": "labs",
  items: [{
    "name": "stackoverflow",
    "link": _links__WEBPACK_IMPORTED_MODULE_0__["default"].labs_trends
  }, {
    "name": "mlb",
    "link": _links__WEBPACK_IMPORTED_MODULE_0__["default"].labs_mlb
  }, {
    "name": "search",
    "link": _links__WEBPACK_IMPORTED_MODULE_0__["default"].labs_search
  }]
}, {
  "name": "knowledge base",
  items: [{
    "name": "android",
    "link": _links__WEBPACK_IMPORTED_MODULE_0__["default"].kb_android
  }]
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (links);

/***/ }),

/***/ "./src/project/config/links.js":
/*!*************************************!*\
  !*** ./src/project/config/links.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Links = function Links() {
  _classCallCheck(this, Links);

  this.app = 'https://jmarroyave.herokuapp.com';
  this.blog = "".concat(this.app, "/blog");
  this.labs_trends = "".concat(this.app, "/labs/labs-trends");
  this.labs_search = "".concat(this.app, "/labs/labs-search");
  this.labs_mlb = "".concat(this.app, "/labs/labs-mlb");
  this.kb_android = "".concat(this.app, "/kb/android");
  this.trends_proto = 'https://jmarroyave-apps-stackoverflow.herokuapp.com';
  this.cv_pdf = '/res/files/cv-jmarroyave.pdf';
};

var inst = new Links();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inst);

/***/ }),

/***/ "./src/project/config/social-networks.js":
/*!***********************************************!*\
  !*** ./src/project/config/social-networks.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var links = [
/*
{enable: true, url: 'https://plus.google.com/112618720945759819017', icon: 'google-plus', color: '#d34836'},
{enable: true, url: 'https://twitter.com/jmarroyave', icon: 'twitter', color: '#00aced'},
*/
{
  enable: true,
  url: 'https://facebook.com/jmarroyave',
  icon: 'facebook',
  color: '#3b5998'
}, {
  enable: true,
  url: 'https://www.linkedin.com/in/jmarroyave',
  icon: 'linkedin',
  color: '#0077B5'
}, {
  enable: true,
  url: 'https://github.com/jmarroyave',
  icon: 'github',
  color: '#000'
}, {
  enable: true,
  url: 'mailto:jmarroyave.compsci@gmail.com',
  icon: 'envelope-o',
  color: '#000'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (links);

/***/ }),

/***/ "./src/framework/shared/globals/footer_links/footer_links.scss":
/*!*********************************************************************!*\
  !*** ./src/framework/shared/globals/footer_links/footer_links.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/framework/shared/globals/social_networks/social_networks.scss":
/*!***************************************************************************!*\
  !*** ./src/framework/shared/globals/social_networks/social_networks.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3Byb2plY3RfY29tcG9uZW50c19hcHBfZm9vdGVyX2Zvb3Rlcl9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWU7QUFDYkEsRUFBQUEsY0FBYyxFQUFHO0FBREosQ0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBOztJQUVNSTs7Ozs7Ozs7Ozs7OztXQUNMLGtCQUFRO0FBQ1Asd0JBQTZCLEtBQUtDLEtBQWxDO0FBQUEsVUFBTUMsRUFBTixlQUFNQSxFQUFOO0FBQUEsVUFBVUMsRUFBVixlQUFVQSxFQUFWO0FBQUEsVUFBY0MsRUFBZCxlQUFjQSxFQUFkO0FBQUEsVUFBa0JDLEVBQWxCLGVBQWtCQSxFQUFsQjtBQUFBLFVBQXNCQyxFQUF0QixlQUFzQkEsRUFBdEI7QUFFQUosTUFBQUEsRUFBRSxHQUFJQSxFQUFELEdBQU9BLEVBQVAsR0FBWSxJQUFqQjtBQUNBQyxNQUFBQSxFQUFFLEdBQUlBLEVBQUQsR0FBT0EsRUFBUCxHQUFZRCxFQUFqQjtBQUNBRSxNQUFBQSxFQUFFLEdBQUlBLEVBQUQsR0FBT0EsRUFBUCxHQUFZRCxFQUFqQjtBQUNBRSxNQUFBQSxFQUFFLEdBQUlBLEVBQUQsR0FBT0EsRUFBUCxHQUFZRCxFQUFqQjtBQUNBRSxNQUFBQSxFQUFFLEdBQUlBLEVBQUQsR0FBT0EsRUFBUCxHQUFZRCxFQUFqQjtBQUVBLDBCQUNDO0FBQUssYUFBSyxFQUFFO0FBQUNFLFVBQUFBLEtBQUssRUFBQztBQUFQO0FBQVosc0JBQ08saURBQUMsZ0VBQUQ7QUFBUSxZQUFJLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkI7QUFBZCxTQUNFTCxFQURGLENBRFAsZUFJTyxpREFBQyxnRUFBRDtBQUFRLFlBQUksRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQjtBQUFkLFNBQ0VDLEVBREYsQ0FKUCxlQU9PLGlEQUFD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O0FBQ0E7QUFDRTtBQUFFVSxFQUFBQSxNQUFNLEVBQUUsSUFBVjtBQUFnQkMsRUFBQUEsR0FBRyxFQUFFLGlDQUFyQjtBQUF3REMsRUFBQUEsSUFBSSxFQUFFLFVBQTlEO0FBQTBFaEMsRUFBQUEsS0FBSyxFQUFFO0FBQWpGLENBTFksRUFNWjtBQUFFOEIsRUFBQUEsTUFBTSxFQUFFLElBQVY7QUFBZ0JDLEVBQUFBLEdBQUcsRUFBRSx3Q0FBckI7QUFBK0RDLEVBQUFBLElBQUksRUFBRSxVQUFyRTtBQUFpRmhDLEVBQUFBLEtBQUssRUFBRTtBQUF4RixDQU5ZLEVBT1o7QUFBRThCLEVBQUFBLE1BQU0sRUFBRSxJQUFWO0FBQWdCQyxFQUFBQSxHQUFHLEVBQUUsK0JBQXJCO0FBQXNEQyxFQUFBQSxJQUFJLEVBQUUsUUFBNUQ7QUFBc0VoQyxFQUFBQSxLQUFLLEVBQUU7QUFBN0UsQ0FQWSxFQVFaO0FBQUU4QixFQUFBQSxNQUFNLEVBQUUsSUFBVjtBQUFnQkMsRUFBQUEsR0FBRyxFQUFFLHFDQUFyQjtBQUE0REMsRUFBQUEsSUFBSSxFQUFFLFlBQWxFO0FBQWdGaEMsRUFBQUEsS0FBSyxFQUFFO0FBQXZGLENBUlksQ0FBZDtBQVlBLGlFQUFlb0IsS0FBZjs7Ozs7Ozs7Ozs7QUNaQTs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC8uL3NyYy9mcmFtZXdvcmsvY29yZS91aS9fLmpzIiwid2VicGFjazovL3JlYWN0Ly4vc3JjL2ZyYW1ld29yay9jb3JlL3VpL2xheW91dC9wcm94eS5qcyIsIndlYnBhY2s6Ly9yZWFjdC8uL3NyYy9mcmFtZXdvcmsvY29yZS91aS9saW5rLmpzIiwid2VicGFjazovL3JlYWN0Ly4vc3JjL2ZyYW1ld29yay9zaGFyZWQvZ2xvYmFscy9mb290ZXIvZm9vdGVyLmpzIiwid2VicGFjazovL3JlYWN0Ly4vc3JjL2ZyYW1ld29yay9zaGFyZWQvZ2xvYmFscy9mb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVhY3QvLi9zcmMvZnJhbWV3b3JrL3NoYXJlZC9nbG9iYWxzL2Zvb3Rlcl9saW5rcy9mb290ZXJfbGlua3MuanMiLCJ3ZWJwYWNrOi8vcmVhY3QvLi9zcmMvZnJhbWV3b3JrL3NoYXJlZC9nbG9iYWxzL2Zvb3Rlcl9saW5rcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZWFjdC8uL3NyYy9mcmFtZXdvcmsvc2hhcmVkL2dsb2JhbHMvc29jaWFsX25ldHdvcmtzL2luZGV4LmpzIiwid2VicGFjazovL3JlYWN0Ly4vc3JjL2ZyYW1ld29yay9zaGFyZWQvZ2xvYmFscy9zb2NpYWxfbmV0d29ya3Mvc29jaWFsX25ldHdvcmtzLmpzIiwid2VicGFjazovL3JlYWN0Ly4vc3JjL2ZyYW1ld29yay9zaGFyZWQvZ2xvYmFscy92ZXJzaW9uL2luZGV4LmpzIiwid2VicGFjazovL3JlYWN0Ly4vc3JjL2ZyYW1ld29yay9zaGFyZWQvZ2xvYmFscy92ZXJzaW9uL3ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vcmVhY3QvLi9zcmMvcHJvamVjdC9jb21wb25lbnRzL2FwcC9mb290ZXIvZm9vdGVyLmpzIiwid2VicGFjazovL3JlYWN0Ly4vc3JjL3Byb2plY3QvY29uZmlnL2Zvb3Rlci1saW5rcy5qcyIsIndlYnBhY2s6Ly9yZWFjdC8uL3NyYy9wcm9qZWN0L2NvbmZpZy9saW5rcy5qcyIsIndlYnBhY2s6Ly9yZWFjdC8uL3NyYy9wcm9qZWN0L2NvbmZpZy9zb2NpYWwtbmV0d29ya3MuanMiLCJ3ZWJwYWNrOi8vcmVhY3QvLi9zcmMvZnJhbWV3b3JrL3NoYXJlZC9nbG9iYWxzL2Zvb3Rlcl9saW5rcy9mb290ZXJfbGlua3Muc2Nzcz9hMTJiIiwid2VicGFjazovL3JlYWN0Ly4vc3JjL2ZyYW1ld29yay9zaGFyZWQvZ2xvYmFscy9zb2NpYWxfbmV0d29ya3Mvc29jaWFsX25ldHdvcmtzLnNjc3M/ZTg1YSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGxpbmtzX2Rpc2FibGVkIDogZmFsc2UsXG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XG5pbXBvcnQgd2l0aE1vZHVsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3dpdGgtbW9kdWxlJztcblxuY2xhc3MgUGFnZUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpe1xuXHRcdHZhciB7IHhzLCBzbSwgbWQsIGxnLCB4bCB9ID0gdGhpcy5wcm9wcztcblxuXHRcdHhzID0gKHhzKSA/IHhzIDogbnVsbDtcblx0XHRzbSA9IChzbSkgPyBzbSA6IHhzO1xuXHRcdG1kID0gKG1kKSA/IG1kIDogc207XG5cdFx0bGcgPSAobGcpID8gbGcgOiBtZDtcblx0XHR4bCA9ICh4bCkgPyB4bCA6IGxnO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgc3R5bGU9e3t3aWR0aDonMTAwJSd9fT5cbiAgICAgICAgXHRcdDxIaWRkZW4gb25seT17WydzbScsICdtZCcsICdsZycsICd4bCddfT5cbiAgICAgICAgXHRcdFx0e3hzfVxuXHRcdCAgICAgICAgPC9IaWRkZW4+XG4gICAgICAgIFx0XHQ8SGlkZGVuIG9ubHk9e1sneHMnLCAnbWQnLCAnbGcnLCAneGwnXX0+XG4gICAgICAgIFx0XHRcdHtzbX1cblx0XHQgICAgICAgIDwvSGlkZGVuPlxuICAgICAgICBcdFx0PEhpZGRlbiBvbmx5PXtbJ3hzJywgJ3NtJywgJ2xnJywgJ3hsJ119PlxuICAgICAgICBcdFx0XHR7bWR9XG5cdFx0ICAgICAgICA8L0hpZGRlbj5cbiAgICAgICAgXHRcdDxIaWRkZW4gb25seT17Wyd4cycsICdzbScsICdtZCcsICd4bCddfT5cbiAgICAgICAgXHRcdFx0e2xnfVxuXHRcdCAgICAgICAgPC9IaWRkZW4+XG4gICAgICAgIFx0XHQ8SGlkZGVuIG9ubHk9e1sneHMnLCAnc20nLCAnbWQnLCAnbGcnXX0+XG4gICAgICAgIFx0XHRcdHt4bH1cblx0XHQgICAgICAgIDwvSGlkZGVuPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhNb2R1bGUoUGFnZUNvbXBvbmVudCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuL18nO1xuXG5jbGFzcyBfTGluayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICB2YXIgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCB0bywgaHJlZiwgc3R5bGUsIGV4dGVybmFsIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgdG8gPSAodG8pID8gdG8gOiBocmVmO1xuICAgIHRvID0gKHRvKSA/IHRvIDogXCJodHRwOi8vbG9jYWxob3N0XCI7XG4gICAgY2hpbGRyZW4gPSAodG8pID8gY2hpbGRyZW4gOiBcIk5PIExJTksgREVGSU5FRFwiO1xuICAgIHN0eWxlID0gKHN0eWxlKSA/IHN0eWxlIDoge307XG4gICAgZXh0ZXJuYWwgPSAoZXh0ZXJuYWwgPT09IHRydWUpO1xuXG4gICAgaWYodG8gJiYgdHlwZW9mIHRvICE9PSBcInN0cmluZ1wiKSByZXR1cm4gXCJJTlZBTElEIFVSTFwiO1xuXG4gICAgY29uc3QgaW50ZXJuYWwgPSAoZXh0ZXJuYWwgfHwgKHRvICYmIHRvLmluZGV4T2YoJ2h0dHAnKSA9PT0gMCkpID8gZmFsc2UgOiB0cnVlO1xuICAgIGNvbnN0IGp1bXAgPSAodG8uaW5kZXhPZihcIiNcIikgPT09IDApID8gdHJ1ZSA6IGZhbHNlO1xuICAgIGNvbnN0IHJhaXNlZCA9IHRydWU7XG4gICAgY29uc3QgY29sb3IgPSAnaW5oZXJpdCc7XG4gICAgY29uc3QgdGFyZ2V0ID0gKCFpbnRlcm5hbCkgPyBcIl9ibGFua1wiIDogJ19zZWxmJ1xuICAgIHJldHVybiAoXG4gICAgICAgIChqdW1wID09IGZhbHNlICYmIGludGVybmFsID09IHRydWUgJiYgY29uc3RhbnRzLmxpbmtzX2Rpc2FibGVkID09IGZhbHNlKSA/IFxuICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHRvPXt0b30gc3R5bGU9e3N0eWxlfT57Y2hpbGRyZW59PC9OYXZMaW5rPlxuICAgICAgICA6XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaHJlZj17dG99IHN0eWxlPXtzdHlsZX0gdGFyZ2V0PXt0YXJnZXR9PntjaGlsZHJlbn08L2E+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBfTGluazsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBGb290ZXJMaW5rcyBmcm9tICdzaGFyZWQvZ2xvYmFscy9mb290ZXJfbGlua3MnO1xuaW1wb3J0IFNvY2lhbE5ldHdvcmtzIGZyb20gJ3NoYXJlZC9nbG9iYWxzL3NvY2lhbF9uZXR3b3Jrcyc7XG5pbXBvcnQgVmVyc2lvbiBmcm9tICdzaGFyZWQvZ2xvYmFscy92ZXJzaW9uJ1xuaW1wb3J0IEdyaWRDb250YWluZXIgZnJvbSAnY29yZS91aS9sYXlvdXQvZ3JpZF9jb250YWluZXInO1xuaW1wb3J0IEdyaWRJdGVtIGZyb20gJ2NvcmUvdWkvbGF5b3V0L2dyaWRfaXRlbSc7XG5pbXBvcnQgQ29yZVByb3h5IGZyb20gJ2NvcmUvdWkvbGF5b3V0L3Byb3h5JztcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzMzMyAwJSwgcmdiYSgwLDAsMCwxKSAxMDAlKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMXJlbTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IHtzb2NpYWxOZXR3b3Jrc0xpbmtzLCBmb290ZXJMaW5rcywgdmVyc2lvbn0gPSB0aGlzLnByb3BzO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8Q29yZVByb3h5IFxuXHRcdFx0XHR4cz17dGhpcy5yZW5kZXJTZWN0aW9uKHNvY2lhbE5ldHdvcmtzTGlua3MsIGZvb3RlckxpbmtzLCB2ZXJzaW9uLCAnMS41cmVtJyl9XG5cdFx0XHRcdHNtPXt0aGlzLnJlbmRlclNlY3Rpb24oc29jaWFsTmV0d29ya3NMaW5rcywgZm9vdGVyTGlua3MsIHZlcnNpb24sICcycmVtJyl9XG5cdFx0XHRcdG1kPXt0aGlzLnJlbmRlclNlY3Rpb24oc29jaWFsTmV0d29ya3NMaW5rcywgZm9vdGVyTGlua3MsIHZlcnNpb24sICczcmVtJyl9XG5cdFx0XHQvPlx0XHRcdFx0XG5cdFx0KTtcblx0fVxuXG5cdHJlbmRlclNlY3Rpb24oc29jaWFsTmV0d29ya3NMaW5rcywgZm9vdGVyTGlua3MsIHZlcnNpb24sIHBhZGRpbmcpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8Q29udGFpbmVyPlxuXHRcdFx0XHQ8R3JpZENvbnRhaW5lciBzcGFjaW5nPXswfSBmaWxsIGNsYXNzTmFtZT1cImZvb3RlclwiIHN0eWxlPXt7cGFkZGluZzogcGFkZGluZ319PlxuXHRcdFx0XHRcdDxHcmlkSXRlbSBmaWxsPlxuXHRcdFx0XHRcdFx0PEZvb3RlckxpbmtzIGxpbmtzPXtmb290ZXJMaW5rc30vPlxuXHRcdFx0XHRcdDwvR3JpZEl0ZW0+XHRcdFx0XHRcdFxuXHRcdFx0XHRcdDxHcmlkSXRlbSBmaWxsIGNlbnRlciBzdHlsZT17e3BhZGRpbmdUb3A6ICcxcmVtJ319PlxuXHRcdFx0XHRcdFx0PFNvY2lhbE5ldHdvcmtzIGxpbmtzPXtzb2NpYWxOZXR3b3Jrc0xpbmtzfS8+XG5cdFx0XHRcdFx0PC9HcmlkSXRlbT5cblx0XHRcdFx0XHQ8R3JpZEl0ZW0gZmlsbCBjZW50ZXI+XG5cdFx0XHRcdFx0XHQ8VmVyc2lvbiB2ZXJzaW9uPXt2ZXJzaW9ufS8+XG5cdFx0XHRcdFx0PC9HcmlkSXRlbT5cblx0XHRcdFx0PC9HcmlkQ29udGFpbmVyPiBcblx0XHRcdDwvQ29udGFpbmVyPlxuXHRcdClcblx0fVxuXG59IiwiaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3Rlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBHcmlkQ29udGFpbmVyIGZyb20gJ2NvcmUvdWkvbGF5b3V0L2dyaWRfY29udGFpbmVyJztcbmltcG9ydCBHcmlkSXRlbSBmcm9tICdjb3JlL3VpL2xheW91dC9ncmlkX2l0ZW0nO1xuaW1wb3J0IExpbmsgZnJvbSAnY29yZS91aS9saW5rJztcblxuaW1wb3J0ICcuL2Zvb3Rlcl9saW5rcy5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyTGlua3Moe2xpbmtzfSkge1xuICBcdHZhciBpZHggPSAwO1xuICAgIHJldHVybiAoXG5cdFx0PEdyaWRDb250YWluZXIgc3BhY2luZz17MX0gY2xhc3NOYW1lPSdtb2QtZm9vdGVyJz5cblx0XHRcdHtsaW5rcy5tYXAoc2VjdGlvbj0+XG5cdFx0XHRcdDxHcmlkSXRlbSBrZXk9e2lkeCsrfSB4cz17MTJ9IHNtPXs2fSBtZD17NH0+XG5cdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT0nc2VjdGlvbic+e3NlY3Rpb24ubmFtZX08L2gzPlxuXHRcdFx0XHRcdDxHcmlkQ29udGFpbmVyIHNwYWNpbmc9ezF9PlxuXHRcdFx0XHRcdFx0e3NlY3Rpb24uaXRlbXMubWFwKGl0ZW09PlxuXHRcdFx0XHRcdFx0XHQ8R3JpZEl0ZW0ga2V5PXtpZHgrK30geHM9ezZ9IHNtPXsxMn0+XG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgYm9yZGVyPXtmYWxzZX0gY2xhc3NOYW1lPSdsaW5rJyB0bz17aXRlbS5saW5rfT57aXRlbS5uYW1lfTwvTGluaz5cblx0XHRcdFx0XHRcdFx0PC9HcmlkSXRlbT5cblx0XHRcdFx0XHRcdCl9XHRcdFx0XHRcblx0XHRcdFx0XHQ8L0dyaWRDb250YWluZXI+XHRcdFxuXHRcdFx0XHQ8L0dyaWRJdGVtPlxuXHRcdFx0KX1cblx0XHQ8L0dyaWRDb250YWluZXI+IFxuICAgICk7XG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL2Zvb3Rlcl9saW5rcyc7XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDtcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9zb2NpYWxfbmV0d29ya3MnO1xuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgJy4vc29jaWFsX25ldHdvcmtzLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTb2NpYWxOZXR3b3Jrcyh7c2l6ZSwgbGlua3N9KSB7XG5cdHN3aXRjaChzaXplKXtcblx0XHRjYXNlIFwic21cIjpcblx0XHRcdHNpemUgPSBcInNtXCI7XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0c2l6ZSA9IFwibGdcIjtcblx0XHRcdGJyZWFrO1xuXHR9XG5cblx0cmV0dXJuIChcblx0ICA8ZGl2IGNsYXNzTmFtZT17YG1vZC1zb2NpYWwtaWNvbnMgJHtzaXplfSBsYXlvdXQtYWxpZ24tY2VudGVyLWNlbnRlciBsYXlvdXQtY29sdW1uIGZsZXhgfT5cblx0ICBcdHtsaW5rcy5tYXAoKGl0ZW0sIGtleSkgPT5cblx0ICBcdFx0aXRlbS5lbmFibGUgJiZcblx0XHQgICAgPGEga2V5PXtrZXl9IGhyZWY9e2l0ZW0udXJsfT5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtgZmEtc3RhY2sgZmEtJHtzaXplfWB9PlxuXHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhIGZhLXNxdWFyZS1vIGZhLXN0YWNrLTJ4XCI+PC9pPlxuXHRcdFx0XHRcdDxpIGNsYXNzTmFtZT17YGZhIGZhLSR7aXRlbS5pY29ufSBmYS1zdGFjay0xeGB9IHN0eWxlPXt7Y29sb3I6IGl0ZW0uY29sb3J9fT48L2k+XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdDwvYT5cblx0XHQpfVxuXHQgIDwvZGl2PlxuXHQpO1xufSIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi92ZXJzaW9uJztcblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmVyc2lvbih7dmVyc2lvbn0pe1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwidmVyc2lvblwiPnYue3ZlcnNpb259PC9kaXY+XG5cdClcdFxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJ2NvbmZpZy9jb25zdGFudHMnXG5pbXBvcnQgU29jaWFsTmV0d29ya3NMaW5rcyBmcm9tICdjb25maWcvc29jaWFsLW5ldHdvcmtzJ1xuaW1wb3J0IGxpbmtzIGZyb20gJ2NvbmZpZy9mb290ZXItbGlua3MnO1xuaW1wb3J0IEZvb3RlciBmcm9tICdzaGFyZWQvZ2xvYmFscy9mb290ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXJDb21wb25lbnQoKXtcdFxuXHRyZXR1cm4gKFxuXHRcdDxGb290ZXIgdmVyc2lvbj17Q29uc3RhbnRzLlZFUlNJT059IGZvb3RlckxpbmtzPXtsaW5rc30gc29jaWFsTmV0d29ya3NMaW5rcz17U29jaWFsTmV0d29ya3NMaW5rc30vPlxuXHQpXG59IiwiaW1wb3J0IF9saW5rcyBmcm9tICcuL2xpbmtzJztcblxuY29uc3QgbGlua3MgPSBbXG4gIHsgXCJuYW1lXCIgOiBcImptYXJyb3lhdmVcIiwgaXRlbXM6IFtcbiAgICB7IFwibmFtZVwiOiBcImJsb2dcIiwgXCJsaW5rXCIgOiBfbGlua3MuYmxvZyB9LFxuICBdIH0sXG4gIHsgXCJuYW1lXCIgOiBcImxhYnNcIiwgaXRlbXM6IFtcbiAgICB7IFwibmFtZVwiOiBcInN0YWNrb3ZlcmZsb3dcIiwgXCJsaW5rXCIgOiBfbGlua3MubGFic190cmVuZHMgfSxcbiAgICB7IFwibmFtZVwiOiBcIm1sYlwiLCBcImxpbmtcIiA6IF9saW5rcy5sYWJzX21sYiB9LFxuICAgIHsgXCJuYW1lXCI6IFwic2VhcmNoXCIsIFwibGlua1wiIDogX2xpbmtzLmxhYnNfc2VhcmNoIH0sXG4gIF0gfSxcbiAgeyBcIm5hbWVcIiA6IFwia25vd2xlZGdlIGJhc2VcIiwgaXRlbXM6IFtcbiAgICB7IFwibmFtZVwiOiBcImFuZHJvaWRcIiwgXCJsaW5rXCIgOiBfbGlua3Mua2JfYW5kcm9pZCB9LFxuICBdIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBsaW5rczsiLCJjbGFzcyBMaW5rcyB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5hcHAgPSAnaHR0cHM6Ly9qbWFycm95YXZlLmhlcm9rdWFwcC5jb20nO1xuICAgIHRoaXMuYmxvZyA9IGAke3RoaXMuYXBwfS9ibG9nYDtcbiAgICB0aGlzLmxhYnNfdHJlbmRzID0gYCR7dGhpcy5hcHB9L2xhYnMvbGFicy10cmVuZHNgO1xuICAgIHRoaXMubGFic19zZWFyY2ggPSBgJHt0aGlzLmFwcH0vbGFicy9sYWJzLXNlYXJjaGA7XG4gICAgdGhpcy5sYWJzX21sYiA9IGAke3RoaXMuYXBwfS9sYWJzL2xhYnMtbWxiYDtcbiAgICB0aGlzLmtiX2FuZHJvaWQgPSBgJHt0aGlzLmFwcH0va2IvYW5kcm9pZGA7XG5cbiAgICB0aGlzLnRyZW5kc19wcm90byA9ICdodHRwczovL2ptYXJyb3lhdmUtYXBwcy1zdGFja292ZXJmbG93Lmhlcm9rdWFwcC5jb20nO1xuXG4gICAgdGhpcy5jdl9wZGYgPSAnL3Jlcy9maWxlcy9jdi1qbWFycm95YXZlLnBkZic7XHRcbiAgfVxufVxuXG5jb25zdCBpbnN0ID0gbmV3IExpbmtzKCk7XG5leHBvcnQgZGVmYXVsdCBpbnN0OyIsImNvbnN0IGxpbmtzID0gW1xuICAvKlxuXHR7ZW5hYmxlOiB0cnVlLCB1cmw6ICdodHRwczovL3BsdXMuZ29vZ2xlLmNvbS8xMTI2MTg3MjA5NDU3NTk4MTkwMTcnLCBpY29uOiAnZ29vZ2xlLXBsdXMnLCBjb2xvcjogJyNkMzQ4MzYnfSxcblx0e2VuYWJsZTogdHJ1ZSwgdXJsOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9qbWFycm95YXZlJywgaWNvbjogJ3R3aXR0ZXInLCBjb2xvcjogJyMwMGFjZWQnfSxcblx0Ki9cbiAgeyBlbmFibGU6IHRydWUsIHVybDogJ2h0dHBzOi8vZmFjZWJvb2suY29tL2ptYXJyb3lhdmUnLCBpY29uOiAnZmFjZWJvb2snLCBjb2xvcjogJyMzYjU5OTgnIH0sXG4gIHsgZW5hYmxlOiB0cnVlLCB1cmw6ICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vam1hcnJveWF2ZScsIGljb246ICdsaW5rZWRpbicsIGNvbG9yOiAnIzAwNzdCNScgfSxcbiAgeyBlbmFibGU6IHRydWUsIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qbWFycm95YXZlJywgaWNvbjogJ2dpdGh1YicsIGNvbG9yOiAnIzAwMCcgfSxcbiAgeyBlbmFibGU6IHRydWUsIHVybDogJ21haWx0bzpqbWFycm95YXZlLmNvbXBzY2lAZ21haWwuY29tJywgaWNvbjogJ2VudmVsb3BlLW8nLCBjb2xvcjogJyMwMDAnIH0sXG5dO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGxpbmtzOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJsaW5rc19kaXNhYmxlZCIsIlJlYWN0IiwiSGlkZGVuIiwid2l0aE1vZHVsZSIsIlBhZ2VDb21wb25lbnQiLCJwcm9wcyIsInhzIiwic20iLCJtZCIsImxnIiwieGwiLCJ3aWR0aCIsIkNvbXBvbmVudCIsIk5hdkxpbmsiLCJjb25zdGFudHMiLCJfTGluayIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwidG8iLCJocmVmIiwic3R5bGUiLCJleHRlcm5hbCIsImludGVybmFsIiwiaW5kZXhPZiIsImp1bXAiLCJyYWlzZWQiLCJjb2xvciIsInRhcmdldCIsInN0eWxlZCIsImNzcyIsIkZvb3RlckxpbmtzIiwiU29jaWFsTmV0d29ya3MiLCJWZXJzaW9uIiwiR3JpZENvbnRhaW5lciIsIkdyaWRJdGVtIiwiQ29yZVByb3h5IiwiQ29udGFpbmVyIiwiZGl2IiwiRm9vdGVyIiwic29jaWFsTmV0d29ya3NMaW5rcyIsImZvb3RlckxpbmtzIiwidmVyc2lvbiIsInJlbmRlclNlY3Rpb24iLCJwYWRkaW5nIiwicGFkZGluZ1RvcCIsIkxpbmsiLCJsaW5rcyIsImlkeCIsIm1hcCIsInNlY3Rpb24iLCJuYW1lIiwiaXRlbXMiLCJpdGVtIiwibGluayIsInNpemUiLCJrZXkiLCJlbmFibGUiLCJ1cmwiLCJpY29uIiwiQ29uc3RhbnRzIiwiU29jaWFsTmV0d29ya3NMaW5rcyIsIkZvb3RlckNvbXBvbmVudCIsIlZFUlNJT04iLCJfbGlua3MiLCJibG9nIiwibGFic190cmVuZHMiLCJsYWJzX21sYiIsImxhYnNfc2VhcmNoIiwia2JfYW5kcm9pZCIsIkxpbmtzIiwiYXBwIiwidHJlbmRzX3Byb3RvIiwiY3ZfcGRmIiwiaW5zdCJdLCJzb3VyY2VSb290IjoiIn0=