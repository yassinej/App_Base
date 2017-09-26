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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/dev/workspace/React/Projects/app_base/client/test/test_helper.js Unexpected token (21:2)\nYou may need an appropriate loader to handle this file type.\n| function renderComponent(ComponentClass, props = {}, state = {}) {\n| \tconst componentInstance = TestUtils.renderIntoDocument(\n| \t\t<Provider store={createStore(reducers, state)}>\n| \t\t\t<ComponentClass {...props} />\n| \t\t</Provider>");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


    var testsContext = __webpack_require__(2);

    var runnable = testsContext.keys();

    runnable.forEach(testsContext);
    

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/App_test.js": 3,
	"./test_helper.js": 0
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
webpackContext.id = 2;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__test_helper__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__test_helper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__test_helper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_components_app__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_components_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_components_app__);



describe('App', () => {
	let component;

	beforeEach(() => {
		component = Object(__WEBPACK_IMPORTED_MODULE_0__test_helper__["renderComponent"])(__WEBPACK_IMPORTED_MODULE_1__src_components_app__["default"]);
	});

	it('renders something', () => {
		Object(__WEBPACK_IMPORTED_MODULE_0__test_helper__["expect"])(component).to.exist;
	});
});


/***/ }),
/* 4 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/dev/workspace/React/Projects/app_base/client/src/components/app.js Unexpected token (5:9)\nYou may need an appropriate loader to handle this file type.\n| class App extends Component {\n| \trender() {\n| \t\treturn <div>Hello World</div>;\n| \t}\n| }");

/***/ })
/******/ ]);