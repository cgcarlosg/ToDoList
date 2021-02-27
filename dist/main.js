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

eval("const addButton = document.querySelector('.addProject');\r\nconst delButton = document.querySelector('.btnTask');\r\nlet modalOpen = false;\r\nconst formContainer = document.querySelector(\".container\");\r\nconst overlay = document.querySelector(\"#overlay\");\r\nconst closeButton = document.querySelector(\".close\");\r\nconst addToDoButton = document.querySelector(\".add-btn\");\r\n\r\naddButton.addEventListener('click', function(e) {\r\n    const inputValue = document.getElementById(\"myInput\").value;\r\n\r\n    const list = document.getElementById('proj-list');\r\n    const row = document.createElement('tr')\r\n    row.innerHTML = `\r\n      <td> ${inputValue} </td>\r\n      <td> <span onClick=\"javascript:(function() { this.event.target.parentElement.parentElement.remove(); })()\"> X </span></td>`;\r\n    list.appendChild(row);\r\n    document.getElementById('myInput').value = '';\r\n    e.preventDefault();\r\n})\r\n\r\n//when user wants to add a new task\r\nfunction openOrCloseAddTaskForm() {\r\n  const h2 = document.querySelector(\".container h2\");\r\n  const submitInput = document.querySelector(`input[type=\"submit\"]`);\r\n\r\n  if (modalOpen) {\r\n    formContainer.style.pointerEvents = \"none\";\r\n    formContainer.style.transform = \"scale(0)\";\r\n    overlay.style.opacity = 0;\r\n    modalOpen = false;\r\n  } else {\r\n    h2.textContent = \"New Task\";\r\n    submitInput.value = \"Submit\";\r\n    formContainer.style.pointerEvents = \"auto\";\r\n    formContainer.style.transform = \"scale(1)\";\r\n    overlay.style.opacity = 1;\r\n    modalOpen = true;\r\n  }\r\n\r\n  console.log(\"hello\");\r\n\r\n  \r\n}\r\naddToDoButton.addEventListener(\"click\", (e) => {\r\n  // newTaskForm.reset();\r\n  e.preventDefault();\r\n  openOrCloseAddTaskForm();\r\n\r\n  if (modalOpen) {\r\n    addToDoButton.style.background = \"#2185d5\";\r\n    addToDoButton.style.transform = \"rotate(45deg)\";\r\n  } else {\r\n    addToDoButton.style.background = \"transparent\";\r\n    addToDoButton.style.transform = \"rotate(0)\";\r\n  }\r\n});\r\n\r\nfunction modalClose(){\r\n  formContainer.style.transform = 'scale(0)';\r\n  overlay.style.opacity = 0;\r\n  modalOpen = false;\r\n}\r\n\r\ncloseButton.addEventListener('click', () => {\r\n  modalClose();\r\n  addToDoButton.style.background = 'transparent';\r\n  addToDoButton.style.transform = 'rotate(0)';\r\n  modalOpen = false;\r\n})\r\n\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

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