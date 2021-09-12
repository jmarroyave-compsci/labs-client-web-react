"use strict";
(self["webpackChunkreact"] = self["webpackChunkreact"] || []).push([["src_project_components_pages_home_dashboard_js"],{

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

/***/ "./src/framework/core/ui/placeholder.js":
/*!**********************************************!*\
  !*** ./src/framework/core/ui/placeholder.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-content-loader */ "./node_modules/react-content-loader/dist/react-content-loader.es.js");
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






var Placeholder = /*#__PURE__*/function (_React$Component) {
  _inherits(Placeholder, _React$Component);

  var _super = _createSuper(Placeholder);

  function Placeholder() {
    _classCallCheck(this, Placeholder);

    return _super.apply(this, arguments);
  }

  _createClass(Placeholder, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          type = _this$props.type,
          grow = _this$props.grow;

      switch (type) {
        case "title":
        case "=":
        case "+":
          data = [[["="]]];
          break;

        case "text-1-line":
          data = [[["=="]]];
          break;

        case "square":
          data = [[["-", "100", "100"]]];
          break;

        case "rect4:3":
          data = [[["-", "100", "75"]]];
          break;

        case "custom":
          break;
      }

      data = this.renderPlaceholders(data);
      var style = grow ? {} : {
        width: data.width,
        height: data.height
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_content_loader__WEBPACK_IMPORTED_MODULE_2__["default"], {
        style: style,
        height: data.height,
        width: data.width,
        speed: 2,
        primaryColor: "#f3f3f3",
        secondaryColor: "#bcbcbc"
      }, data.phs.map(function (item) {
        return item;
      }));
    }
  }, {
    key: "renderPlaceholders",
    value: function renderPlaceholders(data) {
      var width = 0;
      var ph,
          phs = [];
      var y = 0;

      var _ph;

      var key = 0;
      var pad = 4;
      var block = {
        h: 20,
        w: 100
      };

      for (var i = 0; i < data.length; i++) {
        var row = data[i];
        var x = 0,
            h = 0,
            maxH = 0;

        for (var j = 0; j < row.length; j++) {
          ph = row[j];
          ph[1] = parseInt(ph[1]);
          ph[2] = parseInt(ph[2]);

          switch (ph[0]) {
            case "o":
              _ph = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
                key: key++,
                x: x,
                y: y,
                rx: "0",
                ry: "0",
                width: ph[1],
                height: ph[2]
              });
              x += ph[1] + (i + 1 < data.length && i > 0 ? pad : 0);
              h = ph[2];
              break;

            case "=":
            case "==":
              _ph = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
                key: key++,
                x: x,
                y: y,
                rx: "0",
                ry: "0",
                width: block.w * ph[0].length,
                height: block.h
              });
              x += block.w * ph[0].length + (i + 1 < data.length && i > 0 ? pad : 0);
              h = block.h;
              break;

            case "-":
            default:
              _ph = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
                key: key++,
                x: x,
                y: y,
                rx: "0",
                ry: "0",
                width: ph[1],
                height: ph[2]
              });
              x += ph[1] + (i + 1 < data.length && i > 0 ? pad : 0);
              h = ph[2];
              break;
          }

          width = x > width ? x : width;
          maxH = h > maxH ? h : maxH;
          phs.push(_ph);
        }

        y += maxH + (j + 1 < row.length && j > 0 ? pad : 0);
      }

      return {
        height: y,
        width: width,
        phs: phs
      };
    }
  }]);

  return Placeholder;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

Placeholder.propTypes = {
  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  type: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  grow: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
Placeholder.defaultProps = {
  type: 'custom',
  grow: true
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Placeholder);

/***/ }),

/***/ "./src/project/components/charts/tree_map.js":
/*!***************************************************!*\
  !*** ./src/project/components/charts/tree_map.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_d3_treemap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-d3-treemap */ "./node_modules/react-d3-treemap/dist/react.d3.treemap.js");
/* harmony import */ var react_d3_treemap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_d3_treemap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_d3_treemap_dist_react_d3_treemap_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-d3-treemap/dist/react.d3.treemap.css */ "./node_modules/react-d3-treemap/dist/react.d3.treemap.css");
/* harmony import */ var js_convert_case__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-convert-case */ "./node_modules/js-convert-case/index.js");
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







var TreeMap = /*#__PURE__*/function (_React$Component) {
  _inherits(TreeMap, _React$Component);

  var _super = _createSuper(TreeMap);

  function TreeMap(props) {
    var _this;

    _classCallCheck(this, TreeMap);

    _this = _super.call(this, props);
    _this.state = {
      width: 100,
      data: {},
      dataRef: null
    };
    _this.ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createRef();
    return _this;
  }

  _createClass(TreeMap, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var width = this.ref.current ? this.ref.current.offsetWidth : this.state.width;

      if (width !== this.state.width) {
        this.setState({
          width: width
        });
      }

      var data = this.props.data;

      if (JSON.stringify(this.props.data) !== JSON.stringify(this.state.dataRef)) {
        this.setState({
          data: this.parseMapToData(this.props.title, data),
          dataRef: data
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          loading = _this$props.loading,
          error = _this$props.error,
          title = _this$props.title;
      var _this$state = this.state,
          data = _this$state.data,
          width = _this$state.width;
      if (loading || !data.children) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Loading...");
      if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Error ", error.toString());
      if (!data) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "no data");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "___",
        ref: this.ref
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_d3_treemap__WEBPACK_IMPORTED_MODULE_2___default()), {
        id: "myTreeMap",
        width: width,
        height: (width * 0.5).toFixed(0),
        data: data,
        levelsToDisplay: 1,
        nodeStyle: {
          paddingLeft: 5,
          paddingRight: 5
        }
      }));
    }
  }, {
    key: "parseMapToData",
    value: function parseMapToData(title, data) {
      if (!data) return null;
      var resp = [];
      var ranges = [10, 25, 100];
      var others = {};
      Object.keys(data).forEach(function (c) {
        var value = data[c];
        var obj = {
          name: c.startsWith("_") ? c.substring(1) : js_convert_case__WEBPACK_IMPORTED_MODULE_4__["default"].toHeaderCase(c),
          value: value
        };

        for (var i = 0; i < ranges.length; i++) {
          var range = ranges[i];
          if (value > range) continue;
          if (!others[range]) others[range] = {
            name: "".concat(i === 0 ? 1 : ranges[i - 1] + 1, "-").concat(range),
            value: 0,
            children: []
          };
          others[range].children.push(obj);
          return;
        }

        resp.push(obj);
      });
      Object.keys(others).forEach(function (k) {
        resp.push(others[k]);
      });
      return {
        name: title,
        children: resp
      };
    }
  }]);

  return TreeMap;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

TreeMap.propTypes = {
  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
TreeMap.defaultProps = {
  data: {},
  title: "title"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TreeMap);

/***/ }),

/***/ "./src/project/components/dashboard/countries.js":
/*!*******************************************************!*\
  !*** ./src/project/components/dashboard/countries.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Countries)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_charts_tree_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/charts/tree_map */ "./src/project/components/charts/tree_map.js");



var title = "by Country";
function Countries(params) {
  var loading = params.loading,
      error = params.error,
      data = params.data,
      format = params.format;
  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Loading...");
  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Error ", error.toString());
  if (!data || data.length === 0) return "NO DATA";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, format === "text" && renderText(data), format === "graph" && renderGraph(title, data));
}

function renderText(data) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, Object.keys(data).map(function (country, idxc) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: idxc
    }, " ", country, " : ", data[country], " ");
  }))));
}

function renderGraph(title, data) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_charts_tree_map__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: title,
    data: data
  });
}

Countries.propTypes = {
  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  format: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['text', 'graph'])
};
Countries.defaultProps = {
  data: {},
  format: "text"
};

/***/ }),

/***/ "./src/project/components/dashboard/genres.js":
/*!****************************************************!*\
  !*** ./src/project/components/dashboard/genres.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Genres)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_charts_tree_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/charts/tree_map */ "./src/project/components/charts/tree_map.js");



var title = "by Genre";
function Genres(params) {
  var loading = params.loading,
      error = params.error,
      data = params.data,
      format = params.format;
  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Loading...");
  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Error ", error.toString());
  if (!data || data.length === 0) return "NO DATA";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, format === "text" && renderText(data), format === "graph" && renderGraph(title, data));
}

function renderText(data) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, " Movies by country"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, Object.keys(data).map(function (country, idxc) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: idxc
    }, " ", country, " : ", data[country], " ");
  }))));
}

function renderGraph(title, data) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_charts_tree_map__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: title,
    data: data
  });
}

Genres.propTypes = {
  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  format: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['text', 'graph'])
};
Genres.defaultProps = {
  data: {},
  format: "text"
};

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

/***/ "./src/project/components/dashboard/types.js":
/*!***************************************************!*\
  !*** ./src/project/components/dashboard/types.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Countries)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_charts_tree_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/charts/tree_map */ "./src/project/components/charts/tree_map.js");



var title = "by Type";
function Countries(params) {
  var loading = params.loading,
      error = params.error,
      data = params.data,
      format = params.format;
  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Loading...");
  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Error ", error.toString());
  if (!data || data.length === 0) return "NO DATA";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, format === "text" && renderText(data), format === "graph" && renderGraph(title, data));
}

function renderText(data) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, " Movies by country"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, Object.keys(data).map(function (country, idxc) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: idxc
    }, " ", country, " : ", data[country], " ");
  }))));
}

function renderGraph(title, data) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_charts_tree_map__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: title,
    data: data
  });
}

Countries.propTypes = {
  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  format: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['text', 'graph'])
};
Countries.defaultProps = {
  data: {},
  format: "text"
};

/***/ }),

/***/ "./src/project/components/dashboard/years_added.js":
/*!*********************************************************!*\
  !*** ./src/project/components/dashboard/years_added.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Countries)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_charts_tree_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/charts/tree_map */ "./src/project/components/charts/tree_map.js");



var title = "by Year Added";
function Countries(params) {
  var loading = params.loading,
      error = params.error,
      data = params.data,
      format = params.format;
  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Loading...");
  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Error ", error.toString());
  if (!data || data.length === 0) return "NO DATA";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, format === "text" && renderText(data), format === "graph" && renderGraph(title, data));
}

function renderText(data) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, " Movies by country"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, Object.keys(data).map(function (country, idxc) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: idxc
    }, " ", country, " : ", data[country], " ");
  }))));
}

function renderGraph(title, data) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_charts_tree_map__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: title,
    data: data
  });
}

Countries.propTypes = {
  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  format: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['text', 'graph'])
};
Countries.defaultProps = {
  data: {},
  format: "text"
};

/***/ }),

/***/ "./src/project/components/dashboard/years_released.js":
/*!************************************************************!*\
  !*** ./src/project/components/dashboard/years_released.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Countries)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_charts_tree_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/charts/tree_map */ "./src/project/components/charts/tree_map.js");



var title = "by Year Released";
function Countries(params) {
  var loading = params.loading,
      error = params.error,
      data = params.data,
      format = params.format;
  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Loading...");
  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Error ", error.toString());
  if (!data || data.length === 0) return "NO DATA";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, format === "text" && renderText(data), format === "graph" && renderGraph(title, data));
}

function renderText(data) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, " Movies by country"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, Object.keys(data).map(function (country, idxc) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: idxc
    }, " ", country, " : ", data[country], " ");
  }))));
}

function renderGraph(title, data) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_charts_tree_map__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: title,
    data: data
  });
}

Countries.propTypes = {
  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  format: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['text', 'graph'])
};
Countries.defaultProps = {
  data: {},
  format: "text"
};

/***/ }),

/***/ "./src/project/components/pages/home/dashboard.js":
/*!********************************************************!*\
  !*** ./src/project/components/pages/home/dashboard.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var core_ui_layout_grid_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/ui/layout/grid_container */ "./src/framework/core/ui/layout/grid_container.js");
/* harmony import */ var core_ui_layout_grid_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/ui/layout/grid_item */ "./src/framework/core/ui/layout/grid_item.js");
/* harmony import */ var core_ui_placeholder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core/ui/placeholder */ "./src/framework/core/ui/placeholder.js");
/* harmony import */ var components_dashboard_indicador__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/dashboard/indicador */ "./src/project/components/dashboard/indicador.js");
/* harmony import */ var components_dashboard_countries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/dashboard/countries */ "./src/project/components/dashboard/countries.js");
/* harmony import */ var components_dashboard_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/dashboard/types */ "./src/project/components/dashboard/types.js");
/* harmony import */ var components_dashboard_genres__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/dashboard/genres */ "./src/project/components/dashboard/genres.js");
/* harmony import */ var components_dashboard_years_released__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/dashboard/years_released */ "./src/project/components/dashboard/years_released.js");
/* harmony import */ var components_dashboard_years_added__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/dashboard/years_added */ "./src/project/components/dashboard/years_added.js");
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
      var _this$props = this.props,
          data = _this$props.data,
          loading = _this$props.loading;
      if (!data || loading) return this.renderPlaceholder();
      return this.renderContent(data);
    }
  }, {
    key: "renderContent",
    value: function renderContent(data) {
      return this.renderTemplate(data);
    }
  }, {
    key: "renderPlaceholder",
    value: function renderPlaceholder() {
      var p1 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(core_ui_placeholder__WEBPACK_IMPORTED_MODULE_3__["default"], {
        data: [[["-", "100", "100"]]]
      });
      return this.renderTemplate(p1, p1);
    }
  }, {
    key: "renderTemplate",
    value: function renderTemplate(_ref) {
      var movies = _ref.movies,
          countries = _ref.countries,
          genres = _ref.genres,
          types = _ref.types,
          yearsAdded = _ref.yearsAdded,
          yearsReleased = _ref.yearsReleased,
          people = _ref.people,
          actors = _ref.actors,
          directors = _ref.directors;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: {
          padding: '1rem'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(core_ui_layout_grid_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
        justifyContent: "center",
        fill: true,
        spacing: 8
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(core_ui_layout_grid_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
        xs: 12,
        sm: 12,
        md: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(core_ui_layout_grid_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
        justifyContent: "center",
        fill: true,
        spacing: 2
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(core_ui_layout_grid_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
        xs: 6,
        sm: 4,
        md: 3,
        lg: 2
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_dashboard_indicador__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: "movies",
        data: movies
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(core_ui_layout_grid_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
        xs: 12,
        sm: 12,
        md: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(core_ui_layout_grid_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
        justifyContent: "center",
        fill: true,
        spacing: 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(core_ui_layout_grid_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
        xs: 12,
        sm: 8,
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_dashboard_countries__WEBPACK_IMPORTED_MODULE_5__["default"], {
        data: countries,
        format: "graph"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(core_ui_layout_grid_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
        xs: 12,
        sm: 8,
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_dashboard_genres__WEBPACK_IMPORTED_MODULE_7__["default"], {
        data: genres,
        format: "graph"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(core_ui_layout_grid_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
        xs: 12,
        sm: 8,
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_dashboard_types__WEBPACK_IMPORTED_MODULE_6__["default"], {
        data: types,
        format: "graph"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(core_ui_layout_grid_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
        xs: 12,
        sm: 8,
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_dashboard_years_released__WEBPACK_IMPORTED_MODULE_8__["default"], {
        data: yearsAdded,
        format: "graph"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(core_ui_layout_grid_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
        xs: 12,
        sm: 8,
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_dashboard_years_added__WEBPACK_IMPORTED_MODULE_9__["default"], {
        data: yearsReleased,
        format: "graph"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(core_ui_layout_grid_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
        xs: 12,
        sm: 12,
        md: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(core_ui_layout_grid_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
        justifyContent: "center",
        fill: true,
        spacing: 2
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(core_ui_layout_grid_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
        xs: 6,
        sm: 4,
        md: 3,
        lg: 2
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_dashboard_indicador__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: "people",
        data: people
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(core_ui_layout_grid_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
        xs: 6,
        sm: 4,
        md: 3,
        lg: 2
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_dashboard_indicador__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: "actors",
        data: actors
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(core_ui_layout_grid_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
        xs: 6,
        sm: 4,
        md: 3,
        lg: 2
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_dashboard_indicador__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: "directors",
        data: directors
      }))))));
    }
  }]);

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

/***/ }),

/***/ "./src/project/components/dashboard/indicador.scss":
/*!*********************************************************!*\
  !*** ./src/project/components/dashboard/indicador.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/react-content-loader/dist/react-content-loader.es.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-content-loader/dist/react-content-loader.es.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "BulletList": () => (/* binding */ ReactContentLoaderBulletList),
/* harmony export */   "Code": () => (/* binding */ ReactContentLoaderCode),
/* harmony export */   "Facebook": () => (/* binding */ ReactContentLoaderFacebook),
/* harmony export */   "Instagram": () => (/* binding */ ReactContentLoaderInstagram),
/* harmony export */   "List": () => (/* binding */ ReactContentLoaderListStyle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var uid = (function () {
    return Math.random()
        .toString(36)
        .substring(6);
});

var SVG = function (_a) {
    var animate = _a.animate, backgroundColor = _a.backgroundColor, backgroundOpacity = _a.backgroundOpacity, baseUrl = _a.baseUrl, children = _a.children, foregroundColor = _a.foregroundColor, foregroundOpacity = _a.foregroundOpacity, gradientRatio = _a.gradientRatio, uniqueKey = _a.uniqueKey, interval = _a.interval, rtl = _a.rtl, speed = _a.speed, style = _a.style, title = _a.title, props = __rest(_a, ["animate", "backgroundColor", "backgroundOpacity", "baseUrl", "children", "foregroundColor", "foregroundOpacity", "gradientRatio", "uniqueKey", "interval", "rtl", "speed", "style", "title"]);
    var fixedId = uniqueKey || uid();
    var idClip = fixedId + "-diff";
    var idGradient = fixedId + "-animated-diff";
    var idAria = fixedId + "-aria";
    var rtlStyle = rtl ? { transform: 'scaleX(-1)' } : null;
    var keyTimes = "0; " + interval + "; 1";
    var dur = speed + "s";
    return ((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", __assign({ "aria-labelledby": idAria, role: "img", style: __assign(__assign({}, style), rtlStyle) }, props),
        title ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", { id: idAria }, title) : null,
        (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", { role: "presentation", x: "0", y: "0", width: "100%", height: "100%", clipPath: "url(" + baseUrl + "#" + idClip + ")", style: { fill: "url(" + baseUrl + "#" + idGradient + ")" } }),
        (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null,
            (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", { id: idClip }, children),
            (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("linearGradient", { id: idGradient },
                (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", { offset: "0%", stopColor: backgroundColor, stopOpacity: backgroundOpacity }, animate && ((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("animate", { attributeName: "offset", values: -gradientRatio + "; " + -gradientRatio + "; 1", keyTimes: keyTimes, dur: dur, repeatCount: "indefinite" }))),
                (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", { offset: "50%", stopColor: foregroundColor, stopOpacity: foregroundOpacity }, animate && ((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("animate", { attributeName: "offset", values: -gradientRatio / 2 + "; " + -gradientRatio / 2 + "; " + (1 +
                        gradientRatio / 2), keyTimes: keyTimes, dur: dur, repeatCount: "indefinite" }))),
                (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", { offset: "100%", stopColor: backgroundColor, stopOpacity: backgroundOpacity }, animate && ((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("animate", { attributeName: "offset", values: "0; 0; " + (1 + gradientRatio), keyTimes: keyTimes, dur: dur, repeatCount: "indefinite" })))))));
};
SVG.defaultProps = {
    animate: true,
    backgroundColor: '#f5f6f7',
    backgroundOpacity: 1,
    baseUrl: '',
    foregroundColor: '#eee',
    foregroundOpacity: 1,
    gradientRatio: 2,
    id: null,
    interval: 0.25,
    rtl: false,
    speed: 1.2,
    style: {},
    title: 'Loading...',
};

var ContentLoader = function (props) {
    return props.children ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SVG, __assign({}, props)) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ReactContentLoaderFacebook, __assign({}, props));
};

var ReactContentLoaderFacebook = function (props) { return ((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContentLoader, __assign({ viewBox: "0 0 476 124" }, props),
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", { x: "48", y: "8", width: "88", height: "6", rx: "3" }),
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", { x: "48", y: "26", width: "52", height: "6", rx: "3" }),
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", { x: "0", y: "56", width: "410", height: "6", rx: "3" }),
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", { x: "0", y: "72", width: "380", height: "6", rx: "3" }),
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", { x: "0", y: "88", width: "178", height: "6", rx: "3" }),
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", { cx: "20", cy: "20", r: "20" }))); };

var ReactContentLoaderInstagram = function (props) { return ((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContentLoader, __assign({ viewBox: "0 0 400 460" }, props),
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", { cx: "31", cy: "31", r: "15" }),
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", { x: "58", y: "18", rx: "2", ry: "2", width: "140", height: "10" }),
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", { x: "58", y: "34", rx: "2", ry: "2", width: "140", height: "10" }),
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", { x: "0", y: "60", rx: "2", ry: "2", width: "400", height: "400" }))); };

var ReactContentLoaderCode = function (props) { return ((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContentLoader, __assign({ viewBox: "0 0 340 84" }, props),
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", { x: "0", y: "0", width: "67", height: "11", rx: "3" }),
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", { x: "76", y: "0", width: "140", height: "11", rx: "3" }),
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", { x: "127", y: "48", width: "53", height: "11", rx: "3" }),
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", { x: "187", y: "48", width: "72", height: "11", rx: "3" }),
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", { x: "18", y: "48", width: "100", height: "11", rx: "3" }),
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", { x: "0", y: "71", width: "37", height: "11", rx: "3" }),
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", { x: "18", y: "23", width: "140", height: "11", rx: "3" }),
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", { x: "166", y: "23", width: "173", height: "11", rx: "3" }))); };

var ReactContentLoaderListStyle = function (props) { return ((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContentLoader, __assign({ viewBox: "0 0 400 110" }, props),
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", { x: "0", y: "0", rx: "3", ry: "3", width: "250", height: "10" }),
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", { x: "20", y: "20", rx: "3", ry: "3", width: "220", height: "10" }),
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", { x: "20", y: "40", rx: "3", ry: "3", width: "170", height: "10" }),
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", { x: "0", y: "60", rx: "3", ry: "3", width: "250", height: "10" }),
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", { x: "20", y: "80", rx: "3", ry: "3", width: "200", height: "10" }),
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", { x: "20", y: "100", rx: "3", ry: "3", width: "80", height: "10" }))); };

var ReactContentLoaderBulletList = function (props) { return ((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContentLoader, __assign({ viewBox: "0 0 245 125" }, props),
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", { cx: "10", cy: "20", r: "8" }),
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", { x: "25", y: "15", rx: "5", ry: "5", width: "220", height: "10" }),
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", { cx: "10", cy: "50", r: "8" }),
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", { x: "25", y: "45", rx: "5", ry: "5", width: "220", height: "10" }),
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", { cx: "10", cy: "80", r: "8" }),
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", { x: "25", y: "75", rx: "5", ry: "5", width: "220", height: "10" }),
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", { cx: "10", cy: "110", r: "8" }),
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", { x: "25", y: "105", rx: "5", ry: "5", width: "220", height: "10" }))); };

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentLoader);

//# sourceMappingURL=react-content-loader.es.js.map


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3Byb2plY3RfY29tcG9uZW50c19wYWdlc19ob21lX2Rhc2hib2FyZF9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTRSxlQUFULE9BQWlDO0FBQUEsTUFBUEMsS0FBTyxRQUFQQSxLQUFPO0FBQ2hDQSxFQUFBQSxLQUFLLEdBQUlBLEtBQUQsR0FBVUEsS0FBVixHQUFrQixDQUExQjtBQUNBLE1BQU1DLEdBQUcsR0FBSUQsS0FBSyxLQUFLLEVBQVgsR0FBaUIsRUFBakIsR0FBc0JGLDhDQUFPLENBQUNJLE1BQU0sQ0FBQ0YsS0FBRCxDQUFQLENBQVAsQ0FBdUJHLE1BQXZCLENBQThCLElBQTlCLENBQWxDO0FBQ0Esc0JBQU8sK0RBQU9GLEdBQUcsQ0FBQ0csV0FBSixFQUFQLENBQVA7QUFDQTs7QUFFRCxpRUFBZUwsZUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBOztJQUVNVTs7Ozs7Ozs7Ozs7OztXQUNKLGtCQUFTO0FBQ1Isd0JBQTJCLEtBQUtDLEtBQWhDO0FBQUEsVUFBTUMsSUFBTixlQUFNQSxJQUFOO0FBQUEsVUFBWUMsSUFBWixlQUFZQSxJQUFaO0FBQUEsVUFBa0JDLElBQWxCLGVBQWtCQSxJQUFsQjs7QUFDRixjQUFPRCxJQUFQO0FBQ0MsYUFBSyxPQUFMO0FBQ0EsYUFBSyxHQUFMO0FBQ0EsYUFBSyxHQUFMO0FBQ0NELFVBQUFBLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFELENBQUQsQ0FBRCxDQUFQO0FBQ0E7O0FBQ0QsYUFBSyxhQUFMO0FBQ0NBLFVBQUFBLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBRCxDQUFQO0FBQ0E7O0FBQ0QsYUFBSyxRQUFMO0FBQ0NBLFVBQUFBLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFELEVBQU0sS0FBTixFQUFhLEtBQWIsQ0FBRCxDQUFELENBQVA7QUFD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b0RBQWEsV0FBVyxvREFBb0Q7QUFDaEYsSUFBSSxvREFBYSxXQUFXLHNEQUFzRDtBQUNsRixJQUFJLG9EQUFhLFdBQVcsdURBQXVEO0FBQ25GLElBQUksb0RBQWEsV0FBVyx1REFBdUQ7QUFDbkYsSUFBSSxvREFBYSxXQUFXLHVEQUF1RDtBQUNuRixJQUFJLG9EQUFhLFdBQVcscURBQXFEO0FBQ2pGLElBQUksb0RBQWEsV0FBVyx1REFBdUQ7QUFDbkYsSUFBSSxvREFBYSxXQUFXLHdEQUF3RDs7QUFFcEYscURBQXFELFFBQVEsb0RBQWEsMkJBQTJCLHdCQUF3QjtBQUM3SCxJQUFJLG9EQUFhLFdBQVcsOERBQThEO0FBQzFGLElBQUksb0RBQWEsV0FBVyxnRUFBZ0U7QUFDNUYsSUFBSSxvREFBYSxXQUFXLGdFQUFnRTtBQUM1RixJQUFJLG9EQUFhLFdBQVcsK0RBQStEO0FBQzNGLElBQUksb0RBQWEsV0FBVyxnRUFBZ0U7QUFDNUYsSUFBSSxvREFBYSxXQUFXLGdFQUFnRTs7QUFFNUYsc0RBQXNELFFBQVEsb0RBQWEsMkJBQTJCLHdCQUF3QjtBQUM5SCxJQUFJLG9EQUFhLGFBQWEsNEJBQTRCO0FBQzFELElBQUksb0RBQWEsV0FBVyxnRUFBZ0U7QUFDNUYsSUFBSSxvREFBYSxhQUFhLDRCQUE0QjtBQUMxRCxJQUFJLG9EQUFhLFdBQVcsZ0VBQWdFO0FBQzVGLElBQUksb0RBQWEsYUFBYSw0QkFBNEI7QUFDMUQsSUFBSSxvREFBYSxXQUFXLGdFQUFnRTtBQUM1RixJQUFJLG9EQUFhLGFBQWEsNkJBQTZCO0FBQzNELElBQUksb0RBQWEsV0FBVyxpRUFBaUU7O0FBRTdGLGlFQUFlLGFBQWEsRUFBQztBQUNnTDtBQUM3TSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0Ly4vc3JjL2ZyYW1ld29yay9jb3JlL3VpL251bWJlci5qcyIsIndlYnBhY2s6Ly9yZWFjdC8uL3NyYy9mcmFtZXdvcmsvY29yZS91aS9wbGFjZWhvbGRlci5qcyIsIndlYnBhY2s6Ly9yZWFjdC8uL3NyYy9wcm9qZWN0L2NvbXBvbmVudHMvY2hhcnRzL3RyZWVfbWFwLmpzIiwid2VicGFjazovL3JlYWN0Ly4vc3JjL3Byb2plY3QvY29tcG9uZW50cy9kYXNoYm9hcmQvY291bnRyaWVzLmpzIiwid2VicGFjazovL3JlYWN0Ly4vc3JjL3Byb2plY3QvY29tcG9uZW50cy9kYXNoYm9hcmQvZ2VucmVzLmpzIiwid2VicGFjazovL3JlYWN0Ly4vc3JjL3Byb2plY3QvY29tcG9uZW50cy9kYXNoYm9hcmQvaW5kaWNhZG9yLmpzIiwid2VicGFjazovL3JlYWN0Ly4vc3JjL3Byb2plY3QvY29tcG9uZW50cy9kYXNoYm9hcmQvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vcmVhY3QvLi9zcmMvcHJvamVjdC9jb21wb25lbnRzL2Rhc2hib2FyZC95ZWFyc19hZGRlZC5qcyIsIndlYnBhY2s6Ly9yZWFjdC8uL3NyYy9wcm9qZWN0L2NvbXBvbmVudHMvZGFzaGJvYXJkL3llYXJzX3JlbGVhc2VkLmpzIiwid2VicGFjazovL3JlYWN0Ly4vc3JjL3Byb2plY3QvY29tcG9uZW50cy9wYWdlcy9ob21lL2Rhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly9yZWFjdC8uL3NyYy9wcm9qZWN0L2NvbXBvbmVudHMvZGFzaGJvYXJkL2luZGljYWRvci5zY3NzP2VjMDEiLCJ3ZWJwYWNrOi8vcmVhY3QvLi9ub2RlX21vZHVsZXMvcmVhY3QtY29udGVudC1sb2FkZXIvZGlzdC9yZWFjdC1jb250ZW50LWxvYWRlci5lcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IG51bWVyYWwgZnJvbSAnbnVtZXJhbCc7XG5cbmZ1bmN0aW9uIE51bWJlckNvbXBvbmVudCh7dmFsdWV9KXtcblx0dmFsdWUgPSAodmFsdWUpID8gdmFsdWUgOiAwO1xuXHRjb25zdCBudW0gPSAodmFsdWUgPT09ICcnKSA/ICcnIDogbnVtZXJhbChOdW1iZXIodmFsdWUpKS5mb3JtYXQoJzBhJyk7XG5cdHJldHVybiA8c3Bhbj57bnVtLnRvVXBwZXJDYXNlKCl9PC9zcGFuPlxufVxuXG5leHBvcnQgZGVmYXVsdCBOdW1iZXJDb21wb25lbnQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENvbnRlbnRMb2FkZXIgZnJvbSAncmVhY3QtY29udGVudC1sb2FkZXInXG5cbmNsYXNzIFBsYWNlaG9sZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICBcdHZhciB7IGRhdGEsIHR5cGUsIGdyb3cgfSA9IHRoaXMucHJvcHM7XG5cdHN3aXRjaCh0eXBlKXtcblx0XHRjYXNlIFwidGl0bGVcIjpcblx0XHRjYXNlIFwiPVwiOlxuXHRcdGNhc2UgXCIrXCI6XG5cdFx0XHRkYXRhID0gW1tbXCI9XCJdXV07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIFwidGV4dC0xLWxpbmVcIjpcblx0XHRcdGRhdGEgPSBbW1tcIj09XCJdXV07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIFwic3F1YXJlXCI6XG5cdFx0XHRkYXRhID0gW1tbXCItXCIsIFwiMTAwXCIsIFwiMTAwXCJdXV07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIFwicmVjdDQ6M1wiOlxuXHRcdFx0ZGF0YSA9IFtbW1wiLVwiLCBcIjEwMFwiLCBcIjc1XCJdXV07XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIFwiY3VzdG9tXCI6XG5cdFx0XHRicmVhaztcblx0fVxuXG4gIFx0ZGF0YSA9IHRoaXMucmVuZGVyUGxhY2Vob2xkZXJzKGRhdGEpO1xuICBcdGNvbnN0IHN0eWxlID0gKGdyb3cpID8ge30gOiB7d2lkdGg6IGRhdGEud2lkdGgsIGhlaWdodDogZGF0YS5oZWlnaHR9O1xuICAgIHJldHVybiAoXG5cdFx0PENvbnRlbnRMb2FkZXIgc3R5bGU9e3N0eWxlfVxuXHRcdFx0aGVpZ2h0PXtkYXRhLmhlaWdodH1cblx0XHRcdHdpZHRoPXtkYXRhLndpZHRofVxuXHRcdFx0c3BlZWQ9ezJ9XG5cdFx0XHRwcmltYXJ5Q29sb3I9XCIjZjNmM2YzXCJcblx0XHRcdHNlY29uZGFyeUNvbG9yPVwiI2JjYmNiY1wiPlxuXHRcdFx0e2RhdGEucGhzLm1hcChpdGVtID0+IGl0ZW0pfVxuXHRcdDwvQ29udGVudExvYWRlcj5cdFx0XHRcbiAgICApO1xuICB9XG5cbiAgcmVuZGVyUGxhY2Vob2xkZXJzKGRhdGEpe1xuICBcdHZhciB3aWR0aCA9IDA7XG4gIFx0dmFyIHBoLCBwaHMgPSBbXTtcblx0dmFyIHkgPSAwO1xuXHR2YXIgX3BoO1xuXHR2YXIga2V5ID0gMDtcblx0XG5cdHZhciBwYWQgPSA0XG5cdHZhciBibG9jayA9IHtoOiAyMCwgdzogMTAwfVxuXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKXtcblx0XHR2YXIgcm93ID0gZGF0YVtpXTtcblx0XHR2YXIgeCA9IDAsIGggPSAwLCBtYXhIID0gMDtcblx0XHRmb3IodmFyIGogPSAwOyBqIDwgcm93Lmxlbmd0aDsgaisrKXtcdFx0XHRcblx0XHRcdHBoID0gcm93W2pdO1xuXHRcdFx0cGhbMV0gPSBwYXJzZUludChwaFsxXSk7XG5cdFx0XHRwaFsyXSA9IHBhcnNlSW50KHBoWzJdKTtcblx0XHRcdHN3aXRjaChwaFswXSl7XG5cdFx0XHRcdGNhc2UgXCJvXCI6XG5cdFx0XHRcdFx0X3BoID0gPHJlY3Qga2V5PXtrZXkrK30geD17eH0geT17eX0gcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9e3BoWzFdfSBoZWlnaHQ9e3BoWzJdfSAvPjtcblx0XHRcdFx0XHR4ICs9IHBoWzFdICsgKCgoaSArIDEpIDwgZGF0YS5sZW5ndGggJiYgaSA+IDApID8gcGFkIDogMCk7XG5cdFx0XHRcdFx0aCA9IHBoWzJdO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiPVwiOlx0XHRcdFx0XG5cdFx0XHRcdGNhc2UgXCI9PVwiOlx0XHRcdFx0XG5cdFx0XHRcdFx0X3BoID0gPHJlY3Qga2V5PXtrZXkrK30geD17eH0geT17eX0gcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9e2Jsb2NrLncgKiBwaFswXS5sZW5ndGh9IGhlaWdodD17YmxvY2suaH0gLz47XG5cdFx0XHRcdFx0eCArPSAoYmxvY2sudyAqIHBoWzBdLmxlbmd0aCkgKyAoKChpICsgMSkgPCBkYXRhLmxlbmd0aCAmJiBpID4gMCkgPyBwYWQgOiAwKTtcblx0XHRcdFx0XHRoID0gYmxvY2suaDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcIi1cIjpcdFx0XHRcdFxuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdF9waCA9IDxyZWN0IGtleT17a2V5Kyt9IHg9e3h9IHk9e3l9IHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPXtwaFsxXX0gaGVpZ2h0PXtwaFsyXX0gLz47XG5cdFx0XHRcdFx0eCArPSBwaFsxXSArICgoKGkgKyAxKSA8IGRhdGEubGVuZ3RoICYmIGkgPiAwKSA/IHBhZCA6IDApO1xuXHRcdFx0XHRcdGggPSBwaFsyXTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdHdpZHRoID0gKHggPiB3aWR0aCkgPyB4IDogd2lkdGg7XG5cdFx0XHRtYXhIID0gKGggPiBtYXhIKSA/IGggOiBtYXhIO1xuXHRcdFx0cGhzLnB1c2goX3BoKTtcblx0XHR9XG5cdFx0eSArPSBtYXhIICsgKCgoaiArIDEpIDwgcm93Lmxlbmd0aCAmJiBqID4gMCkgPyBwYWQgOiAwKTtcblx0fVxuXHRyZXR1cm4ge2hlaWdodDogeSwgd2lkdGg6IHdpZHRoLCBwaHM6IHBoc307XG4gIH1cblxufVxuXG5QbGFjZWhvbGRlci5wcm9wVHlwZXMgPSB7XG5cdGRhdGE6IFByb3BUeXBlcy5hcnJheSxcblx0dHlwZTogUHJvcFR5cGVzLnN0cmluZyxcblx0Z3JvdzogUHJvcFR5cGVzLmJvb2wsXG59XG5cblBsYWNlaG9sZGVyLmRlZmF1bHRQcm9wcyA9IHtcblx0dHlwZTogJ2N1c3RvbScsXG5cdGdyb3c6IHRydWUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGFjZWhvbGRlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBSRFRyZWVNYXAgfSAgZnJvbSBcInJlYWN0LWQzLXRyZWVtYXBcIjtcbmltcG9ydCBcInJlYWN0LWQzLXRyZWVtYXAvZGlzdC9yZWFjdC5kMy50cmVlbWFwLmNzc1wiO1xuaW1wb3J0IGNvbnZlcnRDYXNlIGZyb20gJ2pzLWNvbnZlcnQtY2FzZSc7XG5cbmNsYXNzIFRyZWVNYXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgd2lkdGg6IDEwMCxcbiAgICAgIGRhdGE6IHt9LFxuICAgICAgZGF0YVJlZjogbnVsbCxcbiAgICB9O1xuXG4gICAgdGhpcy5yZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpe1xuICAgIHZhciB3aWR0aCA9IHRoaXMucmVmLmN1cnJlbnQgPyB0aGlzLnJlZi5jdXJyZW50Lm9mZnNldFdpZHRoIDogdGhpcy5zdGF0ZS53aWR0aDtcblxuICAgIGlmKCB3aWR0aCAhPT0gdGhpcy5zdGF0ZS53aWR0aCl7XG4gICAgICB0aGlzLnNldFN0YXRlKHt3aWR0aDogd2lkdGh9KSAgXG4gICAgfVxuXG4gICAgdmFyIGRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG4gICAgaWYoIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuZGF0YSkgIT09IEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUuZGF0YVJlZikgKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6IHRoaXMucGFyc2VNYXBUb0RhdGEodGhpcy5wcm9wcy50aXRsZSwgZGF0YSksIGRhdGFSZWY6IGRhdGF9KVxuICAgIH1cbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIHRpdGxlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgZGF0YSwgd2lkdGggfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAobG9hZGluZyB8fCAhZGF0YS5jaGlsZHJlbiApIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvciB7IGVycm9yLnRvU3RyaW5nKCkgfTwvcD47XG4gICAgaWYgKCFkYXRhKSByZXR1cm4gPHA+bm8gZGF0YTwvcD5cblxuICAgIHJldHVybiA8ZGl2IGlkPVwiX19fXCIgcmVmPXt0aGlzLnJlZn0+XG4gICAgICAgIDxSRFRyZWVNYXAgIFxuICAgICAgICAgIGlkPVwibXlUcmVlTWFwXCJcbiAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgaGVpZ2h0PXsod2lkdGggKiAwLjUpLnRvRml4ZWQoMCl9XG4gICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICBsZXZlbHNUb0Rpc3BsYXk9ezF9XG4gICAgICAgICAgbm9kZVN0eWxlPXt7IHBhZGRpbmdMZWZ0OiA1LCBwYWRkaW5nUmlnaHQ6IDUgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PjtcbiAgfVxuXG4gIHBhcnNlTWFwVG9EYXRhKCB0aXRsZSwgZGF0YSApe1xuICAgIGlmKCFkYXRhKSByZXR1cm4gbnVsbFxuXG4gICAgdmFyIHJlc3AgPSBbXTtcbiAgICB2YXIgcmFuZ2VzID0gWyAxMCwgMjUsIDEwMCBdXG4gICAgdmFyIG90aGVycyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goIGMgPT4ge1xuICAgICAgdmFyIHZhbHVlID0gZGF0YVtjXTtcbiAgICAgIHZhciBvYmogPSB7IG5hbWU6IChjLnN0YXJ0c1dpdGgoXCJfXCIpID8gYy5zdWJzdHJpbmcoMSkgOiBjb252ZXJ0Q2FzZS50b0hlYWRlckNhc2UoYykgKSAsIHZhbHVlOiB2YWx1ZSB9O1xuICAgICAgZm9yKCB2YXIgaSA9IDA7IGkgPCByYW5nZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICB2YXIgcmFuZ2UgPSByYW5nZXNbaV07XG4gICAgICAgIGlmKCB2YWx1ZSA+IHJhbmdlICkgY29udGludWU7XG4gICAgICAgIGlmKCAhb3RoZXJzW3JhbmdlXSApIG90aGVyc1tyYW5nZV0gPSB7IG5hbWU6IGAkeyhpID09PSAwKSA/IDEgOiByYW5nZXNbaSAtIDFdICsgMX0tJHtyYW5nZX1gLCB2YWx1ZTogMCwgY2hpbGRyZW46IFtdIH07XG4gICAgICAgIG90aGVyc1tyYW5nZV0uY2hpbGRyZW4ucHVzaCggb2JqICk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHJlc3AucHVzaCggb2JqIClcbiAgICB9KVxuXG4gICAgT2JqZWN0LmtleXMob3RoZXJzKS5mb3JFYWNoKCBrID0+IHtcbiAgICAgIHJlc3AucHVzaCAoIG90aGVyc1trXSApICBcbiAgICB9KVxuICAgIFxuICAgIHJldHVybiB7IG5hbWU6IHRpdGxlLCBjaGlsZHJlbjogcmVzcCB9O1xuICB9XG5cbn1cblxuXG5UcmVlTWFwLnByb3BUeXBlcyA9IHtcbiAgZGF0YTogUHJvcFR5cGVzLm9iamVjdCxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5UcmVlTWFwLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGF0YToge30sXG4gIHRpdGxlOiBcInRpdGxlXCIsXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFRyZWVNYXA7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgVHJlZU1hcCBmcm9tIFwiY29tcG9uZW50cy9jaGFydHMvdHJlZV9tYXBcIjtcblxuY29uc3QgdGl0bGUgPSBcImJ5IENvdW50cnlcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3VudHJpZXMoIHBhcmFtcyApe1xuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhLCBmb3JtYXQgfSA9IHBhcmFtcztcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+RXJyb3IgeyBlcnJvci50b1N0cmluZygpIH08L3A+O1xuXG4gIGlmICghZGF0YSB8fCBkYXRhLmxlbmd0aCA9PT0gMCkgcmV0dXJuIFwiTk8gREFUQVwiO1xuICBcbiAgcmV0dXJuIDxkaXY+XG4gICAgeyhmb3JtYXQgPT09IFwidGV4dFwiKSAmJiByZW5kZXJUZXh0KCBkYXRhICl9XG4gICAgeyhmb3JtYXQgPT09IFwiZ3JhcGhcIikgJiYgcmVuZGVyR3JhcGgoIHRpdGxlLCBkYXRhICl9XG4gIDwvZGl2Pjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVGV4dCggZGF0YSApe1xuICByZXR1cm4gPD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDx1bD4gXG4gICAgICAgIHsgT2JqZWN0LmtleXMoZGF0YSkubWFwKCAoY291bnRyeSwgaWR4YyApID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpZHhjfT4geyBjb3VudHJ5IH0gOiB7ZGF0YVtjb3VudHJ5XX0gPC9saT5cbiAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbn1cblxuZnVuY3Rpb24gcmVuZGVyR3JhcGgoIHRpdGxlLCBkYXRhICl7XG4gIHJldHVybiA8VHJlZU1hcCB0aXRsZT17dGl0bGV9IGRhdGE9e2RhdGF9Lz5cbn1cblxuQ291bnRyaWVzLnByb3BUeXBlcyA9IHtcbiAgZGF0YTogUHJvcFR5cGVzLm9iamVjdCxcbiAgZm9ybWF0OiBQcm9wVHlwZXMub25lT2YoWyd0ZXh0JywgJ2dyYXBoJ10pLFxufTtcblxuQ291bnRyaWVzLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGF0YToge30sXG4gIGZvcm1hdDogXCJ0ZXh0XCIsXG59O1xuXG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFRyZWVNYXAgZnJvbSBcImNvbXBvbmVudHMvY2hhcnRzL3RyZWVfbWFwXCI7XG5cbmNvbnN0IHRpdGxlID0gXCJieSBHZW5yZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdlbnJlcyggcGFyYW1zICl7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEsIGZvcm1hdCB9ID0gcGFyYW1zO1xuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvciB7IGVycm9yLnRvU3RyaW5nKCkgfTwvcD47XG5cbiAgaWYgKCFkYXRhIHx8IGRhdGEubGVuZ3RoID09PSAwKSByZXR1cm4gXCJOTyBEQVRBXCI7XG4gIFxuICByZXR1cm4gPGRpdj5cbiAgICB7KGZvcm1hdCA9PT0gXCJ0ZXh0XCIpICYmIHJlbmRlclRleHQoIGRhdGEgKX1cbiAgICB7KGZvcm1hdCA9PT0gXCJncmFwaFwiKSAmJiByZW5kZXJHcmFwaCggdGl0bGUsIGRhdGEgKX1cbiAgPC9kaXY+O1xufVxuXG5mdW5jdGlvbiByZW5kZXJUZXh0KCBkYXRhICl7XG4gIHJldHVybiA8PlxuICAgICAgPHA+IE1vdmllcyBieSBjb3VudHJ5PC9wPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHVsPiBcbiAgICAgICAgeyBPYmplY3Qua2V5cyhkYXRhKS5tYXAoIChjb3VudHJ5LCBpZHhjICkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2lkeGN9PiB7IGNvdW50cnkgfSA6IHtkYXRhW2NvdW50cnldfSA8L2xpPlxuICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxufVxuXG5mdW5jdGlvbiByZW5kZXJHcmFwaCggdGl0bGUsIGRhdGEgKXtcbiAgcmV0dXJuIDxUcmVlTWFwIHRpdGxlPXt0aXRsZX0gZGF0YT17ZGF0YX0vPlxufVxuXG5HZW5yZXMucHJvcFR5cGVzID0ge1xuICBkYXRhOiBQcm9wVHlwZXMub2JqZWN0LFxuICBmb3JtYXQ6IFByb3BUeXBlcy5vbmVPZihbJ3RleHQnLCAnZ3JhcGgnXSksXG59O1xuXG5HZW5yZXMuZGVmYXVsdFByb3BzID0ge1xuICBkYXRhOiB7fSxcbiAgZm9ybWF0OiBcInRleHRcIixcbn07XG5cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgTnVtYmVyIGZyb20gICdjb3JlL3VpL251bWJlcic7XG5cbmltcG9ydCBcIi4vaW5kaWNhZG9yLnNjc3NcIjtcblxuY2xhc3MgSW5kaWNhZG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICBcdHZhciB7IHRpdGxlLCBkYXRhLCBzbWFsbGVyLCB0eXBlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICBcdDxkaXYgY2xhc3NOYW1lPVwiaW5kaWNhZG9yXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHRpdGxlXCIgc3R5bGU9e3t0ZXh0QWxpZ246ICdsZWZ0J319PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj57dGl0bGV9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbnRlbnQgJHsoc21hbGxlcikgPyBcInNtYWxsXCIgOiBcIlwifWB9PlxuICAgICAgICAgICAgPGRpdj57dGhpcy5yZW5kZXJUeXBlKCB0eXBlLCBkYXRhICl9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXHRcdDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXJUeXBlKCB0eXBlLCBkYXRhICl7XG4gICAgc3dpdGNoKHR5cGUpe1xuICAgICAgY2FzZSBcIm51bWJlclwiOlxuICAgICAgICByZXR1cm4gPE51bWJlciB2YWx1ZT17ZGF0YX0vPlxuICAgICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kaWNhZG9yO1xuXG5JbmRpY2Fkb3IucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFsnbnVtYmVyJywgJ3N0cmluZyddKSxcbiAgc21hbGxlcjogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5JbmRpY2Fkb3IuZGVmYXVsdFByb3BzID0ge1xuICB0aXRsZTogXCJ0aXRsZVwiLFxuICBkYXRhOiBudWxsLFxuICB0eXBlOiBcIm51bWJlclwiLFxuICBzbWFsbGVyOiBmYWxzZSxcbn07XG5cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgVHJlZU1hcCBmcm9tIFwiY29tcG9uZW50cy9jaGFydHMvdHJlZV9tYXBcIjtcblxuY29uc3QgdGl0bGUgPSBcImJ5IFR5cGVcIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvdW50cmllcyggcGFyYW1zICl7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEsIGZvcm1hdCB9ID0gcGFyYW1zO1xuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvciB7IGVycm9yLnRvU3RyaW5nKCkgfTwvcD47XG5cbiAgaWYgKCFkYXRhIHx8IGRhdGEubGVuZ3RoID09PSAwKSByZXR1cm4gXCJOTyBEQVRBXCI7XG4gIFxuICByZXR1cm4gPGRpdj5cbiAgICB7KGZvcm1hdCA9PT0gXCJ0ZXh0XCIpICYmIHJlbmRlclRleHQoIGRhdGEgKX1cbiAgICB7KGZvcm1hdCA9PT0gXCJncmFwaFwiKSAmJiByZW5kZXJHcmFwaCggdGl0bGUsIGRhdGEgKX1cbiAgPC9kaXY+O1xufVxuXG5mdW5jdGlvbiByZW5kZXJUZXh0KCBkYXRhICl7XG4gIHJldHVybiA8PlxuICAgICAgPHA+IE1vdmllcyBieSBjb3VudHJ5PC9wPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHVsPiBcbiAgICAgICAgeyBPYmplY3Qua2V5cyhkYXRhKS5tYXAoIChjb3VudHJ5LCBpZHhjICkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2lkeGN9PiB7IGNvdW50cnkgfSA6IHtkYXRhW2NvdW50cnldfSA8L2xpPlxuICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxufVxuXG5mdW5jdGlvbiByZW5kZXJHcmFwaCggdGl0bGUsIGRhdGEgKXtcbiAgcmV0dXJuIDxUcmVlTWFwIHRpdGxlPXt0aXRsZX0gZGF0YT17ZGF0YX0vPlxufVxuXG5Db3VudHJpZXMucHJvcFR5cGVzID0ge1xuICBkYXRhOiBQcm9wVHlwZXMub2JqZWN0LFxuICBmb3JtYXQ6IFByb3BUeXBlcy5vbmVPZihbJ3RleHQnLCAnZ3JhcGgnXSksXG59O1xuXG5Db3VudHJpZXMuZGVmYXVsdFByb3BzID0ge1xuICBkYXRhOiB7fSxcbiAgZm9ybWF0OiBcInRleHRcIixcbn07XG5cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgVHJlZU1hcCBmcm9tIFwiY29tcG9uZW50cy9jaGFydHMvdHJlZV9tYXBcIjtcblxuY29uc3QgdGl0bGUgPSBcImJ5IFllYXIgQWRkZWRcIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvdW50cmllcyggcGFyYW1zICl7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEsIGZvcm1hdCB9ID0gcGFyYW1zO1xuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvciB7IGVycm9yLnRvU3RyaW5nKCkgfTwvcD47XG5cbiAgaWYgKCFkYXRhIHx8IGRhdGEubGVuZ3RoID09PSAwKSByZXR1cm4gXCJOTyBEQVRBXCI7XG4gIFxuICByZXR1cm4gPGRpdj5cbiAgICB7KGZvcm1hdCA9PT0gXCJ0ZXh0XCIpICYmIHJlbmRlclRleHQoIGRhdGEgKX1cbiAgICB7KGZvcm1hdCA9PT0gXCJncmFwaFwiKSAmJiByZW5kZXJHcmFwaCggdGl0bGUsIGRhdGEgKX1cbiAgPC9kaXY+O1xufVxuXG5mdW5jdGlvbiByZW5kZXJUZXh0KCBkYXRhICl7XG4gIHJldHVybiA8PlxuICAgICAgPHA+IE1vdmllcyBieSBjb3VudHJ5PC9wPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHVsPiBcbiAgICAgICAgeyBPYmplY3Qua2V5cyhkYXRhKS5tYXAoIChjb3VudHJ5LCBpZHhjICkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2lkeGN9PiB7IGNvdW50cnkgfSA6IHtkYXRhW2NvdW50cnldfSA8L2xpPlxuICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxufVxuXG5mdW5jdGlvbiByZW5kZXJHcmFwaCggdGl0bGUsIGRhdGEgKXtcbiAgcmV0dXJuIDxUcmVlTWFwIHRpdGxlPXt0aXRsZX0gZGF0YT17ZGF0YX0vPlxufVxuXG5Db3VudHJpZXMucHJvcFR5cGVzID0ge1xuICBkYXRhOiBQcm9wVHlwZXMub2JqZWN0LFxuICBmb3JtYXQ6IFByb3BUeXBlcy5vbmVPZihbJ3RleHQnLCAnZ3JhcGgnXSksXG59O1xuXG5Db3VudHJpZXMuZGVmYXVsdFByb3BzID0ge1xuICBkYXRhOiB7fSxcbiAgZm9ybWF0OiBcInRleHRcIixcbn07XG5cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgVHJlZU1hcCBmcm9tIFwiY29tcG9uZW50cy9jaGFydHMvdHJlZV9tYXBcIjtcblxuY29uc3QgdGl0bGUgPSBcImJ5IFllYXIgUmVsZWFzZWRcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3VudHJpZXMoIHBhcmFtcyApe1xuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhLCBmb3JtYXQgfSA9IHBhcmFtcztcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+RXJyb3IgeyBlcnJvci50b1N0cmluZygpIH08L3A+O1xuXG4gIGlmICghZGF0YSB8fCBkYXRhLmxlbmd0aCA9PT0gMCkgcmV0dXJuIFwiTk8gREFUQVwiO1xuICBcbiAgcmV0dXJuIDxkaXY+XG4gICAgeyhmb3JtYXQgPT09IFwidGV4dFwiKSAmJiByZW5kZXJUZXh0KCBkYXRhICl9XG4gICAgeyhmb3JtYXQgPT09IFwiZ3JhcGhcIikgJiYgcmVuZGVyR3JhcGgoIHRpdGxlLCBkYXRhICl9XG4gIDwvZGl2Pjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVGV4dCggZGF0YSApe1xuICByZXR1cm4gPD5cbiAgICAgIDxwPiBNb3ZpZXMgYnkgY291bnRyeTwvcD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDx1bD4gXG4gICAgICAgIHsgT2JqZWN0LmtleXMoZGF0YSkubWFwKCAoY291bnRyeSwgaWR4YyApID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpZHhjfT4geyBjb3VudHJ5IH0gOiB7ZGF0YVtjb3VudHJ5XX0gPC9saT5cbiAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbn1cblxuZnVuY3Rpb24gcmVuZGVyR3JhcGgoIHRpdGxlLCBkYXRhICl7XG4gIHJldHVybiA8VHJlZU1hcCB0aXRsZT17dGl0bGV9IGRhdGE9e2RhdGF9Lz5cbn1cblxuQ291bnRyaWVzLnByb3BUeXBlcyA9IHtcbiAgZGF0YTogUHJvcFR5cGVzLm9iamVjdCxcbiAgZm9ybWF0OiBQcm9wVHlwZXMub25lT2YoWyd0ZXh0JywgJ2dyYXBoJ10pLFxufTtcblxuQ291bnRyaWVzLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGF0YToge30sXG4gIGZvcm1hdDogXCJ0ZXh0XCIsXG59O1xuXG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBHcmlkQ29udGFpbmVyIGZyb20gJ2NvcmUvdWkvbGF5b3V0L2dyaWRfY29udGFpbmVyJztcbmltcG9ydCBHcmlkSXRlbSBmcm9tICdjb3JlL3VpL2xheW91dC9ncmlkX2l0ZW0nO1xuaW1wb3J0IFBsYWNlaG9sZGVyIGZyb20gJ2NvcmUvdWkvcGxhY2Vob2xkZXInO1xuaW1wb3J0IEluZGljYWRvciBmcm9tICdjb21wb25lbnRzL2Rhc2hib2FyZC9pbmRpY2Fkb3InO1xuaW1wb3J0IENvdW50cmllcyBmcm9tICdjb21wb25lbnRzL2Rhc2hib2FyZC9jb3VudHJpZXMnXG5pbXBvcnQgVHlwZXMgZnJvbSAnY29tcG9uZW50cy9kYXNoYm9hcmQvdHlwZXMnXG5pbXBvcnQgR2VucmVzIGZyb20gJ2NvbXBvbmVudHMvZGFzaGJvYXJkL2dlbnJlcydcbmltcG9ydCBZZWFyc1JlbGVhc2VkIGZyb20gJ2NvbXBvbmVudHMvZGFzaGJvYXJkL3llYXJzX3JlbGVhc2VkJ1xuaW1wb3J0IFllYXJzQWRkZWQgZnJvbSAnY29tcG9uZW50cy9kYXNoYm9hcmQveWVhcnNfYWRkZWQnXG5cbmNsYXNzIERhc2hib2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IHsgZGF0YSwgbG9hZGluZyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiggIWRhdGEgfHwgbG9hZGluZyApIHJldHVybiB0aGlzLnJlbmRlclBsYWNlaG9sZGVyKCk7XG5cbiAgICByZXR1cm4gdGhpcy5yZW5kZXJDb250ZW50KGRhdGEpO1xuICB9XG5cbiAgcmVuZGVyQ29udGVudChkYXRhKXtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJUZW1wbGF0ZShkYXRhKTtcbiAgfVxuXG4gIHJlbmRlclBsYWNlaG9sZGVyKCl7XG4gICAgdmFyIHAxID0gPFBsYWNlaG9sZGVyIGRhdGE9e1tbW1wiLVwiLCBcIjEwMFwiLCBcIjEwMFwiXV0sXX0vPjtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJUZW1wbGF0ZShwMSwgcDEpO1xuICB9XG5cbiAgcmVuZGVyVGVtcGxhdGUoIHsgbW92aWVzLCBjb3VudHJpZXMsIGdlbnJlcywgdHlwZXMsIHllYXJzQWRkZWQsIHllYXJzUmVsZWFzZWQsIHBlb3BsZSwgYWN0b3JzLCBkaXJlY3RvcnMgfSApe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzogJzFyZW0nfX0+XG4gICAgICAgIDxHcmlkQ29udGFpbmVyIGp1c3RpZnlDb250ZW50PSdjZW50ZXInIGZpbGwgc3BhY2luZz17OH0+XG4gICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9PlxuICAgICAgICAgICAgPEdyaWRDb250YWluZXIganVzdGlmeUNvbnRlbnQ9J2NlbnRlcicgZmlsbCBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs2fSBzbT17NH0gbWQ9ezN9IGxnPXsyfT5cbiAgICAgICAgICAgICAgICA8SW5kaWNhZG9yIHRpdGxlPXtcIm1vdmllc1wifSBkYXRhPXttb3ZpZXN9Lz5cbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgIDwvR3JpZENvbnRhaW5lcj5cbiAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfT5cbiAgICAgICAgICAgIDxHcmlkQ29udGFpbmVyIGp1c3RpZnlDb250ZW50PSdjZW50ZXInIGZpbGwgc3BhY2luZz17NH0+XG4gICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXs4fSBtZD17Nn0+XG4gICAgICAgICAgICAgICAgPENvdW50cmllcyBkYXRhPXtjb3VudHJpZXN9IGZvcm1hdD1cImdyYXBoXCIvPlxuICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17OH0gbWQ9ezZ9PlxuICAgICAgICAgICAgICAgIDxHZW5yZXMgZGF0YT17Z2VucmVzfSBmb3JtYXQ9XCJncmFwaFwiLz5cbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezh9IG1kPXs2fT5cbiAgICAgICAgICAgICAgICA8VHlwZXMgZGF0YT17dHlwZXN9IGZvcm1hdD1cImdyYXBoXCIvPlxuICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17OH0gbWQ9ezZ9PlxuICAgICAgICAgICAgICAgIDxZZWFyc1JlbGVhc2VkIGRhdGE9e3llYXJzQWRkZWR9IGZvcm1hdD1cImdyYXBoXCIvPlxuICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17OH0gbWQ9ezZ9PlxuICAgICAgICAgICAgICAgIDxZZWFyc0FkZGVkIGRhdGE9e3llYXJzUmVsZWFzZWR9IGZvcm1hdD1cImdyYXBoXCIvPlxuICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9PlxuICAgICAgICAgICAgPEdyaWRDb250YWluZXIganVzdGlmeUNvbnRlbnQ9J2NlbnRlcicgZmlsbCBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs2fSBzbT17NH0gbWQ9ezN9IGxnPXsyfT5cbiAgICAgICAgICAgICAgICA8SW5kaWNhZG9yIHRpdGxlPXtcInBlb3BsZVwifSBkYXRhPXtwZW9wbGV9Lz5cbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs2fSBzbT17NH0gbWQ9ezN9IGxnPXsyfT5cbiAgICAgICAgICAgICAgICA8SW5kaWNhZG9yIHRpdGxlPXtcImFjdG9yc1wifSBkYXRhPXthY3RvcnN9Lz5cbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXs2fSBzbT17NH0gbWQ9ezN9IGxnPXsyfT5cbiAgICAgICAgICAgICAgICA8SW5kaWNhZG9yIHRpdGxlPXtcImRpcmVjdG9yc1wifSBkYXRhPXtkaXJlY3RvcnN9Lz5cbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgIDwvR3JpZENvbnRhaW5lcj5cbiAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICA8L0dyaWRDb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuXG4vKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxudmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxuXG52YXIgdWlkID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpXHJcbiAgICAgICAgLnRvU3RyaW5nKDM2KVxyXG4gICAgICAgIC5zdWJzdHJpbmcoNik7XHJcbn0pO1xuXG52YXIgU1ZHID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgYW5pbWF0ZSA9IF9hLmFuaW1hdGUsIGJhY2tncm91bmRDb2xvciA9IF9hLmJhY2tncm91bmRDb2xvciwgYmFja2dyb3VuZE9wYWNpdHkgPSBfYS5iYWNrZ3JvdW5kT3BhY2l0eSwgYmFzZVVybCA9IF9hLmJhc2VVcmwsIGNoaWxkcmVuID0gX2EuY2hpbGRyZW4sIGZvcmVncm91bmRDb2xvciA9IF9hLmZvcmVncm91bmRDb2xvciwgZm9yZWdyb3VuZE9wYWNpdHkgPSBfYS5mb3JlZ3JvdW5kT3BhY2l0eSwgZ3JhZGllbnRSYXRpbyA9IF9hLmdyYWRpZW50UmF0aW8sIHVuaXF1ZUtleSA9IF9hLnVuaXF1ZUtleSwgaW50ZXJ2YWwgPSBfYS5pbnRlcnZhbCwgcnRsID0gX2EucnRsLCBzcGVlZCA9IF9hLnNwZWVkLCBzdHlsZSA9IF9hLnN0eWxlLCB0aXRsZSA9IF9hLnRpdGxlLCBwcm9wcyA9IF9fcmVzdChfYSwgW1wiYW5pbWF0ZVwiLCBcImJhY2tncm91bmRDb2xvclwiLCBcImJhY2tncm91bmRPcGFjaXR5XCIsIFwiYmFzZVVybFwiLCBcImNoaWxkcmVuXCIsIFwiZm9yZWdyb3VuZENvbG9yXCIsIFwiZm9yZWdyb3VuZE9wYWNpdHlcIiwgXCJncmFkaWVudFJhdGlvXCIsIFwidW5pcXVlS2V5XCIsIFwiaW50ZXJ2YWxcIiwgXCJydGxcIiwgXCJzcGVlZFwiLCBcInN0eWxlXCIsIFwidGl0bGVcIl0pO1xyXG4gICAgdmFyIGZpeGVkSWQgPSB1bmlxdWVLZXkgfHwgdWlkKCk7XHJcbiAgICB2YXIgaWRDbGlwID0gZml4ZWRJZCArIFwiLWRpZmZcIjtcclxuICAgIHZhciBpZEdyYWRpZW50ID0gZml4ZWRJZCArIFwiLWFuaW1hdGVkLWRpZmZcIjtcclxuICAgIHZhciBpZEFyaWEgPSBmaXhlZElkICsgXCItYXJpYVwiO1xyXG4gICAgdmFyIHJ0bFN0eWxlID0gcnRsID8geyB0cmFuc2Zvcm06ICdzY2FsZVgoLTEpJyB9IDogbnVsbDtcclxuICAgIHZhciBrZXlUaW1lcyA9IFwiMDsgXCIgKyBpbnRlcnZhbCArIFwiOyAxXCI7XHJcbiAgICB2YXIgZHVyID0gc3BlZWQgKyBcInNcIjtcclxuICAgIHJldHVybiAoY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfX2Fzc2lnbih7IFwiYXJpYS1sYWJlbGxlZGJ5XCI6IGlkQXJpYSwgcm9sZTogXCJpbWdcIiwgc3R5bGU6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBzdHlsZSksIHJ0bFN0eWxlKSB9LCBwcm9wcyksXHJcbiAgICAgICAgdGl0bGUgPyBjcmVhdGVFbGVtZW50KFwidGl0bGVcIiwgeyBpZDogaWRBcmlhIH0sIHRpdGxlKSA6IG51bGwsXHJcbiAgICAgICAgY3JlYXRlRWxlbWVudChcInJlY3RcIiwgeyByb2xlOiBcInByZXNlbnRhdGlvblwiLCB4OiBcIjBcIiwgeTogXCIwXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgY2xpcFBhdGg6IFwidXJsKFwiICsgYmFzZVVybCArIFwiI1wiICsgaWRDbGlwICsgXCIpXCIsIHN0eWxlOiB7IGZpbGw6IFwidXJsKFwiICsgYmFzZVVybCArIFwiI1wiICsgaWRHcmFkaWVudCArIFwiKVwiIH0gfSksXHJcbiAgICAgICAgY3JlYXRlRWxlbWVudChcImRlZnNcIiwgbnVsbCxcclxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudChcImNsaXBQYXRoXCIsIHsgaWQ6IGlkQ2xpcCB9LCBjaGlsZHJlbiksXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoXCJsaW5lYXJHcmFkaWVudFwiLCB7IGlkOiBpZEdyYWRpZW50IH0sXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVFbGVtZW50KFwic3RvcFwiLCB7IG9mZnNldDogXCIwJVwiLCBzdG9wQ29sb3I6IGJhY2tncm91bmRDb2xvciwgc3RvcE9wYWNpdHk6IGJhY2tncm91bmRPcGFjaXR5IH0sIGFuaW1hdGUgJiYgKGNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlXCIsIHsgYXR0cmlidXRlTmFtZTogXCJvZmZzZXRcIiwgdmFsdWVzOiAtZ3JhZGllbnRSYXRpbyArIFwiOyBcIiArIC1ncmFkaWVudFJhdGlvICsgXCI7IDFcIiwga2V5VGltZXM6IGtleVRpbWVzLCBkdXI6IGR1ciwgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiIH0pKSksXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVFbGVtZW50KFwic3RvcFwiLCB7IG9mZnNldDogXCI1MCVcIiwgc3RvcENvbG9yOiBmb3JlZ3JvdW5kQ29sb3IsIHN0b3BPcGFjaXR5OiBmb3JlZ3JvdW5kT3BhY2l0eSB9LCBhbmltYXRlICYmIChjcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7IGF0dHJpYnV0ZU5hbWU6IFwib2Zmc2V0XCIsIHZhbHVlczogLWdyYWRpZW50UmF0aW8gLyAyICsgXCI7IFwiICsgLWdyYWRpZW50UmF0aW8gLyAyICsgXCI7IFwiICsgKDEgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFkaWVudFJhdGlvIC8gMiksIGtleVRpbWVzOiBrZXlUaW1lcywgZHVyOiBkdXIsIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIiB9KSkpLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlRWxlbWVudChcInN0b3BcIiwgeyBvZmZzZXQ6IFwiMTAwJVwiLCBzdG9wQ29sb3I6IGJhY2tncm91bmRDb2xvciwgc3RvcE9wYWNpdHk6IGJhY2tncm91bmRPcGFjaXR5IH0sIGFuaW1hdGUgJiYgKGNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlXCIsIHsgYXR0cmlidXRlTmFtZTogXCJvZmZzZXRcIiwgdmFsdWVzOiBcIjA7IDA7IFwiICsgKDEgKyBncmFkaWVudFJhdGlvKSwga2V5VGltZXM6IGtleVRpbWVzLCBkdXI6IGR1ciwgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiIH0pKSkpKSkpO1xyXG59O1xyXG5TVkcuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgYW5pbWF0ZTogdHJ1ZSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNmNWY2ZjcnLFxyXG4gICAgYmFja2dyb3VuZE9wYWNpdHk6IDEsXHJcbiAgICBiYXNlVXJsOiAnJyxcclxuICAgIGZvcmVncm91bmRDb2xvcjogJyNlZWUnLFxyXG4gICAgZm9yZWdyb3VuZE9wYWNpdHk6IDEsXHJcbiAgICBncmFkaWVudFJhdGlvOiAyLFxyXG4gICAgaWQ6IG51bGwsXHJcbiAgICBpbnRlcnZhbDogMC4yNSxcclxuICAgIHJ0bDogZmFsc2UsXHJcbiAgICBzcGVlZDogMS4yLFxyXG4gICAgc3R5bGU6IHt9LFxyXG4gICAgdGl0bGU6ICdMb2FkaW5nLi4uJyxcclxufTtcblxudmFyIENvbnRlbnRMb2FkZXIgPSBmdW5jdGlvbiAocHJvcHMpIHtcclxuICAgIHJldHVybiBwcm9wcy5jaGlsZHJlbiA/IGNyZWF0ZUVsZW1lbnQoU1ZHLCBfX2Fzc2lnbih7fSwgcHJvcHMpKSA6IGNyZWF0ZUVsZW1lbnQoUmVhY3RDb250ZW50TG9hZGVyRmFjZWJvb2ssIF9fYXNzaWduKHt9LCBwcm9wcykpO1xyXG59O1xuXG52YXIgUmVhY3RDb250ZW50TG9hZGVyRmFjZWJvb2sgPSBmdW5jdGlvbiAocHJvcHMpIHsgcmV0dXJuIChjcmVhdGVFbGVtZW50KENvbnRlbnRMb2FkZXIsIF9fYXNzaWduKHsgdmlld0JveDogXCIwIDAgNDc2IDEyNFwiIH0sIHByb3BzKSxcclxuICAgIGNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHsgeDogXCI0OFwiLCB5OiBcIjhcIiwgd2lkdGg6IFwiODhcIiwgaGVpZ2h0OiBcIjZcIiwgcng6IFwiM1wiIH0pLFxyXG4gICAgY3JlYXRlRWxlbWVudChcInJlY3RcIiwgeyB4OiBcIjQ4XCIsIHk6IFwiMjZcIiwgd2lkdGg6IFwiNTJcIiwgaGVpZ2h0OiBcIjZcIiwgcng6IFwiM1wiIH0pLFxyXG4gICAgY3JlYXRlRWxlbWVudChcInJlY3RcIiwgeyB4OiBcIjBcIiwgeTogXCI1NlwiLCB3aWR0aDogXCI0MTBcIiwgaGVpZ2h0OiBcIjZcIiwgcng6IFwiM1wiIH0pLFxyXG4gICAgY3JlYXRlRWxlbWVudChcInJlY3RcIiwgeyB4OiBcIjBcIiwgeTogXCI3MlwiLCB3aWR0aDogXCIzODBcIiwgaGVpZ2h0OiBcIjZcIiwgcng6IFwiM1wiIH0pLFxyXG4gICAgY3JlYXRlRWxlbWVudChcInJlY3RcIiwgeyB4OiBcIjBcIiwgeTogXCI4OFwiLCB3aWR0aDogXCIxNzhcIiwgaGVpZ2h0OiBcIjZcIiwgcng6IFwiM1wiIH0pLFxyXG4gICAgY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7IGN4OiBcIjIwXCIsIGN5OiBcIjIwXCIsIHI6IFwiMjBcIiB9KSkpOyB9O1xuXG52YXIgUmVhY3RDb250ZW50TG9hZGVySW5zdGFncmFtID0gZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiAoY3JlYXRlRWxlbWVudChDb250ZW50TG9hZGVyLCBfX2Fzc2lnbih7IHZpZXdCb3g6IFwiMCAwIDQwMCA0NjBcIiB9LCBwcm9wcyksXHJcbiAgICBjcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHsgY3g6IFwiMzFcIiwgY3k6IFwiMzFcIiwgcjogXCIxNVwiIH0pLFxyXG4gICAgY3JlYXRlRWxlbWVudChcInJlY3RcIiwgeyB4OiBcIjU4XCIsIHk6IFwiMThcIiwgcng6IFwiMlwiLCByeTogXCIyXCIsIHdpZHRoOiBcIjE0MFwiLCBoZWlnaHQ6IFwiMTBcIiB9KSxcclxuICAgIGNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHsgeDogXCI1OFwiLCB5OiBcIjM0XCIsIHJ4OiBcIjJcIiwgcnk6IFwiMlwiLCB3aWR0aDogXCIxNDBcIiwgaGVpZ2h0OiBcIjEwXCIgfSksXHJcbiAgICBjcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7IHg6IFwiMFwiLCB5OiBcIjYwXCIsIHJ4OiBcIjJcIiwgcnk6IFwiMlwiLCB3aWR0aDogXCI0MDBcIiwgaGVpZ2h0OiBcIjQwMFwiIH0pKSk7IH07XG5cbnZhciBSZWFjdENvbnRlbnRMb2FkZXJDb2RlID0gZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiAoY3JlYXRlRWxlbWVudChDb250ZW50TG9hZGVyLCBfX2Fzc2lnbih7IHZpZXdCb3g6IFwiMCAwIDM0MCA4NFwiIH0sIHByb3BzKSxcclxuICAgIGNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHsgeDogXCIwXCIsIHk6IFwiMFwiLCB3aWR0aDogXCI2N1wiLCBoZWlnaHQ6IFwiMTFcIiwgcng6IFwiM1wiIH0pLFxyXG4gICAgY3JlYXRlRWxlbWVudChcInJlY3RcIiwgeyB4OiBcIjc2XCIsIHk6IFwiMFwiLCB3aWR0aDogXCIxNDBcIiwgaGVpZ2h0OiBcIjExXCIsIHJ4OiBcIjNcIiB9KSxcclxuICAgIGNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHsgeDogXCIxMjdcIiwgeTogXCI0OFwiLCB3aWR0aDogXCI1M1wiLCBoZWlnaHQ6IFwiMTFcIiwgcng6IFwiM1wiIH0pLFxyXG4gICAgY3JlYXRlRWxlbWVudChcInJlY3RcIiwgeyB4OiBcIjE4N1wiLCB5OiBcIjQ4XCIsIHdpZHRoOiBcIjcyXCIsIGhlaWdodDogXCIxMVwiLCByeDogXCIzXCIgfSksXHJcbiAgICBjcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7IHg6IFwiMThcIiwgeTogXCI0OFwiLCB3aWR0aDogXCIxMDBcIiwgaGVpZ2h0OiBcIjExXCIsIHJ4OiBcIjNcIiB9KSxcclxuICAgIGNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHsgeDogXCIwXCIsIHk6IFwiNzFcIiwgd2lkdGg6IFwiMzdcIiwgaGVpZ2h0OiBcIjExXCIsIHJ4OiBcIjNcIiB9KSxcclxuICAgIGNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHsgeDogXCIxOFwiLCB5OiBcIjIzXCIsIHdpZHRoOiBcIjE0MFwiLCBoZWlnaHQ6IFwiMTFcIiwgcng6IFwiM1wiIH0pLFxyXG4gICAgY3JlYXRlRWxlbWVudChcInJlY3RcIiwgeyB4OiBcIjE2NlwiLCB5OiBcIjIzXCIsIHdpZHRoOiBcIjE3M1wiLCBoZWlnaHQ6IFwiMTFcIiwgcng6IFwiM1wiIH0pKSk7IH07XG5cbnZhciBSZWFjdENvbnRlbnRMb2FkZXJMaXN0U3R5bGUgPSBmdW5jdGlvbiAocHJvcHMpIHsgcmV0dXJuIChjcmVhdGVFbGVtZW50KENvbnRlbnRMb2FkZXIsIF9fYXNzaWduKHsgdmlld0JveDogXCIwIDAgNDAwIDExMFwiIH0sIHByb3BzKSxcclxuICAgIGNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHsgeDogXCIwXCIsIHk6IFwiMFwiLCByeDogXCIzXCIsIHJ5OiBcIjNcIiwgd2lkdGg6IFwiMjUwXCIsIGhlaWdodDogXCIxMFwiIH0pLFxyXG4gICAgY3JlYXRlRWxlbWVudChcInJlY3RcIiwgeyB4OiBcIjIwXCIsIHk6IFwiMjBcIiwgcng6IFwiM1wiLCByeTogXCIzXCIsIHdpZHRoOiBcIjIyMFwiLCBoZWlnaHQ6IFwiMTBcIiB9KSxcclxuICAgIGNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHsgeDogXCIyMFwiLCB5OiBcIjQwXCIsIHJ4OiBcIjNcIiwgcnk6IFwiM1wiLCB3aWR0aDogXCIxNzBcIiwgaGVpZ2h0OiBcIjEwXCIgfSksXHJcbiAgICBjcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7IHg6IFwiMFwiLCB5OiBcIjYwXCIsIHJ4OiBcIjNcIiwgcnk6IFwiM1wiLCB3aWR0aDogXCIyNTBcIiwgaGVpZ2h0OiBcIjEwXCIgfSksXHJcbiAgICBjcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7IHg6IFwiMjBcIiwgeTogXCI4MFwiLCByeDogXCIzXCIsIHJ5OiBcIjNcIiwgd2lkdGg6IFwiMjAwXCIsIGhlaWdodDogXCIxMFwiIH0pLFxyXG4gICAgY3JlYXRlRWxlbWVudChcInJlY3RcIiwgeyB4OiBcIjIwXCIsIHk6IFwiMTAwXCIsIHJ4OiBcIjNcIiwgcnk6IFwiM1wiLCB3aWR0aDogXCI4MFwiLCBoZWlnaHQ6IFwiMTBcIiB9KSkpOyB9O1xuXG52YXIgUmVhY3RDb250ZW50TG9hZGVyQnVsbGV0TGlzdCA9IGZ1bmN0aW9uIChwcm9wcykgeyByZXR1cm4gKGNyZWF0ZUVsZW1lbnQoQ29udGVudExvYWRlciwgX19hc3NpZ24oeyB2aWV3Qm94OiBcIjAgMCAyNDUgMTI1XCIgfSwgcHJvcHMpLFxyXG4gICAgY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7IGN4OiBcIjEwXCIsIGN5OiBcIjIwXCIsIHI6IFwiOFwiIH0pLFxyXG4gICAgY3JlYXRlRWxlbWVudChcInJlY3RcIiwgeyB4OiBcIjI1XCIsIHk6IFwiMTVcIiwgcng6IFwiNVwiLCByeTogXCI1XCIsIHdpZHRoOiBcIjIyMFwiLCBoZWlnaHQ6IFwiMTBcIiB9KSxcclxuICAgIGNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIiwgeyBjeDogXCIxMFwiLCBjeTogXCI1MFwiLCByOiBcIjhcIiB9KSxcclxuICAgIGNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHsgeDogXCIyNVwiLCB5OiBcIjQ1XCIsIHJ4OiBcIjVcIiwgcnk6IFwiNVwiLCB3aWR0aDogXCIyMjBcIiwgaGVpZ2h0OiBcIjEwXCIgfSksXHJcbiAgICBjcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHsgY3g6IFwiMTBcIiwgY3k6IFwiODBcIiwgcjogXCI4XCIgfSksXHJcbiAgICBjcmVhdGVFbGVtZW50KFwicmVjdFwiLCB7IHg6IFwiMjVcIiwgeTogXCI3NVwiLCByeDogXCI1XCIsIHJ5OiBcIjVcIiwgd2lkdGg6IFwiMjIwXCIsIGhlaWdodDogXCIxMFwiIH0pLFxyXG4gICAgY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7IGN4OiBcIjEwXCIsIGN5OiBcIjExMFwiLCByOiBcIjhcIiB9KSxcclxuICAgIGNyZWF0ZUVsZW1lbnQoXCJyZWN0XCIsIHsgeDogXCIyNVwiLCB5OiBcIjEwNVwiLCByeDogXCI1XCIsIHJ5OiBcIjVcIiwgd2lkdGg6IFwiMjIwXCIsIGhlaWdodDogXCIxMFwiIH0pKSk7IH07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRMb2FkZXI7XG5leHBvcnQgeyBSZWFjdENvbnRlbnRMb2FkZXJCdWxsZXRMaXN0IGFzIEJ1bGxldExpc3QsIFJlYWN0Q29udGVudExvYWRlckNvZGUgYXMgQ29kZSwgUmVhY3RDb250ZW50TG9hZGVyRmFjZWJvb2sgYXMgRmFjZWJvb2ssIFJlYWN0Q29udGVudExvYWRlckluc3RhZ3JhbSBhcyBJbnN0YWdyYW0sIFJlYWN0Q29udGVudExvYWRlckxpc3RTdHlsZSBhcyBMaXN0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWFjdC1jb250ZW50LWxvYWRlci5lcy5qcy5tYXBcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm51bWVyYWwiLCJOdW1iZXJDb21wb25lbnQiLCJ2YWx1ZSIsIm51bSIsIk51bWJlciIsImZvcm1hdCIsInRvVXBwZXJDYXNlIiwic3R5bGVkIiwiY3NzIiwiUHJvcFR5cGVzIiwiQ29udGVudExvYWRlciIsIlBsYWNlaG9sZGVyIiwicHJvcHMiLCJkYXRhIiwidHlwZSIsImdyb3ciLCJyZW5kZXJQbGFjZWhvbGRlcnMiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwicGhzIiwibWFwIiwiaXRlbSIsInBoIiwieSIsIl9waCIsImtleSIsInBhZCIsImJsb2NrIiwiaCIsInciLCJpIiwibGVuZ3RoIiwicm93IiwieCIsIm1heEgiLCJqIiwicGFyc2VJbnQiLCJwdXNoIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiYXJyYXkiLCJzdHJpbmciLCJib29sIiwiZGVmYXVsdFByb3BzIiwiZGVmYXVsdCIsIlJEVHJlZU1hcCIsImNvbnZlcnRDYXNlIiwiVHJlZU1hcCIsInN0YXRlIiwiZGF0YVJlZiIsInJlZiIsImNyZWF0ZVJlZiIsImN1cnJlbnQiLCJvZmZzZXRXaWR0aCIsInNldFN0YXRlIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlTWFwVG9EYXRhIiwidGl0bGUiLCJsb2FkaW5nIiwiZXJyb3IiLCJjaGlsZHJlbiIsInRvU3RyaW5nIiwidG9GaXhlZCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwicmVzcCIsInJhbmdlcyIsIm90aGVycyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiYyIsIm9iaiIsIm5hbWUiLCJzdGFydHNXaXRoIiwic3Vic3RyaW5nIiwidG9IZWFkZXJDYXNlIiwicmFuZ2UiLCJrIiwib2JqZWN0IiwiQ291bnRyaWVzIiwicGFyYW1zIiwicmVuZGVyVGV4dCIsInJlbmRlckdyYXBoIiwiY291bnRyeSIsImlkeGMiLCJvbmVPZiIsIkdlbnJlcyIsIkluZGljYWRvciIsInNtYWxsZXIiLCJ0ZXh0QWxpZ24iLCJyZW5kZXJUeXBlIiwiR3JpZENvbnRhaW5lciIsIkdyaWRJdGVtIiwiVHlwZXMiLCJZZWFyc1JlbGVhc2VkIiwiWWVhcnNBZGRlZCIsIkRhc2hib2FyZCIsInJlbmRlclBsYWNlaG9sZGVyIiwicmVuZGVyQ29udGVudCIsInJlbmRlclRlbXBsYXRlIiwicDEiLCJtb3ZpZXMiLCJjb3VudHJpZXMiLCJnZW5yZXMiLCJ0eXBlcyIsInllYXJzQWRkZWQiLCJ5ZWFyc1JlbGVhc2VkIiwicGVvcGxlIiwiYWN0b3JzIiwiZGlyZWN0b3JzIiwicGFkZGluZyJdLCJzb3VyY2VSb290IjoiIn0=