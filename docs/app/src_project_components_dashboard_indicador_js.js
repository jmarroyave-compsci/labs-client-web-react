"use strict";
(self["webpackChunkreact"] = self["webpackChunkreact"] || []).push([["src_project_components_dashboard_indicador_js"],{

/***/ "./src/framework/core/ui/number.js":
/*!*****************************************!*\
  !*** ./src/framework/core/ui/number.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_1__);



function NumberComponent(_ref) {
  var value = _ref.value;
  value = value ? value : 0;
  var num = value === '' ? '' : numeral__WEBPACK_IMPORTED_MODULE_1___default()(Number(value)).format('0a');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, num.toUpperCase());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NumberComponent);

/***/ }),

/***/ "./src/project/components/dashboard/indicador.js":
/*!*******************************************************!*\
  !*** ./src/project/components/dashboard/indicador.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_ui_number__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/ui/number */ "./src/framework/core/ui/number.js");
/* harmony import */ var _indicador_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./indicador.scss */ "./src/project/components/dashboard/indicador.scss");
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






var Indicador = /*#__PURE__*/function (_React$Component) {
  _inherits(Indicador, _React$Component);

  var _super = _createSuper(Indicador);

  function Indicador() {
    _classCallCheck(this, Indicador);

    return _super.apply(this, arguments);
  }

  _createClass(Indicador, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          data = _this$props.data,
          smaller = _this$props.smaller,
          type = _this$props.type;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "indicador"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row title",
        style: {
          textAlign: 'left'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "title"
      }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "content ".concat(smaller ? "small" : "")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, this.renderType(type, data)))));
    }
  }, {
    key: "renderType",
    value: function renderType(type, data) {
      switch (type) {
        case "number":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(core_ui_number__WEBPACK_IMPORTED_MODULE_2__["default"], {
            value: data
          });

        case "string":
          return data;
      }
    }
  }]);

  return Indicador;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Indicador);
Indicador.propTypes = {
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['number', 'string']),
  smaller: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
Indicador.defaultProps = {
  title: "title",
  data: null,
  type: "number",
  smaller: false
};

/***/ }),

/***/ "./src/project/components/dashboard/indicador.scss":
/*!*********************************************************!*\
  !*** ./src/project/components/dashboard/indicador.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3Byb2plY3RfY29tcG9uZW50c19kYXNoYm9hcmRfaW5kaWNhZG9yX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNFLGVBQVQsT0FBaUM7QUFBQSxNQUFQQyxLQUFPLFFBQVBBLEtBQU87QUFDaENBLEVBQUFBLEtBQUssR0FBSUEsS0FBRCxHQUFVQSxLQUFWLEdBQWtCLENBQTFCO0FBQ0EsTUFBTUMsR0FBRyxHQUFJRCxLQUFLLEtBQUssRUFBWCxHQUFpQixFQUFqQixHQUFzQkYsOENBQU8sQ0FBQ0ksTUFBTSxDQUFDRixLQUFELENBQVAsQ0FBUCxDQUF1QkcsTUFBdkIsQ0FBOEIsSUFBOUIsQ0FBbEM7QUFDQSxzQkFBTywrREFBT0YsR0FBRyxDQUFDRyxXQUFKLEVBQVAsQ0FBUDtBQUNBOztBQUVELGlFQUFlTCxlQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUVBOztJQUVNTzs7Ozs7Ozs7Ozs7OztXQUNKLGtCQUFTO0FBQ1Isd0JBQXFDLEtBQUtDLEtBQTFDO0FBQUEsVUFBTUMsS0FBTixlQUFNQSxLQUFOO0FBQUEsVUFBYUMsSUFBYixlQUFhQSxJQUFiO0FBQUEsVUFBbUJDLE9BQW5CLGVBQW1CQSxPQUFuQjtBQUFBLFVBQTRCQyxJQUE1QixlQUE0QkEsSUFBNUI7QUFFQywwQkFDQztBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRztBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUEyQixhQUFLLEVBQUU7QUFBQ0MsVUFBQUEsU0FBUyxFQUFFO0FBQVo7QUFBbEMsc0JBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FBd0JKLEtBQXhCLENBREYsQ0FESCxlQUlHO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFO0FBQUssaUJBQVMsb0JBQWNFLE9BQUQsR0FBWSxPQUFaLEdBQXNCLEVBQW5DO0FBQWQsc0JBQ0UsOERBQU0sS0FBS0csVUFBTCxDQUFpQkYsSUFBakIsRUFBdUJGLElBQXZCLENBQU4sQ0FERixDQURGLENBSkgsQ0FERDtBQVlEOzs7V0FFRCxvQkFBWUUsSUFBWixFQUFrQkYsSUFBbEIsRUFBd0I7QUFDdEIsY0FBT0UsSUFBUDtBQUNFLGFBQUssUUFBTDtBQUNFLDhCQUFPLGlEQUFDLHNEQUFEO0FBQVEsaUJBQUssRUFBRUY7QUFBZixZQUFQOztBQUNGLGFBQUssUUFBTDtBQUNFLGlCQUFPQSxJQUFQO0FBSko7QUFNRDs7OztFQXpCcUJaOztBQTRCeEIsaUVBQWVTLFNBQWY7QUFFQUEsU0FBUyxDQUFDUyxTQUFWLEdBQXNCO0FBQ3BCUCxFQUFBQSxLQUFLLEVBQUVILDBEQURhO0FBRXBCTSxFQUFBQSxJQUFJLEVBQUVOLHVEQUFBLENBQWdCLENBQUMsUUFBRCxFQUFXLFFBQVgsQ0FBaEIsQ0FGYztBQUdwQkssRUFBQUEsT0FBTyxFQUFFTCx3REFBY2E7QUFISCxDQUF0QjtBQU1BWixTQUFTLENBQUNhLFlBQVYsR0FBeUI7QUFDdkJYLEVBQUFBLEtBQUssRUFBRSxPQURnQjtBQUV2QkMsRUFBQUEsSUFBSSxFQUFFLElBRmlCO0FBR3ZCRSxFQUFBQSxJQUFJLEVBQUUsUUFIaUI7QUFJdkJELEVBQUFBLE9BQU8sRUFBRTtBQUpjLENBQXpCOzs7Ozs7Ozs7OztBQzFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0Ly4vc3JjL2ZyYW1ld29yay9jb3JlL3VpL251bWJlci5qcyIsIndlYnBhY2s6Ly9yZWFjdC8uL3NyYy9wcm9qZWN0L2NvbXBvbmVudHMvZGFzaGJvYXJkL2luZGljYWRvci5qcyIsIndlYnBhY2s6Ly9yZWFjdC8uL3NyYy9wcm9qZWN0L2NvbXBvbmVudHMvZGFzaGJvYXJkL2luZGljYWRvci5zY3NzP2VjMDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBudW1lcmFsIGZyb20gJ251bWVyYWwnO1xuXG5mdW5jdGlvbiBOdW1iZXJDb21wb25lbnQoe3ZhbHVlfSl7XG5cdHZhbHVlID0gKHZhbHVlKSA/IHZhbHVlIDogMDtcblx0Y29uc3QgbnVtID0gKHZhbHVlID09PSAnJykgPyAnJyA6IG51bWVyYWwoTnVtYmVyKHZhbHVlKSkuZm9ybWF0KCcwYScpO1xuXHRyZXR1cm4gPHNwYW4+e251bS50b1VwcGVyQ2FzZSgpfTwvc3Bhbj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyQ29tcG9uZW50OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IE51bWJlciBmcm9tICAnY29yZS91aS9udW1iZXInO1xuXG5pbXBvcnQgXCIuL2luZGljYWRvci5zY3NzXCI7XG5cbmNsYXNzIEluZGljYWRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgXHR2YXIgeyB0aXRsZSwgZGF0YSwgc21hbGxlciwgdHlwZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImluZGljYWRvclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB0aXRsZVwiIHN0eWxlPXt7dGV4dEFsaWduOiAnbGVmdCd9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+e3RpdGxlfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb250ZW50ICR7KHNtYWxsZXIpID8gXCJzbWFsbFwiIDogXCJcIn1gfT5cbiAgICAgICAgICAgIDxkaXY+e3RoaXMucmVuZGVyVHlwZSggdHlwZSwgZGF0YSApfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblx0XHQ8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyVHlwZSggdHlwZSwgZGF0YSApe1xuICAgIHN3aXRjaCh0eXBlKXtcbiAgICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgICAgcmV0dXJuIDxOdW1iZXIgdmFsdWU9e2RhdGF9Lz5cbiAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGljYWRvcjtcblxuSW5kaWNhZG9yLnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbJ251bWJlcicsICdzdHJpbmcnXSksXG4gIHNtYWxsZXI6IFByb3BUeXBlcy5ib29sLFxufTtcblxuSW5kaWNhZG9yLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGl0bGU6IFwidGl0bGVcIixcbiAgZGF0YTogbnVsbCxcbiAgdHlwZTogXCJudW1iZXJcIixcbiAgc21hbGxlcjogZmFsc2UsXG59O1xuXG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJSZWFjdCIsIm51bWVyYWwiLCJOdW1iZXJDb21wb25lbnQiLCJ2YWx1ZSIsIm51bSIsIk51bWJlciIsImZvcm1hdCIsInRvVXBwZXJDYXNlIiwiUHJvcFR5cGVzIiwiSW5kaWNhZG9yIiwicHJvcHMiLCJ0aXRsZSIsImRhdGEiLCJzbWFsbGVyIiwidHlwZSIsInRleHRBbGlnbiIsInJlbmRlclR5cGUiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJvbmVPZiIsImJvb2wiLCJkZWZhdWx0UHJvcHMiXSwic291cmNlUm9vdCI6IiJ9