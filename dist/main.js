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

eval("const listsContainer = document.querySelector('[data-lists')\r\nconst newListForm = document.querySelector('[data-new-list-form]')\r\nconst newListInput= document.querySelector('[data-new-list-input]')\r\n\r\nconst LOCAL_STORAGE_LIST_KEY = 'task.lists'\r\nlet lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []\r\n\r\n\r\n\r\nnewListForm.addEventListener('submit', e => {\r\n  e.preventDefault()\r\n  const listName = newListInput.value\r\n  if (listName == null || listName === '') return\r\n  const list = createList(listName)\r\n  newListInput.value = null\r\n  lists.push(list)\r\n  render()\r\n})\r\n\r\nfunction createList(name) {\r\n return { id: Date.now().toString(), name: name, tasks: [] }\r\n}\r\n\r\nfunction save() {\r\n  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists))\r\n}\r\n\r\nfunction saveAndRender() {\r\n  save()\r\n  render()\r\n}\r\n\r\nfunction render() {\r\n  clearElement(listsContainer)\r\n  lists.forEach(list => {\r\n    listElement.dataset.listId = list.id\r\n    const listElement = document.createElement('li')\r\n    listElement.classList.add(\"list-name\")\r\n    listElement.innerHTML = list.name\r\n    listsContainer.appendChild(listElement)\r\n  })\r\n}\r\n\r\nfunction clearElement(element){\r\nwhile (element.firstChild) {\r\n  element.removeChild(element.firstChild)\r\n}\r\n}\r\n\r\nrender()\n\n//# sourceURL=webpack://todolist/./src/index.js?");

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