"use strict";
(self["webpackChunkreact"] = self["webpackChunkreact"] || []).push([["src_project_components_charts_pie_chart_js"],{

/***/ "./src/project/components/charts/pie_chart.js":
/*!****************************************************!*\
  !*** ./src/project/components/charts/pie_chart.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_minimal_pie_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-minimal-pie-chart */ "./node_modules/react-minimal-pie-chart/dist/index.js");
/* harmony import */ var react_minimal_pie_chart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_minimal_pie_chart__WEBPACK_IMPORTED_MODULE_2__);



var COLORS = ["5bc0eb", "acd49c", "fde74c", "e5df49", "ccd645", "9bc53d", "c08f39", "e55934", "f0692b", "fa7921"];

function PieChart(params) {
  var data = params.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_minimal_pie_chart__WEBPACK_IMPORTED_MODULE_2__.PieChart, {
    data: parseMapToData(data),
    label: function label(lbl) {
      return renderLabel(lbl);
    },
    labelStyle: {
      fontSize: '0.5rem'
    }
  });
}

function renderLabel(lbl) {
  console.log(lbl);
  return "".concat(lbl.dataEntry.title, ": ").concat(lbl.dataEntry.percentage.toFixed(0), "%");
}

function parseMapToData(map) {
  var data = [];
  console.log(map);
  Object.keys(map).forEach(function (key, idx) {
    data.push({
      title: key,
      value: map[key],
      color: "#".concat(COLORS[idx])
    });
  });
  console.log(data);
  return data;
}

PieChart.propTypes = {
  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
PieChart.defaultProps = {
  data: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PieChart);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3Byb2plY3RfY29tcG9uZW50c19jaGFydHNfcGllX2NoYXJ0X2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1JLE1BQU0sR0FBRyxDQUFDLFFBQUQsRUFBVSxRQUFWLEVBQW1CLFFBQW5CLEVBQTRCLFFBQTVCLEVBQXFDLFFBQXJDLEVBQThDLFFBQTlDLEVBQXVELFFBQXZELEVBQWdFLFFBQWhFLEVBQXlFLFFBQXpFLEVBQWtGLFFBQWxGLENBQWY7O0FBR0EsU0FBU0YsUUFBVCxDQUFrQkcsTUFBbEIsRUFBeUI7QUFDdkIsTUFBTUMsSUFBTixHQUFlRCxNQUFmLENBQU1DLElBQU47QUFFQSxzQkFBTyxpREFBQyw2REFBRDtBQUNILFFBQUksRUFBRUMsY0FBYyxDQUFDRCxJQUFELENBRGpCO0FBRUgsU0FBSyxFQUFFLGVBQUNFLEdBQUQ7QUFBQSxhQUFTQyxXQUFXLENBQUNELEdBQUQsQ0FBcEI7QUFBQSxLQUZKO0FBR0gsY0FBVSxFQUFFO0FBQUNFLE1BQUFBLFFBQVEsRUFBRTtBQUFYO0FBSFQsSUFBUDtBQUtEOztBQUVELFNBQVNELFdBQVQsQ0FBcUJELEdBQXJCLEVBQXlCO0FBQ3ZCRyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUosR0FBWjtBQUNBLG1CQUFVQSxHQUFHLENBQUNLLFNBQUosQ0FBY0MsS0FBeEIsZUFBa0NOLEdBQUcsQ0FBQ0ssU0FBSixDQUFjRSxVQUFkLENBQXlCQyxPQUF6QixDQUFpQyxDQUFqQyxDQUFsQztBQUNEOztBQUVELFNBQVNULGNBQVQsQ0FBd0JVLEdBQXhCLEVBQTRCO0FBQzFCLE1BQUlYLElBQUksR0FBRyxFQUFYO0FBRUFLLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSyxHQUFaO0FBRUFDLEVBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZRixHQUFaLEVBQWlCRyxPQUFqQixDQUEwQixVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUN0Q2hCLElBQUFBLElBQUksQ0FBQ2lCLElBQUwsQ0FBVztBQUFDVCxNQUFBQSxLQUFLLEVBQUVPLEdBQVI7QUFBYUcsTUFBQUEsS0FBSyxFQUFFUCxHQUFHLENBQUNJLEdBQUQsQ0FBdkI7QUFBOEJJLE1BQUFBLEtBQUssYUFBTXJCLE1BQU0sQ0FBQ2tCLEdBQUQsQ0FBWjtBQUFuQyxLQUFYO0FBQ0QsR0FGRDtBQUlBWCxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWU4sSUFBWjtBQUVBLFNBQU9BLElBQVA7QUFDRDs7QUFJREosUUFBUSxDQUFDd0IsU0FBVCxHQUFxQjtBQUNuQnBCLEVBQUFBLElBQUksRUFBRUwsMERBQWdCMEI7QUFESCxDQUFyQjtBQUlBekIsUUFBUSxDQUFDMEIsWUFBVCxHQUF3QjtBQUN0QnRCLEVBQUFBLElBQUksRUFBRTtBQURnQixDQUF4QjtBQUtBLGlFQUFlSixRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QvLi9zcmMvcHJvamVjdC9jb21wb25lbnRzL2NoYXJ0cy9waWVfY2hhcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBQaWVDaGFydCBhcyBSTVBpZUNoYXJ0IH0gZnJvbSAncmVhY3QtbWluaW1hbC1waWUtY2hhcnQnO1xuXG5jb25zdCBDT0xPUlMgPSBbXCI1YmMwZWJcIixcImFjZDQ5Y1wiLFwiZmRlNzRjXCIsXCJlNWRmNDlcIixcImNjZDY0NVwiLFwiOWJjNTNkXCIsXCJjMDhmMzlcIixcImU1NTkzNFwiLFwiZjA2OTJiXCIsXCJmYTc5MjFcIl1cblxuXG5mdW5jdGlvbiBQaWVDaGFydChwYXJhbXMpe1xuICB2YXIgeyBkYXRhIH0gPSBwYXJhbXM7XG5cbiAgcmV0dXJuIDxSTVBpZUNoYXJ0XG4gICAgICBkYXRhPXtwYXJzZU1hcFRvRGF0YShkYXRhKX1cbiAgICAgIGxhYmVsPXsobGJsKSA9PiByZW5kZXJMYWJlbChsYmwpfVxuICAgICAgbGFiZWxTdHlsZT17e2ZvbnRTaXplOiAnMC41cmVtJ319XG4gICAgLz47XG59XG5cbmZ1bmN0aW9uIHJlbmRlckxhYmVsKGxibCl7XG4gIGNvbnNvbGUubG9nKGxibClcbiAgcmV0dXJuIGAke2xibC5kYXRhRW50cnkudGl0bGV9OiAke2xibC5kYXRhRW50cnkucGVyY2VudGFnZS50b0ZpeGVkKDApfSVgXG59XG5cbmZ1bmN0aW9uIHBhcnNlTWFwVG9EYXRhKG1hcCl7XG4gIHZhciBkYXRhID0gW107XG5cbiAgY29uc29sZS5sb2cobWFwKVxuXG4gIE9iamVjdC5rZXlzKG1hcCkuZm9yRWFjaCggKGtleSwgaWR4KSA9PiB7XG4gICAgZGF0YS5wdXNoKCB7dGl0bGU6IGtleSwgdmFsdWU6IG1hcFtrZXldLCBjb2xvcjogYCMke0NPTE9SU1tpZHhdfWAgfSApO1xuICB9KVxuXG4gIGNvbnNvbGUubG9nKGRhdGEpXG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cblxuXG5QaWVDaGFydC5wcm9wVHlwZXMgPSB7XG4gIGRhdGE6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5QaWVDaGFydC5kZWZhdWx0UHJvcHMgPSB7XG4gIGRhdGE6IG51bGwsXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFBpZUNoYXJ0OyJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIlBpZUNoYXJ0IiwiUk1QaWVDaGFydCIsIkNPTE9SUyIsInBhcmFtcyIsImRhdGEiLCJwYXJzZU1hcFRvRGF0YSIsImxibCIsInJlbmRlckxhYmVsIiwiZm9udFNpemUiLCJjb25zb2xlIiwibG9nIiwiZGF0YUVudHJ5IiwidGl0bGUiLCJwZXJjZW50YWdlIiwidG9GaXhlZCIsIm1hcCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiaWR4IiwicHVzaCIsInZhbHVlIiwiY29sb3IiLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiXSwic291cmNlUm9vdCI6IiJ9