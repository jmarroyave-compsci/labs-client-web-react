"use strict";
(self["webpackChunkreact"] = self["webpackChunkreact"] || []).push([["src_project_components_charts_pie_chart_stories_js"],{

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

/***/ }),

/***/ "./src/project/components/charts/pie_chart.stories.js":
/*!************************************************************!*\
  !*** ./src/project/components/charts/pie_chart.stories.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "Test": () => (/* binding */ Test)
/* harmony export */ });
/* harmony import */ var _pie_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pie_chart */ "./src/project/components/charts/pie_chart.js");
/* harmony import */ var res_mock_data_dashboard_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! res/mock-data/dashboard.json */ "./src/project/res/mock-data/dashboard.json");


var data = res_mock_data_dashboard_json__WEBPACK_IMPORTED_MODULE_1__.data.dashboard.types;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'Components/PieChart',
  component: _pie_chart__WEBPACK_IMPORTED_MODULE_0__["default"],
  argTypes: {}
});

var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(_pie_chart__WEBPACK_IMPORTED_MODULE_0__["default"], args);
};

var Test = Template.bind({});
Test.args = {
  data: data
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3Byb2plY3RfY29tcG9uZW50c19jaGFydHNfcGllX2NoYXJ0X3N0b3JpZXNfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUksTUFBTSxHQUFHLENBQUMsUUFBRCxFQUFVLFFBQVYsRUFBbUIsUUFBbkIsRUFBNEIsUUFBNUIsRUFBcUMsUUFBckMsRUFBOEMsUUFBOUMsRUFBdUQsUUFBdkQsRUFBZ0UsUUFBaEUsRUFBeUUsUUFBekUsRUFBa0YsUUFBbEYsQ0FBZjs7QUFHQSxTQUFTRixRQUFULENBQWtCRyxNQUFsQixFQUF5QjtBQUN2QixNQUFNQyxJQUFOLEdBQWVELE1BQWYsQ0FBTUMsSUFBTjtBQUVBLHNCQUFPLGlEQUFDLDZEQUFEO0FBQ0gsUUFBSSxFQUFFQyxjQUFjLENBQUNELElBQUQsQ0FEakI7QUFFSCxTQUFLLEVBQUUsZUFBQ0UsR0FBRDtBQUFBLGFBQVNDLFdBQVcsQ0FBQ0QsR0FBRCxDQUFwQjtBQUFBLEtBRko7QUFHSCxjQUFVLEVBQUU7QUFBQ0UsTUFBQUEsUUFBUSxFQUFFO0FBQVg7QUFIVCxJQUFQO0FBS0Q7O0FBRUQsU0FBU0QsV0FBVCxDQUFxQkQsR0FBckIsRUFBeUI7QUFDdkJHLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixHQUFaO0FBQ0EsbUJBQVVBLEdBQUcsQ0FBQ0ssU0FBSixDQUFjQyxLQUF4QixlQUFrQ04sR0FBRyxDQUFDSyxTQUFKLENBQWNFLFVBQWQsQ0FBeUJDLE9BQXpCLENBQWlDLENBQWpDLENBQWxDO0FBQ0Q7O0FBRUQsU0FBU1QsY0FBVCxDQUF3QlUsR0FBeEIsRUFBNEI7QUFDMUIsTUFBSVgsSUFBSSxHQUFHLEVBQVg7QUFFQUssRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlLLEdBQVo7QUFFQUMsRUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVlGLEdBQVosRUFBaUJHLE9BQWpCLENBQTBCLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ3RDaEIsSUFBQUEsSUFBSSxDQUFDaUIsSUFBTCxDQUFXO0FBQUNULE1BQUFBLEtBQUssRUFBRU8sR0FBUjtBQUFhRyxNQUFBQSxLQUFLLEVBQUVQLEdBQUcsQ0FBQ0ksR0FBRCxDQUF2QjtBQUE4QkksTUFBQUEsS0FBSyxhQUFNckIsTUFBTSxDQUFDa0IsR0FBRCxDQUFaO0FBQW5DLEtBQVg7QUFDRCxHQUZEO0FBSUFYLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTixJQUFaO0FBRUEsU0FBT0EsSUFBUDtBQUNEOztBQUlESixRQUFRLENBQUN3QixTQUFULEdBQXFCO0FBQ25CcEIsRUFBQUEsSUFBSSxFQUFFTCwwREFBZ0IwQjtBQURILENBQXJCO0FBSUF6QixRQUFRLENBQUMwQixZQUFULEdBQXdCO0FBQ3RCdEIsRUFBQUEsSUFBSSxFQUFFO0FBRGdCLENBQXhCO0FBS0EsaUVBQWVKLFFBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0NBO0FBQ0E7QUFDQSxJQUFNSSxJQUFJLEdBQUd1Qiw4RUFBYjtBQUVBLGlFQUFlO0FBQ2JmLEVBQUFBLEtBQUssRUFBRSxxQkFETTtBQUVia0IsRUFBQUEsU0FBUyxFQUFFOUIsa0RBRkU7QUFHYitCLEVBQUFBLFFBQVEsRUFBRTtBQUhHLENBQWY7O0FBT0EsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQUMsSUFBSTtBQUFBLHNCQUFJLG9CQUFDLGtEQUFELEVBQWNBLElBQWQsQ0FBSjtBQUFBLENBQXJCOztBQUVPLElBQU1DLElBQUksR0FBR0YsUUFBUSxDQUFDRyxJQUFULENBQWMsRUFBZCxDQUFiO0FBQ1BELElBQUksQ0FBQ0QsSUFBTCxHQUFZO0FBQ1Y3QixFQUFBQSxJQUFJLEVBQUVBO0FBREksQ0FBWiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0Ly4vc3JjL3Byb2plY3QvY29tcG9uZW50cy9jaGFydHMvcGllX2NoYXJ0LmpzIiwid2VicGFjazovL3JlYWN0Ly4vc3JjL3Byb2plY3QvY29tcG9uZW50cy9jaGFydHMvcGllX2NoYXJ0LnN0b3JpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBQaWVDaGFydCBhcyBSTVBpZUNoYXJ0IH0gZnJvbSAncmVhY3QtbWluaW1hbC1waWUtY2hhcnQnO1xuXG5jb25zdCBDT0xPUlMgPSBbXCI1YmMwZWJcIixcImFjZDQ5Y1wiLFwiZmRlNzRjXCIsXCJlNWRmNDlcIixcImNjZDY0NVwiLFwiOWJjNTNkXCIsXCJjMDhmMzlcIixcImU1NTkzNFwiLFwiZjA2OTJiXCIsXCJmYTc5MjFcIl1cblxuXG5mdW5jdGlvbiBQaWVDaGFydChwYXJhbXMpe1xuICB2YXIgeyBkYXRhIH0gPSBwYXJhbXM7XG5cbiAgcmV0dXJuIDxSTVBpZUNoYXJ0XG4gICAgICBkYXRhPXtwYXJzZU1hcFRvRGF0YShkYXRhKX1cbiAgICAgIGxhYmVsPXsobGJsKSA9PiByZW5kZXJMYWJlbChsYmwpfVxuICAgICAgbGFiZWxTdHlsZT17e2ZvbnRTaXplOiAnMC41cmVtJ319XG4gICAgLz47XG59XG5cbmZ1bmN0aW9uIHJlbmRlckxhYmVsKGxibCl7XG4gIGNvbnNvbGUubG9nKGxibClcbiAgcmV0dXJuIGAke2xibC5kYXRhRW50cnkudGl0bGV9OiAke2xibC5kYXRhRW50cnkucGVyY2VudGFnZS50b0ZpeGVkKDApfSVgXG59XG5cbmZ1bmN0aW9uIHBhcnNlTWFwVG9EYXRhKG1hcCl7XG4gIHZhciBkYXRhID0gW107XG5cbiAgY29uc29sZS5sb2cobWFwKVxuXG4gIE9iamVjdC5rZXlzKG1hcCkuZm9yRWFjaCggKGtleSwgaWR4KSA9PiB7XG4gICAgZGF0YS5wdXNoKCB7dGl0bGU6IGtleSwgdmFsdWU6IG1hcFtrZXldLCBjb2xvcjogYCMke0NPTE9SU1tpZHhdfWAgfSApO1xuICB9KVxuXG4gIGNvbnNvbGUubG9nKGRhdGEpXG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cblxuXG5QaWVDaGFydC5wcm9wVHlwZXMgPSB7XG4gIGRhdGE6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5QaWVDaGFydC5kZWZhdWx0UHJvcHMgPSB7XG4gIGRhdGE6IG51bGwsXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFBpZUNoYXJ0OyIsImltcG9ydCBQaWVDaGFydCBmcm9tICcuL3BpZV9jaGFydCdcbmltcG9ydCBtb2NrdXBEYXRhIGZyb20gJ3Jlcy9tb2NrLWRhdGEvZGFzaGJvYXJkLmpzb24nXG5jb25zdCBkYXRhID0gbW9ja3VwRGF0YS5kYXRhLmRhc2hib2FyZC50eXBlczsgXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGl0bGU6ICdDb21wb25lbnRzL1BpZUNoYXJ0JyxcbiAgY29tcG9uZW50OiBQaWVDaGFydCxcbiAgYXJnVHlwZXM6IHtcbiAgfSxcbn07XG5cbmNvbnN0IFRlbXBsYXRlID0gYXJncyA9PiA8UGllQ2hhcnQgey4uLmFyZ3N9IC8+O1xuXG5leHBvcnQgY29uc3QgVGVzdCA9IFRlbXBsYXRlLmJpbmQoe30pO1xuVGVzdC5hcmdzID0ge1xuICBkYXRhOiBkYXRhLFxufTtcblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiUGllQ2hhcnQiLCJSTVBpZUNoYXJ0IiwiQ09MT1JTIiwicGFyYW1zIiwiZGF0YSIsInBhcnNlTWFwVG9EYXRhIiwibGJsIiwicmVuZGVyTGFiZWwiLCJmb250U2l6ZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhRW50cnkiLCJ0aXRsZSIsInBlcmNlbnRhZ2UiLCJ0b0ZpeGVkIiwibWFwIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJpZHgiLCJwdXNoIiwidmFsdWUiLCJjb2xvciIsInByb3BUeXBlcyIsIm9iamVjdCIsImRlZmF1bHRQcm9wcyIsIm1vY2t1cERhdGEiLCJkYXNoYm9hcmQiLCJ0eXBlcyIsImNvbXBvbmVudCIsImFyZ1R5cGVzIiwiVGVtcGxhdGUiLCJhcmdzIiwiVGVzdCIsImJpbmQiXSwic291cmNlUm9vdCI6IiJ9