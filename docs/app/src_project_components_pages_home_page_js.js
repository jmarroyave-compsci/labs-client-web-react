"use strict";
(self["webpackChunkreact"] = self["webpackChunkreact"] || []).push([["src_project_components_pages_home_page_js"],{

/***/ "./src/framework/core/ui/layout/section.js":
/*!*************************************************!*\
  !*** ./src/framework/core/ui/layout/section.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proxy */ "./src/framework/core/ui/layout/proxy.js");
/* harmony import */ var _components_with_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/with-module */ "./src/framework/core/components/with-module.js");
/* harmony import */ var _components_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/error */ "./src/framework/core/components/error.js");
/* harmony import */ var _assets_css_section_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/css/section.scss */ "./src/framework/core/ui/assets/css/section.scss");
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







var LayoutSection = /*#__PURE__*/function (_React$Component) {
  _inherits(LayoutSection, _React$Component);

  var _super = _createSuper(LayoutSection);

  function LayoutSection() {
    _classCallCheck(this, LayoutSection);

    return _super.apply(this, arguments);
  }

  _createClass(LayoutSection, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          cover = _this$props.cover,
          padding = _this$props.padding,
          children = _this$props.children,
          hero = _this$props.hero;
      var height = cover === true ? "100vh" : "inherit";
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_proxy__WEBPACK_IMPORTED_MODULE_1__["default"], {
        xs: this.renderSection(children, className, height, '2rem 0rem'),
        sm: this.renderSection(children, className, height, '3rem 0rem'),
        md: this.renderSection(children, className, height, '4rem 2.5rem')
      });
    }
  }, {
    key: "renderSection",
    value: function renderSection(children, className, height, padding) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_error__WEBPACK_IMPORTED_MODULE_3__["default"], {
        from: "/core/ui/section"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "com-layout-section"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "".concat(className),
        style: {
          boxSizing: 'border-box',
          width: '100%',
          height: height,
          padding: padding
        }
      }, children)));
    }
  }]);

  return LayoutSection;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_components_with_module__WEBPACK_IMPORTED_MODULE_2__["default"])(LayoutSection));

/***/ }),

/***/ "./src/project/components/app/index.js":
/*!*********************************************!*\
  !*** ./src/project/components/app/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/project/components/app/app.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_app__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/project/components/pages/home/page-xs.js":
/*!******************************************************!*\
  !*** ./src/project/components/pages/home/page-xs.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var core_ui_layout_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/ui/layout/section */ "./src/framework/core/ui/layout/section.js");
/* harmony import */ var core_ui_layout_grid_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/ui/layout/grid_container */ "./src/framework/core/ui/layout/grid_container.js");
/* harmony import */ var core_ui_layout_grid_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/ui/layout/grid_item */ "./src/framework/core/ui/layout/grid_item.js");
/* harmony import */ var components_pages_home_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/pages/home/title */ "./src/project/components/pages/home/title.js");
/* harmony import */ var components_pages_home_dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/pages/home/dashboard */ "./src/project/components/pages/home/dashboard.js");







function PageComponent(props) {
  var data = props.data,
      loading = props.loading;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(core_ui_layout_grid_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "page-module",
    fill: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(core_ui_layout_grid_item__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fill: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(core_ui_layout_section__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "section-hero-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_pages_home_title__WEBPACK_IMPORTED_MODULE_4__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(core_ui_layout_grid_item__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fill: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(core_ui_layout_section__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "section-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_pages_home_dashboard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: data ? data.dashboard : null,
    loading: loading
  }))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageComponent);

/***/ }),

/***/ "./src/project/components/pages/home/page.js":
/*!***************************************************!*\
  !*** ./src/project/components/pages/home/page.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QRY_DASHBOARD": () => (/* binding */ QRY_DASHBOARD),
/* harmony export */   "default": () => (/* binding */ Proxy)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var core_ui_layout_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/ui/layout/proxy */ "./src/framework/core/ui/layout/proxy.js");
/* harmony import */ var components_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/app */ "./src/project/components/app/index.js");
/* harmony import */ var _page_xs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-xs */ "./src/project/components/pages/home/page-xs.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/react/hooks/useQuery.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var QRY_DASHBOARD = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  query getDashboard{ \n    dashboard {\n      actors\n      countries\n      directors\n      genres\n      lastUpdate\n      movies\n      people\n      types\n      yearsAdded\n      yearsReleased\n    }\n  }"])));
function Proxy(props) {
  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)(QRY_DASHBOARD),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  var page = props.page,
      trends = props.trends;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_app__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(core_ui_layout_proxy__WEBPACK_IMPORTED_MODULE_1__["default"], {
    xs: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_page_xs__WEBPACK_IMPORTED_MODULE_3__["default"], {
      page: page,
      data: data,
      loading: loading,
      error: error
    })
  }));
}

/***/ }),

/***/ "./src/project/components/pages/home/title.js":
/*!****************************************************!*\
  !*** ./src/project/components/pages/home/title.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var core_ui_layout_grid_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/ui/layout/grid_container */ "./src/framework/core/ui/layout/grid_container.js");
/* harmony import */ var core_ui_layout_grid_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/ui/layout/grid_item */ "./src/framework/core/ui/layout/grid_item.js");
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





var Dashboard = /*#__PURE__*/function (_React$Component) {
  _inherits(Dashboard, _React$Component);

  var _super = _createSuper(Dashboard);

  function Dashboard() {
    _classCallCheck(this, Dashboard);

    return _super.apply(this, arguments);
  }

  _createClass(Dashboard, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(core_ui_layout_grid_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
        flex: true,
        justify: "center",
        fill: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(core_ui_layout_grid_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
        xs: 12,
        fill: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "section-title"
      }, "on TV"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "section-text"
      }, "Netflix data")));
    }
  }]);

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

/***/ }),

/***/ "./src/framework/core/ui/assets/css/section.scss":
/*!*******************************************************!*\
  !*** ./src/framework/core/ui/assets/css/section.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3Byb2plY3RfY29tcG9uZW50c19wYWdlc19ob21lX3BhZ2VfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0lBRU1JOzs7Ozs7Ozs7Ozs7O1dBQ0wsa0JBQVE7QUFDUCx3QkFBb0QsS0FBS0MsS0FBekQ7QUFBQSxVQUFPQyxTQUFQLGVBQU9BLFNBQVA7QUFBQSxVQUFrQkMsS0FBbEIsZUFBa0JBLEtBQWxCO0FBQUEsVUFBeUJDLE9BQXpCLGVBQXlCQSxPQUF6QjtBQUFBLFVBQWtDQyxRQUFsQyxlQUFrQ0EsUUFBbEM7QUFBQSxVQUE0Q0MsSUFBNUMsZUFBNENBLElBQTVDO0FBQ0EsVUFBTUMsTUFBTSxHQUFJSixLQUFLLEtBQUssSUFBWCxHQUFtQixPQUFuQixHQUE2QixTQUE1QztBQUNBLDBCQUNDLGlEQUFDLDhDQUFEO0FBQ0MsVUFBRSxFQUFFLEtBQUtLLGFBQUwsQ0FBbUJILFFBQW5CLEVBQTZCSCxTQUE3QixFQUF3Q0ssTUFBeEMsRUFBZ0QsV0FBaEQsQ0FETDtBQUVDLFVBQUUsRUFBRSxLQUFLQyxhQUFMLENBQW1CSCxRQUFuQixFQUE2QkgsU0FBN0IsRUFBd0NLLE1BQXhDLEVBQWdELFdBQWhELENBRkw7QUFHQyxVQUFFLEVBQUUsS0FBS0MsYUFBTCxDQUFtQkgsUUFBbkIsRUFBNkJILFNBQTdCLEVBQXdDSyxNQUF4QyxFQUFnRCxhQUFoRDtBQUhMLFFBREQ7QUFPQTs7O1dBRUQsdUJBQWNGLFFBQWQsRUFBd0JILFNBQXhCLEVBQW1DSyxNQUFuQyxFQUEyQ0gsT0FBM0MsRUFBbUQ7QUFDbEQsMEJBQ0MsaURBQUMseURBQUQ7QUFBYyxZQUFJLEVBQUM7QUFBbkIsc0JBQ0M7QUFBSyxpQkFBUztBQUFkLHNCQUNDO0FBQUssaUJBQVMsWUFBS0YsU0FBTCxDQUFkO0FBQWdDLGFBQUssRUFBRTtBQUFDTyxVQUFBQSxTQUFTLEVBQUUsWUFBWjtBQUEwQkMsVUFBQUEsS0FBSyxFQUFFLE1BQWpDO0FBQXlDSCxVQUFBQSxNQUFNLEVBQUVBLE1BQWpEO0FBQXlESCxVQUFBQSxPQUFPLEVBQUVBO0FBQWxFO0FBQXZDLFNBQ0VDLFFBREYsQ0FERCxDQURELENBREQ7QUFTQTs7OztFQXZCMEJUOztBQTBCNUIsaUVBQWVFLG1FQUFVLENBQUNFLGFBQUQsQ0FBekI7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUNBLGlFQUFlWSw0Q0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU00sYUFBVCxDQUF3QmpCLEtBQXhCLEVBQStCO0FBQzlCLE1BQVFrQixJQUFSLEdBQTBCbEIsS0FBMUIsQ0FBUWtCLElBQVI7QUFBQSxNQUFjQyxPQUFkLEdBQTBCbkIsS0FBMUIsQ0FBY21CLE9BQWQ7QUFDQSxzQkFDQyxpREFBQyxxRUFBRDtBQUFlLGFBQVMsRUFBQyxhQUF6QjtBQUF1QyxRQUFJO0FBQTNDLGtCQUNDLGlEQUFDLGdFQUFEO0FBQVUsUUFBSTtBQUFkLGtCQUNDLGlEQUFDLDhEQUFEO0FBQVMsYUFBUyxFQUFDO0FBQW5CLGtCQUNDLGlEQUFDLG1FQUFELE9BREQsQ0FERCxDQURELGVBTUMsaURBQUMsZ0VBQUQ7QUFBVSxRQUFJO0FBQWQsa0JBQ0MsaURBQUMsOERBQUQ7QUFBUyxhQUFTLEVBQUM7QUFBbkIsa0JBQ0MsaURBQUMsdUVBQUQ7QUFBVyxRQUFJLEVBQUdELElBQUQsR0FBU0EsSUFBSSxDQUFDRSxTQUFkLEdBQTBCLElBQTNDO0FBQWlELFdBQU8sRUFBRUQ7QUFBMUQsSUFERCxDQURELENBTkQsQ0FERDtBQWNBOztBQUVELGlFQUFlRixhQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNTyxhQUFhLEdBQUdGLG1EQUFILDBSQUFuQjtBQWdCUSxTQUFTRyxLQUFULENBQWdCekIsS0FBaEIsRUFBdUI7QUFDcEMsa0JBQWlDdUIsd0RBQVEsQ0FBQ0MsYUFBRCxDQUF6QztBQUFBLE1BQVFMLE9BQVIsYUFBUUEsT0FBUjtBQUFBLE1BQWlCTyxLQUFqQixhQUFpQkEsS0FBakI7QUFBQSxNQUF3QlIsSUFBeEIsYUFBd0JBLElBQXhCOztBQUNELE1BQVFTLElBQVIsR0FBeUIzQixLQUF6QixDQUFRMkIsSUFBUjtBQUFBLE1BQWNDLE1BQWQsR0FBeUI1QixLQUF6QixDQUFjNEIsTUFBZDtBQUVBLHNCQUNHLGlEQUFDLHNEQUFELHFCQUNBLGlEQUFDLDREQUFEO0FBQ0MsTUFBRSxlQUFFLGlEQUFDLGdEQUFEO0FBQUksVUFBSSxFQUFFRCxJQUFWO0FBQWdCLFVBQUksRUFBRVQsSUFBdEI7QUFBNEIsYUFBTyxFQUFFQyxPQUFyQztBQUE4QyxXQUFLLEVBQUVPO0FBQXJEO0FBREwsSUFEQSxDQURIO0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDRDtBQUNBO0FBQ0E7O0lBRU1WOzs7Ozs7Ozs7Ozs7O1dBQ0osa0JBQVE7QUFDTiwwQkFDSSxpREFBQyxxRUFBRDtBQUFlLFlBQUksTUFBbkI7QUFBb0IsZUFBTyxFQUFDLFFBQTVCO0FBQXFDLFlBQUk7QUFBekMsc0JBQ0UsaURBQUMsZ0VBQUQ7QUFBVSxVQUFFLEVBQUUsRUFBZDtBQUFrQixZQUFJO0FBQXRCLHNCQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLGlCQURGLGVBRUUsNERBRkYsZUFHRTtBQUFLLGlCQUFTLEVBQUM7QUFBZix3QkFIRixDQURGLENBREo7QUFTRDs7OztFQVhxQnJCOztBQWN4QixpRUFBZXFCLFNBQWY7Ozs7Ozs7Ozs7O0FDbEJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QvLi9zcmMvZnJhbWV3b3JrL2NvcmUvdWkvbGF5b3V0L3NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcmVhY3QvLi9zcmMvcHJvamVjdC9jb21wb25lbnRzL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZWFjdC8uL3NyYy9wcm9qZWN0L2NvbXBvbmVudHMvcGFnZXMvaG9tZS9wYWdlLXhzLmpzIiwid2VicGFjazovL3JlYWN0Ly4vc3JjL3Byb2plY3QvY29tcG9uZW50cy9wYWdlcy9ob21lL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVhY3QvLi9zcmMvcHJvamVjdC9jb21wb25lbnRzL3BhZ2VzL2hvbWUvdGl0bGUuanMiLCJ3ZWJwYWNrOi8vcmVhY3QvLi9zcmMvZnJhbWV3b3JrL2NvcmUvdWkvYXNzZXRzL2Nzcy9zZWN0aW9uLnNjc3M/OWY1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvcmVQcm94eSBmcm9tICcuL3Byb3h5JztcbmltcG9ydCB3aXRoTW9kdWxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvd2l0aC1tb2R1bGUnO1xuaW1wb3J0IEVycm9yQm91bmRyeSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Vycm9yJztcblxuaW1wb3J0ICcuLi9hc3NldHMvY3NzL3NlY3Rpb24uc2Nzcyc7XG5cbmNsYXNzIExheW91dFNlY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IHtjbGFzc05hbWUsIGNvdmVyLCBwYWRkaW5nLCBjaGlsZHJlbiwgaGVyb30gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IGhlaWdodCA9IChjb3ZlciA9PT0gdHJ1ZSkgPyBcIjEwMHZoXCIgOiBcImluaGVyaXRcIjsgXG5cdFx0cmV0dXJuIChcblx0XHRcdDxDb3JlUHJveHkgXG5cdFx0XHRcdHhzPXt0aGlzLnJlbmRlclNlY3Rpb24oY2hpbGRyZW4sIGNsYXNzTmFtZSwgaGVpZ2h0LCAnMnJlbSAwcmVtJyl9XG5cdFx0XHRcdHNtPXt0aGlzLnJlbmRlclNlY3Rpb24oY2hpbGRyZW4sIGNsYXNzTmFtZSwgaGVpZ2h0LCAnM3JlbSAwcmVtJyl9XG5cdFx0XHRcdG1kPXt0aGlzLnJlbmRlclNlY3Rpb24oY2hpbGRyZW4sIGNsYXNzTmFtZSwgaGVpZ2h0LCAnNHJlbSAyLjVyZW0nKX1cblx0XHRcdC8+XHRcdFx0XHRcblx0XHQpO1xuXHR9XG5cblx0cmVuZGVyU2VjdGlvbihjaGlsZHJlbiwgY2xhc3NOYW1lLCBoZWlnaHQsIHBhZGRpbmcpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8RXJyb3JCb3VuZHJ5IGZyb209XCIvY29yZS91aS9zZWN0aW9uXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgY29tLWxheW91dC1zZWN0aW9uYH0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX1gfSBzdHlsZT17e2JveFNpemluZzogJ2JvcmRlci1ib3gnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6IGhlaWdodCwgcGFkZGluZzogcGFkZGluZ319PlxuXHRcdFx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvRXJyb3JCb3VuZHJ5PlxuXHRcdClcdFx0XG5cdH1cbn0gXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhNb2R1bGUoTGF5b3V0U2VjdGlvbik7IiwiaW1wb3J0IEFwcCBmcm9tICcuL2FwcCdcbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgU2VjdGlvbiBmcm9tICdjb3JlL3VpL2xheW91dC9zZWN0aW9uJztcbmltcG9ydCBHcmlkQ29udGFpbmVyIGZyb20gJ2NvcmUvdWkvbGF5b3V0L2dyaWRfY29udGFpbmVyJztcbmltcG9ydCBHcmlkSXRlbSBmcm9tICdjb3JlL3VpL2xheW91dC9ncmlkX2l0ZW0nO1xuaW1wb3J0IFRpdGxlIGZyb20gJ2NvbXBvbmVudHMvcGFnZXMvaG9tZS90aXRsZSc7XG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gJ2NvbXBvbmVudHMvcGFnZXMvaG9tZS9kYXNoYm9hcmQnO1xuXG5mdW5jdGlvbiBQYWdlQ29tcG9uZW50KCBwcm9wcyApe1xuXHRjb25zdCB7IGRhdGEsIGxvYWRpbmcgfSA9IHByb3BzXG5cdHJldHVybiAoXG5cdFx0PEdyaWRDb250YWluZXIgY2xhc3NOYW1lPVwicGFnZS1tb2R1bGVcIiBmaWxsPlxuXHRcdFx0PEdyaWRJdGVtIGZpbGw+XG5cdFx0XHRcdDxTZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24taGVyby1kYXJrXCI+XG5cdFx0XHRcdFx0PFRpdGxlLz5cblx0XHRcdFx0PC9TZWN0aW9uPlxuXHRcdFx0PC9HcmlkSXRlbT5cblx0XHRcdDxHcmlkSXRlbSBmaWxsPlxuXHRcdFx0XHQ8U2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uLTBcIj5cblx0XHRcdFx0XHQ8RGFzaGJvYXJkIGRhdGE9eyhkYXRhKSA/IGRhdGEuZGFzaGJvYXJkIDogbnVsbH0gbG9hZGluZz17bG9hZGluZ30gLz5cblx0XHRcdFx0PC9TZWN0aW9uPlxuXHRcdFx0PC9HcmlkSXRlbT5cblx0XHQ8L0dyaWRDb250YWluZXI+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZUNvbXBvbmVudDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvcmVQcm94eSBmcm9tICdjb3JlL3VpL2xheW91dC9wcm94eSc7XG5pbXBvcnQgQXBwIGZyb20gJ2NvbXBvbmVudHMvYXBwJztcbmltcG9ydCBYUyBmcm9tIFwiLi9wYWdlLXhzXCI7XG5pbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5cbmV4cG9ydCBjb25zdCBRUllfREFTSEJPQVJEID0gZ3FsYFxuICBxdWVyeSBnZXREYXNoYm9hcmR7IFxuICAgIGRhc2hib2FyZCB7XG4gICAgICBhY3RvcnNcbiAgICAgIGNvdW50cmllc1xuICAgICAgZGlyZWN0b3JzXG4gICAgICBnZW5yZXNcbiAgICAgIGxhc3RVcGRhdGVcbiAgICAgIG1vdmllc1xuICAgICAgcGVvcGxlXG4gICAgICB0eXBlc1xuICAgICAgeWVhcnNBZGRlZFxuICAgICAgeWVhcnNSZWxlYXNlZFxuICAgIH1cbiAgfWA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb3h5KCBwcm9wcyApe1xuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShRUllfREFTSEJPQVJEKTtcblx0Y29uc3QgeyBwYWdlLCB0cmVuZHMgfSA9IHByb3BzO1xuXG5cdHJldHVybiAoXG4gICAgPEFwcD5cbiAgXHRcdDxDb3JlUHJveHkgXG4gIFx0XHRcdHhzPXs8WFMgcGFnZT17cGFnZX0gZGF0YT17ZGF0YX0gbG9hZGluZz17bG9hZGluZ30gZXJyb3I9e2Vycm9yfS8+fVxuICBcdFx0Lz5cbiAgICA8L0FwcD5cblx0KVxufVx0XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tICdjb3JlL3VpL2xheW91dC9ncmlkX2NvbnRhaW5lcic7XG5pbXBvcnQgR3JpZEl0ZW0gZnJvbSAnY29yZS91aS9sYXlvdXQvZ3JpZF9pdGVtJztcblxuY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEdyaWRDb250YWluZXIgZmxleCBqdXN0aWZ5PSdjZW50ZXInIGZpbGw+XG4gICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gZmlsbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWN0aW9uLXRpdGxlJz5vbiBUVjwvZGl2PlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWN0aW9uLXRleHQnPk5ldGZsaXggZGF0YTwvZGl2PlxuICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgIDwvR3JpZENvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiUmVhY3QiLCJDb3JlUHJveHkiLCJ3aXRoTW9kdWxlIiwiRXJyb3JCb3VuZHJ5IiwiTGF5b3V0U2VjdGlvbiIsInByb3BzIiwiY2xhc3NOYW1lIiwiY292ZXIiLCJwYWRkaW5nIiwiY2hpbGRyZW4iLCJoZXJvIiwiaGVpZ2h0IiwicmVuZGVyU2VjdGlvbiIsImJveFNpemluZyIsIndpZHRoIiwiQ29tcG9uZW50IiwiQXBwIiwiU2VjdGlvbiIsIkdyaWRDb250YWluZXIiLCJHcmlkSXRlbSIsIlRpdGxlIiwiRGFzaGJvYXJkIiwiUGFnZUNvbXBvbmVudCIsImRhdGEiLCJsb2FkaW5nIiwiZGFzaGJvYXJkIiwiWFMiLCJncWwiLCJ1c2VRdWVyeSIsIlFSWV9EQVNIQk9BUkQiLCJQcm94eSIsImVycm9yIiwicGFnZSIsInRyZW5kcyJdLCJzb3VyY2VSb290IjoiIn0=