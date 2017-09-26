/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.expect = exports.renderComponent = undefined;

var _jquery = __webpack_require__(4);

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(5);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _testUtils = __webpack_require__(6);

var _testUtils2 = _interopRequireDefault(_testUtils);

var _jsdom = __webpack_require__(7);

var _chai = __webpack_require__(8);

var _chai2 = _interopRequireDefault(_chai);

var _chaiJquery = __webpack_require__(9);

var _chaiJquery2 = _interopRequireDefault(_chaiJquery);

var _reactRedux = __webpack_require__(10);

var _redux = __webpack_require__(2);

var _reducers = __webpack_require__(11);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
// global.window = document.defaultView;
// global.navigator = { userAgent: 'node.js' };

var _ref = new _jsdom.JSDOM('<!doctype html><html><body></body></html>'),
    window = _ref.window;

var $ = (0, _jquery2.default)(window);
// Save these two objects in the global space so that libraries/tests
// can hook into them, using the above doc definition.
global.document = window.document;
global.window = window;

(0, _chaiJquery2.default)(_chai2.default, _chai2.default.util, $);

function renderComponent(ComponentClass) {
	var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	var componentInstance = _testUtils2.default.renderIntoDocument(_react2.default.createElement(
		_reactRedux.Provider,
		{ store: (0, _redux.createStore)(_reducers2.default, state) },
		_react2.default.createElement(ComponentClass, props)
	));

	return $(_reactDom2.default.findDOMNode(componentInstance));
}

$.fn.simulate = function (eventName, value) {
	if (value) {
		this.val(value);
	}
	TestUtils.Simulate[eventName](this[0]);
};

exports.renderComponent = renderComponent;
exports.expect = _chai.expect;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(0);

// This gets replaced by webpack with the updated files on rebuild
var __webpackManifest__ = ['/Users/dev/workspace/React/Projects/app_base/client/node_modules/mocha-webpack/lib/webpack/includeFilesLoader.js?{"include":["/Users/dev/workspace/React/Projects/app_base/client/test/test_helper.js"]}!./c2796b0fe116c6f5d9a1ecf7e6fce6e0-entry.js', '../../src/components/app', './components/App_test.js'];

var testsContext = __webpack_require__(12);

function inManifest(path) {
  return __webpackManifest__.indexOf(path) >= 0;
}

var runnable = testsContext.keys().filter(inManifest);

runnable.forEach(testsContext);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-dom/test-utils");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("jsdom");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("chai");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("chai-jquery");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(2);

var rootReducer = (0, _redux.combineReducers)({
	state: function state() {
		var _state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		return _state;
	}
});

exports.default = rootReducer;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/App_test.js": 13
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 12;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _test_helper = __webpack_require__(0);

var _app = __webpack_require__(14);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('App', function () {
	var component = void 0;

	beforeEach(function () {
		component = (0, _test_helper.renderComponent)(_app2.default);
	});

	it('renders something', function () {
		(0, _test_helper.expect)(component).to.exist;
	});
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
	_inherits(App, _Component);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				'Hello World'
			);
		}
	}]);

	return App;
}(_react.Component);

exports.default = App;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYzI3OTZiMGZlMTE2YzZmNWQ5YTFlY2Y3ZTZmY2U2ZTAtb3V0cHV0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDBlOTUxOGM1ODhhNTY5ZmRkNjNiIiwid2VicGFjazovLy8vVXNlcnMvZGV2L3dvcmtzcGFjZS9SZWFjdC9Qcm9qZWN0cy9hcHBfYmFzZS9jbGllbnQvdGVzdC90ZXN0X2hlbHBlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vLy4vYzI3OTZiMGZlMTE2YzZmNWQ5YTFlY2Y3ZTZmY2U2ZTAtZW50cnkuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tL3Rlc3QtdXRpbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc2RvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNoYWlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjaGFpLWpxdWVyeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9kZXYvd29ya3NwYWNlL1JlYWN0L1Byb2plY3RzL2FwcF9iYXNlL2NsaWVudC9zcmMvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9kZXYvd29ya3NwYWNlL1JlYWN0L1Byb2plY3RzL2FwcF9iYXNlL2NsaWVudC90ZXN0IG9iamVjdCBPYmplY3QiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9kZXYvd29ya3NwYWNlL1JlYWN0L1Byb2plY3RzL2FwcF9iYXNlL2NsaWVudC90ZXN0L2NvbXBvbmVudHMvQXBwX3Rlc3QuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9kZXYvd29ya3NwYWNlL1JlYWN0L1Byb2plY3RzL2FwcF9iYXNlL2NsaWVudC9zcmMvY29tcG9uZW50cy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMGU5NTE4YzU4OGE1NjlmZGQ2M2IiLCJpbXBvcnQgXyQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSZWFjdFRlc3RVdGlscyBmcm9tICdyZWFjdC1kb20vdGVzdC11dGlscyc7XG5pbXBvcnQgeyBKU0RPTSB9IGZyb20gJ2pzZG9tJztcbmltcG9ydCBjaGFpLCB7IGV4cGVjdCB9IGZyb20gJ2NoYWknO1xuaW1wb3J0IGNoYWlKcXVlcnkgZnJvbSAnY2hhaS1qcXVlcnknO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCByZWR1Y2VycyBmcm9tICcuLi9zcmMvcmVkdWNlcnMnO1xuXG4vLyBnbG9iYWwuZG9jdW1lbnQgPSBqc2RvbS5qc2RvbSgnPCFkb2N0eXBlIGh0bWw+PGh0bWw+PGJvZHk+PC9ib2R5PjwvaHRtbD4nKTtcbi8vIGdsb2JhbC53aW5kb3cgPSBkb2N1bWVudC5kZWZhdWx0Vmlldztcbi8vIGdsb2JhbC5uYXZpZ2F0b3IgPSB7IHVzZXJBZ2VudDogJ25vZGUuanMnIH07XG5cbmNvbnN0IHsgd2luZG93IH0gPSBuZXcgSlNET00oJzwhZG9jdHlwZSBodG1sPjxodG1sPjxib2R5PjwvYm9keT48L2h0bWw+Jyk7XG5jb25zdCAkID0gXyQod2luZG93KTtcbi8vIFNhdmUgdGhlc2UgdHdvIG9iamVjdHMgaW4gdGhlIGdsb2JhbCBzcGFjZSBzbyB0aGF0IGxpYnJhcmllcy90ZXN0c1xuLy8gY2FuIGhvb2sgaW50byB0aGVtLCB1c2luZyB0aGUgYWJvdmUgZG9jIGRlZmluaXRpb24uXG5nbG9iYWwuZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQ7XG5nbG9iYWwud2luZG93ID0gd2luZG93O1xuXG5jaGFpSnF1ZXJ5KGNoYWksIGNoYWkudXRpbCwgJCk7XG5cbmZ1bmN0aW9uIHJlbmRlckNvbXBvbmVudChDb21wb25lbnRDbGFzcywgcHJvcHMgPSB7fSwgc3RhdGUgPSB7fSkge1xuXHRjb25zdCBjb21wb25lbnRJbnN0YW5jZSA9IFJlYWN0VGVzdFV0aWxzLnJlbmRlckludG9Eb2N1bWVudChcblx0XHQ8UHJvdmlkZXIgc3RvcmU9e2NyZWF0ZVN0b3JlKHJlZHVjZXJzLCBzdGF0ZSl9PlxuXHRcdFx0PENvbXBvbmVudENsYXNzIHsuLi5wcm9wc30gLz5cblx0XHQ8L1Byb3ZpZGVyPlxuXHQpO1xuXG5cdHJldHVybiAkKFJlYWN0RE9NLmZpbmRET01Ob2RlKGNvbXBvbmVudEluc3RhbmNlKSk7XG59XG5cbiQuZm4uc2ltdWxhdGUgPSBmdW5jdGlvbihldmVudE5hbWUsIHZhbHVlKSB7XG5cdGlmICh2YWx1ZSkge1xuXHRcdHRoaXMudmFsKHZhbHVlKTtcblx0fVxuXHRUZXN0VXRpbHMuU2ltdWxhdGVbZXZlbnROYW1lXSh0aGlzWzBdKTtcbn07XG5cbmV4cG9ydCB7IHJlbmRlckNvbXBvbmVudCwgZXhwZWN0IH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL2Rldi93b3Jrc3BhY2UvUmVhY3QvUHJvamVjdHMvYXBwX2Jhc2UvY2xpZW50L3Rlc3QvdGVzdF9oZWxwZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWR1eFwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgIC8vIFRoaXMgZ2V0cyByZXBsYWNlZCBieSB3ZWJwYWNrIHdpdGggdGhlIHVwZGF0ZWQgZmlsZXMgb24gcmVidWlsZFxuICAgIHZhciBfX3dlYnBhY2tNYW5pZmVzdF9fID0gW107XG5cbiAgICB2YXIgdGVzdHNDb250ZXh0ID0gcmVxdWlyZS5jb250ZXh0KFwiLi4vLi4vdGVzdFwiLCBmYWxzZSk7XG5cbiAgICBmdW5jdGlvbiBpbk1hbmlmZXN0KHBhdGgpIHtcbiAgICAgIHJldHVybiBfX3dlYnBhY2tNYW5pZmVzdF9fLmluZGV4T2YocGF0aCkgPj0gMDtcbiAgICB9XG5cbiAgICB2YXIgcnVubmFibGUgPSB0ZXN0c0NvbnRleHQua2V5cygpLmZpbHRlcihpbk1hbmlmZXN0KTtcblxuICAgIHJ1bm5hYmxlLmZvckVhY2godGVzdHNDb250ZXh0KTtcbiAgICBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jMjc5NmIwZmUxMTZjNmY1ZDlhMWVjZjdlNmZjZTZlMC1lbnRyeS5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpxdWVyeVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImpxdWVyeVwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWRvbVwiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS90ZXN0LXV0aWxzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtZG9tL3Rlc3QtdXRpbHNcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc2RvbVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImpzZG9tXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hhaVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNoYWlcIlxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjaGFpLWpxdWVyeVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNoYWktanF1ZXJ5XCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcblx0c3RhdGU6IChzdGF0ZSA9IHt9KSA9PiBzdGF0ZVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9kZXYvd29ya3NwYWNlL1JlYWN0L1Byb2plY3RzL2FwcF9iYXNlL2NsaWVudC9zcmMvcmVkdWNlcnMvaW5kZXguanMiLCJ2YXIgbWFwID0ge1xuXHRcIi4vY29tcG9uZW50cy9BcHBfdGVzdC5qc1wiOiAxM1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpO1xuXHRyZXR1cm4gaWQ7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDEyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy9kZXYvd29ya3NwYWNlL1JlYWN0L1Byb2plY3RzL2FwcF9iYXNlL2NsaWVudC90ZXN0IG9iamVjdCBPYmplY3Rcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IHJlbmRlckNvbXBvbmVudCwgZXhwZWN0IH0gZnJvbSAnLi4vdGVzdF9oZWxwZXInO1xuaW1wb3J0IEFwcCBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9hcHAnO1xuXG5kZXNjcmliZSgnQXBwJywgKCkgPT4ge1xuXHRsZXQgY29tcG9uZW50O1xuXG5cdGJlZm9yZUVhY2goKCkgPT4ge1xuXHRcdGNvbXBvbmVudCA9IHJlbmRlckNvbXBvbmVudChBcHApO1xuXHR9KTtcblxuXHRpdCgncmVuZGVycyBzb21ldGhpbmcnLCAoKSA9PiB7XG5cdFx0ZXhwZWN0KGNvbXBvbmVudCkudG8uZXhpc3Q7XG5cdH0pO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL2Rldi93b3Jrc3BhY2UvUmVhY3QvUHJvamVjdHMvYXBwX2Jhc2UvY2xpZW50L3Rlc3QvY29tcG9uZW50cy9BcHBfdGVzdC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gPGRpdj5IZWxsbyBXb3JsZDwvZGl2Pjtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL2Rldi93b3Jrc3BhY2UvUmVhY3QvUHJvamVjdHMvYXBwX2Jhc2UvY2xpZW50L3NyYy9jb21wb25lbnRzL2FwcC5qcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUMxQ0E7QUFDQTs7Ozs7QUNEQTtBQUNBOzs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNiQTtBQUNBOzs7OztBQ0RBO0FBQ0E7Ozs7O0FDREE7QUFDQTs7Ozs7QUNEQTtBQUNBOzs7OztBQ0RBO0FBQ0E7Ozs7O0FDREE7QUFDQTs7Ozs7QUNEQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFDQTtBQUdBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7QUFHQTtBQUNBOzsiLCJzb3VyY2VSb290IjoiIn0=