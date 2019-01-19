webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/UI/navigation/nav.js":
/*!*****************************************!*\
  !*** ./components/UI/navigation/nav.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/theodore/Desktop/Umeet/umeet-site/components/UI/navigation/nav.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Navigation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Navigation, _React$Component);

  function Navigation(props) {
    var _this;

    _classCallCheck(this, Navigation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Navigation).call(this, props));
    _this.state = {
      links: []
    };

    for (var i = 0; i < props.pages.length; i++) {
      addNavbarEntry(props.pages[i].linkText, props.pages[i].activeLink, props.pages[i].linkTo);
    }

    return _this;
  }

  _createClass(Navigation, [{
    key: "addNavbarEntry",
    value: function addNavbarEntry(linkText, activeLink, linkTo) {
      if (activeLink) {
        this.setState(function (prevState) {
          return {
            links: [].concat(_toConsumableArray(prevState.links), [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
              class: "active",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: "{linkTo}",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              },
              __self: this
            }, linkText))])
          };
        });
      } else {
        this.setState(function (prevState) {
          return {
            links: [].concat(_toConsumableArray(prevState.links), [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              href: "{linkTo}",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              },
              __self: this
            }, linkText))])
          };
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "nav-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "{this.props.pages.home.linkTo}",
        class: "brand-logo center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "UMEET"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        class: "left hide-on-med-and-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, this.state.links)));
    }
  }]);

  return Navigation;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ })

})
//# sourceMappingURL=index.js.fd8fdd9b545b37fdb7f6.hot-update.js.map