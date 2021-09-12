"use strict";
(self["webpackChunkreact"] = self["webpackChunkreact"] || []).push([["src_project_components_movies_Movies_js"],{

/***/ "./src/project/components/movies/Movies.js":
/*!*************************************************!*\
  !*** ./src/project/components/movies/Movies.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QRY_MOVIES": () => (/* binding */ QRY_MOVIES),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/react/hooks/useQuery.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var QRY_MOVIES = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  query getMovies{ \n    movies(limit:2) {\n      title\n      description\n      country\n      genre\n    }\n  }\n"])));

function Movies() {
  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(QRY_MOVIES),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) return /*#__PURE__*/React.createElement("p", null, "Loading...");
  if (error) return /*#__PURE__*/React.createElement("p", null, "Error ", error.toString());
  return data.movies.map(function (movie, idx) {
    return /*#__PURE__*/React.createElement("div", {
      key: idx
    }, /*#__PURE__*/React.createElement("h1", null, movie.title), /*#__PURE__*/React.createElement("p", null, movie.description), /*#__PURE__*/React.createElement("p", null, " Country", /*#__PURE__*/React.createElement("ul", null, movie.country.map(function (country, idxc) {
      return /*#__PURE__*/React.createElement("li", {
        key: idxc
      }, " ", country, " ");
    }))), /*#__PURE__*/React.createElement("p", null, " Genre", /*#__PURE__*/React.createElement("ul", null, movie.genre.map(function (genre, idxg) {
      return /*#__PURE__*/React.createElement("li", {
        key: idxg
      }, " ", genre, " ");
    }))));
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Movies);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3Byb2plY3RfY29tcG9uZW50c19tb3ZpZXNfTW92aWVzX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHTyxJQUFNRSxVQUFVLEdBQUdGLG1EQUFILDJMQUFoQjs7QUFZUCxTQUFTRyxNQUFULEdBQWtCO0FBQ2hCLGtCQUFpQ0Ysd0RBQVEsQ0FBQ0MsVUFBRCxDQUF6QztBQUFBLE1BQVFFLE9BQVIsYUFBUUEsT0FBUjtBQUFBLE1BQWlCQyxLQUFqQixhQUFpQkEsS0FBakI7QUFBQSxNQUF3QkMsSUFBeEIsYUFBd0JBLElBQXhCOztBQUVBLE1BQUlGLE9BQUosRUFBYSxvQkFBTyw0Q0FBUDtBQUNiLE1BQUlDLEtBQUosRUFBVyxvQkFBTyx5Q0FBV0EsS0FBSyxDQUFDRSxRQUFOLEVBQVgsQ0FBUDtBQUVYLFNBQU9ELElBQUksQ0FBQ0UsTUFBTCxDQUFZQyxHQUFaLENBQWdCLFVBQUVDLEtBQUYsRUFBU0MsR0FBVDtBQUFBLHdCQUNyQjtBQUFLLFNBQUcsRUFBRUE7QUFBVixvQkFDRSxnQ0FDR0QsS0FBSyxDQUFDRSxLQURULENBREYsZUFJRSwrQkFBS0YsS0FBSyxDQUFDRyxXQUFYLENBSkYsZUFLRSx3REFDRSxnQ0FDRUgsS0FBSyxDQUFDSSxPQUFOLENBQWNMLEdBQWQsQ0FBbUIsVUFBQ0ssT0FBRCxFQUFVQyxJQUFWO0FBQUEsMEJBQ25CO0FBQUksV0FBRyxFQUFFQTtBQUFULGNBQWtCRCxPQUFsQixNQURtQjtBQUFBLEtBQW5CLENBREYsQ0FERixDQUxGLGVBWUUsc0RBQ0UsZ0NBQ0VKLEtBQUssQ0FBQ00sS0FBTixDQUFZUCxHQUFaLENBQWlCLFVBQUNPLEtBQUQsRUFBUUMsSUFBUjtBQUFBLDBCQUNqQjtBQUFJLFdBQUcsRUFBRUE7QUFBVCxjQUFrQkQsS0FBbEIsTUFEaUI7QUFBQSxLQUFqQixDQURGLENBREYsQ0FaRixDQURxQjtBQUFBLEdBQWhCLENBQVA7QUFzQkQ7O0FBRUQsaUVBQWViLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC8uL3NyYy9wcm9qZWN0L2NvbXBvbmVudHMvbW92aWVzL01vdmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5cblxuZXhwb3J0IGNvbnN0IFFSWV9NT1ZJRVMgPSBncWxgXG4gIHF1ZXJ5IGdldE1vdmllc3sgXG4gICAgbW92aWVzKGxpbWl0OjIpIHtcbiAgICAgIHRpdGxlXG4gICAgICBkZXNjcmlwdGlvblxuICAgICAgY291bnRyeVxuICAgICAgZ2VucmVcbiAgICB9XG4gIH1cbmA7XG5cblxuZnVuY3Rpb24gTW92aWVzKCkge1xuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShRUllfTU9WSUVTKTtcblxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvciB7IGVycm9yLnRvU3RyaW5nKCkgfTwvcD47XG5cbiAgcmV0dXJuIGRhdGEubW92aWVzLm1hcCgoIG1vdmllLCBpZHggKSA9PiAoXG4gICAgPGRpdiBrZXk9e2lkeH0+XG4gICAgICA8aDE+XG4gICAgICAgIHttb3ZpZS50aXRsZX1cbiAgICAgIDwvaDE+XG4gICAgICA8cD57IG1vdmllLmRlc2NyaXB0aW9uIH08L3A+XG4gICAgICA8cD4gQ291bnRyeVxuICAgICAgICA8dWw+IFxuICAgICAgICB7IG1vdmllLmNvdW50cnkubWFwKCAoY291bnRyeSwgaWR4YyApID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpZHhjfT4geyBjb3VudHJ5IH0gPC9saT5cbiAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L3A+XG4gICAgICA8cD4gR2VucmVcbiAgICAgICAgPHVsPiBcbiAgICAgICAgeyBtb3ZpZS5nZW5yZS5tYXAoIChnZW5yZSwgaWR4ZyApID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpZHhnfT4geyBnZW5yZSB9IDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICApKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW92aWVzO1xuIl0sIm5hbWVzIjpbImdxbCIsInVzZVF1ZXJ5IiwiUVJZX01PVklFUyIsIk1vdmllcyIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJ0b1N0cmluZyIsIm1vdmllcyIsIm1hcCIsIm1vdmllIiwiaWR4IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNvdW50cnkiLCJpZHhjIiwiZ2VucmUiLCJpZHhnIl0sInNvdXJjZVJvb3QiOiIifQ==