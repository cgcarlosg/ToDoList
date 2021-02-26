/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const addButton = document.querySelector('.addProject');\r\nconst delButton = document.querySelector('.deleteProject');\r\n// const inputValue = document.getElementById(\"myInput\").value;\r\n\r\n\r\naddButton.addEventListener('click', function(e) {\r\n    const inputValue = document.getElementById(\"myInput\").value;\r\n\r\n    const list = document.getElementById('proj-list');\r\n    const row = document.createElement('tr')\r\n    row.innerHTML = `\r\n      <td> ${inputValue} </td>\r\n      <td> <span onClick=\"javascript:(function() { this.event.target.parentElement.parentElement.remove(); })()\"> X </span></td>`;\r\n    list.appendChild(row);\r\n    document.getElementById('myInput').value = '';\r\n    e.preventDefault();\r\n})\r\n\r\n\r\n\r\n\r\ndelButton.addEventListener('click', function(){\r\n    \r\n})\r\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;