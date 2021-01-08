module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/_error.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/_error.js":
/*!*****************************!*\
  !*** ./src/pages/_error.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/bill.chen/Repo/studyplan-client/src/pages/_error.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Cross = function Cross(props) {\n  return __jsx(\"svg\", props, __jsx(\"path\", {\n    d: \"M100.089 129.793L1.414 31.107 31.107 1.414l98.686 98.675.707.707.707-.707 98.675-98.675 29.704 29.693-98.686 98.686-.707.707.707.707 98.686 98.675-29.704 29.704-98.675-98.686-.707-.707-.707.707-98.686 98.686-29.693-29.704 98.675-98.675.707-.707-.707-.707z\",\n    stroke: \"#000\",\n    strokeWidth: \"2\"\n  }));\n};\n\nCross.defaultProps = {\n  width: \"261\",\n  height: \"261\",\n  viewBox: \"0 0 261 261\",\n  fill: \"none\",\n  xmlns: \"http://www.w3.org/2000/svg\"\n};\n\nfunction Error({\n  statusCode\n}) {\n  return __jsx(\"section\", {\n    className: \"Error\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, \"Course Planner\")), __jsx(Cross, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }), __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'));\n}\n\nError.getInitialProps = ({\n  res,\n  err\n}) => {\n  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;\n  return {\n    statusCode\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Error);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2Vycm9yLmpzPzUxMTMiXSwibmFtZXMiOlsiQ3Jvc3MiLCJFcnJvciIsInN0YXR1c0NvZGUiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBOztJQUUyQkEsSyxZQUFBQSxLOzs7Ozs7OztBQUFBQSxLOzs7Ozs7OztBQUUzQixTQUFTQyxLQUFULENBQWU7QUFBRUM7QUFBRixDQUFmLEVBQStCO0FBQzdCLFNBQ0U7QUFBUyxhQUFTLEVBQUMsT0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsQ0FERixFQU1FLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtBLFVBQVUsR0FBSSxZQUFXQSxVQUFXLHFCQUExQixHQUFpRCw2QkFBaEUsQ0FQRixDQURGO0FBV0Q7O0FBRURELEtBQUssQ0FBQ0UsZUFBTixHQUF3QixDQUFDO0FBQUVDLEtBQUY7QUFBT0M7QUFBUCxDQUFELEtBQWtCO0FBQ3hDLFFBQU1ILFVBQVUsR0FBR0UsR0FBRyxHQUFHQSxHQUFHLENBQUNGLFVBQVAsR0FBb0JHLEdBQUcsR0FBR0EsR0FBRyxDQUFDSCxVQUFQLEdBQW9CLEdBQWpFO0FBQ0EsU0FBTztBQUFFQTtBQUFGLEdBQVA7QUFDRCxDQUhEOztBQUtlRCxvRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9fZXJyb3IuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuaW1wb3J0IHsgUmVhY3RDb21wb25lbnQgYXMgQ3Jvc3MgfSBmcm9tICcuLi9hc3NldHMvc3Zncy9jcm9zcy5zdmcnO1xuXG5mdW5jdGlvbiBFcnJvcih7IHN0YXR1c0NvZGUgfSkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIkVycm9yXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNvdXJzZSBQbGFubmVyPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuXG4gICAgICA8Q3Jvc3MgLz5cbiAgICAgIDxoMT57c3RhdHVzQ29kZSA/IGBBbiBlcnJvciAke3N0YXR1c0NvZGV9IG9jY3VycmVkIG9uIHNlcnZlcmAgOiAnQW4gZXJyb3Igb2NjdXJyZWQgb24gY2xpZW50J308L2gxPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuRXJyb3IuZ2V0SW5pdGlhbFByb3BzID0gKHsgcmVzLCBlcnIgfSkgPT4ge1xuICBjb25zdCBzdGF0dXNDb2RlID0gcmVzID8gcmVzLnN0YXR1c0NvZGUgOiBlcnIgPyBlcnIuc3RhdHVzQ29kZSA6IDQwNDtcbiAgcmV0dXJuIHsgc3RhdHVzQ29kZSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXJyb3I7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_error.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });