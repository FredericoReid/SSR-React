webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_wamp64_www_SSR_ssr_react_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\wamp64\\www\\SSR\\ssr-react\\src\\pages\\index.js";



class Home extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/blog",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: "Blog"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Estes s\xE3o os reposit\xF3rios do GitHub de Frederico Reid :)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
        children: "Desative o Javascript da p\xE1gina para ver o "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), this.props.repositories.map(repo => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: repo.name
      }, repo.id, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }, this))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this);
  }

}

Object(C_wamp64_www_SSR_ssr_react_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, "getInitialProps", async () => {
  const response = await fetch("https://api.github.com/users/FredericoReid/repos");
  return {
    repositories: await response.json()
  };
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJwcm9wcyIsInJlcG9zaXRvcmllcyIsIm1hcCIsInJlcG8iLCJuYW1lIiwiaWQiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsTUFBTUEsSUFBTixTQUFtQkMsK0NBQW5CLENBQTZCO0FBUzFDQyxRQUFNLEdBQUc7QUFDUCx3QkFDRTtBQUFBLDhCQUNFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLE9BQVg7QUFBQSwrQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkYsZUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEYsZUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGLEVBU0csS0FBS0MsS0FBTCxDQUFXQyxZQUFYLENBQXdCQyxHQUF4QixDQUE0QkMsSUFBSSxpQkFDL0I7QUFBQSxrQkFBbUJBLElBQUksQ0FBQ0M7QUFBeEIsU0FBU0QsSUFBSSxDQUFDRSxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxDQVRIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBZUQ7O0FBekJ5Qzs7bUpBQXZCUixJLHFCQUNNLFlBQVk7QUFDbkMsUUFBTVMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FDMUIsa0RBRDBCLENBQTVCO0FBSUEsU0FBTztBQUFFTixnQkFBWSxFQUFFLE1BQU1LLFFBQVEsQ0FBQ0UsSUFBVDtBQUF0QixHQUFQO0FBQ0QsQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hOGU1ODJjMTdkZGVjNzVlOGQyMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgXCJpc29tb3JwaGljLWZldGNoXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL0ZyZWRlcmljb1JlaWQvcmVwb3NcIlxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4geyByZXBvc2l0b3JpZXM6IGF3YWl0IHJlc3BvbnNlLmpzb24oKSB9O1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nXCI+XHJcbiAgICAgICAgICAgIDxhPkJsb2c8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxoMT5Fc3RlcyBzw6NvIG9zIHJlcG9zaXTDs3Jpb3MgZG8gR2l0SHViIGRlIEZyZWRlcmljbyBSZWlkIDopPC9oMT5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8aDY+RGVzYXRpdmUgbyBKYXZhc2NyaXB0IGRhIHDDoWdpbmEgcGFyYSB2ZXIgbyA8L2g2PlxyXG4gICAgICAgIHt0aGlzLnByb3BzLnJlcG9zaXRvcmllcy5tYXAocmVwbyA9PiAoXHJcbiAgICAgICAgICA8aDMga2V5PXtyZXBvLmlkfT57cmVwby5uYW1lfTwvaDM+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9