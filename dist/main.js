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

eval("const listsContainer = document.querySelector(\"[data-lists]\");\r\nconst newListForm = document.querySelector(\"[data-new-list-form]\");\r\nconst newListInput = document.querySelector(\"[data-new-list-input]\");\r\nconst deleteListButton = document.querySelector(\"[data-delete-list-button]\");\r\nconst listDisplayContainer = document.querySelector(\"[data-list-display-container]\");\r\nconst listTitleElement = document.querySelector(\"[data-list-title\");\r\nlet lists = JSON.parse(localStorage.getItem(\"task.lists\")) || [];\r\nlet selectedListId = localStorage.getItem(\"task.selectedListId\");\r\n\r\nfunction createList() {\r\n    return { id: Date.now().toString(), name: newListInput.value, tasks: [] };\r\n  }\r\n\r\n  newListForm.addEventListener(\"submit\", (e) => {\r\n    e.preventDefault();\r\n    const listName = newListInput.value;\r\n    if (listName === null || listName === \"\") return;\r\n    const list = createList();\r\n    newListInput.value = null;\r\n    lists.push(list);\r\n    renderAndSave();\r\n  });\r\n\r\n\r\n\r\nfunction renderLists() {\r\n  lists.forEach((list) => {\r\n    const listElement = document.createElement(\"li\");\r\n    listElement.innerText = list.name;\r\n    listElement.dataset.listId = list.id;\r\n    if (list.id === selectedListId) {\r\n      listElement.classList.add(\"active-list\");\r\n    }\r\n    listsContainer.appendChild(listElement);\r\n  });\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

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