"use strict";
(self["webpackChunkreact"] = self["webpackChunkreact"] || []).push([["src_project_components_dashboard_actors_js"],{

/***/ "./src/project/components/dashboard/actors.js":
/*!****************************************************!*\
  !*** ./src/project/components/dashboard/actors.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Actors)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


function Actors(params) {
  var loading = params.loading,
      error = params.error,
      data = params.data,
      format = params.format;
  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Loading...");
  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Error ", error.toString());
  if (!data || data.length === 0) return "NO DATA";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, data);
}
Actors.propTypes = {
  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
Actors.defaultProps = {
  data: {}
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3Byb2plY3RfY29tcG9uZW50c19kYXNoYm9hcmRfYWN0b3JzX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0UsTUFBVCxDQUFpQkMsTUFBakIsRUFBeUI7QUFDdEMsTUFBUUMsT0FBUixHQUF5Q0QsTUFBekMsQ0FBUUMsT0FBUjtBQUFBLE1BQWlCQyxLQUFqQixHQUF5Q0YsTUFBekMsQ0FBaUJFLEtBQWpCO0FBQUEsTUFBd0JDLElBQXhCLEdBQXlDSCxNQUF6QyxDQUF3QkcsSUFBeEI7QUFBQSxNQUE4QkMsTUFBOUIsR0FBeUNKLE1BQXpDLENBQThCSSxNQUE5QjtBQUNBLE1BQUlILE9BQUosRUFBYSxvQkFBTyx5RUFBUDtBQUNiLE1BQUlDLEtBQUosRUFBVyxvQkFBTyxzRUFBV0EsS0FBSyxDQUFDRyxRQUFOLEVBQVgsQ0FBUDtBQUVYLE1BQUksQ0FBQ0YsSUFBRCxJQUFTQSxJQUFJLENBQUNHLE1BQUwsS0FBZ0IsQ0FBN0IsRUFBZ0MsT0FBTyxTQUFQO0FBRWhDLHNCQUFPLDhEQUNKSCxJQURJLENBQVA7QUFHRDtBQUVESixNQUFNLENBQUNRLFNBQVAsR0FBbUI7QUFDakJKLEVBQUFBLElBQUksRUFBRUwsMERBQWdCVTtBQURMLENBQW5CO0FBSUFULE1BQU0sQ0FBQ1UsWUFBUCxHQUFzQjtBQUNwQk4sRUFBQUEsSUFBSSxFQUFFO0FBRGMsQ0FBdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC8uL3NyYy9wcm9qZWN0L2NvbXBvbmVudHMvZGFzaGJvYXJkL2FjdG9ycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWN0b3JzKCBwYXJhbXMgKXtcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSwgZm9ybWF0IH0gPSBwYXJhbXM7XG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVycm9yIHsgZXJyb3IudG9TdHJpbmcoKSB9PC9wPjtcblxuICBpZiAoIWRhdGEgfHwgZGF0YS5sZW5ndGggPT09IDApIHJldHVybiBcIk5PIERBVEFcIjtcbiAgXG4gIHJldHVybiA8ZGl2PlxuICAgIHtkYXRhfVxuICA8L2Rpdj47XG59XG5cbkFjdG9ycy5wcm9wVHlwZXMgPSB7XG4gIGRhdGE6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5BY3RvcnMuZGVmYXVsdFByb3BzID0ge1xuICBkYXRhOiB7fSxcbn07XG5cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiQWN0b3JzIiwicGFyYW1zIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImZvcm1hdCIsInRvU3RyaW5nIiwibGVuZ3RoIiwicHJvcFR5cGVzIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==