"use strict";
(self["webpackChunkreact"] = self["webpackChunkreact"] || []).push([["src_project_components_movies_Movies_stories_js"],{

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

/***/ }),

/***/ "./src/project/components/movies/Movies.stories.js":
/*!*********************************************************!*\
  !*** ./src/project/components/movies/Movies.stories.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "Controls": () => (/* binding */ Controls)
/* harmony export */ });
/* harmony import */ var _Movies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Movies */ "./src/project/components/movies/Movies.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'Movies story'
}); // New story using controls

var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(_Movies__WEBPACK_IMPORTED_MODULE_0__["default"], args);
};

var Controls = Template.bind({});
Controls.args = {
  loading: false
};
Controls.parameters = {
  apolloClient: {
    mocks: [{
      request: {
        query: _Movies__WEBPACK_IMPORTED_MODULE_0__.QRY_MOVIES
      },
      result: {
        "data": {
          "movies": [{
            "title": "Candy Jar",
            "description": "Dueling high school debate champs who are at odds on just about everything forge ahead with ambitious plans to get into the colleges of their dreams.",
            "country": ["United States"],
            "genre": ["Children & Family Movies", "Dramas", "Romantic Movies"]
          }, {
            "title": "Candy Online",
            "description": "When a wardrobe malfunction goes viral, a bubbly live streamer struggles to navigate her classmates' cruel judgment and the small town she lives in.",
            "country": ["Taiwan"],
            "genre": ["International TV Shows", "TV Dramas", "Teen TV Shows"]
          }, {
            "title": "Candyflip",
            "description": "On the incandescent shores of Goa, a young man tumbles down a mind-bending – and soon dangerous – series of trips after taking hallucinatory drugs.",
            "country": ["India"],
            "genre": ["Dramas", "Independent Movies", "International Movies"]
          }]
        }
      }
    }, {
      delay: 1e21,
      request: {
        query: _Movies__WEBPACK_IMPORTED_MODULE_0__.QRY_MOVIES
      },
      result: {
        data: {
          movies: []
        }
      }
    }, {
      request: {
        query: _Movies__WEBPACK_IMPORTED_MODULE_0__.QRY_MOVIES
      },
      error: new Error('This is a mock network error')
    }]
  }
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3Byb2plY3RfY29tcG9uZW50c19tb3ZpZXNfTW92aWVzX3N0b3JpZXNfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdPLElBQU1FLFVBQVUsR0FBR0YsbURBQUgsMkxBQWhCOztBQVlQLFNBQVNHLE1BQVQsR0FBa0I7QUFDaEIsa0JBQWlDRix3REFBUSxDQUFDQyxVQUFELENBQXpDO0FBQUEsTUFBUUUsT0FBUixhQUFRQSxPQUFSO0FBQUEsTUFBaUJDLEtBQWpCLGFBQWlCQSxLQUFqQjtBQUFBLE1BQXdCQyxJQUF4QixhQUF3QkEsSUFBeEI7O0FBRUEsTUFBSUYsT0FBSixFQUFhLG9CQUFPLDRDQUFQO0FBQ2IsTUFBSUMsS0FBSixFQUFXLG9CQUFPLHlDQUFXQSxLQUFLLENBQUNFLFFBQU4sRUFBWCxDQUFQO0FBRVgsU0FBT0QsSUFBSSxDQUFDRSxNQUFMLENBQVlDLEdBQVosQ0FBZ0IsVUFBRUMsS0FBRixFQUFTQyxHQUFUO0FBQUEsd0JBQ3JCO0FBQUssU0FBRyxFQUFFQTtBQUFWLG9CQUNFLGdDQUNHRCxLQUFLLENBQUNFLEtBRFQsQ0FERixlQUlFLCtCQUFLRixLQUFLLENBQUNHLFdBQVgsQ0FKRixlQUtFLHdEQUNFLGdDQUNFSCxLQUFLLENBQUNJLE9BQU4sQ0FBY0wsR0FBZCxDQUFtQixVQUFDSyxPQUFELEVBQVVDLElBQVY7QUFBQSwwQkFDbkI7QUFBSSxXQUFHLEVBQUVBO0FBQVQsY0FBa0JELE9BQWxCLE1BRG1CO0FBQUEsS0FBbkIsQ0FERixDQURGLENBTEYsZUFZRSxzREFDRSxnQ0FDRUosS0FBSyxDQUFDTSxLQUFOLENBQVlQLEdBQVosQ0FBaUIsVUFBQ08sS0FBRCxFQUFRQyxJQUFSO0FBQUEsMEJBQ2pCO0FBQUksV0FBRyxFQUFFQTtBQUFULGNBQWtCRCxLQUFsQixNQURpQjtBQUFBLEtBQWpCLENBREYsQ0FERixDQVpGLENBRHFCO0FBQUEsR0FBaEIsQ0FBUDtBQXNCRDs7QUFFRCxpRUFBZWIsTUFBZjs7Ozs7Ozs7Ozs7Ozs7OztBQzdDQTtBQUVBLGlFQUFlO0FBQ2JTLEVBQUFBLEtBQUssRUFBRTtBQURNLENBQWYsR0FLQTs7QUFDQSxJQUFNTSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBQyxJQUFJO0FBQUEsc0JBQUksb0JBQUMsK0NBQUQsRUFBWUEsSUFBWixDQUFKO0FBQUEsQ0FBckI7O0FBRU8sSUFBTUMsUUFBUSxHQUFHRixRQUFRLENBQUNHLElBQVQsQ0FBYyxFQUFkLENBQWpCO0FBRVBELFFBQVEsQ0FBQ0QsSUFBVCxHQUFnQjtBQUNkZixFQUFBQSxPQUFPLEVBQUU7QUFESyxDQUFoQjtBQUtBZ0IsUUFBUSxDQUFDRSxVQUFULEdBQXNCO0FBQ3BCQyxFQUFBQSxZQUFZLEVBQUU7QUFDWkMsSUFBQUEsS0FBSyxFQUFFLENBQ0w7QUFDRUMsTUFBQUEsT0FBTyxFQUFFO0FBQ1BDLFFBQUFBLEtBQUssRUFBRXhCLCtDQUFVQTtBQURWLE9BRFg7QUFJRXlCLE1BQUFBLE1BQU0sRUFBRTtBQUNOLGdCQUFRO0FBQ04sb0JBQVUsQ0FDUjtBQUNFLHFCQUFTLFdBRFg7QUFFRSwyQkFBZSx1SkFGakI7QUFHRSx1QkFBVyxDQUNULGVBRFMsQ0FIYjtBQU1FLHFCQUFTLENBQ1AsMEJBRE8sRUFFUCxRQUZPLEVBR1AsaUJBSE87QUFOWCxXQURRLEVBYVI7QUFDRSxxQkFBUyxjQURYO0FBRUUsMkJBQWUsc0pBRmpCO0FBR0UsdUJBQVcsQ0FDVCxRQURTLENBSGI7QUFNRSxxQkFBUyxDQUNQLHdCQURPLEVBRVAsV0FGTyxFQUdQLGVBSE87QUFOWCxXQWJRLEVBeUJSO0FBQ0UscUJBQVMsV0FEWDtBQUVFLDJCQUFlLHFKQUZqQjtBQUdFLHVCQUFXLENBQ1QsT0FEUyxDQUhiO0FBTUUscUJBQVMsQ0FDUCxRQURPLEVBRVAsb0JBRk8sRUFHUCxzQkFITztBQU5YLFdBekJRO0FBREo7QUFERjtBQUpWLEtBREssRUFnREw7QUFDRUMsTUFBQUEsS0FBSyxFQUFFLElBRFQ7QUFFRUgsTUFBQUEsT0FBTyxFQUFFO0FBQ1BDLFFBQUFBLEtBQUssRUFBRXhCLCtDQUFVQTtBQURWLE9BRlg7QUFLRXlCLE1BQUFBLE1BQU0sRUFBRTtBQUNOckIsUUFBQUEsSUFBSSxFQUFFO0FBQ0pFLFVBQUFBLE1BQU0sRUFBRTtBQURKO0FBREE7QUFMVixLQWhESyxFQTJETDtBQUNFaUIsTUFBQUEsT0FBTyxFQUFFO0FBQ1BDLFFBQUFBLEtBQUssRUFBRXhCLCtDQUFVQTtBQURWLE9BRFg7QUFJRUcsTUFBQUEsS0FBSyxFQUFFLElBQUl3QixLQUFKLENBQVUsOEJBQVY7QUFKVCxLQTNESztBQURLO0FBRE0sQ0FBdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC8uL3NyYy9wcm9qZWN0L2NvbXBvbmVudHMvbW92aWVzL01vdmllcy5qcyIsIndlYnBhY2s6Ly9yZWFjdC8uL3NyYy9wcm9qZWN0L2NvbXBvbmVudHMvbW92aWVzL01vdmllcy5zdG9yaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcblxuXG5leHBvcnQgY29uc3QgUVJZX01PVklFUyA9IGdxbGBcbiAgcXVlcnkgZ2V0TW92aWVzeyBcbiAgICBtb3ZpZXMobGltaXQ6Mikge1xuICAgICAgdGl0bGVcbiAgICAgIGRlc2NyaXB0aW9uXG4gICAgICBjb3VudHJ5XG4gICAgICBnZW5yZVxuICAgIH1cbiAgfVxuYDtcblxuXG5mdW5jdGlvbiBNb3ZpZXMoKSB7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KFFSWV9NT1ZJRVMpO1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVycm9yIHsgZXJyb3IudG9TdHJpbmcoKSB9PC9wPjtcblxuICByZXR1cm4gZGF0YS5tb3ZpZXMubWFwKCggbW92aWUsIGlkeCApID0+IChcbiAgICA8ZGl2IGtleT17aWR4fT5cbiAgICAgIDxoMT5cbiAgICAgICAge21vdmllLnRpdGxlfVxuICAgICAgPC9oMT5cbiAgICAgIDxwPnsgbW92aWUuZGVzY3JpcHRpb24gfTwvcD5cbiAgICAgIDxwPiBDb3VudHJ5XG4gICAgICAgIDx1bD4gXG4gICAgICAgIHsgbW92aWUuY291bnRyeS5tYXAoIChjb3VudHJ5LCBpZHhjICkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2lkeGN9PiB7IGNvdW50cnkgfSA8L2xpPlxuICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvcD5cbiAgICAgIDxwPiBHZW5yZVxuICAgICAgICA8dWw+IFxuICAgICAgICB7IG1vdmllLmdlbnJlLm1hcCggKGdlbnJlLCBpZHhnICkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2lkeGd9PiB7IGdlbnJlIH0gPC9saT5cbiAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gICkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZXM7XG4iLCJpbXBvcnQgTW92aWVzLCB7IFFSWV9NT1ZJRVMgfSBmcm9tICcuL01vdmllcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0aXRsZTogJ01vdmllcyBzdG9yeScsXG59O1xuXG5cbi8vIE5ldyBzdG9yeSB1c2luZyBjb250cm9sc1xuY29uc3QgVGVtcGxhdGUgPSBhcmdzID0+IDxNb3ZpZXMgey4uLmFyZ3N9IC8+O1xuXG5leHBvcnQgY29uc3QgQ29udHJvbHMgPSBUZW1wbGF0ZS5iaW5kKHt9KTtcblxuQ29udHJvbHMuYXJncyA9IHtcbiAgbG9hZGluZzogZmFsc2UsXG59O1xuXG5cbkNvbnRyb2xzLnBhcmFtZXRlcnMgPSB7XG4gIGFwb2xsb0NsaWVudDoge1xuICAgIG1vY2tzOiBbXG4gICAgICB7XG4gICAgICAgIHJlcXVlc3Q6IHtcbiAgICAgICAgICBxdWVyeTogUVJZX01PVklFUyxcbiAgICAgICAgfSxcbiAgICAgICAgcmVzdWx0OiB7XG4gICAgICAgICAgXCJkYXRhXCI6IHtcbiAgICAgICAgICAgIFwibW92aWVzXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJDYW5keSBKYXJcIixcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRHVlbGluZyBoaWdoIHNjaG9vbCBkZWJhdGUgY2hhbXBzIHdobyBhcmUgYXQgb2RkcyBvbiBqdXN0IGFib3V0IGV2ZXJ5dGhpbmcgZm9yZ2UgYWhlYWQgd2l0aCBhbWJpdGlvdXMgcGxhbnMgdG8gZ2V0IGludG8gdGhlIGNvbGxlZ2VzIG9mIHRoZWlyIGRyZWFtcy5cIixcbiAgICAgICAgICAgICAgICBcImNvdW50cnlcIjogW1xuICAgICAgICAgICAgICAgICAgXCJVbml0ZWQgU3RhdGVzXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiZ2VucmVcIjogW1xuICAgICAgICAgICAgICAgICAgXCJDaGlsZHJlbiAmIEZhbWlseSBNb3ZpZXNcIixcbiAgICAgICAgICAgICAgICAgIFwiRHJhbWFzXCIsXG4gICAgICAgICAgICAgICAgICBcIlJvbWFudGljIE1vdmllc1wiXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkNhbmR5IE9ubGluZVwiLFxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJXaGVuIGEgd2FyZHJvYmUgbWFsZnVuY3Rpb24gZ29lcyB2aXJhbCwgYSBidWJibHkgbGl2ZSBzdHJlYW1lciBzdHJ1Z2dsZXMgdG8gbmF2aWdhdGUgaGVyIGNsYXNzbWF0ZXMnIGNydWVsIGp1ZGdtZW50IGFuZCB0aGUgc21hbGwgdG93biBzaGUgbGl2ZXMgaW4uXCIsXG4gICAgICAgICAgICAgICAgXCJjb3VudHJ5XCI6IFtcbiAgICAgICAgICAgICAgICAgIFwiVGFpd2FuXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiZ2VucmVcIjogW1xuICAgICAgICAgICAgICAgICAgXCJJbnRlcm5hdGlvbmFsIFRWIFNob3dzXCIsXG4gICAgICAgICAgICAgICAgICBcIlRWIERyYW1hc1wiLFxuICAgICAgICAgICAgICAgICAgXCJUZWVuIFRWIFNob3dzXCJcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiQ2FuZHlmbGlwXCIsXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk9uIHRoZSBpbmNhbmRlc2NlbnQgc2hvcmVzIG9mIEdvYSwgYSB5b3VuZyBtYW4gdHVtYmxlcyBkb3duIGEgbWluZC1iZW5kaW5nIOKAkyBhbmQgc29vbiBkYW5nZXJvdXMg4oCTIHNlcmllcyBvZiB0cmlwcyBhZnRlciB0YWtpbmcgaGFsbHVjaW5hdG9yeSBkcnVncy5cIixcbiAgICAgICAgICAgICAgICBcImNvdW50cnlcIjogW1xuICAgICAgICAgICAgICAgICAgXCJJbmRpYVwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImdlbnJlXCI6IFtcbiAgICAgICAgICAgICAgICAgIFwiRHJhbWFzXCIsXG4gICAgICAgICAgICAgICAgICBcIkluZGVwZW5kZW50IE1vdmllc1wiLFxuICAgICAgICAgICAgICAgICAgXCJJbnRlcm5hdGlvbmFsIE1vdmllc1wiXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZGVsYXk6IDFlMjEsXG4gICAgICAgIHJlcXVlc3Q6IHtcbiAgICAgICAgICBxdWVyeTogUVJZX01PVklFUyxcbiAgICAgICAgfSxcbiAgICAgICAgcmVzdWx0OiB7XG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbW92aWVzOiBbXVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICByZXF1ZXN0OiB7XG4gICAgICAgICAgcXVlcnk6IFFSWV9NT1ZJRVMsXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBuZXcgRXJyb3IoJ1RoaXMgaXMgYSBtb2NrIG5ldHdvcmsgZXJyb3InKSxcbiAgICAgIH0sICAgIFxuICAgIF0sXG4gIH0sXG59OyJdLCJuYW1lcyI6WyJncWwiLCJ1c2VRdWVyeSIsIlFSWV9NT1ZJRVMiLCJNb3ZpZXMiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwidG9TdHJpbmciLCJtb3ZpZXMiLCJtYXAiLCJtb3ZpZSIsImlkeCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjb3VudHJ5IiwiaWR4YyIsImdlbnJlIiwiaWR4ZyIsIlRlbXBsYXRlIiwiYXJncyIsIkNvbnRyb2xzIiwiYmluZCIsInBhcmFtZXRlcnMiLCJhcG9sbG9DbGllbnQiLCJtb2NrcyIsInJlcXVlc3QiLCJxdWVyeSIsInJlc3VsdCIsImRlbGF5IiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9