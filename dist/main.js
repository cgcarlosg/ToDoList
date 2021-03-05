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

eval("const listsContainer = document.querySelector('[data-lists')\r\n\r\nlet lists = ['name', 'todo']\r\n\r\nfunction render() {\r\n  clearElement(listsContainer)\r\n  lists.forEach(list => {\r\n    const listElement = document.createElement('li')\r\n    listElement.classList.add(\"list-name\")\r\n    listElement.innerHTML = list\r\n    listsContainer.appendChild(listElement)\r\n  })\r\n}\r\n\r\nfunction clearElement(element){\r\nwhile (element.firstChild) {\r\n  element.removeChild(element.firstChild)\r\n}\r\n}\r\n\r\nrender()\n\n//# sourceURL=webpack://todolist/./src/index.js?");

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