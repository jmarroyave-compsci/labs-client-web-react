"use strict";
(self["webpackChunkreact"] = self["webpackChunkreact"] || []).push([["src_framework_core_ui_layout_grid_container_js-src_framework_core_ui_layout_grid_item_js"],{

/***/ "./src/framework/core/components/loading.js":
/*!**************************************************!*\
  !*** ./src/framework/core/components/loading.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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



var Component = /*#__PURE__*/function (_React$Component) {
  _inherits(Component, _React$Component);

  var _super = _createSuper(Component);

  function Component() {
    _classCallCheck(this, Component);

    return _super.apply(this, arguments);
  }

  _createClass(Component, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: {
          zIndex: 9999,
          position: 'absolute',
          top: '0px',
          right: '0px',
          left: '0px',
          bottom: '0px',
          backgroundColor: '#00000060'
        }
      });
    }
  }]);

  return Component;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);

/***/ }),

/***/ "./src/framework/core/components/with-module.js":
/*!******************************************************!*\
  !*** ./src/framework/core/components/with-module.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error */ "./src/framework/core/components/error.js");
/* harmony import */ var _loading_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading.js */ "./src/framework/core/components/loading.js");
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





var withModule = function withModule(ModuleComponent) {
  return /*#__PURE__*/function (_React$Component) {
    _inherits(_class, _React$Component);

    var _super = _createSuper(_class);

    function _class() {
      _classCallCheck(this, _class);

      return _super.apply(this, arguments);
    }

    _createClass(_class, [{
      key: "render",
      value: function render() {
        var title = "title" in this.props ? this.props.title : null;
        var ph = "placeholder" in this.props ? this.props.placeholder : {};
        var phW = ph.width ? ph.width : '100%';
        var phH = ph.height ? ph.height : '250';
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_error__WEBPACK_IMPORTED_MODULE_1__["default"], {
          from: title,
          style: {
            width: '100%'
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ModuleComponent, this.props));
      }
    }]);

    return _class;
  }(react__WEBPACK_IMPORTED_MODULE_0__.Component);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withModule);

/***/ }),

/***/ "./src/framework/core/ui/layout/grid_container.js":
/*!********************************************************!*\
  !*** ./src/framework/core/ui/layout/grid_container.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_with_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/with-module */ "./src/framework/core/components/with-module.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
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





var GridContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(GridContainer, _React$Component);

  var _super = _createSuper(GridContainer);

  function GridContainer() {
    _classCallCheck(this, GridContainer);

    return _super.apply(this, arguments);
  }

  _createClass(GridContainer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          direction = _this$props.direction,
          spacing = _this$props.spacing,
          className = _this$props.className,
          justify = _this$props.justify,
          alignItems = _this$props.alignItems,
          style = _this$props.style,
          flex = _this$props.flex;
      var spacing = spacing ? spacing : 0;
      style = style ? style : {};

      if (flex) {
        style.display = 'flex';
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
        container: true,
        direction: direction,
        justifyContent: justify,
        alignItems: alignItems,
        className: className,
        spacing: spacing,
        style: style
      }, this.props.children);
    }
  }]);

  return GridContainer;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_components_with_module__WEBPACK_IMPORTED_MODULE_1__["default"])(GridContainer));

/***/ }),

/***/ "./src/framework/core/ui/layout/grid_item.js":
/*!***************************************************!*\
  !*** ./src/framework/core/ui/layout/grid_item.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_with_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/with-module */ "./src/framework/core/components/with-module.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
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





var GridItem = /*#__PURE__*/function (_React$Component) {
  _inherits(GridItem, _React$Component);

  var _super = _createSuper(GridItem);

  function GridItem() {
    _classCallCheck(this, GridItem);

    return _super.apply(this, arguments);
  }

  _createClass(GridItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          visible = _this$props.visible,
          className = _this$props.className,
          xs = _this$props.xs,
          sm = _this$props.sm,
          md = _this$props.md,
          style = _this$props.style,
          fill = _this$props.fill,
          flex = _this$props.flex,
          center = _this$props.center;
      visible = visible ? visible : true;
      style = style ? style : {
        textAlign: 'inherit'
      };
      style.textAlign = center ? 'center' : style.textAlign;

      if (fill) {
        style.width = "100%";
      }

      if (flex) {
        style.flex = 1;
      }

      return visible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: className,
        item: true,
        xs: xs,
        sm: sm,
        md: md,
        style: style
      }, this.props.children);
    }
  }]);

  return GridItem;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_components_with_module__WEBPACK_IMPORTED_MODULE_1__["default"])(GridItem));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2ZyYW1ld29ya19jb3JlX3VpX2xheW91dF9ncmlkX2NvbnRhaW5lcl9qcy1zcmNfZnJhbWV3b3JrX2NvcmVfdWlfbGF5b3V0X2dyaWRfaXRlbV9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFTUM7Ozs7Ozs7Ozs7Ozs7V0FFSixrQkFBUztBQUNQLDBCQUNFO0FBQUssYUFBSyxFQUFFO0FBQUVDLFVBQUFBLE1BQU0sRUFBRSxJQUFWO0FBQWdCQyxVQUFBQSxRQUFRLEVBQUMsVUFBekI7QUFBcUNDLFVBQUFBLEdBQUcsRUFBQyxLQUF6QztBQUNKQyxVQUFBQSxLQUFLLEVBQUMsS0FERjtBQUNTQyxVQUFBQSxJQUFJLEVBQUMsS0FEZDtBQUNxQkMsVUFBQUEsTUFBTSxFQUFDLEtBRDVCO0FBRVJDLFVBQUFBLGVBQWUsRUFBQztBQUZSO0FBQVosUUFERjtBQU1EOzs7O0VBVHFCUjs7QUFheEIsaUVBQWVDLFNBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNVSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBQyxlQUFlO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLGFBRWhDLGtCQUFRO0FBQ1AsWUFBTUMsS0FBSyxHQUFJLFdBQVcsS0FBS0MsS0FBakIsR0FBMEIsS0FBS0EsS0FBTCxDQUFXRCxLQUFyQyxHQUE2QyxJQUEzRDtBQUNBLFlBQU1FLEVBQUUsR0FBSSxpQkFBaUIsS0FBS0QsS0FBdkIsR0FBZ0MsS0FBS0EsS0FBTCxDQUFXRSxXQUEzQyxHQUF5RCxFQUFwRTtBQUNBLFlBQU1DLEdBQUcsR0FBSUYsRUFBRSxDQUFDRyxLQUFKLEdBQWFILEVBQUUsQ0FBQ0csS0FBaEIsR0FBd0IsTUFBcEM7QUFDQSxZQUFNQyxHQUFHLEdBQUlKLEVBQUUsQ0FBQ0ssTUFBSixHQUFj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QUFyQztBQUF5QyxVQUFFLEVBQUVDLEVBQTdDO0FBQWlELFVBQUUsRUFBRUMsRUFBckQ7QUFBeUQsYUFBSyxFQUFFUjtBQUFoRSxTQUNFLEtBQUtkLEtBQUwsQ0FBV2lCLFFBRGIsQ0FGRjtBQU1BOzs7O0VBckJxQi9COztBQXdCdkIsaUVBQWVXLG1FQUFVLENBQUNxQixRQUFELENBQXpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QvLi9zcmMvZnJhbWV3b3JrL2NvcmUvY29tcG9uZW50cy9sb2FkaW5nLmpzIiwid2VicGFjazovL3JlYWN0Ly4vc3JjL2ZyYW1ld29yay9jb3JlL2NvbXBvbmVudHMvd2l0aC1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vcmVhY3QvLi9zcmMvZnJhbWV3b3JrL2NvcmUvdWkvbGF5b3V0L2dyaWRfY29udGFpbmVyLmpzIiwid2VicGFjazovL3JlYWN0Ly4vc3JjL2ZyYW1ld29yay9jb3JlL3VpL2xheW91dC9ncmlkX2l0ZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3tcdHpJbmRleDogOTk5OSwgcG9zaXRpb246J2Fic29sdXRlJywgdG9wOicwcHgnLCBcbiAgICAgICAgICAgICAgcmlnaHQ6JzBweCcsIGxlZnQ6JzBweCcsIGJvdHRvbTonMHB4JywgIFxuICAgICAgXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6JyMwMDAwMDA2MCd9fT5cbiAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEVycm9yQm91bmRyeSBmcm9tICcuL2Vycm9yJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vbG9hZGluZy5qcyc7XG5cbmNvbnN0IHdpdGhNb2R1bGUgPSBNb2R1bGVDb21wb25lbnQgPT5cblx0Y2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRcdHJlbmRlcigpe1xuXHRcdFx0Y29uc3QgdGl0bGUgPSAoXCJ0aXRsZVwiIGluIHRoaXMucHJvcHMpID8gdGhpcy5wcm9wcy50aXRsZSA6IG51bGw7XG5cdFx0XHRjb25zdCBwaCA9IChcInBsYWNlaG9sZGVyXCIgaW4gdGhpcy5wcm9wcykgPyB0aGlzLnByb3BzLnBsYWNlaG9sZGVyIDoge307XG5cdFx0XHRjb25zdCBwaFcgPSAocGgud2lkdGgpID8gcGgud2lkdGggOiAnMTAwJSc7XG5cdFx0XHRjb25zdCBwaEggPSAocGguaGVpZ2h0KSA/IHBoLmhlaWdodCA6ICcyNTAnO1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PEVycm9yQm91bmRyeSBmcm9tPXt0aXRsZX0gc3R5bGU9e3t3aWR0aDonMTAwJSd9fT5cblx0XHRcdFx0XHQ8TW9kdWxlQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfS8+XG5cdFx0XHRcdDwvRXJyb3JCb3VuZHJ5PlxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aE1vZHVsZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhNb2R1bGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy93aXRoLW1vZHVsZSc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcblxuY2xhc3MgR3JpZENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpe1xuXHRcdHZhciB7IGRpcmVjdGlvbiwgc3BhY2luZywgY2xhc3NOYW1lLCBqdXN0aWZ5LCBhbGlnbkl0ZW1zLCBzdHlsZSwgZmxleH0gPSB0aGlzLnByb3BzO1xuXHRcdHZhciBzcGFjaW5nID0gKHNwYWNpbmcpID8gc3BhY2luZyA6IDA7XG5cdFx0c3R5bGUgPSAoc3R5bGUpID8gc3R5bGUgOiB7fTtcblxuXHRcdGlmKGZsZXgpe1xuXHRcdFx0c3R5bGUuZGlzcGxheSA9ICdmbGV4Jztcblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249e2RpcmVjdGlvbn0ganVzdGlmeUNvbnRlbnQ9e2p1c3RpZnl9IGFsaWduSXRlbXM9e2FsaWduSXRlbXN9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBzcGFjaW5nPXtzcGFjaW5nfSBzdHlsZT17c3R5bGV9PlxuXHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn0gXG5cdFx0XHQ8L0dyaWQ+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhNb2R1bGUoR3JpZENvbnRhaW5lcik7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoTW9kdWxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvd2l0aC1tb2R1bGUnO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5cbmNsYXNzIEdyaWRJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0cmVuZGVyKCl7XG5cdFx0dmFyIHsgdmlzaWJsZSwgY2xhc3NOYW1lLCB4cywgc20sIG1kLCBzdHlsZSwgZmlsbCwgZmxleCwgY2VudGVyIH0gPSB0aGlzLnByb3BzO1xuXHRcdHZpc2libGUgPSAodmlzaWJsZSlcdD8gdmlzaWJsZSA6IHRydWU7IFxuXHRcdHN0eWxlID0gKHN0eWxlKSA/IHN0eWxlIDoge3RleHRBbGlnbjogJ2luaGVyaXQnfTtcblx0XHRzdHlsZS50ZXh0QWxpZ24gPSAoY2VudGVyKSA/ICdjZW50ZXInIDogc3R5bGUudGV4dEFsaWduO1xuXG5cdFx0aWYoZmlsbCkge1xuXHRcdFx0c3R5bGUud2lkdGggPSBcIjEwMCVcIjtcblx0XHR9XG5cblx0XHRpZihmbGV4KXtcblx0XHRcdHN0eWxlLmZsZXggPSAxO1xuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHR2aXNpYmxlICYmXG5cdFx0XHRcdDxHcmlkIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBpdGVtIHhzPXt4c30gc209e3NtfSBtZD17bWR9IHN0eWxlPXtzdHlsZX0+XG5cdFx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59IFxuXHRcdFx0XHQ8L0dyaWQ+XHRcdFx0XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhNb2R1bGUoR3JpZEl0ZW0pOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsInpJbmRleCIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJsZWZ0IiwiYm90dG9tIiwiYmFja2dyb3VuZENvbG9yIiwiRXJyb3JCb3VuZHJ5IiwiTG9hZGluZyIsIndpdGhNb2R1bGUiLCJNb2R1bGVDb21wb25lbnQiLCJ0aXRsZSIsInByb3BzIiwicGgiLCJwbGFjZWhvbGRlciIsInBoVyIsIndpZHRoIiwicGhIIiwiaGVpZ2h0IiwiR3JpZCIsIkdyaWRDb250YWluZXIiLCJkaXJlY3Rpb24iLCJzcGFjaW5nIiwiY2xhc3NOYW1lIiwianVzdGlmeSIsImFsaWduSXRlbXMiLCJzdHlsZSIsImZsZXgiLCJkaXNwbGF5IiwiY2hpbGRyZW4iLCJHcmlkSXRlbSIsInZpc2libGUiLCJ4cyIsInNtIiwibWQiLCJmaWxsIiwiY2VudGVyIiwidGV4dEFsaWduIl0sInNvdXJjZVJvb3QiOiIifQ==