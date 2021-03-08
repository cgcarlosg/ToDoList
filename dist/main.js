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

eval("const listsContainer = document.querySelector('[data-lists]');\nconst newListForm = document.querySelector('[data-new-list-form]');\nconst newListInput = document.querySelector('[data-new-list-input]');\nconst deleteListButton = document.querySelector('[data-delete-list-button]');\nconst listDisplayContainer = document.querySelector('[data-list-display-container]');\nconst listTitleElement = document.querySelector('[data-list-title');\nconst listCountElement = document.querySelector('[data-list-count');\n\nconst tasksContainer = document.querySelector('[data-tasks');\nconst taskTemplate = document.querySelector('#task-template');\nconst newTaskForm = document.querySelector('[data-new-task-form]');\nconst newTaskInput = document.querySelector('[data-new-task-input]');\nconst newTaskDate = document.querySelector('#due-date');\nconst newTaskPriority = document.querySelector('#priority');\nconst newTaskDescription = document.querySelector('#description');\nconst clearCompleteTasksButton = document.querySelector('[data-clear-complete-tasks-button]');\n\nlet lists = JSON.parse(localStorage.getItem('task.lists'));\nlet selectedListId = localStorage.getItem('task.selectedListId');\nconst overlay = document.querySelector('#overlay');\nconst formContainer = document.querySelector('.container');\nconst closeButton = document.querySelector('.close');\nconst addButton = document.querySelector('.add-btn');\nlet modalOpen = false;\n\n// localStorage.clear();\n\nclearElement = (element) => {\n  while (element.firstChild) {\n    element.removeChild(element.firstChild);\n  }\n};\n\nrenderLists = () => {\n  if (lists === null) {\n    const listElement = document.createElement('li');\n    listElement.innerText = \"DEFAULT\";\n    listElement.dataset.listId = 1;\n    if (list.id === selectedListId) {\n      listElement.classList.add('active-list');\n    }\n    listsContainer.appendChild(listElement);\n\n  } else { \n  lists.forEach((list) => {\n    const listElement = document.createElement('li');\n    listElement.innerText = list.name;\n    listElement.dataset.listId = list.id;\n    if (list.id === selectedListId) {\n      listElement.classList.add('active-list');\n    }\n    listsContainer.appendChild(listElement);\n  });\n };\n};\n\nrenderTaskCount = (selectedList) => {\n  const incompleteTaskCount = selectedList.tasks.filter(\n    (task) => !task.complete,\n  ).length;\n  const taskString = incompleteTaskCount === 1 ? 'task' : 'tasks';\n  listCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`;\n};\n\ncolorTasks = (selectedList) => {\n  const todos = [...document.querySelectorAll('.todo')];\n  const checkbox = [...document.querySelectorAll('.checkbox')];\n  for (let i = 0; i < todos.length; i += 1) {\n    for (let i = 0; i < selectedList.tasks.length; i += 1) {\n      if (selectedList.tasks[i].priority === 'High') {\n        checkbox[i].style.border = '4px solid #ed1250';\n      } else if (selectedList.tasks[i].priority === 'Medium') {\n        checkbox[i].style.border = '4px solid #d3d00f';\n      } else {\n        checkbox[i].style.border = '4px solid #0fc53d';\n      }\n    }\n  }\n};\n\nopenOrCloseAddTaskForm = () => {\n  const h2 = document.querySelector('.container h2');\n  const submitInput = document.querySelector('input[type=\"submit\"]');\n\n  if (modalOpen) {\n    formContainer.style.pointerEvents = 'none';\n    formContainer.style.transform = 'scale(0)';\n    overlay.style.opacity = 0;\n    modalOpen = false;\n  } else {\n    h2.textContent = 'New Task';\n    submitInput.value = 'Submit';\n    formContainer.style.pointerEvents = 'auto';\n    formContainer.style.transform = 'scale(1)';\n    overlay.style.opacity = 1;\n    modalOpen = true;\n  }\n};\n\nopenOrCloseUpdateTaskForm = () => {\n  const h2 = document.querySelector('.container h2');\n  const submitInput = document.querySelector('input[type=\"submit\"]');\n\n  if (modalOpen) {\n    formContainer.style.pointerEvents = 'none';\n    formContainer.style.transform = 'scale(0)';\n    overlay.style.opacity = 0;\n    modalOpen = false;\n  } else {\n    h2.textContent = 'Update Task';\n    submitInput.value = 'Update';\n    formContainer.style.pointerEvents = 'auto';\n    formContainer.style.transform = 'scale(1)';\n    overlay.style.opacity = 1;\n    modalOpen = true;\n  }\n}\n\nrenderTasks = (selectedList) => {\n  if (selectedList.tasks.length === 0) {\n    listDisplayContainer.style.background = 'center no-repeat';\n    listDisplayContainer.style.backgroundSize = '35%';\n  } else {\n    listDisplayContainer.style.background = '';\n  }\n\n  selectedList.tasks.forEach((task) => {\n    const taskElement = document.importNode(taskTemplate.content, true);\n    const checkbox = taskElement.querySelector('input');\n    checkbox.id = task.id;\n    checkbox.checked = task.complete;\n    const label = taskElement.querySelector('label');\n    label.htmlFor = task.id;\n\n    const lineBreak = document.createElement('br');\n    label.append(task.name, ', ', task.date, lineBreak, task.description);\n    const editButton = document.createElement('p');\n    editButton.innerHTML = '<i class=\"far fa-edit\"></i>';\n    editButton.classList.add('edit');\n    // eslint-disable-next-line no-use-before-define\n    editButton.addEventListener('click', () => editTask(task, label));\n    const todoTask = taskElement.querySelector('.task');\n    todoTask.append(editButton);\n    tasksContainer.appendChild(taskElement);\n  });\n};\n\nrender = () => {\n  clearElement(listsContainer);\n  renderLists();\n  const selectedList = lists.find((list) => list.id === selectedListId);\n\n  if (selectedListId === null) {\n    listDisplayContainer.style.display = 'none';\n  } else {\n    listDisplayContainer.style.display = '';\n    listTitleElement.innerHTML = `${selectedList.name}`;\n    renderTaskCount(selectedList);\n    clearElement(tasksContainer);\n    renderTasks(selectedList);\n    colorTasks(selectedList);\n  }\n};\n\nrenderAndSave = () => {\n  render();\n  localStorage.setItem('task.lists', JSON.stringify(lists));\n  localStorage.setItem('task.selectedListId', selectedListId);\n};\n\n\neditTask = (task, label) => {\n  openOrCloseUpdateTaskForm();\n  newTaskInput.value = task.name;\n  newTaskDate.value = task.date;\n  newTaskPriority.value = task.priority;\n  newTaskDescription.value = task.description;\n  newTaskForm.addEventListener('submit', () => {\n    task.name = newTaskInput.value;\n    task.date = newTaskDate.value;\n    task.priority = newTaskPriority.value;\n    task.description = newTaskDescription.value;\n    label.innerHTML = `<span class=\"checkbox\"></span>${task.name}<br>${task.date}<br>${task.description}`;\n    renderAndSave();\n  });\n};\n\ncreateList = () => ({ id: Date.now().toString(), name: newListInput.value, tasks: [] });\n\ncreateTask = () => ({\n  id: Date.now().toString(),\n  name: newTaskInput.value,\n  date: newTaskDate.value,\n  priority: newTaskPriority.value,\n  description: newTaskDescription.value,\n  complete: false,\n});\n\nnewListForm.addEventListener('submit', (e) => {\n  e.preventDefault();\n  const listName = newListInput.value;\n  if (listName === null || listName === '') return;\n  const list = createList();\n  newListInput.value = null;\n  lists.push(list);\n  renderAndSave();\n});\n\nlistsContainer.addEventListener('click', (e) => {\n  if (e.target.tagName.toLowerCase() === 'li') {\n    selectedListId = e.target.dataset.listId;\n    renderAndSave();\n  }\n});\n\ndeleteListButton.addEventListener('click', () => {\n  lists = lists.filter((list) => list.id !== selectedListId);\n  selectedListId = null;\n  renderAndSave();\n});\n\nnewTaskForm.addEventListener('submit', (e) => {\n  e.preventDefault();\n  const taskName = newTaskInput.value;\n  const h2 = document.querySelector('.container h2');\n  if (h2.textContent === 'Update Task') return;\n  if (taskName === null || taskName === '') return;\n  const task = createTask();\n  newTaskInput.value = null;\n  const selectedList = lists.find((list) => list.id === selectedListId);\n  selectedList.tasks.push(task);\n  renderAndSave();\n});\n\nclearCompleteTasksButton.addEventListener('click', () => {\n  const selectedList = lists.find((list) => list.id === selectedListId);\n  selectedList.tasks = selectedList.tasks.filter((task) => !task.complete);\n  renderAndSave();\n});\n\ntasksContainer.addEventListener('click', (e) => {\n  if (e.target.tagName.toLowerCase() === 'input') {\n    const selectedList = lists.find((list) => list.id === selectedListId);\n    const selectedTask = selectedList.tasks.find(\n      (task) => task.id === e.target.id,\n    );\n    selectedTask.complete = e.target.checked;\n    renderAndSave();\n  }\n});\n\naddButton.addEventListener('click', () => {\n  newTaskForm.reset();\n  openOrCloseAddTaskForm();\n\n  if (modalOpen) {\n    addButton.style.background = '#2185d5';\n    addButton.style.transform = 'rotate(45deg)';\n  } else {\n    addButton.style.background = 'transparent';\n    addButton.style.transform = 'rotate(0)';\n  }\n});\n\ncloseModal = () => {\n  formContainer.style.transform = 'scale(0)';\n  overlay.style.opacity = 0;\n  modalOpen = false;\n};\n\ncloseButton.addEventListener('click', () => {\n  closeModal();\n  addButton.style.background = 'transparent';\n  addButton.style.transform = 'rotate(0)';\n});\n\nformContainer.addEventListener('submit', (e) => {\n  e.preventDefault();\n  openOrCloseAddTaskForm();\n  addButton.style.background = 'transparent';\n  addButton.style.transform = 'rotate(0)';\n  modalOpen = false;\n});\n\nrender();\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

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