"use strict";
(self["webpackChunkreact"] = self["webpackChunkreact"] || []).push([["src_project_components_dashboard_directors_stories_js"],{

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

/***/ }),

/***/ "./src/project/components/dashboard/directors.stories.js":
/*!***************************************************************!*\
  !*** ./src/project/components/dashboard/directors.stories.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "Text": () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var _directors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directors */ "./src/project/components/dashboard/directors.js");
/* harmony import */ var res_mock_data_dashboard_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! res/mock-data/dashboard.json */ "./src/project/res/mock-data/dashboard.json");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'Page/Dashboard/Directors',
  component: _directors__WEBPACK_IMPORTED_MODULE_0__["default"],
  argTypes: {}
}); // New story using controls

var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(_directors__WEBPACK_IMPORTED_MODULE_0__["default"], args);
};

var data = res_mock_data_dashboard_json__WEBPACK_IMPORTED_MODULE_1__.data.dashboard.directors;
var Text = Template.bind({});
Text.args = {
  data: data,
  format: 'text'
};

/***/ }),

/***/ "./src/project/res/mock-data/dashboard.json":
/*!**************************************************!*\
  !*** ./src/project/res/mock-data/dashboard.json ***!
  \**************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"data":{"dashboard":{"actors":32600,"countries":{"brazil":88,"mexico":154,"singapore":39,"unitedStates":3297,"turkey":108,"egypt":110,"india":990,"poland":36,"thailand":65,"nigeria":76,"norway":29,"iceland":9,"unitedKingdom":723,"japan":287,"southKorea":212,"italy":90,"canada":412,"indonesia":80,"romania":12,"spain":215,"southAfrica":54,"france":349,"portugal":4,"hongKong":102,"china":147,"germany":199,"argentina":82,"serbia":7,"denmark":44,"kenya":5,"newZealand":28,"pakistan":24,"australia":144,"taiwan":85,"netherlands":45,"philippines":78,"unitedArabEmirates":34,"iran":4,"belgium":85,"israel":26,"uruguay":14,"bulgaria":9,"chile":26,"russia":27,"mauritius":1,"lebanon":26,"colombia":45,"algeria":2,"sovietUnion":3,"sweden":39,"malaysia":26,"ireland":40,"luxembourg":11,"finland":11,"austria":11,"peru":10,"senegal":3,"switzerland":17,"ghana":4,"saudiArabia":10,"armenia":1,"jordan":8,"mongolia":1,"namibia":2,"qatar":7,"vietnam":5,"syria":1,"kuwait":7,"malta":3,"czechRepublic":20,"bahamas":1,"sriLanka":1,"caymanIslands":2,"bangladesh":3,"zimbabwe":3,"hungary":9,"latvia":1,"liechtenstein":1,"venezuela":3,"morocco":6,"cambodia":5,"albania":1,"cuba":1,"nicaragua":1,"greece":10,"croatia":4,"guatemala":2,"westGermany":5,"slovenia":3,"dominicanRepublic":1,"nepal":2,"samoa":1,"azerbaijan":1,"bermuda":1,"ecuador":1,"georgia":2,"botswana":1,"puertoRico":1,"iraq":2,"vaticanCity":1,"angola":1,"ukraine":3,"jamaica":1,"belarus":1,"cyprus":1,"kazakhstan":1,"malawi":1,"slovakia":1,"lithuania":1,"afghanistan":1,"paraguay":1,"somalia":1,"sudan":1,"panama":1,"uganda":1,"eastGermany":1,"montenegro":1},"directors":4324,"genres":{"internationalTvShows":1199,"tvDramas":704,"tvSciFiFantasy":76,"dramas":2106,"internationalMovies":2437,"horrorMovies":312,"actionAdventure":721,"independentMovies":673,"sciFiFantasy":218,"tvMysteries":90,"thrillers":491,"crimeTvShows":427,"docuseries":353,"documentaries":786,"sportsMovies":196,"comedies":1471,"animeSeries":148,"realityTv":222,"tvComedies":525,"romanticMovies":531,"romanticTvShows":333,"scienceNatureTv":85,"movies":56,"britishTvShows":232,"koreanTvShows":150,"musicMusicals":321,"lgbtqMovies":90,"faithSpirituality":57,"kidsTv":414,"tvActionAdventure":150,"spanishLanguageTvShows":147,"childrenFamilyMovies":532,"tvShows":12,"classicMovies":103,"cultMovies":59,"tvHorror":69,"standUpComedyTalkShows":52,"teenTvShows":60,"standUpComedy":329,"animeFeatures":57,"tvThrillers":50,"classicCultTv":27},"lastUpdate":"2021-09-09T18:55:21.456Z","movies":7787,"people":36924,"types":{"tvShow":2410,"movie":5377},"yearsAdded":{"_2003":2,"_2008":3,"_2009":2,"_2010":2,"_2011":13,"_2012":4,"_2013":12,"_2014":25,"_2015":90,"_2016":444,"_2017":1225,"_2018":1686,"_2019":2153,"_2020":2009,"_2021":117},"yearsReleased":{"_1925":1,"_1942":2,"_1943":3,"_1944":3,"_1945":3,"_1946":2,"_1947":1,"_1954":2,"_1955":3,"_1956":2,"_1958":3,"_1959":1,"_1960":4,"_1962":3,"_1963":2,"_1964":1,"_1965":2,"_1966":1,"_1967":5,"_1968":5,"_1969":2,"_1970":2,"_1971":5,"_1972":4,"_1973":10,"_1974":7,"_1975":6,"_1976":9,"_1977":7,"_1978":6,"_1979":11,"_1980":9,"_1981":9,"_1982":15,"_1983":9,"_1984":9,"_1985":9,"_1986":10,"_1987":7,"_1988":16,"_1989":13,"_1990":20,"_1991":17,"_1992":18,"_1993":22,"_1994":16,"_1995":19,"_1996":19,"_1997":30,"_1998":31,"_1999":33,"_2000":34,"_2001":36,"_2002":45,"_2003":49,"_2004":59,"_2005":73,"_2006":85,"_2007":85,"_2008":125,"_2009":137,"_2010":173,"_2011":166,"_2012":219,"_2013":267,"_2014":334,"_2015":541,"_2016":882,"_2017":1012,"_2018":1121,"_2019":996,"_2020":868,"_2021":31}}}}');

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3Byb2plY3RfY29tcG9uZW50c19kYXNoYm9hcmRfZGlyZWN0b3JzX3N0b3JpZXNfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTRSxTQUFULENBQW9CQyxNQUFwQixFQUE0QjtBQUN6QyxNQUFRQyxPQUFSLEdBQXlDRCxNQUF6QyxDQUFRQyxPQUFSO0FBQUEsTUFBaUJDLEtBQWpCLEdBQXlDRixNQUF6QyxDQUFpQkUsS0FBakI7QUFBQSxNQUF3QkMsSUFBeEIsR0FBeUNILE1BQXpDLENBQXdCRyxJQUF4QjtBQUFBLE1BQThCQyxNQUE5QixHQUF5Q0osTUFBekMsQ0FBOEJJLE1BQTlCO0FBQ0EsTUFBSUgsT0FBSixFQUFhLG9CQUFPLHlFQUFQO0FBQ2IsTUFBSUMsS0FBSixFQUFXLG9CQUFPLHNFQUFXQSxLQUFLLENBQUNHLFFBQU4sRUFBWCxDQUFQO0FBRVgsTUFBSSxDQUFDRixJQUFELElBQVNBLElBQUksQ0FBQ0csTUFBTCxLQUFnQixDQUE3QixFQUFnQyxPQUFPLFNBQVA7QUFFaEMsc0JBQU8sOERBQ0pILElBREksQ0FBUDtBQUdEO0FBRURKLFNBQVMsQ0FBQ1EsU0FBVixHQUFzQjtBQUNwQkosRUFBQUEsSUFBSSxFQUFFTCwwREFBZ0JVO0FBREYsQ0FBdEI7QUFJQVQsU0FBUyxDQUFDVSxZQUFWLEdBQXlCO0FBQ3ZCTixFQUFBQSxJQUFJLEVBQUU7QUFEaUIsQ0FBekI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFFQSxpRUFBZTtBQUNiUSxFQUFBQSxLQUFLLEVBQUUsMEJBRE07QUFFYkMsRUFBQUEsU0FBUyxFQUFFYixrREFGRTtBQUdiYyxFQUFBQSxRQUFRLEVBQUU7QUFIRyxDQUFmLEdBT0E7O0FBQ0EsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQUMsSUFBSTtBQUFBLHNCQUFJLG9CQUFDLGtEQUFELEVBQWVBLElBQWYsQ0FBSjtBQUFBLENBQXJCOztBQUdBLElBQU1aLElBQUksR0FBR08sa0ZBQWI7QUFFTyxJQUFNUSxJQUFJLEdBQUdKLFFBQVEsQ0FBQ0ssSUFBVCxDQUFjLEVBQWQsQ0FBYjtBQUNQRCxJQUFJLENBQUNILElBQUwsR0FBWTtBQUNWWixFQUFBQSxJQUFJLEVBQUVBLElBREk7QUFFVkMsRUFBQUEsTUFBTSxFQUFFO0FBRkUsQ0FBWiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0Ly4vc3JjL3Byb2plY3QvY29tcG9uZW50cy9kYXNoYm9hcmQvZGlyZWN0b3JzLmpzIiwid2VicGFjazovL3JlYWN0Ly4vc3JjL3Byb2plY3QvY29tcG9uZW50cy9kYXNoYm9hcmQvZGlyZWN0b3JzLnN0b3JpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERpcmVjdG9ycyggcGFyYW1zICl7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEsIGZvcm1hdCB9ID0gcGFyYW1zO1xuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvciB7IGVycm9yLnRvU3RyaW5nKCkgfTwvcD47XG5cbiAgaWYgKCFkYXRhIHx8IGRhdGEubGVuZ3RoID09PSAwKSByZXR1cm4gXCJOTyBEQVRBXCI7XG4gIFxuICByZXR1cm4gPGRpdj5cbiAgICB7ZGF0YX1cbiAgPC9kaXY+O1xufVxuXG5EaXJlY3RvcnMucHJvcFR5cGVzID0ge1xuICBkYXRhOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcblxuRGlyZWN0b3JzLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGF0YToge30sXG59O1xuXG5cbiIsImltcG9ydCBEaXJlY3RvcnMgZnJvbSAnLi9kaXJlY3RvcnMnXG5pbXBvcnQgbW9ja3VwRGF0YSBmcm9tICdyZXMvbW9jay1kYXRhL2Rhc2hib2FyZC5qc29uJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRpdGxlOiAnUGFnZS9EYXNoYm9hcmQvRGlyZWN0b3JzJyxcbiAgY29tcG9uZW50OiBEaXJlY3RvcnMsXG4gIGFyZ1R5cGVzOiB7XG4gIH0sXG59O1xuXG4vLyBOZXcgc3RvcnkgdXNpbmcgY29udHJvbHNcbmNvbnN0IFRlbXBsYXRlID0gYXJncyA9PiA8RGlyZWN0b3JzIHsuLi5hcmdzfSAvPjtcblxuXG5jb25zdCBkYXRhID0gbW9ja3VwRGF0YS5kYXRhLmRhc2hib2FyZC5kaXJlY3RvcnM7IFxuXG5leHBvcnQgY29uc3QgVGV4dCA9IFRlbXBsYXRlLmJpbmQoe30pO1xuVGV4dC5hcmdzID0ge1xuICBkYXRhOiBkYXRhLFxuICBmb3JtYXQ6ICd0ZXh0Jyxcbn07Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiRGlyZWN0b3JzIiwicGFyYW1zIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImZvcm1hdCIsInRvU3RyaW5nIiwibGVuZ3RoIiwicHJvcFR5cGVzIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIiwibW9ja3VwRGF0YSIsInRpdGxlIiwiY29tcG9uZW50IiwiYXJnVHlwZXMiLCJUZW1wbGF0ZSIsImFyZ3MiLCJkYXNoYm9hcmQiLCJkaXJlY3RvcnMiLCJUZXh0IiwiYmluZCJdLCJzb3VyY2VSb290IjoiIn0=