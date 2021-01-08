module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/_app": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({"Unsupported":"Unsupported"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/normalize.css/normalize.css\n");

/***/ }),

/***/ "./src/components/Layout/Layout.js":
/*!*****************************************!*\
  !*** ./src/components/Layout/Layout.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _jam3_react_check_extra_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jam3/react-check-extra-props */ \"@jam3/react-check-extra-props\");\n/* harmony import */ var _jam3_react_check_extra_props__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_jam3_react_check_extra_props__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Layout.module.scss */ \"./src/components/Layout/Layout.module.scss\");\n/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_scss__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/bill.chen/Repo/studyplan-client/src/components/Layout/Layout.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n // import useLayout from '../../utils/hooks/use-layout';\n\nfunction Layout({\n  children\n}) {\n  // const layout = useLayout().layout;\n  return __jsx(\"main\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_Layout_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Layout),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 10\n    }\n  }, children);\n}\n\nLayout.propTypes = _jam3_react_check_extra_props__WEBPACK_IMPORTED_MODULE_2___default()({\n  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]).isRequired\n});\nLayout.defaultProps = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmpzP2M4MTYiXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJjbGFzc25hbWVzIiwic3R5bGVzIiwicHJvcFR5cGVzIiwiY2hlY2tQcm9wcyIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsImFycmF5T2YiLCJub2RlIiwiaXNSZXF1aXJlZCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBSUE7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQjtBQUFFQztBQUFGLENBQWhCLEVBQThCO0FBQzVCO0FBRUEsU0FBTztBQUFNLGFBQVMsRUFBRUMsaURBQVUsQ0FBQ0MsMERBQU0sQ0FBQ0gsTUFBUixDQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTZDQyxRQUE3QyxDQUFQO0FBQ0Q7O0FBRURELE1BQU0sQ0FBQ0ksU0FBUCxHQUFtQkMsb0VBQVUsQ0FBQztBQUM1QkosVUFBUSxFQUFFSyxpREFBUyxDQUFDQyxTQUFWLENBQW9CLENBQUNELGlEQUFTLENBQUNFLE9BQVYsQ0FBa0JGLGlEQUFTLENBQUNHLElBQTVCLENBQUQsRUFBb0NILGlEQUFTLENBQUNHLElBQTlDLENBQXBCLEVBQXlFQztBQUR2RCxDQUFELENBQTdCO0FBSUFWLE1BQU0sQ0FBQ1csWUFBUCxHQUFzQixFQUF0QjtBQUVlWCxxRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0xheW91dC9MYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjaGVja1Byb3BzIGZyb20gJ0BqYW0zL3JlYWN0LWNoZWNrLWV4dHJhLXByb3BzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGF5b3V0Lm1vZHVsZS5zY3NzJztcblxuLy8gaW1wb3J0IHVzZUxheW91dCBmcm9tICcuLi8uLi91dGlscy9ob29rcy91c2UtbGF5b3V0JztcblxuZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xuICAvLyBjb25zdCBsYXlvdXQgPSB1c2VMYXlvdXQoKS5sYXlvdXQ7XG5cbiAgcmV0dXJuIDxtYWluIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuTGF5b3V0KX0+e2NoaWxkcmVufTwvbWFpbj47XG59XG5cbkxheW91dC5wcm9wVHlwZXMgPSBjaGVja1Byb3BzKHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSwgUHJvcFR5cGVzLm5vZGVdKS5pc1JlcXVpcmVkXG59KTtcblxuTGF5b3V0LmRlZmF1bHRQcm9wcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Layout/Layout.js\n");

/***/ }),

/***/ "./src/components/Layout/Layout.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Layout/Layout.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"Layout\": \"Layout_Layout__3Im-o\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0Lm1vZHVsZS5zY3NzPzcwNDMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0Lm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiTGF5b3V0XCI6IFwiTGF5b3V0X0xheW91dF9fM0ltLW9cIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Layout/Layout.module.scss\n");

/***/ }),

/***/ "./src/components/RotateScreen/RotateScreen.js":
/*!*****************************************************!*\
  !*** ./src/components/RotateScreen/RotateScreen.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _jam3_react_check_extra_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jam3/react-check-extra-props */ \"@jam3/react-check-extra-props\");\n/* harmony import */ var _jam3_react_check_extra_props__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_jam3_react_check_extra_props__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-use */ \"react-use\");\n/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _RotateScreen_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RotateScreen.module.scss */ \"./src/components/RotateScreen/RotateScreen.module.scss\");\n/* harmony import */ var _RotateScreen_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_RotateScreen_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils_detect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/detect */ \"./src/utils/detect.js\");\nvar _jsxFileName = \"/Users/bill.chen/Repo/studyplan-client/src/components/RotateScreen/RotateScreen.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nconst ROTATE_TYPES = {\n  PORTRAIT: 'portrait-primary',\n  LANDSCAPE: 'landscape-primary'\n};\n\nfunction RotateScreen({\n  className\n}) {\n  const orientation = Object(react_use__WEBPACK_IMPORTED_MODULE_4__[\"useOrientation\"])();\n  return __jsx(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_RotateScreen_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.RotateScreen, {\n      [_RotateScreen_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.enabled]: _utils_detect__WEBPACK_IMPORTED_MODULE_6__[\"isBrowser\"] && !_utils_detect__WEBPACK_IMPORTED_MODULE_6__[\"default\"].device.isDesktop && orientation.type === ROTATE_TYPES.LANDSCAPE\n    }, className),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, \"RotateScreen\");\n}\n\nRotateScreen.propTypes = _jam3_react_check_extra_props__WEBPACK_IMPORTED_MODULE_3___default()({\n  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n});\nRotateScreen.defaultProps = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"memo\"])(RotateScreen));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Sb3RhdGVTY3JlZW4vUm90YXRlU2NyZWVuLmpzPzBiNmEiXSwibmFtZXMiOlsiUk9UQVRFX1RZUEVTIiwiUE9SVFJBSVQiLCJMQU5EU0NBUEUiLCJSb3RhdGVTY3JlZW4iLCJjbGFzc05hbWUiLCJvcmllbnRhdGlvbiIsInVzZU9yaWVudGF0aW9uIiwiY2xhc3NuYW1lcyIsInN0eWxlcyIsImVuYWJsZWQiLCJpc0Jyb3dzZXIiLCJkZXRlY3QiLCJkZXZpY2UiLCJpc0Rlc2t0b3AiLCJ0eXBlIiwicHJvcFR5cGVzIiwiY2hlY2tQcm9wcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImRlZmF1bHRQcm9wcyIsIm1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBLE1BQU1BLFlBQVksR0FBRztBQUNuQkMsVUFBUSxFQUFFLGtCQURTO0FBRW5CQyxXQUFTLEVBQUU7QUFGUSxDQUFyQjs7QUFLQSxTQUFTQyxZQUFULENBQXNCO0FBQUVDO0FBQUYsQ0FBdEIsRUFBcUM7QUFDbkMsUUFBTUMsV0FBVyxHQUFHQyxnRUFBYyxFQUFsQztBQUVBLFNBQ0U7QUFDRSxhQUFTLEVBQUVDLGlEQUFVLENBQ25CQyxnRUFBTSxDQUFDTCxZQURZLEVBRW5CO0FBQUUsT0FBQ0ssZ0VBQU0sQ0FBQ0MsT0FBUixHQUFrQkMsdURBQVMsSUFBSSxDQUFDQyxxREFBTSxDQUFDQyxNQUFQLENBQWNDLFNBQTVCLElBQXlDUixXQUFXLENBQUNTLElBQVosS0FBcUJkLFlBQVksQ0FBQ0U7QUFBL0YsS0FGbUIsRUFHbkJFLFNBSG1CLENBRHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREY7QUFXRDs7QUFFREQsWUFBWSxDQUFDWSxTQUFiLEdBQXlCQyxvRUFBVSxDQUFDO0FBQ2xDWixXQUFTLEVBQUVhLGlEQUFTLENBQUNDO0FBRGEsQ0FBRCxDQUFuQztBQUlBZixZQUFZLENBQUNnQixZQUFiLEdBQTRCLEVBQTVCO0FBRWVDLDhIQUFJLENBQUNqQixZQUFELENBQW5CIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUm90YXRlU2NyZWVuL1JvdGF0ZVNjcmVlbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IGNoZWNrUHJvcHMgZnJvbSAnQGphbTMvcmVhY3QtY2hlY2stZXh0cmEtcHJvcHMnO1xuaW1wb3J0IHsgdXNlT3JpZW50YXRpb24gfSBmcm9tICdyZWFjdC11c2UnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUm90YXRlU2NyZWVuLm1vZHVsZS5zY3NzJztcbmltcG9ydCBkZXRlY3QsIHsgaXNCcm93c2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGV0ZWN0JztcblxuY29uc3QgUk9UQVRFX1RZUEVTID0ge1xuICBQT1JUUkFJVDogJ3BvcnRyYWl0LXByaW1hcnknLFxuICBMQU5EU0NBUEU6ICdsYW5kc2NhcGUtcHJpbWFyeSdcbn07XG5cbmZ1bmN0aW9uIFJvdGF0ZVNjcmVlbih7IGNsYXNzTmFtZSB9KSB7XG4gIGNvbnN0IG9yaWVudGF0aW9uID0gdXNlT3JpZW50YXRpb24oKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgc3R5bGVzLlJvdGF0ZVNjcmVlbixcbiAgICAgICAgeyBbc3R5bGVzLmVuYWJsZWRdOiBpc0Jyb3dzZXIgJiYgIWRldGVjdC5kZXZpY2UuaXNEZXNrdG9wICYmIG9yaWVudGF0aW9uLnR5cGUgPT09IFJPVEFURV9UWVBFUy5MQU5EU0NBUEUgfSxcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgID5cbiAgICAgIFJvdGF0ZVNjcmVlblxuICAgIDwvZGl2PlxuICApO1xufVxuXG5Sb3RhdGVTY3JlZW4ucHJvcFR5cGVzID0gY2hlY2tQcm9wcyh7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufSk7XG5cblJvdGF0ZVNjcmVlbi5kZWZhdWx0UHJvcHMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhSb3RhdGVTY3JlZW4pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/RotateScreen/RotateScreen.js\n");

/***/ }),

/***/ "./src/components/RotateScreen/RotateScreen.module.scss":
/*!**************************************************************!*\
  !*** ./src/components/RotateScreen/RotateScreen.module.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"RotateScreen\": \"RotateScreen_RotateScreen__bMVNZ\",\n\t\"enabled\": \"RotateScreen_enabled__7faPy\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Sb3RhdGVTY3JlZW4vUm90YXRlU2NyZWVuLm1vZHVsZS5zY3NzP2I2ODMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1JvdGF0ZVNjcmVlbi9Sb3RhdGVTY3JlZW4ubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJSb3RhdGVTY3JlZW5cIjogXCJSb3RhdGVTY3JlZW5fUm90YXRlU2NyZWVuX19iTVZOWlwiLFxuXHRcImVuYWJsZWRcIjogXCJSb3RhdGVTY3JlZW5fZW5hYmxlZF9fN2ZhUHlcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/RotateScreen/RotateScreen.module.scss\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"next/dynamic\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! normalize.css */ \"./node_modules/normalize.css/normalize.css\");\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var default_passive_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! default-passive-events */ \"default-passive-events\");\n/* harmony import */ var default_passive_events__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(default_passive_events__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/global.scss */ \"./src/styles/global.scss\");\n/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout/Layout */ \"./src/components/Layout/Layout.js\");\n/* harmony import */ var _components_RotateScreen_RotateScreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/RotateScreen/RotateScreen */ \"./src/components/RotateScreen/RotateScreen.js\");\n/* harmony import */ var _utils_detect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/detect */ \"./src/utils/detect.js\");\nvar _jsxFileName = \"/Users/bill.chen/Repo/studyplan-client/src/pages/_app.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\n\n\n // This default export is required in a new `pages/_app.js` file.\n\nfunction App({\n  Component,\n  pageProps\n}) {\n  const {\n    0: isSupported,\n    1: setIsSupported\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (_utils_detect__WEBPACK_IMPORTED_MODULE_8__[\"isBrowser\"]) {\n      const unsupportedUtil = __webpack_require__(/*! ../utils/unsupported-utils */ \"./src/utils/unsupported-utils.js\");\n\n      if (unsupportedUtil.isSupported()) {\n        if ( true && window.location.href.indexOf('?nostat') === -1) {\n          __webpack_require__(/*! @jam3/stats */ \"@jam3/stats\")();\n        }\n\n        const {\n          device,\n          browser\n        } = _utils_detect__WEBPACK_IMPORTED_MODULE_8__[\"default\"];\n        const classes = [device.isMobile ? 'mobile' : '', device.getType(), browser.getName()].filter(className => Boolean(className));\n        document.body.className = [...document.body.className.split(' '), ...classes].filter(Boolean).join(' ');\n      } else {\n        setIsSupported(false);\n      }\n    }\n  }, []);\n\n  if (!isSupported) {\n    const Unsupported = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() | Unsupported */ \"Unsupported\").then(__webpack_require__.bind(null, /*! ../components/Unsupported/Unsupported */ \"./src/components/Unsupported/Unsupported.js\")), {\n      loadableGenerated: {\n        webpack: () => [/*require.resolve*/(/*! ../components/Unsupported/Unsupported */ \"./src/components/Unsupported/Unsupported.js\")],\n        modules: ['../components/Unsupported/Unsupported']\n      }\n    });\n    return __jsx(Unsupported, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 12\n      }\n    });\n  }\n\n  return __jsx(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }, \"Course Planner\"), __jsx(\"meta\", {\n    name: \"description\",\n    content: \"University study planner\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"keywords\",\n    content: \"course planner,waterloo, study, university, schedule, App, React\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"theme-color\",\n    content: \"#ffffff\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"msapplication-TileColor\",\n    content: \"#ffffff\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"apple-touch-icon\",\n    sizes: \"180x180\",\n    href: \"/favicons/apple-touch-icon.png\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"manifest\",\n    href: \"/favicons/site.webmanifest\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"mask-icon\",\n    href: \"/favicons/safari-pinned-tab.svg\",\n    color: \"#000000\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"shortcut icon\",\n    href: \"/favicons/favicon.ico\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"msapplication-config\",\n    content: \"/favicons/browserconfig.xml\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:locale\",\n    content: \"en_US\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:title\",\n    content: \"Default title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:description\",\n    content: \"Default title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:type\",\n    content: \"website\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:url\",\n    content: process.env.WEBSITE_SITE_URL,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:site_name\",\n    content: \"Default site name\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:image:width\",\n    content: \"1200\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:image:height\",\n    content: \"630\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:image\",\n    content: \"/_next/static/images/share-image.jpg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"twitter:card\",\n    content: \"Default content\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    property: \"fb:app_id\",\n    content: \"FB_APP_ID\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"google-site-verification\",\n    content: \"[Google Web Master Tools]\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"msvalidate.01\",\n    content: \"[Bing Web Master Tools]\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"canonical\",\n    href: process.env.WEBSITE_SITE_URL,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"dns-prefetch\",\n    href: \"//[NEXT-DNS-request.com]\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }\n  })), __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }\n  })), __jsx(_components_RotateScreen_RotateScreen__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC5qcz8yMjU0Il0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImlzU3VwcG9ydGVkIiwic2V0SXNTdXBwb3J0ZWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImlzQnJvd3NlciIsInVuc3VwcG9ydGVkVXRpbCIsInJlcXVpcmUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJpbmRleE9mIiwiZGV2aWNlIiwiYnJvd3NlciIsImRldGVjdCIsImNsYXNzZXMiLCJpc01vYmlsZSIsImdldFR5cGUiLCJnZXROYW1lIiwiZmlsdGVyIiwiY2xhc3NOYW1lIiwiQm9vbGVhbiIsImRvY3VtZW50IiwiYm9keSIsInNwbGl0Iiwiam9pbiIsIlVuc3VwcG9ydGVkIiwiZHluYW1pYyIsInByb2Nlc3MiLCJlbnYiLCJXRUJTSVRFX1NJVEVfVVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0NBSUE7O0FBQ0EsU0FBU0EsR0FBVCxDQUFhO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFiLEVBQXVDO0FBQ3JDLFFBQU07QUFBQSxPQUFDQyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ0Msc0RBQVEsQ0FBQyxJQUFELENBQTlDO0FBRUFDLHlEQUFTLENBQUMsTUFBTTtBQUNkLFFBQUlDLHVEQUFKLEVBQWU7QUFDYixZQUFNQyxlQUFlLEdBQUdDLG1CQUFPLENBQUMsb0VBQUQsQ0FBL0I7O0FBQ0EsVUFBSUQsZUFBZSxDQUFDTCxXQUFoQixFQUFKLEVBQW1DO0FBQ2pDLFlBQUksU0FBeUNPLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsQ0FBcUJDLE9BQXJCLENBQTZCLFNBQTdCLE1BQTRDLENBQUMsQ0FBMUYsRUFBNkY7QUFDM0ZKLDZCQUFPLENBQUMsZ0NBQUQsQ0FBUDtBQUNEOztBQUNELGNBQU07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RUFBQywwQkFBWDtBQUFzQyxXQUFPLEVBQUMsMkJBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUExQkYsRUEyQkU7QUFBTSxRQUFJLEVBQUMsZUFBWDtBQUEyQixXQUFPLEVBQUMseUJBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEzQkYsRUE2QkU7QUFBTSxPQUFHLEVBQUMsV0FBVjtBQUFzQixRQUFJLEVBQUVGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxnQkFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTdCRixFQThCRTtBQUFNLE9BQUcsRUFBQyxjQUFWO0FBQXlCLFFBQUksRUFBQywwQkFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTlCRixDQURGLEVBa0NFLE1BQUMsU0FBRCxlQUFlOUIsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBbENGLEVBb0NFLE1BQUMsNkVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXBDRixDQURGO0FBd0NEOztBQUVjRixrRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcbmltcG9ydCAnbm9ybWFsaXplLmNzcyc7XG5pbXBvcnQgJ2RlZmF1bHQtcGFzc2l2ZS1ldmVudHMnO1xuXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWwuc2Nzcyc7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0JztcbmltcG9ydCBSb3RhdGVTY3JlZW4gZnJvbSAnLi4vY29tcG9uZW50cy9Sb3RhdGVTY3JlZW4vUm90YXRlU2NyZWVuJztcblxuaW1wb3J0IGRldGVjdCwgeyBpc0Jyb3dzZXIgfSBmcm9tICcuLi91dGlscy9kZXRlY3QnO1xuXG4vLyBUaGlzIGRlZmF1bHQgZXhwb3J0IGlzIHJlcXVpcmVkIGluIGEgbmV3IGBwYWdlcy9fYXBwLmpzYCBmaWxlLlxuZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBbaXNTdXBwb3J0ZWQsIHNldElzU3VwcG9ydGVkXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgdW5zdXBwb3J0ZWRVdGlsID0gcmVxdWlyZSgnLi4vdXRpbHMvdW5zdXBwb3J0ZWQtdXRpbHMnKTtcbiAgICAgIGlmICh1bnN1cHBvcnRlZFV0aWwuaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCc/bm9zdGF0JykgPT09IC0xKSB7XG4gICAgICAgICAgcmVxdWlyZSgnQGphbTMvc3RhdHMnKSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgZGV2aWNlLCBicm93c2VyIH0gPSBkZXRlY3Q7XG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBbZGV2aWNlLmlzTW9iaWxlID8gJ21vYmlsZScgOiAnJywgZGV2aWNlLmdldFR5cGUoKSwgYnJvd3Nlci5nZXROYW1lKCldLmZpbHRlcihjbGFzc05hbWUgPT5cbiAgICAgICAgICBCb29sZWFuKGNsYXNzTmFtZSlcbiAgICAgICAgKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBbLi4uZG9jdW1lbnQuYm9keS5jbGFzc05hbWUuc3BsaXQoJyAnKSwgLi4uY2xhc3Nlc10uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldElzU3VwcG9ydGVkKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKTtcblxuICBpZiAoIWlzU3VwcG9ydGVkKSB7XG4gICAgY29uc3QgVW5zdXBwb3J0ZWQgPSBkeW5hbWljKCgpID0+XG4gICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJVbnN1cHBvcnRlZFwiICovICcuLi9jb21wb25lbnRzL1Vuc3VwcG9ydGVkL1Vuc3VwcG9ydGVkJylcbiAgICApO1xuICAgIHJldHVybiA8VW5zdXBwb3J0ZWQgLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNvdXJzZSBQbGFubmVyPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlVuaXZlcnNpdHkgc3R1ZHkgcGxhbm5lclwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJjb3Vyc2UgcGxhbm5lcix3YXRlcmxvbywgc3R1ZHksIHVuaXZlcnNpdHksIHNjaGVkdWxlLCBBcHAsIFJlYWN0XCIgLz5cbiAgICAgICAgey8qIEdlbmVyYXRlIGZhdmljb25zIGluIGh0dHBzOi8vcmVhbGZhdmljb25nZW5lcmF0b3IubmV0ICovfVxuICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiI2ZmZmZmZlwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVDb2xvclwiIGNvbnRlbnQ9XCIjZmZmZmZmXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTgweDE4MFwiIGhyZWY9XCIvZmF2aWNvbnMvYXBwbGUtdG91Y2gtaWNvbi5wbmdcIiAvPlxuICAgICAgICB7LyogPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjMyeDMyXCIgaHJlZj1cIi9mYXZpY29ucy9mYXZpY29uLTMyeDMyLnBuZ1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxNngxNlwiIGhyZWY9XCIvZmF2aWNvbnMvZmF2aWNvbi0xNngxNi5wbmdcIiAvPiAqL31cbiAgICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiL2Zhdmljb25zL3NpdGUud2VibWFuaWZlc3RcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJtYXNrLWljb25cIiBocmVmPVwiL2Zhdmljb25zL3NhZmFyaS1waW5uZWQtdGFiLnN2Z1wiIGNvbG9yPVwiIzAwMDAwMFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL2Zhdmljb25zL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tY29uZmlnXCIgY29udGVudD1cIi9mYXZpY29ucy9icm93c2VyY29uZmlnLnhtbFwiIC8+XG4gICAgICAgIHsvKiBTaGFyZSBtZXRhIHRhZ3MgKi99XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6bG9jYWxlXCIgY29udGVudD1cImVuX1VTXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJEZWZhdWx0IHRpdGxlXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJEZWZhdWx0IHRpdGxlXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e3Byb2Nlc3MuZW52LldFQlNJVEVfU0lURV9VUkx9IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD1cIkRlZmF1bHQgc2l0ZSBuYW1lXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp3aWR0aFwiIGNvbnRlbnQ9XCIxMjAwXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTpoZWlnaHRcIiBjb250ZW50PVwiNjMwXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCIvX25leHQvc3RhdGljL2ltYWdlcy9zaGFyZS1pbWFnZS5qcGdcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cIkRlZmF1bHQgY29udGVudFwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwiZmI6YXBwX2lkXCIgY29udGVudD1cIkZCX0FQUF9JRFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJnb29nbGUtc2l0ZS12ZXJpZmljYXRpb25cIiBjb250ZW50PVwiW0dvb2dsZSBXZWIgTWFzdGVyIFRvb2xzXVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJtc3ZhbGlkYXRlLjAxXCIgY29udGVudD1cIltCaW5nIFdlYiBNYXN0ZXIgVG9vbHNdXCIgLz5cbiAgICAgICAgey8qIE90aGVyIHJlY29tbWVuZHMgKi99XG4gICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9e3Byb2Nlc3MuZW52LldFQlNJVEVfU0lURV9VUkx9IC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImRucy1wcmVmZXRjaFwiIGhyZWY9XCIvL1tORVhULUROUy1yZXF1ZXN0LmNvbV1cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG5cbiAgICAgIDxSb3RhdGVTY3JlZW4gLz5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/global.scss":
/*!********************************!*\
  !*** ./src/styles/global.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvZ2xvYmFsLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/global.scss\n");

/***/ }),

/***/ "./src/utils/detect.js":
/*!*****************************!*\
  !*** ./src/utils/detect.js ***!
  \*****************************/
/*! exports provided: isBrowser, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isBrowser\", function() { return isBrowser; });\nconst isBrowser = false;\nconst detect = {\n  device: null,\n  browser: null,\n  os: null,\n  bots: null\n};\n\nif (isBrowser) {\n  detect.device = __webpack_require__(/*! @jam3/detect */ \"@jam3/detect\").device;\n  detect.browser = __webpack_require__(/*! @jam3/detect */ \"@jam3/detect\").browser;\n  detect.os = __webpack_require__(/*! @jam3/detect */ \"@jam3/detect\").os;\n  detect.bots = __webpack_require__(/*! @jam3/detect */ \"@jam3/detect\").bots;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (detect);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZGV0ZWN0LmpzP2E0Y2IiXSwibmFtZXMiOlsiaXNCcm93c2VyIiwiZGV0ZWN0IiwiZGV2aWNlIiwiYnJvd3NlciIsIm9zIiwiYm90cyIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBTyxNQUFNQSxTQUFTLFFBQWY7QUFFUCxNQUFNQyxNQUFNLEdBQUc7QUFDYkMsUUFBTSxFQUFFLElBREs7QUFFYkMsU0FBTyxFQUFFLElBRkk7QUFHYkMsSUFBRSxFQUFFLElBSFM7QUFJYkMsTUFBSSxFQUFFO0FBSk8sQ0FBZjs7QUFPQSxJQUFJTCxTQUFKLEVBQWU7QUFDYkMsUUFBTSxDQUFDQyxNQUFQLEdBQWdCSSxtQkFBTyxDQUFDLGtDQUFELENBQVAsQ0FBd0JKLE1BQXhDO0FBQ0FELFFBQU0sQ0FBQ0UsT0FBUCxHQUFpQkcsbUJBQU8sQ0FBQyxrQ0FBRCxDQUFQLENBQXdCSCxPQUF6QztBQUNBRixRQUFNLENBQUNHLEVBQVAsR0FBWUUsbUJBQU8sQ0FBQyxrQ0FBRCxDQUFQLENBQXdCRixFQUFwQztBQUNBSCxRQUFNLENBQUNJLElBQVAsR0FBY0MsbUJBQU8sQ0FBQyxrQ0FBRCxDQUFQLENBQXdCRCxJQUF0QztBQUNEOztBQUVjSixxRUFBZiIsImZpbGUiOiIuL3NyYy91dGlscy9kZXRlY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG5cbmNvbnN0IGRldGVjdCA9IHtcbiAgZGV2aWNlOiBudWxsLFxuICBicm93c2VyOiBudWxsLFxuICBvczogbnVsbCxcbiAgYm90czogbnVsbFxufTtcblxuaWYgKGlzQnJvd3Nlcikge1xuICBkZXRlY3QuZGV2aWNlID0gcmVxdWlyZSgnQGphbTMvZGV0ZWN0JykuZGV2aWNlO1xuICBkZXRlY3QuYnJvd3NlciA9IHJlcXVpcmUoJ0BqYW0zL2RldGVjdCcpLmJyb3dzZXI7XG4gIGRldGVjdC5vcyA9IHJlcXVpcmUoJ0BqYW0zL2RldGVjdCcpLm9zO1xuICBkZXRlY3QuYm90cyA9IHJlcXVpcmUoJ0BqYW0zL2RldGVjdCcpLmJvdHM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRldGVjdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/detect.js\n");

/***/ }),

/***/ "./src/utils/device-matrix.json":
/*!**************************************!*\
  !*** ./src/utils/device-matrix.json ***!
  \**************************************/
/*! exports provided: chrome, firefox, safari, internet explorer, edge, ios, macos, windows, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"chrome\\\":30,\\\"firefox\\\":40,\\\"safari\\\":9,\\\"internet explorer\\\":12,\\\"edge\\\":12,\\\"ios\\\":9,\\\"macos\\\":10.1,\\\"windows\\\":7}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy91dGlscy9kZXZpY2UtbWF0cml4Lmpzb24uanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/device-matrix.json\n");

/***/ }),

/***/ "./src/utils/unsupported-utils.js":
/*!****************************************!*\
  !*** ./src/utils/unsupported-utils.js ***!
  \****************************************/
/*! exports provided: isSupported, getBrowserInformation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isSupported\", function() { return isSupported; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBrowserInformation\", function() { return getBrowserInformation; });\n/* harmony import */ var _detect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detect */ \"./src/utils/detect.js\");\n/* harmony import */ var _device_matrix_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./device-matrix.json */ \"./src/utils/device-matrix.json\");\nvar _device_matrix_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./device-matrix.json */ \"./src/utils/device-matrix.json\", 1);\n\n\nconst {\n  browser,\n  os,\n  bots\n} = _detect__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n/**\n * Returns if the current browser is supported by the web app\n * The algorithm is inclusive, so we enumerate everything we don't support, after that everything is supported\n *\n * @returns {Boolean} supported\n */\n\nfunction isSupported() {\n  const userBrowser = browser.getName().toLowerCase();\n  const userBrowserVersion = parseFloat(browser.getVersion());\n  const userOS = os ? os.getName().toLowerCase() : 'unknown';\n  const userOSVersion = os.getVersion() === 'Unknown' ? Number.MAX_SAFE_INTEGER : parseFloat(os.getVersion());\n\n  if (bots.isBot()) {\n    return true;\n  }\n\n  const supportedOsVersion = _device_matrix_json__WEBPACK_IMPORTED_MODULE_1__[userOS];\n  const supportedBrowserVersion = _device_matrix_json__WEBPACK_IMPORTED_MODULE_1__[userBrowser];\n  const supportedVersion = supportedBrowserVersion || supportedOsVersion;\n\n  if (supportedVersion) {\n    if (supportedOsVersion !== undefined) {\n      if (userOSVersion < supportedOsVersion) {\n        return false;\n      }\n    }\n\n    if (supportedBrowserVersion !== undefined) {\n      /* Special contrains here */\n      if (userBrowserVersion < supportedBrowserVersion) {\n        return false;\n      }\n    }\n  }\n\n  return true;\n}\n/**\n * Print current browser information\n *\n * @returns {String} Browser|Browser Version|OS|OS Version|UA\n */\n\n\nfunction getBrowserInformation() {\n  return `\n    browser: ${browser.getName()},\n    browser version: ${browser.getVersion()},\n    os: ${os.getName()},\n    os version: ${os.getVersion()},\n    ua: ${navigator.userAgent}\n  `;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdW5zdXBwb3J0ZWQtdXRpbHMuanM/YzI3MiJdLCJuYW1lcyI6WyJicm93c2VyIiwib3MiLCJib3RzIiwiZGV0ZWN0IiwiaXNTdXBwb3J0ZWQiLCJ1c2VyQnJvd3NlciIsImdldE5hbWUiLCJ0b0xvd2VyQ2FzZSIsInVzZXJCcm93c2VyVmVyc2lvbiIsInBhcnNlRmxvYXQiLCJnZXRWZXJzaW9uIiwidXNlck9TIiwidXNlck9TVmVyc2lvbiIsIk51bWJlciIsIk1BWF9TQUZFX0lOVEVHRVIiLCJpc0JvdCIsInN1cHBvcnRlZE9zVmVyc2lvbiIsImRldmljZU1hdHJpeCIsInN1cHBvcnRlZEJyb3dzZXJWZXJzaW9uIiwic3VwcG9ydGVkVmVyc2lvbiIsInVuZGVmaW5lZCIsImdldEJyb3dzZXJJbmZvcm1hdGlvbiIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLE1BQU07QUFBRUEsU0FBRjtBQUFXQyxJQUFYO0FBQWVDO0FBQWYsSUFBd0JDLCtDQUE5QjtBQUVBOzs7Ozs7O0FBTUEsU0FBU0MsV0FBVCxHQUF1QjtBQUNyQixRQUFNQyxXQUFXLEdBQUdMLE9BQU8sQ0FBQ00sT0FBUixHQUFrQkMsV0FBbEIsRUFBcEI7QUFDQSxRQUFNQyxrQkFBa0IsR0FBR0MsVUFBVSxDQUFDVCxPQUFPLENBQUNVLFVBQVIsRUFBRCxDQUFyQztBQUNBLFFBQU1DLE1BQU0sR0FBR1YsRUFBRSxHQUFHQSxFQUFFLENBQUNLLE9BQUgsR0FBYUMsV0FBYixFQUFILEdBQWdDLFNBQWpEO0FBQ0EsUUFBTUssYUFBYSxHQUFHWCxFQUFFLENBQUNTLFVBQUgsT0FBb0IsU0FBcEIsR0FBZ0NHLE1BQU0sQ0FBQ0MsZ0JBQXZDLEdBQTBETCxVQUFVLENBQUNSLEVBQUUsQ0FBQ1MsVUFBSCxFQUFELENBQTFGOztBQUVBLE1BQUlSLElBQUksQ0FBQ2EsS0FBTCxFQUFKLEVBQWtCO0FBQ2hCLFdBQU8sSUFBUDtBQUNEOztBQUVELFFBQU1DLGtCQUFrQixHQUFHQyxnREFBWSxDQUFDTixNQUFELENBQXZDO0FBQ0EsUUFBTU8sdUJBQXVCLEdBQUdELGdEQUFZLENBQUNaLFdBQUQsQ0FBNUM7QUFFQSxRQUFNYyxnQkFBZ0IsR0FBR0QsdUJBQXVCLElBQUlGLGtCQUFwRDs7QUFFQSxNQUFJRyxnQkFBSixFQUFzQjtBQUNwQixRQUFJSCxrQkFBa0IsS0FBS0ksU0FBM0IsRUFBc0M7QUFDcEMsVUFBSVIsYUFBYSxHQUFHSSxrQkFBcEIsRUFBd0M7QUFDdEMsZUFBTyxLQUFQO0FBQ0Q7QUFDRjs7QUFFRCxRQUFJRSx1QkFBdUIsS0FBS0UsU0FBaEMsRUFBMkM7QUFDekM7QUFFQSxVQUFJWixrQkFBa0IsR0FBR1UsdUJBQXpCLEVBQWtEO0FBQ2hELGVBQU8sS0FBUDtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxTQUFPLElBQVA7QUFDRDtBQUVEOzs7Ozs7O0FBS0EsU0FBU0cscUJBQVQsR0FBaUM7QUFDL0IsU0FBUTtlQUNLckIsT0FBTyxDQUFDTSxPQUFSLEVBQWtCO3VCQUNWTixPQUFPLENBQUNVLFVBQVIsRUFBcUI7VUFDbENULEVBQUUsQ0FBQ0ssT0FBSCxFQUFhO2tCQUNMTCxFQUFFLENBQUNTLFVBQUgsRUFBZ0I7VUFDeEJZLFNBQVMsQ0FBQ0MsU0FBVTtHQUw1QjtBQU9EIiwiZmlsZSI6Ii4vc3JjL3V0aWxzL3Vuc3VwcG9ydGVkLXV0aWxzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRldGVjdCBmcm9tICcuL2RldGVjdCc7XG5pbXBvcnQgZGV2aWNlTWF0cml4IGZyb20gJy4vZGV2aWNlLW1hdHJpeC5qc29uJztcblxuY29uc3QgeyBicm93c2VyLCBvcywgYm90cyB9ID0gZGV0ZWN0O1xuXG4vKipcbiAqIFJldHVybnMgaWYgdGhlIGN1cnJlbnQgYnJvd3NlciBpcyBzdXBwb3J0ZWQgYnkgdGhlIHdlYiBhcHBcbiAqIFRoZSBhbGdvcml0aG0gaXMgaW5jbHVzaXZlLCBzbyB3ZSBlbnVtZXJhdGUgZXZlcnl0aGluZyB3ZSBkb24ndCBzdXBwb3J0LCBhZnRlciB0aGF0IGV2ZXJ5dGhpbmcgaXMgc3VwcG9ydGVkXG4gKlxuICogQHJldHVybnMge0Jvb2xlYW59IHN1cHBvcnRlZFxuICovXG5mdW5jdGlvbiBpc1N1cHBvcnRlZCgpIHtcbiAgY29uc3QgdXNlckJyb3dzZXIgPSBicm93c2VyLmdldE5hbWUoKS50b0xvd2VyQ2FzZSgpO1xuICBjb25zdCB1c2VyQnJvd3NlclZlcnNpb24gPSBwYXJzZUZsb2F0KGJyb3dzZXIuZ2V0VmVyc2lvbigpKTtcbiAgY29uc3QgdXNlck9TID0gb3MgPyBvcy5nZXROYW1lKCkudG9Mb3dlckNhc2UoKSA6ICd1bmtub3duJztcbiAgY29uc3QgdXNlck9TVmVyc2lvbiA9IG9zLmdldFZlcnNpb24oKSA9PT0gJ1Vua25vd24nID8gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgOiBwYXJzZUZsb2F0KG9zLmdldFZlcnNpb24oKSk7XG5cbiAgaWYgKGJvdHMuaXNCb3QoKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY29uc3Qgc3VwcG9ydGVkT3NWZXJzaW9uID0gZGV2aWNlTWF0cml4W3VzZXJPU107XG4gIGNvbnN0IHN1cHBvcnRlZEJyb3dzZXJWZXJzaW9uID0gZGV2aWNlTWF0cml4W3VzZXJCcm93c2VyXTtcblxuICBjb25zdCBzdXBwb3J0ZWRWZXJzaW9uID0gc3VwcG9ydGVkQnJvd3NlclZlcnNpb24gfHwgc3VwcG9ydGVkT3NWZXJzaW9uO1xuXG4gIGlmIChzdXBwb3J0ZWRWZXJzaW9uKSB7XG4gICAgaWYgKHN1cHBvcnRlZE9zVmVyc2lvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodXNlck9TVmVyc2lvbiA8IHN1cHBvcnRlZE9zVmVyc2lvbikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnRlZEJyb3dzZXJWZXJzaW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8qIFNwZWNpYWwgY29udHJhaW5zIGhlcmUgKi9cblxuICAgICAgaWYgKHVzZXJCcm93c2VyVmVyc2lvbiA8IHN1cHBvcnRlZEJyb3dzZXJWZXJzaW9uKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBQcmludCBjdXJyZW50IGJyb3dzZXIgaW5mb3JtYXRpb25cbiAqXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBCcm93c2VyfEJyb3dzZXIgVmVyc2lvbnxPU3xPUyBWZXJzaW9ufFVBXG4gKi9cbmZ1bmN0aW9uIGdldEJyb3dzZXJJbmZvcm1hdGlvbigpIHtcbiAgcmV0dXJuIGBcbiAgICBicm93c2VyOiAke2Jyb3dzZXIuZ2V0TmFtZSgpfSxcbiAgICBicm93c2VyIHZlcnNpb246ICR7YnJvd3Nlci5nZXRWZXJzaW9uKCl9LFxuICAgIG9zOiAke29zLmdldE5hbWUoKX0sXG4gICAgb3MgdmVyc2lvbjogJHtvcy5nZXRWZXJzaW9uKCl9LFxuICAgIHVhOiAke25hdmlnYXRvci51c2VyQWdlbnR9XG4gIGA7XG59XG5cbmV4cG9ydCB7IGlzU3VwcG9ydGVkLCBnZXRCcm93c2VySW5mb3JtYXRpb24gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/unsupported-utils.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./src/pages/_app.js");


/***/ }),

/***/ "@jam3/detect":
/*!*******************************!*\
  !*** external "@jam3/detect" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@jam3/detect\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAamFtMy9kZXRlY3RcIj9iNzY0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBqYW0zL2RldGVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBqYW0zL2RldGVjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@jam3/detect\n");

/***/ }),

/***/ "@jam3/react-check-extra-props":
/*!************************************************!*\
  !*** external "@jam3/react-check-extra-props" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@jam3/react-check-extra-props\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAamFtMy9yZWFjdC1jaGVjay1leHRyYS1wcm9wc1wiP2RmY2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGphbTMvcmVhY3QtY2hlY2stZXh0cmEtcHJvcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAamFtMy9yZWFjdC1jaGVjay1leHRyYS1wcm9wc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@jam3/react-check-extra-props\n");

/***/ }),

/***/ "@jam3/stats":
/*!******************************!*\
  !*** external "@jam3/stats" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@jam3/stats\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAamFtMy9zdGF0c1wiPzQxMWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGphbTMvc3RhdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAamFtMy9zdGF0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@jam3/stats\n");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCI/YWFhYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJjbGFzc25hbWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///classnames\n");

/***/ }),

/***/ "default-passive-events":
/*!*****************************************!*\
  !*** external "default-passive-events" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"default-passive-events\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkZWZhdWx0LXBhc3NpdmUtZXZlbnRzXCI/ZWM1OCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJkZWZhdWx0LXBhc3NpdmUtZXZlbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGVmYXVsdC1wYXNzaXZlLWV2ZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///default-passive-events\n");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dynamic\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIj82ZDNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvZHluYW1pYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/dynamic\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-use":
/*!****************************!*\
  !*** external "react-use" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-use\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC11c2VcIj84ZTNjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LXVzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXVzZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-use\n");

/***/ })

/******/ });