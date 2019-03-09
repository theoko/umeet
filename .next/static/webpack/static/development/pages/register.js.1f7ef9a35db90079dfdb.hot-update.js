webpackHotUpdate("static/development/pages/register.js",{

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_UI_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/UI/header/header */ "./components/UI/header/header.js");
/* harmony import */ var _components_UI_navigation_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/UI/navigation/nav */ "./components/UI/navigation/nav.js");
/* harmony import */ var _components_UI_pages_register_fields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/UI/pages/register/fields */ "./components/UI/pages/register/fields.js");
/* harmony import */ var _components_UI_pages_register_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/UI/pages/register/card */ "./components/UI/pages/register/card.js");
/* harmony import */ var _components_UI_footer_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/UI/footer/footer */ "./components/UI/footer/footer.js");
var _jsxFileName = "/Users/theoko/Desktop/umeet-project/umeet/pages/register.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Register =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Register, _React$Component);

  function Register(props) {
    _classCallCheck(this, Register);

    return _possibleConstructorReturn(this, _getPrototypeOf(Register).call(this, props));
  }

  _createClass(Register, [{
    key: "register",
    value: function register() {// Check that the .edu email is valid
    }
  }, {
    key: "render",
    value: function render() {
      var pages = [['Home', false, '/'], ['About', false, '/about'], ['Register', true, '/register']];
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_header_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
        page: {
          title: 'Register'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_navigation_nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
        pages: pages,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col s6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, _components_UI_pages_register_fields__WEBPACK_IMPORTED_MODULE_3__["default"], react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: register,
        className: "waves-effect waves-light btn-large",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "REGISTER")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col s6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, _components_UI_pages_register_card__WEBPACK_IMPORTED_MODULE_4__["default"])), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_footer_footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
        pages: pages,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }));
    }
  }]);

  return Register;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Register);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/register")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=register.js.1f7ef9a35db90079dfdb.hot-update.js.map