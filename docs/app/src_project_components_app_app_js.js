"use strict";
(self["webpackChunkreact"] = self["webpackChunkreact"] || []).push([["src_project_components_app_app_js"],{

/***/ "./src/framework/core/ui/app.js":
/*!**************************************!*\
  !*** ./src/framework/core/ui/app.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/AppBar.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/createTheme.js");
/* harmony import */ var _components_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/error */ "./src/framework/core/components/error.js");
/* harmony import */ var _drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drawer */ "./src/framework/core/ui/drawer.js");
/* harmony import */ var _toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toolbar */ "./src/framework/core/ui/toolbar.js");
/* harmony import */ var _assets_css_app_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/css/app.scss */ "./src/framework/core/ui/assets/css/app.scss");
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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var styles = function styles(theme) {
  return {
    appBarSpacer: _objectSpread({}, theme.mixins.toolbar),
    content: {
      boxSizing: 'border-box',
      margin: 0,
      flexGrow: 1,
      padding: 0,
      overflow: 'auto',
      width: '100%'
    }
  };
};

var defaultTheme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["default"])({
  palette: {
    primary: {
      main: '#000000'
    },
    secondary: {
      main: '#ffffff'
    }
  }
});

var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App() {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this);
    _this.state = {
      drawerOpen: false
    };
    _this.onDrawerOpenClick = _this.onDrawerOpenClick.bind(_assertThisInitialized(_this));
    _this.onDrawerCloseClick = _this.onDrawerCloseClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "onDrawerOpenClick",
    value: function onDrawerOpenClick() {
      this.setState({
        drawerOpen: true
      });
    }
  }, {
    key: "onDrawerCloseClick",
    value: function onDrawerCloseClick() {
      this.setState({
        drawerOpen: false
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        this.onRouteChanged();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      document.getElementById('root').style.display = 'inline-block';
      document.getElementById('root_splash').style.display = 'none';
      document.body.style.overflow = 'unset';
      document.title = this.props.page_title;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onSearchQuery = _this$props.onSearchQuery,
          theme = _this$props.theme,
          classes = _this$props.classes,
          nav = _this$props.nav,
          children = _this$props.children,
          title = _this$props.title,
          notifications = _this$props.notifications,
          search = _this$props.search,
          loading = _this$props.loading;

      if (theme) {
        theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["default"])({
          palette: {
            primary: theme.primary,
            secondary: theme.secondary
          }
        });
      } else {
        theme = defaultTheme;
      }

      var showDrawer = nav.drawer.show ? true : false;
      var drawer = nav.drawer ? nav.drawer : {
        header: null,
        footer: null
      };
      notifications = notifications === false ? false : notifications ? notifications : [];
      var links = [];
      nav.options.map(function (r) {
        if (!r.showInMenu && !r.showInDrawer) return;
        links.push({
          link: r.link ? r.link : r.path,
          showInMenu: r.showInMenu,
          showInDrawer: r.showInDrawer,
          order: r.order ? r.order : 1000,
          name: r.name,
          parent: r.parent
        });
      });
      links.sort(function (a, b) {
        return a.order < b.order ? -1 : 1;
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["default"], {
        theme: theme
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: {
          width: '100%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_error__WEBPACK_IMPORTED_MODULE_1__["default"], {
        from: "/core/ui/app"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
        position: "fixed"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onSearchQuery: onSearchQuery,
        title: title,
        nav: links,
        drawerOpen: this.state.drawerOpen,
        onDrawerOpenClick: this.onDrawerOpenClick,
        notifications: notifications,
        drawer: showDrawer,
        search: search,
        loading: loading
      })), showDrawer && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_drawer__WEBPACK_IMPORTED_MODULE_2__["default"], {
        header: drawer.header,
        footer: drawer.footer,
        nav: links,
        open: this.state.drawerOpen,
        onDrawerCloseClick: this.onDrawerCloseClick
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: classes.content
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: classes.appBarSpacer
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_error__WEBPACK_IMPORTED_MODULE_1__["default"], {
        from: "/core/ui/app/children"
      }, children)))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["default"])(styles)(App));

/***/ }),

/***/ "./src/framework/core/ui/drawer.js":
/*!*****************************************!*\
  !*** ./src/framework/core/ui/drawer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./link */ "./src/framework/core/ui/link.js");
/* harmony import */ var _layout_grid_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/grid_container */ "./src/framework/core/ui/layout/grid_container.js");
/* harmony import */ var _layout_grid_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/grid_item */ "./src/framework/core/ui/layout/grid_item.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/Drawer.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "./node_modules/@material-ui/icons/ChevronLeft.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/List.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/ListItem.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js");
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListSubheader */ "./node_modules/@material-ui/core/esm/ListSubheader/ListSubheader.js");
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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















var drawerWidth = 240;

var styles = function styles(theme) {
  var _paper;

  return {
    paper: (_paper = {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth
    }, _defineProperty(_paper, theme.breakpoints.up('sm'), {
      width: drawerWidth + 50
    }), _defineProperty(_paper, theme.breakpoints.up('md'), {
      width: drawerWidth + 75
    }), _defineProperty(_paper, theme.breakpoints.up('lg'), {
      width: drawerWidth + 100
    }), _defineProperty(_paper, "transition", theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })), _paper),
    paperClose: _defineProperty({
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing(7)
    }, theme.breakpoints.up('sm'), {
      width: theme.spacing(9)
    }),
    drawer: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    header: {
      width: '100%'
    },
    header_container: _objectSpread({
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px'
    }, theme.mixins.toolbar),
    header_div: {
      flexGrow: 1
    },
    header_close: {
      display: 'block',
      "float": 'right'
    },
    list: {
      overflowY: 'scroll',
      flex: 1
    },
    drawerButton: {
      padding: '0 0 0 1rem',
      margin: 0
    },
    drawerButtonCategory: {
      padding: '0 0 0 1rem',
      fontSize: '1rem'
    },
    footer: {
      padding: '0.25rem 0rem',
      backgroundColor: 'white'
    }
  };
};

var Drawer = /*#__PURE__*/function (_React$Component) {
  _inherits(Drawer, _React$Component);

  var _super = _createSuper(Drawer);

  function Drawer() {
    var _this;

    _classCallCheck(this, Drawer);

    _this = _super.call(this);
    _this.handleDrawerClose = _this.handleDrawerClose.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Drawer, [{
    key: "handleDrawerClose",
    value: function handleDrawerClose() {
      if (this.props.onDrawerCloseClick) {
        this.props.onDrawerCloseClick();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          nav = _this$props.nav,
          open = _this$props.open,
          footer = _this$props.footer,
          header = _this$props.header;
      var navDrawer = nav ? nav.filter(function (item) {
        return item.showInDrawer ? item : null;
      }) : [];
      header = header ? header : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null);
      footer = footer ? footer : null;
      var options = this.getOptions(navDrawer, classes);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: {
          width: '100%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_5__["default"], {
        classes: {
          paper: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.paper, !open && classes.paperClose)
        },
        open: open,
        onClose: this.handleDrawerClose
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layout_grid_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: classes.drawer
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layout_grid_item__WEBPACK_IMPORTED_MODULE_4__["default"], {
        fill: true,
        className: classes.header
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: classes.header_container
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: classes.header_div
      }, header), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: classes.header_close
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
        onClick: this.handleDrawerClose
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_7__["default"], null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layout_grid_item__WEBPACK_IMPORTED_MODULE_4__["default"], {
        fill: true,
        className: classes.list
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__["default"], null, options.map(function (item) {
        return item;
      }))), footer != null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layout_grid_item__WEBPACK_IMPORTED_MODULE_4__["default"], {
        fill: true,
        className: classes.footer
      }, footer))));
    }
  }, {
    key: "getOptions",
    value: function getOptions(nav, classes) {
      var key = 0;
      var options = [];
      var current = "";

      for (var i = 0; i < nav.length; i++) {
        var item = nav[i];
        var header;

        if (item.parent && item.parent != current && item.parent != "") {
          current = item.parent;
          header = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_9__["default"], {
            key: key++,
            className: classes.drawerButtonCategory
          }, current.toUpperCase());
          options.push(header);
        }

        var opt = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: key++,
          to: item.link ? item.link : item.route,
          onClick: this.handleDrawerClose
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
          button: true,
          className: classes.drawerButton
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
          primary: item.name
        })));
        options.push(opt);
      }

      return options;
    }
  }]);

  return Drawer;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["default"])(styles)(Drawer));

/***/ }),

/***/ "./src/framework/core/ui/paper.js":
/*!****************************************!*\
  !*** ./src/framework/core/ui/paper.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");
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




var Paper = /*#__PURE__*/function (_React$Component) {
  _inherits(Paper, _React$Component);

  var _super = _createSuper(Paper);

  function Paper() {
    _classCallCheck(this, Paper);

    return _super.apply(this, arguments);
  }

  _createClass(Paper, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          elevation = _this$props.elevation,
          style = _this$props.style,
          fill = _this$props.fill;
      style = style ? style : {};

      if (fill) {
        style.width = "100%";
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: className,
        style: style,
        elevation: elevation
      }, children);
    }
  }]);

  return Paper;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Paper);

/***/ }),

/***/ "./src/framework/core/ui/search.js":
/*!*****************************************!*\
  !*** ./src/framework/core/ui/search.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var react_autosuggest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-autosuggest */ "./node_modules/react-autosuggest/dist/index.js");
/* harmony import */ var react_autosuggest__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_autosuggest__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ "./node_modules/@material-ui/core/styles/colorManipulator.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js");
/* harmony import */ var _paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paper */ "./src/framework/core/ui/paper.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _excluded = ["classes", "inputRef", "ref"];

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











function renderInputComponent(inputProps) {
  var classes = inputProps.classes,
      _inputProps$inputRef = inputProps.inputRef,
      _inputRef = _inputProps$inputRef === void 0 ? function () {} : _inputProps$inputRef,
      ref = inputProps.ref,
      other = _objectWithoutProperties(inputProps, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
    fullWidth: true,
    InputProps: {
      inputRef: function inputRef(node) {
        ref(node);

        _inputRef(node);
      },
      classes: {
        input: classes.input
      }
    }
  }, other));
}

function renderSuggestion(suggestion, _ref) {
  var query = _ref.query,
      isHighlighted = _ref.isHighlighted;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    selected: isHighlighted,
    component: "div"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, suggestion)));
}

var loading = false;
var lastQuery = '';
var lastResponse = [];

function getSuggestions(_x) {
  return _getSuggestions.apply(this, arguments);
}

function _getSuggestions() {
  _getSuggestions = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref2) {
    var value, inputValue, inputLength, count;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            value = _ref2.value;
            inputValue = value.toString().trim().toLowerCase();
            inputLength = inputValue.length;
            count = 0;

            if (!(inputLength === 0)) {
              _context3.next = 7;
              break;
            }

            lastResponse = [];
            return _context3.abrupt("return", lastResponse);

          case 7:
            if (!(inputValue == lastQuery)) {
              _context3.next = 9;
              break;
            }

            return _context3.abrupt("return", lastResponse);

          case 9:
            lastQuery = inputValue;

            if (!loading) {
              _context3.next = 12;
              break;
            }

            return _context3.abrupt("return", lastResponse);

          case 12:
            _context3.next = 14;
            return fetchSuggestions(inputValue);

          case 14:
            lastResponse = _context3.sent;
            return _context3.abrupt("return", lastResponse);

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getSuggestions.apply(this, arguments);
}

function fetchSuggestions(value) {
  loading = true;
  return new Promise(function (resolve, reject) {
    setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return window.__api.search(lastQuery);

            case 2:
              data = _context.sent;
              loading = false;
              resolve(data);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })), 750);
  });
}

function getSuggestionValue(suggestion) {
  return suggestion;
}

var styles = function styles(theme) {
  var _inputInput;

  return {
    search: _defineProperty({
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: (0,_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__.fade)(theme.palette.common.white, 0.25),
      '&:hover': {
        backgroundColor: (0,_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_6__.fade)(theme.palette.common.white, 0.65)
      },
      marginLeft: '0.5rem',
      marginRight: '0.5rem',
      width: '100%'
    }, theme.breakpoints.up('xs'), {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }),
    searchIcon: {
      width: theme.spacing(5),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputRoot: {
      color: 'inherit',
      textShadow: '1px 1px black',
      width: '100%'
    },
    inputInput: (_inputInput = {
      paddingTop: theme.spacing(1),
      paddingRight: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(5),
      transition: theme.transitions.create('width'),
      width: '100%'
    }, _defineProperty(_inputInput, theme.breakpoints.up('xs'), {
      width: '4rem',
      '&:focus': {
        width: '8rem'
      }
    }), _defineProperty(_inputInput, theme.breakpoints.up('sm'), {
      width: '6rem',
      '&:focus': {
        width: '10rem'
      }
    }), _defineProperty(_inputInput, theme.breakpoints.up('md'), {
      width: '8rem',
      '&:focus': {
        width: '12rem'
      }
    }), _inputInput),
    root: {
      height: 250,
      flexGrow: 1
    },
    container: {
      position: 'relative'
    },
    suggestionsContainerOpen: {
      position: 'absolute',
      zIndex: 1,
      marginTop: theme.spacing(0),
      left: 0,
      right: 0
    },
    suggestion: {
      display: 'block'
    },
    suggestionsList: {
      margin: 0,
      padding: 0,
      listStyleType: 'none'
    }
  };
};

var Search = /*#__PURE__*/function (_React$Component) {
  _inherits(Search, _React$Component);

  var _super = _createSuper(Search);

  function Search() {
    var _this;

    _classCallCheck(this, Search);

    _this = _super.call(this);
    _this.state = {
      single: '',
      suggestions: []
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleSuggestionsFetchRequested = _this.handleSuggestionsFetchRequested.bind(_assertThisInitialized(_this));
    _this.handleSuggestionsClearRequested = _this.handleSuggestionsClearRequested.bind(_assertThisInitialized(_this));
    _this.handleSuggestionSelected = _this.handleSuggestionSelected.bind(_assertThisInitialized(_this));
    _this.handleResultSelected = _this.handleResultSelected.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Search, [{
    key: "handleSuggestionsFetchRequested",
    value: function () {
      var _handleSuggestionsFetchRequested = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(value) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.t0 = this;
                _context2.t1 = value;
                _context2.next = 4;
                return getSuggestions(value);

              case 4:
                _context2.t2 = _context2.sent;
                _context2.t3 = {
                  last: _context2.t1,
                  suggestions: _context2.t2
                };

                _context2.t0.setState.call(_context2.t0, _context2.t3);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function handleSuggestionsFetchRequested(_x2) {
        return _handleSuggestionsFetchRequested.apply(this, arguments);
      }

      return handleSuggestionsFetchRequested;
    }()
  }, {
    key: "handleSuggestionsClearRequested",
    value: function handleSuggestionsClearRequested() {
      this.setState({
        suggestions: []
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(event, _ref4) {
      var newValue = _ref4.newValue,
          method = _ref4.method;

      switch (method) {
        case "enter":
          //console.log(newValue, this.state.single);
          this.handleResultSelected(newValue);
          break;

        default:
          this.setState({
            single: newValue
          });
          break;
      }
    }
  }, {
    key: "handleSuggestionSelected",
    value: function handleSuggestionSelected(event, _ref5) {
      var suggestion = _ref5.suggestion,
          suggestionValue = _ref5.suggestionValue,
          suggestionIndex = _ref5.suggestionIndex,
          sectionIndex = _ref5.sectionIndex,
          method = _ref5.method;
      this.handleResultSelected(suggestionValue);
    }
  }, {
    key: "handleResultSelected",
    value: function handleResultSelected(query) {
      console.log(query);
      if (!this.props.onSearchQuery) return;
      this.props.onSearchQuery(query);
    }
  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var autosuggestProps = {
        renderInputComponent: renderInputComponent,
        suggestions: this.state.suggestions,
        getSuggestionValue: getSuggestionValue,
        renderSuggestion: renderSuggestion,
        onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
        onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
        onSuggestionSelected: this.handleSuggestionSelected
      };
      var theme = {
        container: classes.container,
        suggestionsContainerOpen: classes.suggestionsContainerOpen,
        suggestionsList: classes.suggestionsList,
        suggestion: classes.suggestion
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: classes.search
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: classes.searchIcon
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_7__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_autosuggest__WEBPACK_IMPORTED_MODULE_2___default()), _extends({}, autosuggestProps, {
        inputProps: {
          classes: {
            root: classes.inputRoot,
            input: classes.inputInput
          },
          placeholder: 'Buscar',
          value: this.state.single,
          onChange: this.handleChange
        },
        theme: theme,
        renderSuggestionsContainer: function renderSuggestionsContainer(options) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_paper__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, options.containerProps, {
            square: true
          }), options.children);
        }
      })));
    }
  }]);

  return Search;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

Search.propTypes = {
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["default"])(styles)(Search));

/***/ }),

/***/ "./src/framework/core/ui/text-link.js":
/*!********************************************!*\
  !*** ./src/framework/core/ui/text-link.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link */ "./src/framework/core/ui/link.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_ */ "./src/framework/core/ui/_.js");
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
          border = _this$props.border,
          style = _this$props.style,
          external = _this$props.external;
      to = to ? to : href;
      to = to ? to : "http://localhost";
      children = to ? children : "NO LINK DEFINED";
      border = border === true || border === "true" ? 'text-link' : '';
      style = style ? style : {};
      style.padding = style.padding ? style.padding : '0.5rem 0.75rem';
      className = "".concat(border, " ").concat(className ? className : '');
      external = external === true;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: className,
        to: to,
        style: style,
        external: external
      }, children);
    }
  }]);

  return _Link;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Link);

/***/ }),

/***/ "./src/framework/core/ui/toolbar.js":
/*!******************************************!*\
  !*** ./src/framework/core/ui/toolbar.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Badge */ "./node_modules/@material-ui/core/esm/Badge/Badge.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Notifications */ "./node_modules/@material-ui/icons/Notifications.js");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "./node_modules/@material-ui/core/esm/LinearProgress/LinearProgress.js");
/* harmony import */ var _text_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text-link */ "./src/framework/core/ui/text-link.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search */ "./src/framework/core/ui/search.js");
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













var styles = function styles(theme) {
  return {
    title: {
      fontSize: "0.8em",
      fontWeight: "800",
      textTransform: "none!important",
      textShadow: '1px 1px #000'
    },
    toolbar: {},
    button: {
      fontSize: "0.75em",
      marginRight: '0rem',
      fontWeight: '700',
      textTransform: "lowercase!important"
    },
    notification: {
      marginLeft: '0.5rem',
      marginRight: '0.5rem'
    },
    buttonHidden: {
      display: 'none'
    },
    padd: {
      width: '1rem'
    },
    fill: {
      flexGrow: 1
    }
  };
};

var Toolbar = /*#__PURE__*/function (_React$Component) {
  _inherits(Toolbar, _React$Component);

  var _super = _createSuper(Toolbar);

  function Toolbar() {
    var _this;

    _classCallCheck(this, Toolbar);

    _this = _super.call(this);
    _this.handleDrawerOpen = _this.handleDrawerOpen.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Toolbar, [{
    key: "handleDrawerOpen",
    value: function handleDrawerOpen() {
      if (this.props.onDrawerOpenClick) {
        this.props.onDrawerOpenClick();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onSearchQuery = _this$props.onSearchQuery,
          classes = _this$props.classes,
          nav = _this$props.nav,
          title = _this$props.title,
          drawerOpen = _this$props.drawerOpen,
          notifications = _this$props.notifications,
          drawer = _this$props.drawer,
          search = _this$props.search,
          loading = _this$props.loading;
      var navToolbar = nav && nav.routes ? nav.routes.filter(function (item) {
        return item.showInMenu ? item : null;
      }) : [];
      var navMenu = nav ? nav.filter(function (item) {
        return item.showInMenu ? item : null;
      }) : [];
      var opts = this.getOptions(navMenu, classes);
      search = search === true ? true : false;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: {
          width: '100%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
        disableGutters: !drawerOpen,
        className: classes.toolbar
      }, drawer ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
        color: "inherit",
        "aria-label": "Open drawer",
        onClick: this.handleDrawerOpen,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.button, drawerOpen && classes.buttonHidden)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_6__["default"], null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: classes.padd
      }, "\xA0"), opts.map(function (item) {
        return item;
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: classes.fill
      }, "\xA0"), search !== false && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_search__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onSearchQuery: onSearchQuery
      }), notifications !== false && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
        color: "inherit",
        className: classes.notification
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_7__["default"], {
        badgeContent: notifications.length,
        color: "secondary"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_8__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: classes.padd
      }, "\xA0")), loading === true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_9__["default"], null));
    }
  }, {
    key: "getOptions",
    value: function getOptions(nav, classes) {
      var key = 0;
      var options = [];

      for (var i = 0; i < nav.length; i++) {
        var item = nav[i];
        var opt = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_text_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
          border: false,
          key: key++,
          className: classes.button,
          color: "inherit",
          size: "small",
          to: item.link ? item.link : item.route
        }, item.name);
        options.push(opt);
      }

      return options;
    }
  }]);

  return Toolbar;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["default"])(styles)(Toolbar));

/***/ }),

/***/ "./src/framework/shared/trends/uris.js":
/*!*********************************************!*\
  !*** ./src/framework/shared/trends/uris.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Links = /*#__PURE__*/function () {
  function Links() {
    _classCallCheck(this, Links);
  }

  _createClass(Links, [{
    key: "getLinkToView",
    value: function getLinkToView(trendInfo, view) {
      //return `${this.getLinkToTrend(trendInfo)}/view/${view}`;
      return "week/".concat(view);
    }
  }, {
    key: "getLinkToTopic",
    value: function getLinkToTopic(trendInfo, topic) {
      //return `${this.getLinkToTrend(trendInfo)}/topic/${encodeURIComponent(topic)}`;
      return "/topic/".concat(encodeURIComponent(topic));
    }
  }, {
    key: "getLinkToTrend",
    value: function getLinkToTrend(trendInfo) {
      if (!trendInfo) return '/';
      var id = trendInfo ? trendInfo.id : '';
      var date = trendInfo ? trendInfo.ini.substr(0, 10) : '';
      return "/".concat(id, "/").concat(date);
    }
  }]);

  return Links;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Links());

/***/ }),

/***/ "./src/project/components/app/app.js":
/*!*******************************************!*\
  !*** ./src/project/components/app/app.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var core_ui_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/ui/app */ "./src/framework/core/ui/app.js");
/* harmony import */ var shared_trends_uris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/trends/uris */ "./src/framework/shared/trends/uris.js");
/* harmony import */ var components_app_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/app/footer */ "./src/project/components/app/footer/index.js");
/* harmony import */ var components_app_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/app/header */ "./src/project/components/app/header/index.js");
/* harmony import */ var state_contexts_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! state/contexts/app */ "./src/project/state/contexts/app.js");
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









var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App() {
    _classCallCheck(this, App);

    return _super.apply(this, arguments);
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          app = _this$props.app,
          data = _this$props.data,
          children = _this$props.children;
      var page_title = "JMArroyave";
      var title = "JMArroyave";
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(core_ui_app__WEBPACK_IMPORTED_MODULE_1__["default"], {
        notifications: false,
        theme: this.context.theme,
        title: title,
        page_title: page_title,
        nav: window.__nav
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_app_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
        noCheck: true,
        app: app,
        data: data
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "content"
      }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_app_footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

App.contextType = state_contexts_app__WEBPACK_IMPORTED_MODULE_5__.AppContext;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.withRouter)(App));

/***/ }),

/***/ "./src/project/components/app/footer/index.js":
/*!****************************************************!*\
  !*** ./src/project/components/app/footer/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ "./src/project/components/app/footer/footer.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_footer__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/project/components/app/header/header.js":
/*!*****************************************************!*\
  !*** ./src/project/components/app/header/header.js ***!
  \*****************************************************/
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



var HeaderComponent = /*#__PURE__*/function (_React$Component) {
  _inherits(HeaderComponent, _React$Component);

  var _super = _createSuper(HeaderComponent);

  function HeaderComponent() {
    _classCallCheck(this, HeaderComponent);

    return _super.apply(this, arguments);
  }

  _createClass(HeaderComponent, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null);
    }
  }]);

  return HeaderComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderComponent);

/***/ }),

/***/ "./src/project/components/app/header/index.js":
/*!****************************************************!*\
  !*** ./src/project/components/app/header/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/project/components/app/header/header.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_header__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7O1dBQ0wsa0JBQVE7QUFDUCwwQkFDQSw2REFEQTtBQUlBOzs7O0VBTjRCdlE7O0FBVTlCLGlFQUFldVEsZUFBZjs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQSxpRUFBZU4sK0NBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC8uL3NyYy9mcmFtZXdvcmsvY29yZS91aS9hcHAuanMiLCJ3ZWJwYWNrOi8vcmVhY3QvLi9zcmMvZnJhbWV3b3JrL2NvcmUvdWkvZHJhd2VyLmpzIiwid2VicGFjazovL3JlYWN0Ly4vc3JjL2ZyYW1ld29yay9jb3JlL3VpL3BhcGVyLmpzIiwid2VicGFjazovL3JlYWN0Ly4vc3JjL2ZyYW1ld29yay9jb3JlL3VpL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly9yZWFjdC8uL3NyYy9mcmFtZXdvcmsvY29yZS91aS90ZXh0LWxpbmsuanMiLCJ3ZWJwYWNrOi8vcmVhY3QvLi9zcmMvZnJhbWV3b3JrL2NvcmUvdWkvdG9vbGJhci5qcyIsIndlYnBhY2s6Ly9yZWFjdC8uL3NyYy9mcmFtZXdvcmsvc2hhcmVkL3RyZW5kcy91cmlzLmpzIiwid2VicGFjazovL3JlYWN0Ly4vc3JjL3Byb2plY3QvY29tcG9uZW50cy9hcHAvYXBwLmpzIiwid2VicGFjazovL3JlYWN0Ly4vc3JjL3Byb2plY3QvY29tcG9uZW50cy9hcHAvZm9vdGVyL2luZGV4LmpzIiwid2VicGFjazovL3JlYWN0Ly4vc3JjL3Byb2plY3QvY29tcG9uZW50cy9hcHAvaGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZWFjdC8uL3NyYy9wcm9qZWN0L2NvbXBvbmVudHMvYXBwL2hlYWRlci9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xuaW1wb3J0IHsgTXVpVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgRXJyb3JCb3VuZHJ5IGZyb20gJy4uL2NvbXBvbmVudHMvZXJyb3InO1xuaW1wb3J0IERyYXdlciBmcm9tICcuL2RyYXdlcic7XG5pbXBvcnQgVG9vbGJhciBmcm9tICcuL3Rvb2xiYXInO1xuXG5pbXBvcnQgJy4vYXNzZXRzL2Nzcy9hcHAuc2Nzcyc7XG5cbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gIGFwcEJhclNwYWNlcjoge1xuICAgIC4uLnRoZW1lLm1peGlucy50b29sYmFyLFxuICB9LFxuICBjb250ZW50OiB7XG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgbWFyZ2luOiAwLFxuICAgIGZsZXhHcm93OiAxLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICB9LFxufSk7XG5cbmNvbnN0IGRlZmF1bHRUaGVtZSA9IGNyZWF0ZVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnkgOiB7IG1haW46ICcjMDAwMDAwJyB9LFxuICAgIHNlY29uZGFyeSA6IHsgbWFpbjogJyNmZmZmZmYnfSxcbiAgfVxufSk7XG5cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoKXtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRkcmF3ZXJPcGVuIDogZmFsc2UsXG5cdFx0fVxuXG5cdFx0dGhpcy5vbkRyYXdlck9wZW5DbGljayA9IHRoaXMub25EcmF3ZXJPcGVuQ2xpY2suYmluZCh0aGlzKTtcblx0XHR0aGlzLm9uRHJhd2VyQ2xvc2VDbGljayA9IHRoaXMub25EcmF3ZXJDbG9zZUNsaWNrLmJpbmQodGhpcyk7XG5cdH1cblxuXHRvbkRyYXdlck9wZW5DbGljaygpeyBcblx0XHR0aGlzLnNldFN0YXRlKHtkcmF3ZXJPcGVuIDogdHJ1ZX0pXG5cdH1cblxuXHRvbkRyYXdlckNsb3NlQ2xpY2soKXtcblx0XHR0aGlzLnNldFN0YXRlKHtkcmF3ZXJPcGVuIDogZmFsc2V9KVxuXHR9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmICh0aGlzLnByb3BzLmxvY2F0aW9uICE9PSBwcmV2UHJvcHMubG9jYXRpb24pIHtcbiAgICAgIHRoaXMub25Sb3V0ZUNoYW5nZWQoKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jykuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290X3NwbGFzaCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICd1bnNldCc7XG4gICAgZG9jdW1lbnQudGl0bGUgPSB0aGlzLnByb3BzLnBhZ2VfdGl0bGU7XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgXHR2YXIgeyBvblNlYXJjaFF1ZXJ5LCB0aGVtZSwgY2xhc3NlcywgbmF2LCBjaGlsZHJlbiwgdGl0bGUsIG5vdGlmaWNhdGlvbnMsIHNlYXJjaCwgbG9hZGluZyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmKHRoZW1lKXtcbiAgICAgIHRoZW1lID0gY3JlYXRlVGhlbWUoe1xuICAgICAgICBwYWxldHRlOiB7XG4gICAgICAgICAgcHJpbWFyeSA6IHRoZW1lLnByaW1hcnksXG4gICAgICAgICAgc2Vjb25kYXJ5OiB0aGVtZS5zZWNvbmRhcnksXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoZW1lID0gZGVmYXVsdFRoZW1lO1xuICAgIH1cblxuICAgIHZhciBzaG93RHJhd2VyID0gKG5hdi5kcmF3ZXIuc2hvdykgPyB0cnVlIDogZmFsc2U7XG4gICAgdmFyIGRyYXdlciA9IChuYXYuZHJhd2VyKSA/IG5hdi5kcmF3ZXIgOiB7aGVhZGVyOiBudWxsLCBmb290ZXI6IG51bGx9O1xuICAgIG5vdGlmaWNhdGlvbnMgPSAobm90aWZpY2F0aW9ucyA9PT0gZmFsc2UpID8gZmFsc2UgOiAobm90aWZpY2F0aW9ucykgPyBub3RpZmljYXRpb25zIDogW107XG5cbiAgICB2YXIgbGlua3MgPSBbXTsgXG4gICAgbmF2Lm9wdGlvbnMubWFwKHIgPT4ge1xuICAgICAgaWYgKCFyLnNob3dJbk1lbnUgJiYgIXIuc2hvd0luRHJhd2VyKSByZXR1cm47XG4gICAgICBsaW5rcy5wdXNoKHtsaW5rOiAoci5saW5rKSA/IHIubGluayA6IHIucGF0aCwgc2hvd0luTWVudTogci5zaG93SW5NZW51LCBzaG93SW5EcmF3ZXI6IHIuc2hvd0luRHJhd2VyLCBvcmRlcjogKHIub3JkZXIpID8gci5vcmRlciA6IDEwMDAsIG5hbWU6IHIubmFtZSwgcGFyZW50OiByLnBhcmVudH0pO1xuICAgIH0pXG4gICAgbGlua3Muc29ydCgoYSxiKT0+IChhLm9yZGVyIDwgYi5vcmRlcikgPyAtMSA6IDEpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIFx0PGRpdiBzdHlsZT17e3dpZHRoOicxMDAlJ319PlxuICAgICAgICAgIDxFcnJvckJvdW5kcnkgZnJvbT1cIi9jb3JlL3VpL2FwcFwiPlxuICBcdCAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gIFx0ICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiZml4ZWRcIj5cbiAgXHQgICAgICAgICAgPFRvb2xiYXIgb25TZWFyY2hRdWVyeT17b25TZWFyY2hRdWVyeX0gdGl0bGU9e3RpdGxlfSBuYXY9e2xpbmtzfSBkcmF3ZXJPcGVuPXt0aGlzLnN0YXRlLmRyYXdlck9wZW59IG9uRHJhd2VyT3BlbkNsaWNrPXt0aGlzLm9uRHJhd2VyT3BlbkNsaWNrfSBub3RpZmljYXRpb25zPXtub3RpZmljYXRpb25zfSBkcmF3ZXI9e3Nob3dEcmF3ZXJ9IHNlYXJjaD17c2VhcmNofSBsb2FkaW5nPXtsb2FkaW5nfS8+XG4gIFx0ICAgICAgICA8L0FwcEJhcj5cbiAgICAgICAgICAgIHtzaG93RHJhd2VyICYmXG4gICAgICAgICAgICAgIDxEcmF3ZXIgaGVhZGVyPXtkcmF3ZXIuaGVhZGVyfSBmb290ZXI9e2RyYXdlci5mb290ZXJ9IG5hdj17bGlua3N9IG9wZW49e3RoaXMuc3RhdGUuZHJhd2VyT3Blbn0gb25EcmF3ZXJDbG9zZUNsaWNrPXt0aGlzLm9uRHJhd2VyQ2xvc2VDbGlja30vPlxuICAgICAgICAgICAgfVxuICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICBcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFwcEJhclNwYWNlcn0vPlxuICAgICAgICAgICAgICA8RXJyb3JCb3VuZHJ5IGZyb209XCIvY29yZS91aS9hcHAvY2hpbGRyZW5cIj5cbiAgICBcdCAgXHQgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgPC9FcnJvckJvdW5kcnk+XG4gICAgICBcdFx0XHQ8L2Rpdj5cbiAgICAgICAgICA8L0Vycm9yQm91bmRyeT5cbiAgICAgIFx0PC9kaXY+XG4gICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoQXBwKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBMaW5rIGZyb20gJy4vbGluayc7XG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tICcuL2xheW91dC9ncmlkX2NvbnRhaW5lcic7XG5pbXBvcnQgR3JpZEl0ZW0gZnJvbSAnLi9sYXlvdXQvZ3JpZF9pdGVtJztcbmltcG9ydCBNRERyYXdlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXInO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgQ2hldnJvbkxlZnRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGV2cm9uTGVmdCc7XG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXInO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcbmltcG9ydCBMaXN0SXRlbUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uJztcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcbmltcG9ydCBMaXN0U3ViaGVhZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RTdWJoZWFkZXInO1xuXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI0MDtcblxuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgcGFwZXI6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICB3aWR0aDogZHJhd2VyV2lkdGgsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xuICAgICAgd2lkdGg6IGRyYXdlcldpZHRoICsgNTAsXG4gICAgfSwgICAgXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgd2lkdGg6IGRyYXdlcldpZHRoICsgNzUsXG4gICAgfSwgICAgXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdsZycpXToge1xuICAgICAgd2lkdGg6IGRyYXdlcldpZHRoICsgMTAwLFxuICAgIH0sICAgIFxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcbiAgICB9KSxcbiAgfSxcbiAgcGFwZXJDbG9zZToge1xuICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXG4gICAgfSksXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoNyksXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xuICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoOSksXG4gICAgfSxcbiAgfSxcbiAgZHJhd2VyOiB7XG4gIFx0aGVpZ2h0OiAnMTAwJScsXG4gIFx0d2lkdGg6ICcxMDAlJyxcbiAgXHRkaXNwbGF5OiAnZmxleCcsXG4gIFx0ZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIH0sXG4gIGhlYWRlciA6IHtcbiAgXHR3aWR0aDogJzEwMCUnLFxuICB9LCBcbiAgaGVhZGVyX2NvbnRhaW5lciA6IHtcbiAgXHRkaXNwbGF5OiAnZmxleCcsXG4gIFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgcGFkZGluZzogJzAgOHB4JyxcbiAgICAuLi50aGVtZS5taXhpbnMudG9vbGJhciwgIFx0XG4gIH0sIFxuICBoZWFkZXJfZGl2OiB7XG5cdGZsZXhHcm93OiAxLFxuICB9LFxuICBoZWFkZXJfY2xvc2U6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIGZsb2F0OiAncmlnaHQnLFxuICB9LFxuICBsaXN0IDoge1xuICBcdG92ZXJmbG93WTogJ3Njcm9sbCcsXG4gIFx0ZmxleDogMSxcbiAgfSxcbiAgZHJhd2VyQnV0dG9uIDoge1xuICBcdHBhZGRpbmc6ICcwIDAgMCAxcmVtJyxcbiAgICBtYXJnaW46IDAsXG4gIH0sXG4gIGRyYXdlckJ1dHRvbkNhdGVnb3J5IDoge1xuICAgIHBhZGRpbmc6ICcwIDAgMCAxcmVtJyxcbiAgICBmb250U2l6ZTogJzFyZW0nLFxuICB9LFxuICBmb290ZXIgOiB7XG4gIFx0cGFkZGluZzogJzAuMjVyZW0gMHJlbScsXG4gIFx0YmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICB9LFxufSk7XG5cbmNsYXNzIERyYXdlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCl7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmhhbmRsZURyYXdlckNsb3NlID0gdGhpcy5oYW5kbGVEcmF3ZXJDbG9zZS5iaW5kKHRoaXMpO1xuXHR9XG5cblx0aGFuZGxlRHJhd2VyQ2xvc2UoKXtcblx0XHRpZih0aGlzLnByb3BzLm9uRHJhd2VyQ2xvc2VDbGljayl7XG5cdFx0XHR0aGlzLnByb3BzLm9uRHJhd2VyQ2xvc2VDbGljaygpO1xuXHRcdH1cblx0fVxuXG4gIFx0cmVuZGVyKCkge1xuXHQgIFx0dmFyIHsgY2xhc3NlcywgbmF2LCBvcGVuLCBmb290ZXIsIGhlYWRlciB9ID0gdGhpcy5wcm9wczsgIFx0XG5cdCAgXHRjb25zdCBuYXZEcmF3ZXIgPSAobmF2KSA/IG5hdi5maWx0ZXIoaXRlbSA9PiAoaXRlbS5zaG93SW5EcmF3ZXIpID8gaXRlbSA6IG51bGwpIDogW107ICBcdFx0XG5cdCAgXHRoZWFkZXIgPSAoaGVhZGVyKSA/IGhlYWRlciA6IDxkaXYvPjtcblx0ICBcdGZvb3RlciA9IChmb290ZXIpID8gZm9vdGVyIDogbnVsbDtcblxuXHQgIFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0T3B0aW9ucyhuYXZEcmF3ZXIsIGNsYXNzZXMpO1xuXHQgICAgcmV0dXJuIChcblx0ICAgIFx0PGRpdiBzdHlsZT17e3dpZHRoOicxMDAlJ319PlxuXHQgIFx0ICAgICAgICA8TUREcmF3ZXIgY2xhc3Nlcz17e3BhcGVyOiBjbGFzc05hbWVzKGNsYXNzZXMucGFwZXIsICFvcGVuICYmIGNsYXNzZXMucGFwZXJDbG9zZSl9fSBvcGVuPXtvcGVufSBvbkNsb3NlPXt0aGlzLmhhbmRsZURyYXdlckNsb3NlfT5cblx0XHRcdFx0XHQ8R3JpZENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyfT5cblx0XHRcdFx0XHRcdDxHcmlkSXRlbSBmaWxsIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJfY29udGFpbmVyfT5cblx0XHRcdFx0ICBcdCAgICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJfZGl2fT57aGVhZGVyfTwvZGl2PlxuXHRcdFx0XHQgIFx0ICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcl9jbG9zZX0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZURyYXdlckNsb3NlfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PENoZXZyb25MZWZ0SWNvbiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9JY29uQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvR3JpZEl0ZW0+XHRcdFx0XG5cdFx0XHRcdFx0XHQ8R3JpZEl0ZW0gZmlsbCBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XG5cdFx0XHRcdFx0XHRcdDxMaXN0PlxuXHRcdFx0XHRcdFx0XHRcdHtvcHRpb25zLm1hcChpdGVtID0+XG5cdFx0XHRcdFx0XHRcdFx0XHRpdGVtXG5cdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0PC9MaXN0PlxuXHRcdFx0XHRcdFx0PC9HcmlkSXRlbT4gIFxuXHRcdFx0XHRcdFx0e2Zvb3RlciAhPSBudWxsICYmXG5cdFx0XHRcdFx0XHRcdDxHcmlkSXRlbSBmaWxsIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJ9PlxuXHRcdFx0XHRcdFx0XHRcdHtmb290ZXJ9XG5cdFx0XHRcdFx0XHRcdDwvR3JpZEl0ZW0+ICBcblx0XHRcdFx0XHRcdH1cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8L0dyaWRDb250YWluZXI+XG5cdCAgXHQgICAgICAgIDwvTUREcmF3ZXI+XG5cdCAgICBcdDwvZGl2PlxuXHQgICAgKTtcblx0fVxuXG5cdGdldE9wdGlvbnMobmF2LCBjbGFzc2VzKXtcblx0XHR2YXIga2V5ID0gMDtcblx0XHR2YXIgb3B0aW9ucyA9IFtdO1xuICAgIHZhciBjdXJyZW50ID0gXCJcIjtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbmF2Lmxlbmd0aDsgaSsrKXtcblx0XHRcdHZhciBpdGVtID0gbmF2W2ldO1xuICAgICAgdmFyIGhlYWRlcjtcbiAgICAgIGlmKGl0ZW0ucGFyZW50ICYmIGl0ZW0ucGFyZW50ICE9IGN1cnJlbnQgJiYgaXRlbS5wYXJlbnQgIT0gXCJcIil7XG4gICAgICAgIGN1cnJlbnQgPSBpdGVtLnBhcmVudDtcbiAgICAgICAgaGVhZGVyPSA8TGlzdFN1YmhlYWRlciBrZXk9e2tleSsrfSBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyQnV0dG9uQ2F0ZWdvcnl9PntjdXJyZW50LnRvVXBwZXJDYXNlKCl9PC9MaXN0U3ViaGVhZGVyPlxuICAgICAgICBvcHRpb25zLnB1c2goaGVhZGVyKTtcbiAgICAgIH1cblxuXHRcdFx0dmFyIG9wdCA9IFxuXHRcdFx0PExpbmsga2V5PXtrZXkrK30gdG89eyhpdGVtLmxpbmspID8gaXRlbS5saW5rIDogaXRlbS5yb3V0ZX0gb25DbGljaz17dGhpcy5oYW5kbGVEcmF3ZXJDbG9zZX0+XG5cdFx0XHQgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyQnV0dG9ufT5cblx0XHRcdCAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17aXRlbS5uYW1lfSAvPlxuXHRcdFx0ICAgIDwvTGlzdEl0ZW0+XG5cdFx0ICAgIDwvTGluaz5cblx0XHQgICAgb3B0aW9ucy5wdXNoKG9wdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG9wdGlvbnM7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKERyYXdlcik7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IE1EUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuXG5cbmNsYXNzIFBhcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHZhciB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGVsZXZhdGlvbiwgc3R5bGUsIGZpbGwgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBzdHlsZSA9IChzdHlsZSkgPyBzdHlsZSA6IHt9O1xuICAgIGlmKGZpbGwpIHtcbiAgICAgIHN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxNRFBhcGVyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBzdHlsZT17c3R5bGV9IGVsZXZhdGlvbj17ZWxldmF0aW9ufT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9NRFBhcGVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFwZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuaW1wb3J0IEF1dG9zdWdnZXN0IGZyb20gJ3JlYWN0LWF1dG9zdWdnZXN0JztcbmltcG9ydCB7IGZhZGUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvY29sb3JNYW5pcHVsYXRvcic7XG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnLi9wYXBlcic7XG5cbmZ1bmN0aW9uIHJlbmRlcklucHV0Q29tcG9uZW50KGlucHV0UHJvcHMpIHtcbiAgY29uc3QgeyBjbGFzc2VzLCBpbnB1dFJlZiA9ICgpID0+IHt9LCByZWYsIC4uLm90aGVyIH0gPSBpbnB1dFByb3BzO1xuICByZXR1cm4gKFxuICAgIDxUZXh0RmllbGRcbiAgICAgIGZ1bGxXaWR0aFxuICAgICAgSW5wdXRQcm9wcz17e1xuICAgICAgICBpbnB1dFJlZjogbm9kZSA9PiB7XG4gICAgICAgICAgcmVmKG5vZGUpO1xuICAgICAgICAgIGlucHV0UmVmKG5vZGUpO1xuICAgICAgICB9LFxuICAgICAgICBjbGFzc2VzOiB7XG4gICAgICAgICAgaW5wdXQ6IGNsYXNzZXMuaW5wdXQsXG4gICAgICAgIH0sXG4gICAgICB9fVxuICAgICAgey4uLm90aGVyfVxuICAgIC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclN1Z2dlc3Rpb24oc3VnZ2VzdGlvbiwgeyBxdWVyeSwgaXNIaWdobGlnaHRlZCB9KSB7XG4gIHJldHVybiAoXG4gICAgPE1lbnVJdGVtIHNlbGVjdGVkPXtpc0hpZ2hsaWdodGVkfSBjb21wb25lbnQ9XCJkaXZcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogNTAwIH19PlxuICAgICAgICAgICAge3N1Z2dlc3Rpb259XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9NZW51SXRlbT5cbiAgKTtcbn1cblxudmFyIGxvYWRpbmcgPSBmYWxzZTtcbnZhciBsYXN0UXVlcnkgPSAnJztcbnZhciBsYXN0UmVzcG9uc2UgPSBbXTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0U3VnZ2VzdGlvbnMoe3ZhbHVlfSkge1xuICBjb25zdCBpbnB1dFZhbHVlID0gdmFsdWUudG9TdHJpbmcoKS50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgY29uc3QgaW5wdXRMZW5ndGggPSBpbnB1dFZhbHVlLmxlbmd0aDtcbiAgbGV0IGNvdW50ID0gMDtcblxuICBpZihpbnB1dExlbmd0aCA9PT0gMCkge1xuICAgIGxhc3RSZXNwb25zZSA9IFtdO1xuICAgIHJldHVybiBsYXN0UmVzcG9uc2U7XG4gIH1cbiAgaWYoaW5wdXRWYWx1ZSA9PSBsYXN0UXVlcnkpIHJldHVybiBsYXN0UmVzcG9uc2U7XG5cbiAgbGFzdFF1ZXJ5ID0gaW5wdXRWYWx1ZTtcbiAgaWYobG9hZGluZykgcmV0dXJuIGxhc3RSZXNwb25zZTtcbiAgXG4gIGxhc3RSZXNwb25zZSA9IGF3YWl0IGZldGNoU3VnZ2VzdGlvbnMoaW5wdXRWYWx1ZSk7XG4gIHJldHVybiBsYXN0UmVzcG9uc2U7XG59XG5cbmZ1bmN0aW9uIGZldGNoU3VnZ2VzdGlvbnModmFsdWUpe1xuICBsb2FkaW5nID0gdHJ1ZTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgc2V0VGltZW91dChhc3luYyAoKT0+e1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHdpbmRvdy5fX2FwaS5zZWFyY2gobGFzdFF1ZXJ5KTtcbiAgICAgIGxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgfSwgNzUwKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFN1Z2dlc3Rpb25WYWx1ZShzdWdnZXN0aW9uKSB7XG4gIHJldHVybiBzdWdnZXN0aW9uO1xufVxuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICBzZWFyY2g6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNoYXBlLmJvcmRlclJhZGl1cyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGZhZGUodGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsIDAuMjUpLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBmYWRlKHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLCAwLjY1KSxcbiAgICB9LFxuICAgIG1hcmdpbkxlZnQ6ICcwLjVyZW0nLFxuICAgIG1hcmdpblJpZ2h0OiAnMC41cmVtJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgneHMnKV06IHtcbiAgICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgICB3aWR0aDogJ2F1dG8nLFxuICAgIH0sXG4gIH0sXG4gIHNlYXJjaEljb246IHtcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg1KSxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgfSxcbiAgaW5wdXRSb290OiB7XG4gICAgY29sb3I6ICdpbmhlcml0JyxcbiAgICB0ZXh0U2hhZG93OiAnMXB4IDFweCBibGFjaycsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgfSxcbiAgaW5wdXRJbnB1dDoge1xuICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoNSksXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcpLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCd4cycpXToge1xuICAgICAgd2lkdGg6ICc0cmVtJyxcbiAgICAgICcmOmZvY3VzJzoge1xuICAgICAgICB3aWR0aDogJzhyZW0nLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcbiAgICAgIHdpZHRoOiAnNnJlbScsXG4gICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgd2lkdGg6ICcxMHJlbScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgd2lkdGg6ICc4cmVtJyxcbiAgICAgICcmOmZvY3VzJzoge1xuICAgICAgICB3aWR0aDogJzEycmVtJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSwgIFxuICByb290OiB7XG4gICAgaGVpZ2h0OiAyNTAsXG4gICAgZmxleEdyb3c6IDEsXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICB9LFxuICBzdWdnZXN0aW9uc0NvbnRhaW5lck9wZW46IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB6SW5kZXg6IDEsXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDApLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDAsXG4gIH0sXG4gIHN1Z2dlc3Rpb246IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICB9LFxuICBzdWdnZXN0aW9uc0xpc3Q6IHtcbiAgICBtYXJnaW46IDAsXG4gICAgcGFkZGluZzogMCxcbiAgICBsaXN0U3R5bGVUeXBlOiAnbm9uZScsXG4gIH0sXG59KTtcblxuY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNpbmdsZTogJycsXG4gICAgICBzdWdnZXN0aW9uczogW10sXG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVN1Z2dlc3Rpb25zRmV0Y2hSZXF1ZXN0ZWQgPSB0aGlzLmhhbmRsZVN1Z2dlc3Rpb25zRmV0Y2hSZXF1ZXN0ZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVN1Z2dlc3Rpb25zQ2xlYXJSZXF1ZXN0ZWQgPSB0aGlzLmhhbmRsZVN1Z2dlc3Rpb25zQ2xlYXJSZXF1ZXN0ZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVN1Z2dlc3Rpb25TZWxlY3RlZCA9IHRoaXMuaGFuZGxlU3VnZ2VzdGlvblNlbGVjdGVkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVSZXN1bHRTZWxlY3RlZCA9IHRoaXMuaGFuZGxlUmVzdWx0U2VsZWN0ZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVN1Z2dlc3Rpb25zRmV0Y2hSZXF1ZXN0ZWQoIHZhbHVlICl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bGFzdCA6IHZhbHVlLCBzdWdnZXN0aW9ucyA6IGF3YWl0IGdldFN1Z2dlc3Rpb25zKHZhbHVlKX0pO1xuICB9XG5cbiAgaGFuZGxlU3VnZ2VzdGlvbnNDbGVhclJlcXVlc3RlZCgpe1xuICAgIHRoaXMuc2V0U3RhdGUoe3N1Z2dlc3Rpb25zOiBbXSwgfSk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoIGV2ZW50LCB7IG5ld1ZhbHVlLCBtZXRob2QgfSkge1xuICAgIHN3aXRjaChtZXRob2Qpe1xuICAgICAgY2FzZSBcImVudGVyXCI6XG4gICAgICAgIC8vY29uc29sZS5sb2cobmV3VmFsdWUsIHRoaXMuc3RhdGUuc2luZ2xlKTtcbiAgICAgICAgdGhpcy5oYW5kbGVSZXN1bHRTZWxlY3RlZChuZXdWYWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2luZ2xlIDogbmV3VmFsdWV9KTsgIFxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgXG4gIH1cblxuICBoYW5kbGVTdWdnZXN0aW9uU2VsZWN0ZWQoZXZlbnQsIHsgc3VnZ2VzdGlvbiwgc3VnZ2VzdGlvblZhbHVlLCBzdWdnZXN0aW9uSW5kZXgsIHNlY3Rpb25JbmRleCwgbWV0aG9kfSl7XG4gICAgdGhpcy5oYW5kbGVSZXN1bHRTZWxlY3RlZChzdWdnZXN0aW9uVmFsdWUpO1xuICB9XG5cbiAgaGFuZGxlUmVzdWx0U2VsZWN0ZWQocXVlcnkpe1xuICAgIGNvbnNvbGUubG9nKHF1ZXJ5KTtcbiAgICBpZighdGhpcy5wcm9wcy5vblNlYXJjaFF1ZXJ5KSByZXR1cm47XG4gICAgdGhpcy5wcm9wcy5vblNlYXJjaFF1ZXJ5KHF1ZXJ5KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBhdXRvc3VnZ2VzdFByb3BzID0ge1xuICAgICAgcmVuZGVySW5wdXRDb21wb25lbnQsXG4gICAgICBzdWdnZXN0aW9uczogdGhpcy5zdGF0ZS5zdWdnZXN0aW9ucyxcbiAgICAgIGdldFN1Z2dlc3Rpb25WYWx1ZTogZ2V0U3VnZ2VzdGlvblZhbHVlLFxuICAgICAgcmVuZGVyU3VnZ2VzdGlvbjogcmVuZGVyU3VnZ2VzdGlvbixcbiAgICAgIG9uU3VnZ2VzdGlvbnNGZXRjaFJlcXVlc3RlZDogdGhpcy5oYW5kbGVTdWdnZXN0aW9uc0ZldGNoUmVxdWVzdGVkLFxuICAgICAgb25TdWdnZXN0aW9uc0NsZWFyUmVxdWVzdGVkOiB0aGlzLmhhbmRsZVN1Z2dlc3Rpb25zQ2xlYXJSZXF1ZXN0ZWQsXG4gICAgICBvblN1Z2dlc3Rpb25TZWxlY3RlZDogdGhpcy5oYW5kbGVTdWdnZXN0aW9uU2VsZWN0ZWQsXG4gICAgfTtcblxuICAgIGNvbnN0IHRoZW1lID0ge1xuICAgICAgY29udGFpbmVyOiBjbGFzc2VzLmNvbnRhaW5lcixcbiAgICAgIHN1Z2dlc3Rpb25zQ29udGFpbmVyT3BlbjogY2xhc3Nlcy5zdWdnZXN0aW9uc0NvbnRhaW5lck9wZW4sXG4gICAgICBzdWdnZXN0aW9uc0xpc3Q6IGNsYXNzZXMuc3VnZ2VzdGlvbnNMaXN0LFxuICAgICAgc3VnZ2VzdGlvbjogY2xhc3Nlcy5zdWdnZXN0aW9uLFxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNofT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoSWNvbn0+XG4gICAgICAgICAgPFNlYXJjaEljb24gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxBdXRvc3VnZ2VzdFxuICAgICAgICAgIHsuLi5hdXRvc3VnZ2VzdFByb3BzfVxuICAgICAgICAgIGlucHV0UHJvcHM9e3tcbiAgICAgICAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgICAgICAgcm9vdDogY2xhc3Nlcy5pbnB1dFJvb3QsXG4gICAgICAgICAgICAgIGlucHV0OiBjbGFzc2VzLmlucHV0SW5wdXQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdCdXNjYXInLFxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuc2luZ2xlLFxuICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMuaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgIH19XG4gICAgICAgICAgdGhlbWU9e3RoZW1lfVxuICAgICAgICAgIHJlbmRlclN1Z2dlc3Rpb25zQ29udGFpbmVyPXtvcHRpb25zID0+IChcbiAgICAgICAgICAgIDxQYXBlciB7Li4ub3B0aW9ucy5jb250YWluZXJQcm9wc30gc3F1YXJlPlxuICAgICAgICAgICAgICB7b3B0aW9ucy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5TZWFyY2gucHJvcFR5cGVzID0ge1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoU2VhcmNoKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICcuL2xpbmsnO1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuL18nO1xuXG5jbGFzcyBfTGluayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICB2YXIgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCB0bywgaHJlZiwgYm9yZGVyLCBzdHlsZSwgZXh0ZXJuYWwgfSA9IHRoaXMucHJvcHM7XG5cbiAgICB0byA9ICh0bykgPyB0byA6IGhyZWY7XG4gICAgdG8gPSAodG8pID8gdG8gOiBcImh0dHA6Ly9sb2NhbGhvc3RcIjtcblxuICAgIGNoaWxkcmVuID0gKHRvKSA/IGNoaWxkcmVuIDogXCJOTyBMSU5LIERFRklORURcIjtcbiAgICBib3JkZXIgPSAoYm9yZGVyID09PSB0cnVlIHx8IGJvcmRlciA9PT0gXCJ0cnVlXCIpID8gJ3RleHQtbGluaycgOiAnJztcbiAgICBzdHlsZSA9IChzdHlsZSkgPyBzdHlsZSA6IHt9O1xuICAgIHN0eWxlLnBhZGRpbmcgPSAoc3R5bGUucGFkZGluZykgPyBzdHlsZS5wYWRkaW5nIDogJzAuNXJlbSAwLjc1cmVtJztcblxuICAgIGNsYXNzTmFtZSA9IGAke2JvcmRlcn0gJHsoY2xhc3NOYW1lKSA/IGNsYXNzTmFtZSA6ICcnfWA7XG4gICAgZXh0ZXJuYWwgPSAoZXh0ZXJuYWwgPT09IHRydWUpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHRvPXt0b30gc3R5bGU9e3N0eWxlfSBleHRlcm5hbD17ZXh0ZXJuYWx9PntjaGlsZHJlbn08L0xpbms+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IF9MaW5rOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IE1EVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IEJhZGdlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JhZGdlJztcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XG5pbXBvcnQgTm90aWZpY2F0aW9uc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnMnO1xuaW1wb3J0IExpbmVhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzJztcblxuaW1wb3J0IExpbmsgZnJvbSAnLi90ZXh0LWxpbmsnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL3NlYXJjaCc7XG5cbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG5cdHRpdGxlOiB7XG5cdFx0Zm9udFNpemU6IFwiMC44ZW1cIixcblx0XHRmb250V2VpZ2h0OiBcIjgwMFwiLFxuXHRcdHRleHRUcmFuc2Zvcm06IFwibm9uZSFpbXBvcnRhbnRcIixcblx0XHR0ZXh0U2hhZG93OiAnMXB4IDFweCAjMDAwJyxcblx0fSxcdFxuXHR0b29sYmFyOiB7XG5cdH0sXG5cdGJ1dHRvbiA6IHtcblx0XHRmb250U2l6ZTogXCIwLjc1ZW1cIixcblx0XHRtYXJnaW5SaWdodDogJzByZW0nLFxuXHRcdGZvbnRXZWlnaHQ6ICc3MDAnLFxuXHRcdHRleHRUcmFuc2Zvcm06IFwibG93ZXJjYXNlIWltcG9ydGFudFwiLFxuXHR9LFxuXHRub3RpZmljYXRpb246IHtcblx0XHRtYXJnaW5MZWZ0OiAnMC41cmVtJyxcblx0XHRtYXJnaW5SaWdodDogJzAuNXJlbScsXG5cdH0sXG5cdGJ1dHRvbkhpZGRlbjoge1xuXHRcdGRpc3BsYXk6ICdub25lJyxcblx0fSxcblx0cGFkZDoge1xuXHRcdHdpZHRoOiAnMXJlbScsXG5cdH0sXG5cdGZpbGw6IHtcblx0XHRmbGV4R3JvdzogMSxcblx0fSxcbn0pO1xuXG5jbGFzcyBUb29sYmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoKXtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5oYW5kbGVEcmF3ZXJPcGVuID0gdGhpcy5oYW5kbGVEcmF3ZXJPcGVuLmJpbmQodGhpcyk7XG5cdH1cblxuXHRoYW5kbGVEcmF3ZXJPcGVuKCl7XG5cdFx0aWYodGhpcy5wcm9wcy5vbkRyYXdlck9wZW5DbGljayl7XG5cdFx0XHR0aGlzLnByb3BzLm9uRHJhd2VyT3BlbkNsaWNrKCk7XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHQgIFx0dmFyIHsgb25TZWFyY2hRdWVyeSwgY2xhc3NlcywgbmF2LCB0aXRsZSwgZHJhd2VyT3Blbiwgbm90aWZpY2F0aW9ucywgZHJhd2VyLCBzZWFyY2gsIGxvYWRpbmcgfSA9IHRoaXMucHJvcHM7ICBcdFxuXHQgIFx0Y29uc3QgbmF2VG9vbGJhciA9IChuYXYgJiYgbmF2LnJvdXRlcykgPyBuYXYucm91dGVzLmZpbHRlcihpdGVtID0+IChpdGVtLnNob3dJbk1lbnUpID8gaXRlbSA6IG51bGwpIDogW107XG5cblx0ICBcdGNvbnN0IG5hdk1lbnUgPSAobmF2KSA/IG5hdi5maWx0ZXIoaXRlbSA9PiAoaXRlbS5zaG93SW5NZW51KSA/IGl0ZW0gOiBudWxsKSA6IFtdO1xuXHQgIFx0Y29uc3Qgb3B0cyA9IHRoaXMuZ2V0T3B0aW9ucyhuYXZNZW51LCBjbGFzc2VzKTtcblx0ICBcdHNlYXJjaCA9IChzZWFyY2ggPT09IHRydWUpID8gdHJ1ZSA6IGZhbHNlO1xuXG5cdCAgICByZXR1cm4gKFxuXHQgICAgXHQ8ZGl2IHN0eWxlPXt7d2lkdGg6JzEwMCUnfX0+XG5cdCAgXHQgICAgICAgIDxNRFRvb2xiYXIgZGlzYWJsZUd1dHRlcnM9eyFkcmF3ZXJPcGVufSBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhcn0+XG5cdCAgXHQgICAgICAgIFx0eyhkcmF3ZXIpID9cblx0XHRcdCAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIGFyaWEtbGFiZWw9XCJPcGVuIGRyYXdlclwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRHJhd2VyT3Blbn0gY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzZXMuYnV0dG9uLCBkcmF3ZXJPcGVuICYmIGNsYXNzZXMuYnV0dG9uSGlkZGVuLCl9PlxuXHRcdFx0ICAgICAgICAgICAgICA8TWVudUljb24gLz5cblx0XHRcdCAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cdFx0ICAgICAgICAgICAgXG5cdFx0XHQgICAgICAgICAgICA6XHRcdFx0ICAgICAgICAgICAgXG5cdCAgICAgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYWRkfT4mbmJzcDs8L2Rpdj5cblx0ICBcdCAgICAgICAgXHR9ICBcdCAgICAgICAgXHRcblx0XHQgICAgICAgICAgICB7b3B0cy5tYXAoaXRlbT0+XG5cdFx0ICAgICAgICAgICAgXHRpdGVtXG5cdCAgICAgICAgICAgIFx0KX1cblx0XHQgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5maWxsfT5cblx0XHQgICAgICAgICAgICBcdCZuYnNwO1xuXHRcdCAgICAgICAgICAgIDwvZGl2PlxuXHRcdCAgICAgICAgICAgIHsoc2VhcmNoICE9PSBmYWxzZSkgJiZcblx0XHRcdFx0XHRcdDxTZWFyY2ggb25TZWFyY2hRdWVyeT17b25TZWFyY2hRdWVyeX0vPlx0XG5cdFx0XHRcdFx0fVx0ICAgICAgICAgICAgXG5cdFx0ICAgICAgICAgICAgeyhub3RpZmljYXRpb25zICE9PSBmYWxzZSkgJiZcblx0XHRcdCAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5ub3RpZmljYXRpb259PlxuXHRcdFx0ICAgICAgICAgICAgICA8QmFkZ2UgYmFkZ2VDb250ZW50PXtub3RpZmljYXRpb25zLmxlbmd0aH0gY29sb3I9XCJzZWNvbmRhcnlcIj5cblx0XHRcdCAgICAgICAgICAgICAgICA8Tm90aWZpY2F0aW9uc0ljb24gLz5cblx0XHRcdCAgICAgICAgICAgICAgPC9CYWRnZT5cblx0XHRcdCAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj4gIFx0ICAgICAgICBcblx0XHQgICAgICAgICAgICB9XG5cdFx0ICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFkZH0+XG5cdFx0ICAgICAgICAgICAgXHQmbmJzcDtcblx0XHQgICAgICAgICAgICA8L2Rpdj5cdFx0ICAgICAgICAgICAgXG5cdCAgXHQgICAgICAgIDwvTURUb29sYmFyPlxuXHQgIFx0ICAgICAgICB7bG9hZGluZyA9PT0gdHJ1ZSAmJiA8TGluZWFyUHJvZ3Jlc3MgLz59XG5cdCAgICBcdDwvZGl2PlxuXHQgICAgKTtcblx0fVxuXG5cdGdldE9wdGlvbnMobmF2LCBjbGFzc2VzKXtcblx0XHR2YXIga2V5ID0gMDtcblx0XHR2YXIgb3B0aW9ucyA9IFtdO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBuYXYubGVuZ3RoOyBpKyspe1xuXHRcdFx0dmFyIGl0ZW0gPSBuYXZbaV07XG5cdFx0XHR2YXIgb3B0ID0gXG5cdFx0XHQ8TGluayBib3JkZXI9e2ZhbHNlfSBrZXk9e2tleSsrfSBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSBjb2xvcj1cImluaGVyaXRcIiBzaXplPVwic21hbGxcIiB0bz17KGl0ZW0ubGluaykgPyBpdGVtLmxpbmsgOiBpdGVtLnJvdXRlfT5cblx0XHQgICAgXHR7aXRlbS5uYW1lfVxuXHRcdCAgICA8L0xpbms+XG5cdFx0ICAgIG9wdGlvbnMucHVzaChvcHQpO1xuXHRcdH1cblxuXHRcdHJldHVybiBvcHRpb25zO1xuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKFRvb2xiYXIpOyIsImNsYXNzIExpbmtze1xuXHRnZXRMaW5rVG9WaWV3KHRyZW5kSW5mbywgdmlldyl7XG5cdFx0Ly9yZXR1cm4gYCR7dGhpcy5nZXRMaW5rVG9UcmVuZCh0cmVuZEluZm8pfS92aWV3LyR7dmlld31gO1xuXHRcdHJldHVybiBgd2Vlay8ke3ZpZXd9YDtcblx0fVxuXG5cdGdldExpbmtUb1RvcGljKHRyZW5kSW5mbywgdG9waWMpe1xuXHRcdC8vcmV0dXJuIGAke3RoaXMuZ2V0TGlua1RvVHJlbmQodHJlbmRJbmZvKX0vdG9waWMvJHtlbmNvZGVVUklDb21wb25lbnQodG9waWMpfWA7XG5cdFx0cmV0dXJuIGAvdG9waWMvJHtlbmNvZGVVUklDb21wb25lbnQodG9waWMpfWA7XG5cdH1cblxuXHRnZXRMaW5rVG9UcmVuZCh0cmVuZEluZm8pe1x0XHRcdFx0XG5cdFx0aWYoIXRyZW5kSW5mbykgcmV0dXJuICcvJztcblx0XHR2YXIgaWQgPSAodHJlbmRJbmZvKSA/IHRyZW5kSW5mby5pZCA6ICcnO1xuXHRcdHZhciBkYXRlID0gKHRyZW5kSW5mbykgPyB0cmVuZEluZm8uaW5pLnN1YnN0cigwLDEwKSA6ICcnO1xuXHRcdHJldHVybiBgLyR7aWR9LyR7ZGF0ZX1gO1xuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IExpbmtzKCk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IENvcmVBcHAgZnJvbSAnY29yZS91aS9hcHAnO1xuaW1wb3J0IHVyaXMgZnJvbSAnc2hhcmVkL3RyZW5kcy91cmlzJztcbmltcG9ydCBGb290ZXIgZnJvbSAnY29tcG9uZW50cy9hcHAvZm9vdGVyJ1xuaW1wb3J0IEhlYWRlciBmcm9tICdjb21wb25lbnRzL2FwcC9oZWFkZXInXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSAnc3RhdGUvY29udGV4dHMvYXBwJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCl7XG4gICAgdmFyIHsgYXBwLCBkYXRhLCBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wczsgICAgXG4gICAgY29uc3QgcGFnZV90aXRsZSA9IGBKTUFycm95YXZlYDtcbiAgICBjb25zdCB0aXRsZSA9IGBKTUFycm95YXZlYDtcbiAgICByZXR1cm4oXG4gICAgICAgIDxDb3JlQXBwIFxuICAgICAgICAgIG5vdGlmaWNhdGlvbnM9e2ZhbHNlfSBcbiAgICAgICAgICB0aGVtZT17dGhpcy5jb250ZXh0LnRoZW1lfSBcbiAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgcGFnZV90aXRsZT17cGFnZV90aXRsZX0gXG4gICAgICAgICAgbmF2PXt3aW5kb3cuX19uYXZ9IFxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxIZWFkZXIgbm9DaGVjayBhcHA9e2FwcH0gZGF0YT17ZGF0YX0vPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY29udGVudFwifT5cbiAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Rm9vdGVyLz5cbiAgICAgICAgPC9Db3JlQXBwPlxuICAgIClcbiAgfVxufVxuXG5BcHAuY29udGV4dFR5cGUgPSBBcHBDb250ZXh0O1xuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihBcHApOyIsImltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXInXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgSGVhZGVyQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0cmVuZGVyKCl7XHRcblx0XHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0PC9kaXY+XHRcdFx0XG5cdFx0KVxuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyQ29tcG9uZW50OyIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il0sIm5hbWVzIjpbIlJlYWN0Iiwid2l0aFN0eWxlcyIsIkNzc0Jhc2VsaW5lIiwiQXBwQmFyIiwiTXVpVGhlbWVQcm92aWRlciIsImNyZWF0ZVRoZW1lIiwiRXJyb3JCb3VuZHJ5IiwiRHJhd2VyIiwiVG9vbGJhciIsInN0eWxlcyIsInRoZW1lIiwiYXBwQmFyU3BhY2VyIiwibWl4aW5zIiwidG9vbGJhciIsImNvbnRlbnQiLCJib3hTaXppbmciLCJtYXJnaW4iLCJmbGV4R3JvdyIsInBhZGRpbmciLCJvdmVyZmxvdyIsIndpZHRoIiwiZGVmYXVsdFRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwic2Vjb25kYXJ5IiwiQXBwIiwic3RhdGUiLCJkcmF3ZXJPcGVuIiwib25EcmF3ZXJPcGVuQ2xpY2siLCJiaW5kIiwib25EcmF3ZXJDbG9zZUNsaWNrIiwic2V0U3RhdGUiLCJwcmV2UHJvcHMiLCJwcm9wcyIsImxvY2F0aW9uIiwib25Sb3V0ZUNoYW5nZWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJkaXNwbGF5IiwiYm9keSIsInRpdGxlIiwicGFnZV90aXRsZSIsIm9uU2VhcmNoUXVlcnkiLCJjbGFzc2VzIiwibmF2IiwiY2hpbGRyZW4iLCJub3RpZmljYXRpb25zIiwic2VhcmNoIiwibG9hZGluZyIsInNob3dEcmF3ZXIiLCJkcmF3ZXIiLCJzaG93IiwiaGVhZGVyIiwiZm9vdGVyIiwibGlua3MiLCJvcHRpb25zIiwibWFwIiwiciIsInNob3dJbk1lbnUiLCJzaG93SW5EcmF3ZXIiLCJwdXNoIiwibGluayIsInBhdGgiLCJvcmRlciIsIm5hbWUiLCJwYXJlbnQiLCJzb3J0IiwiYSIsImIiLCJDb21wb25lbnQiLCJjbGFzc05hbWVzIiwiTGluayIsIkdyaWRDb250YWluZXIiLCJHcmlkSXRlbSIsIk1ERHJhd2VyIiwiSWNvbkJ1dHRvbiIsIkNoZXZyb25MZWZ0SWNvbiIsIkxpc3QiLCJEaXZpZGVyIiwiTGlzdEl0ZW0iLCJMaXN0SXRlbUljb24iLCJMaXN0SXRlbVRleHQiLCJMaXN0U3ViaGVhZGVyIiwiZHJhd2VyV2lkdGgiLCJwYXBlciIsInBvc2l0aW9uIiwid2hpdGVTcGFjZSIsImJyZWFrcG9pbnRzIiwidXAiLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImVhc2luZyIsInNoYXJwIiwiZHVyYXRpb24iLCJlbnRlcmluZ1NjcmVlbiIsInBhcGVyQ2xvc2UiLCJvdmVyZmxvd1giLCJ0cmFuc2l0aW9uIiwibGVhdmluZ1NjcmVlbiIsInNwYWNpbmciLCJoZWlnaHQiLCJmbGV4RGlyZWN0aW9uIiwiaGVhZGVyX2NvbnRhaW5lciIsImFsaWduSXRlbXMiLCJoZWFkZXJfZGl2IiwiaGVhZGVyX2Nsb3NlIiwibGlzdCIsIm92ZXJmbG93WSIsImZsZXgiLCJkcmF3ZXJCdXR0b24iLCJkcmF3ZXJCdXR0b25DYXRlZ29yeSIsImZvbnRTaXplIiwiYmFja2dyb3VuZENvbG9yIiwiaGFuZGxlRHJhd2VyQ2xvc2UiLCJvcGVuIiwibmF2RHJhd2VyIiwiZmlsdGVyIiwiaXRlbSIsImdldE9wdGlvbnMiLCJrZXkiLCJjdXJyZW50IiwiaSIsImxlbmd0aCIsInRvVXBwZXJDYXNlIiwib3B0Iiwicm91dGUiLCJNRFBhcGVyIiwiUGFwZXIiLCJjbGFzc05hbWUiLCJlbGV2YXRpb24iLCJmaWxsIiwiUHJvcFR5cGVzIiwiQXV0b3N1Z2dlc3QiLCJmYWRlIiwiU2VhcmNoSWNvbiIsIlRleHRGaWVsZCIsIk1lbnVJdGVtIiwicmVuZGVySW5wdXRDb21wb25lbnQiLCJpbnB1dFByb3BzIiwiaW5wdXRSZWYiLCJyZWYiLCJvdGhlciIsIm5vZGUiLCJpbnB1dCIsInJlbmRlclN1Z2dlc3Rpb24iLCJzdWdnZXN0aW9uIiwicXVlcnkiLCJpc0hpZ2hsaWdodGVkIiwiZm9udFdlaWdodCIsImxhc3RRdWVyeSIsImxhc3RSZXNwb25zZSIsImdldFN1Z2dlc3Rpb25zIiwidmFsdWUiLCJpbnB1dFZhbHVlIiwidG9TdHJpbmciLCJ0cmltIiwidG9Mb3dlckNhc2UiLCJpbnB1dExlbmd0aCIsImNvdW50IiwiZmV0Y2hTdWdnZXN0aW9ucyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsIndpbmRvdyIsIl9fYXBpIiwiZGF0YSIsImdldFN1Z2dlc3Rpb25WYWx1ZSIsImJvcmRlclJhZGl1cyIsInNoYXBlIiwiY29tbW9uIiwid2hpdGUiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJzZWFyY2hJY29uIiwicG9pbnRlckV2ZW50cyIsImp1c3RpZnlDb250ZW50IiwiaW5wdXRSb290IiwiY29sb3IiLCJ0ZXh0U2hhZG93IiwiaW5wdXRJbnB1dCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ0xlZnQiLCJyb290IiwiY29udGFpbmVyIiwic3VnZ2VzdGlvbnNDb250YWluZXJPcGVuIiwiekluZGV4IiwibWFyZ2luVG9wIiwibGVmdCIsInJpZ2h0Iiwic3VnZ2VzdGlvbnNMaXN0IiwibGlzdFN0eWxlVHlwZSIsIlNlYXJjaCIsInNpbmdsZSIsInN1Z2dlc3Rpb25zIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlU3VnZ2VzdGlvbnNGZXRjaFJlcXVlc3RlZCIsImhhbmRsZVN1Z2dlc3Rpb25zQ2xlYXJSZXF1ZXN0ZWQiLCJoYW5kbGVTdWdnZXN0aW9uU2VsZWN0ZWQiLCJoYW5kbGVSZXN1bHRTZWxlY3RlZCIsImxhc3QiLCJldmVudCIsIm5ld1ZhbHVlIiwibWV0aG9kIiwic3VnZ2VzdGlvblZhbHVlIiwic3VnZ2VzdGlvbkluZGV4Iiwic2VjdGlvbkluZGV4IiwiY29uc29sZSIsImxvZyIsImF1dG9zdWdnZXN0UHJvcHMiLCJvblN1Z2dlc3Rpb25zRmV0Y2hSZXF1ZXN0ZWQiLCJvblN1Z2dlc3Rpb25zQ2xlYXJSZXF1ZXN0ZWQiLCJvblN1Z2dlc3Rpb25TZWxlY3RlZCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJjb250YWluZXJQcm9wcyIsInByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJjb25zdGFudHMiLCJfTGluayIsInRvIiwiaHJlZiIsImJvcmRlciIsImV4dGVybmFsIiwiTURUb29sYmFyIiwiQmFkZ2UiLCJNZW51SWNvbiIsIk5vdGlmaWNhdGlvbnNJY29uIiwiTGluZWFyUHJvZ3Jlc3MiLCJ0ZXh0VHJhbnNmb3JtIiwiYnV0dG9uIiwibm90aWZpY2F0aW9uIiwiYnV0dG9uSGlkZGVuIiwicGFkZCIsImhhbmRsZURyYXdlck9wZW4iLCJuYXZUb29sYmFyIiwicm91dGVzIiwibmF2TWVudSIsIm9wdHMiLCJMaW5rcyIsInRyZW5kSW5mbyIsInZpZXciLCJ0b3BpYyIsImVuY29kZVVSSUNvbXBvbmVudCIsImlkIiwiZGF0ZSIsImluaSIsInN1YnN0ciIsIndpdGhSb3V0ZXIiLCJDb3JlQXBwIiwidXJpcyIsIkZvb3RlciIsIkhlYWRlciIsIkFwcENvbnRleHQiLCJhcHAiLCJjb250ZXh0IiwiX19uYXYiLCJjb250ZXh0VHlwZSIsIkhlYWRlckNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=