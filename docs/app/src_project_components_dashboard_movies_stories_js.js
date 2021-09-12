"use strict";
(self["webpackChunkreact"] = self["webpackChunkreact"] || []).push([["src_project_components_dashboard_movies_stories_js"],{

/***/ "./src/project/components/dashboard/movies.js":
/*!****************************************************!*\
  !*** ./src/project/components/dashboard/movies.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Movies)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


function Movies(params) {
  var loading = params.loading,
      error = params.error,
      data = params.data,
      format = params.format;
  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Loading...");
  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Error ", error.toString());
  if (!data || data.length === 0) return "NO DATA";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, data);
}
Movies.propTypes = {
  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
Movies.defaultProps = {
  data: {}
};

/***/ }),

/***/ "./src/project/components/dashboard/movies.stories.js":
/*!************************************************************!*\
  !*** ./src/project/components/dashboard/movies.stories.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "Text": () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var _movies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movies */ "./src/project/components/dashboard/movies.js");
/* harmony import */ var res_mock_data_dashboard_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! res/mock-data/dashboard.json */ "./src/project/res/mock-data/dashboard.json");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'Page/Dashboard/Movies',
  component: _movies__WEBPACK_IMPORTED_MODULE_0__["default"],
  argTypes: {}
}); // New story using controls

var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(_movies__WEBPACK_IMPORTED_MODULE_0__["default"], args);
};

var data = res_mock_data_dashboard_json__WEBPACK_IMPORTED_MODULE_1__.data.dashboard.movies;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3Byb2plY3RfY29tcG9uZW50c19kYXNoYm9hcmRfbW92aWVzX3N0b3JpZXNfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTRSxNQUFULENBQWlCQyxNQUFqQixFQUF5QjtBQUN0QyxNQUFRQyxPQUFSLEdBQXlDRCxNQUF6QyxDQUFRQyxPQUFSO0FBQUEsTUFBaUJDLEtBQWpCLEdBQXlDRixNQUF6QyxDQUFpQkUsS0FBakI7QUFBQSxNQUF3QkMsSUFBeEIsR0FBeUNILE1BQXpDLENBQXdCRyxJQUF4QjtBQUFBLE1BQThCQyxNQUE5QixHQUF5Q0osTUFBekMsQ0FBOEJJLE1BQTlCO0FBQ0EsTUFBSUgsT0FBSixFQUFhLG9CQUFPLHlFQUFQO0FBQ2IsTUFBSUMsS0FBSixFQUFXLG9CQUFPLHNFQUFXQSxLQUFLLENBQUNHLFFBQU4sRUFBWCxDQUFQO0FBRVgsTUFBSSxDQUFDRixJQUFELElBQVNBLElBQUksQ0FBQ0csTUFBTCxLQUFnQixDQUE3QixFQUFnQyxPQUFPLFNBQVA7QUFFaEMsc0JBQU8sOERBQ0pILElBREksQ0FBUDtBQUdEO0FBRURKLE1BQU0sQ0FBQ1EsU0FBUCxHQUFtQjtBQUNqQkosRUFBQUEsSUFBSSxFQUFFTCwwREFBZ0JVO0FBREwsQ0FBbkI7QUFJQVQsTUFBTSxDQUFDVSxZQUFQLEdBQXNCO0FBQ3BCTixFQUFBQSxJQUFJLEVBQUU7QUFEYyxDQUF0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUVBLGlFQUFlO0FBQ2JRLEVBQUFBLEtBQUssRUFBRSx1QkFETTtBQUViQyxFQUFBQSxTQUFTLEVBQUViLCtDQUZFO0FBR2JjLEVBQUFBLFFBQVEsRUFBRTtBQUhHLENBQWYsR0FPQTs7QUFDQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBQyxJQUFJO0FBQUEsc0JBQUksb0JBQUMsK0NBQUQsRUFBWUEsSUFBWixDQUFKO0FBQUEsQ0FBckI7O0FBR0EsSUFBTVosSUFBSSxHQUFHTywrRUFBYjtBQUVPLElBQU1RLElBQUksR0FBR0osUUFBUSxDQUFDSyxJQUFULENBQWMsRUFBZCxDQUFiO0FBQ1BELElBQUksQ0FBQ0gsSUFBTCxHQUFZO0FBQ1ZaLEVBQUFBLElBQUksRUFBRUEsSUFESTtBQUVWQyxFQUFBQSxNQUFNLEVBQUU7QUFGRSxDQUFaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QvLi9zcmMvcHJvamVjdC9jb21wb25lbnRzL2Rhc2hib2FyZC9tb3ZpZXMuanMiLCJ3ZWJwYWNrOi8vcmVhY3QvLi9zcmMvcHJvamVjdC9jb21wb25lbnRzL2Rhc2hib2FyZC9tb3ZpZXMuc3Rvcmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVzKCBwYXJhbXMgKXtcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSwgZm9ybWF0IH0gPSBwYXJhbXM7XG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVycm9yIHsgZXJyb3IudG9TdHJpbmcoKSB9PC9wPjtcblxuICBpZiAoIWRhdGEgfHwgZGF0YS5sZW5ndGggPT09IDApIHJldHVybiBcIk5PIERBVEFcIjtcbiAgXG4gIHJldHVybiA8ZGl2PlxuICAgIHtkYXRhfVxuICA8L2Rpdj47XG59XG5cbk1vdmllcy5wcm9wVHlwZXMgPSB7XG4gIGRhdGE6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5Nb3ZpZXMuZGVmYXVsdFByb3BzID0ge1xuICBkYXRhOiB7fSxcbn07XG5cblxuIiwiaW1wb3J0IE1vdmllcyBmcm9tICcuL21vdmllcydcbmltcG9ydCBtb2NrdXBEYXRhIGZyb20gJ3Jlcy9tb2NrLWRhdGEvZGFzaGJvYXJkLmpzb24nXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGl0bGU6ICdQYWdlL0Rhc2hib2FyZC9Nb3ZpZXMnLFxuICBjb21wb25lbnQ6IE1vdmllcyxcbiAgYXJnVHlwZXM6IHtcbiAgfSxcbn07XG5cbi8vIE5ldyBzdG9yeSB1c2luZyBjb250cm9sc1xuY29uc3QgVGVtcGxhdGUgPSBhcmdzID0+IDxNb3ZpZXMgey4uLmFyZ3N9IC8+O1xuXG5cbmNvbnN0IGRhdGEgPSBtb2NrdXBEYXRhLmRhdGEuZGFzaGJvYXJkLm1vdmllczsgXG5cbmV4cG9ydCBjb25zdCBUZXh0ID0gVGVtcGxhdGUuYmluZCh7fSk7XG5UZXh0LmFyZ3MgPSB7XG4gIGRhdGE6IGRhdGEsXG4gIGZvcm1hdDogJ3RleHQnLFxufTsiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJNb3ZpZXMiLCJwYXJhbXMiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiZm9ybWF0IiwidG9TdHJpbmciLCJsZW5ndGgiLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiLCJtb2NrdXBEYXRhIiwidGl0bGUiLCJjb21wb25lbnQiLCJhcmdUeXBlcyIsIlRlbXBsYXRlIiwiYXJncyIsImRhc2hib2FyZCIsIm1vdmllcyIsIlRleHQiLCJiaW5kIl0sInNvdXJjZVJvb3QiOiIifQ==