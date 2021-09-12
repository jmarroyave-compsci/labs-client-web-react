"use strict";
(self["webpackChunkreact"] = self["webpackChunkreact"] || []).push([["src_project_components_dashboard_directors_js"],{

/***/ "./src/project/components/dashboard/directors.js":
/*!*******************************************************!*\
  !*** ./src/project/components/dashboard/directors.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Directors)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


function Directors(params) {
  var loading = params.loading,
      error = params.error,
      data = params.data,
      format = params.format;
  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Loading...");
  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Error ", error.toString());
  if (!data || data.length === 0) return "NO DATA";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, data);
}
Directors.propTypes = {
  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
Directors.defaultProps = {
  data: {}
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3Byb2plY3RfY29tcG9uZW50c19kYXNoYm9hcmRfZGlyZWN0b3JzX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0UsU0FBVCxDQUFvQkMsTUFBcEIsRUFBNEI7QUFDekMsTUFBUUMsT0FBUixHQUF5Q0QsTUFBekMsQ0FBUUMsT0FBUjtBQUFBLE1BQWlCQyxLQUFqQixHQUF5Q0YsTUFBekMsQ0FBaUJFLEtBQWpCO0FBQUEsTUFBd0JDLElBQXhCLEdBQXlDSCxNQUF6QyxDQUF3QkcsSUFBeEI7QUFBQSxNQUE4QkMsTUFBOUIsR0FBeUNKLE1BQXpDLENBQThCSSxNQUE5QjtBQUNBLE1BQUlILE9BQUosRUFBYSxvQkFBTyx5RUFBUDtBQUNiLE1BQUlDLEtBQUosRUFBVyxvQkFBTyxzRUFBV0EsS0FBSyxDQUFDRyxRQUFOLEVBQVgsQ0FBUDtBQUVYLE1BQUksQ0FBQ0YsSUFBRCxJQUFTQSxJQUFJLENBQUNHLE1BQUwsS0FBZ0IsQ0FBN0IsRUFBZ0MsT0FBTyxTQUFQO0FBRWhDLHNCQUFPLDhEQUNKSCxJQURJLENBQVA7QUFHRDtBQUVESixTQUFTLENBQUNRLFNBQVYsR0FBc0I7QUFDcEJKLEVBQUFBLElBQUksRUFBRUwsMERBQWdCVTtBQURGLENBQXRCO0FBSUFULFNBQVMsQ0FBQ1UsWUFBVixHQUF5QjtBQUN2Qk4sRUFBQUEsSUFBSSxFQUFFO0FBRGlCLENBQXpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QvLi9zcmMvcHJvamVjdC9jb21wb25lbnRzL2Rhc2hib2FyZC9kaXJlY3RvcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERpcmVjdG9ycyggcGFyYW1zICl7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEsIGZvcm1hdCB9ID0gcGFyYW1zO1xuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvciB7IGVycm9yLnRvU3RyaW5nKCkgfTwvcD47XG5cbiAgaWYgKCFkYXRhIHx8IGRhdGEubGVuZ3RoID09PSAwKSByZXR1cm4gXCJOTyBEQVRBXCI7XG4gIFxuICByZXR1cm4gPGRpdj5cbiAgICB7ZGF0YX1cbiAgPC9kaXY+O1xufVxuXG5EaXJlY3RvcnMucHJvcFR5cGVzID0ge1xuICBkYXRhOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcblxuRGlyZWN0b3JzLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGF0YToge30sXG59O1xuXG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkRpcmVjdG9ycyIsInBhcmFtcyIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJmb3JtYXQiLCJ0b1N0cmluZyIsImxlbmd0aCIsInByb3BUeXBlcyIsIm9iamVjdCIsImRlZmF1bHRQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=