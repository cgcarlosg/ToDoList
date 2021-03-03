const allButton = document.querySelector("#All-button");
const todayButton = document.querySelector("#Today-button");
const urgentButton = document.querySelector("#Urgent-button");
const titleTask = document.querySelector("#project-name");
const taskInputContainer = document.querySelector("#input-container");
const taskInput = document.querySelector("#task-input");
const taskButton = document.querySelector("#add-task-input-button");
const projTaskButton = document.querySelector("#add-proj-task-input-button");
const deleteProjectButton = document.querySelector("#delete-proj-button");
const sidebarDiv = document.querySelector("#sidebar");
const tasksDiv = document.querySelector("#tasks");
const projectButtons = document.querySelector("#projects-buttons");
const newProjectButton = document.querySelector("#add-project-input-button");

projTaskButton.style.display = "none";
deleteProjectButton.style.display = "none";
allButton.addEventListener("click", switchList);
todayButton.addEventListener("click", switchList);
urgentButton.addEventListener("click", switchList);
newProjectButton.addEventListener("click", addNewProject);

let allTasks = [];
let todaysTasks = [];
let urgentTasks = [];
let taskID = 1;
let projectObject = {};
let projID = 1;

// task factory
const task = () => {
    if (taskInput.value.length < 1){
        alert("task is empty, add text")
        return
    }
    let name = taskInput.value;
    let id = taskID
    const today = new Date().toISOString().slice(0,10);
    let newTask = {
        name: name,
        id: id,
        date:  today,
        status: "todo",
        urgency: "not"
    }
    taskID ++;
    allTasks.push(newTask);
    addTaskToList(name, id)
}

function addTaskToList(task, id){
    let newTask = document.createElement("div");
        newTask.classList.add("new-task-container");
        newTask.id = id;
        let _id = id
        let newTaskLeft = document.createElement("div");
            newTaskLeft.classList.add("task-container-left");
            let newTaskTitle = document.createElement("div");
                newTaskTitle.innerHTML = task;
                newTaskTitle.classList.add("task-div");
            let newTaskCheck = document.createElement("div");
                newTaskCheck.innerHTML = "🔘";
                newTaskCheck.classList.add("task-div-check");
                newTaskCheck.addEventListener("click", function(){
                    var item = allTasks.find( ({id}) => id === _id);
                    if (this.innerHTML == "🔘"){
                        this.innerHTML = "✔️";
                        item.status = "completed";
                        updateLists();
                    } else {
                        this.innerHTML = "🔘";
                        item.status = "todo";
                        updateLists();
                    }
                })
            let editTaskButton = document.createElement("button");
                editTaskButton.innerHTML = "✎"
                editTaskButton.classList.add("task-edit-button");
                editTaskButton.addEventListener("click", function(){
                    var item = allTasks.find( ({id}) => id === _id);
                    let editTaskClose = document.createElement("button");
                        editTaskClose.innerHTML = "✎"
                        editTaskClose.classList.add("task-edit-button");
                        editTaskClose.addEventListener("click", function(){
                            newTaskTitle.style.display = "flex";
                            newTaskCheck.style.display = "flex";
                            editTaskButton.style.display = "flex";
                            editTaskName.remove();
                            editTaskSave.remove();
                            editTaskClose.remove();
                            updateLists();
                        })
                        newTaskLeft.appendChild(editTaskClose);
                    let editTaskName = document.createElement("input")
                        editTaskName.classList.add("edit-task-input");
                        editTaskName.type = "text";
                        editTaskName.value = item.name
                    let editTaskSave = document.createElement("button");
                        editTaskSave.innerHTML = "save";
                        editTaskSave.classList.add("task-edit-button");
                        newTaskLeft.appendChild(editTaskName);
                        newTaskLeft.appendChild(editTaskSave);
                        newTaskTitle.style.display = "none";
                        newTaskCheck.style.display = "none";
                        editTaskButton.style.display = "none";
                        editTaskSave.addEventListener("click", function(){
                            item.name = editTaskName.value;
                            newTaskTitle.style.display = "flex";
                            newTaskCheck.style.display = "flex";
                            editTaskButton.style.display = "flex";
                            newTaskTitle.innerHTML = editTaskName.value;
                            editTaskName.remove();
                            editTaskSave.remove();
                            editTaskClose.remove();
                            updateLists();
                        })
                })
        newTaskLeft.appendChild(editTaskButton); 
        newTaskLeft.appendChild(newTaskTitle); 
        newTaskLeft.appendChild(newTaskCheck); 

        let newTaskRight = document.createElement("div");
            newTaskRight.classList.add("task-container-right");
            let flagTaskButton = document.createElement("button");
                flagTaskButton.innerHTML = "⚑"
                flagTaskButton.classList.add("task-flag-button");
                flagTaskButton.addEventListener("click", function(){
                    var item = allTasks.find( ({id}) => id === _id);
                    if (item.urgency == "not"){
                        flagTaskButton.style.cssText = "color: var(--cancelRed);"
                        item.urgency = "urgent";
                        updateLists();
                    } else {
                        flagTaskButton.style.removeProperty("color");
                        item.urgency = "not";
                        updateLists();
                    }
                })
            let dateInput = document.createElement("input");
                dateInput.classList.add("task-input");
                dateInput.type = "date";
                dateInput.addEventListener("change", function(){
                    var input = this.value;
                    var item = allTasks.find( ({id}) => id === _id);
                    item.date = input;
                    updateLists();
                })
            let newTaskClear = document.createElement("div");
                newTaskClear.innerHTML = "❌";
                newTaskClear.classList.add("task-div-check");
                newTaskClear.addEventListener("click", function(){
                    var item = allTasks.find( ({id}) => id === _id);
                    var index = allTasks.indexOf(item)
                    allTasks.splice(index, 1);
                    newTaskClear.parentElement.parentElement.remove();
                    updateLists();
                })
            newTaskRight.appendChild(flagTaskButton);
            newTaskRight.appendChild(dateInput);
            newTaskRight.appendChild(newTaskClear); 
        newTask.appendChild(newTaskLeft); 
        newTask.appendChild(newTaskRight); 
    tasksDiv.appendChild(newTask);
    taskInput.value = "";
    updateLists();
}

// update task lists
function updateLists() {
    todaysTasks.splice(0, todaysTasks.length);
    urgentTasks.splice(0, urgentTasks.length);
    const today = new Date().toISOString().slice(0,10);
    for (var i = 0; i < allTasks.length; i++){
        if (allTasks[i]["date"] == today){
            todaysTasks.push(allTasks[i])
        }
        if (allTasks[i]["urgency"] == "urgent"){
            urgentTasks.push(allTasks[i])
        }
    }
}

// switch lists - normal

function switchList(e){
    if (e == undefined){
        var currentList = "All"
    }else{
        var currentList = e.target.innerHTML;
    }
    titleTask.innerHTML = currentList;
    while (tasksDiv.firstChild) {
        tasksDiv.removeChild(tasksDiv.firstChild);
    }
    if (currentList == "All"){
        populateList(allTasks);
        changeButton(currentList);
        taskButton.style.removeProperty("display");
        projTaskButton.style.display = "none";
        deleteProjectButton.style.display = "none";
    } else if (currentList == "Today"){
        populateList(todaysTasks);
        changeButton(currentList);
        taskButton.style.removeProperty("display");
        projTaskButton.style.display = "none";
        deleteProjectButton.style.display = "none";
    } else if (currentList == "Urgent"){
        populateList(urgentTasks);
        changeButton(currentList);
        taskButton.style.removeProperty("display");
        projTaskButton.style.display = "none";
        deleteProjectButton.style.display = "none";
    }
}

// populate lists

function populateList (list) {
    list.forEach(element => {
        let newTask = document.createElement("div");
        newTask.classList.add("new-task-container");
        newTask.id = element.id;
        let _id = element.id
        let newTaskLeft = document.createElement("div");
            newTaskLeft.classList.add("task-container-left");
            let newTaskTitle = document.createElement("div");
                newTaskTitle.innerHTML = element.name;
                newTaskTitle.classList.add("task-div");
            let newTaskCheck = document.createElement("div");
                if (element.status == "completed"){
                    newTaskCheck.innerHTML = "✔️";
                } else {
                    newTaskCheck.innerHTML = "🔘";
                }
                newTaskCheck.classList.add("task-div-check");
                newTaskCheck.addEventListener("click", function(){
                    var item = allTasks.find( ({id}) => id === _id);
                    if (this.innerHTML == "🔘"){
                        this.innerHTML = "✔️";
                        item.status = "completed";
                        updateLists();
                    } else {
                        this.innerHTML = "🔘";
                        item.status = "todo";
                        updateLists();
                    }
                })
            let editTaskButton = document.createElement("button");
                editTaskButton.innerHTML = "✎"
                editTaskButton.classList.add("task-edit-button");
                editTaskButton.addEventListener("click", function(){
                    var item = allTasks.find( ({id}) => id === _id);
                    let editTaskClose = document.createElement("button");
                        editTaskClose.innerHTML = "✎"
                        editTaskClose.classList.add("task-edit-button");
                        editTaskClose.addEventListener("click", function(){
                            newTaskTitle.style.display = "flex";
                            newTaskCheck.style.display = "flex";
                            editTaskButton.style.display = "flex";
                            editTaskName.remove();
                            editTaskSave.remove();
                            editTaskClose.remove();
                            updateLists();
                        })
                        newTaskLeft.appendChild(editTaskClose);
                    let editTaskName = document.createElement("input")
                        editTaskName.classList.add("edit-task-input");
                        editTaskName.type = "text";
                        editTaskName.value = item.name
                    let editTaskSave = document.createElement("button");
                        editTaskSave.innerHTML = "save";
                        editTaskSave.classList.add("task-edit-button");
                        newTaskLeft.appendChild(editTaskName);
                        newTaskLeft.appendChild(editTaskSave);
                        newTaskTitle.style.display = "none";
                        newTaskCheck.style.display = "none";
                        editTaskButton.style.display = "none";
                        editTaskSave.addEventListener("click", function(){
                            item.name = editTaskName.value;
                            newTaskTitle.style.display = "flex";
                            newTaskCheck.style.display = "flex";
                            editTaskButton.style.display = "flex";
                            newTaskTitle.innerHTML = editTaskName.value;
                            editTaskName.remove();
                            editTaskSave.remove();
                            editTaskClose.remove();
                            updateLists();
                        })
                })
        newTaskLeft.appendChild(editTaskButton); 
        newTaskLeft.appendChild(newTaskTitle); 
        newTaskLeft.appendChild(newTaskCheck); 

        let newTaskRight = document.createElement("div");
            newTaskRight.classList.add("task-container-right");
            let flagTaskButton = document.createElement("button");
                flagTaskButton.innerHTML = "⚑"
                flagTaskButton.classList.add("task-flag-button");
                if (element.urgency == "urgent"){
                    flagTaskButton.style.cssText = "color: var(--cancelRed);"
                } else {
                    flagTaskButton.style.removeProperty("color");
                }
                flagTaskButton.addEventListener("click", function(){
                    var item = allTasks.find( ({id}) => id === _id);
                    if (item.urgency == "not"){
                        flagTaskButton.style.cssText = "color: var(--cancelRed);"
                        item.urgency = "urgent";
                        updateLists();
                    } else {
                        flagTaskButton.style.removeProperty("color");
                        item.urgency = "not";
                        updateLists();
                    }
                })
            let dateInput = document.createElement("input");
                dateInput.classList.add("task-input");
                dateInput.type = "date";
                dateInput.value = element.date;
                dateInput.addEventListener("change", function(){
                    var input = this.value;
                    var item = allTasks.find( ({id}) => id === _id);
                    item.date = input;
                    updateLists();
                })
            let newTaskClear = document.createElement("div");
                newTaskClear.innerHTML = "❌";
                newTaskClear.classList.add("task-div-check");
                newTaskClear.addEventListener("click", function(){
                    var item = allTasks.find( ({id}) => id === _id);
                    var index = allTasks.indexOf(item)
                    allTasks.splice(index, 1);
                    newTaskClear.parentElement.parentElement.remove();
                    updateLists();
                })
            newTaskRight.appendChild(flagTaskButton);
            newTaskRight.appendChild(dateInput);
            newTaskRight.appendChild(newTaskClear); 
        newTask.appendChild(newTaskLeft); 
        newTask.appendChild(newTaskRight); 
    tasksDiv.appendChild(newTask);
    taskInput.value = "";
    updateLists();
    });
}

// PROJECTS

// switch lists - project

function switchListProj(e){
    var currentList = e.target.innerText;
    titleTask.innerHTML = currentList;
    while (tasksDiv.firstChild) {
        tasksDiv.removeChild(tasksDiv.firstChild);
    }
    if (currentList in projectObject){
        populateProjectsList(projectObject[currentList], currentList);
        changeButton(currentList);
        projTaskButton.style.removeProperty("display");
        deleteProjectButton.style.removeProperty("display");
        taskButton.style.display = "none";
    }
}

// populate lists - project

function populateProjectsList (list, arrayName) {
    let arr = projectObject[arrayName];
    list.forEach(element => {
        let newTask = document.createElement("div");
        newTask.classList.add("new-task-container");
        newTask.id = element.id;
        let _id = element.id
        let newTaskLeft = document.createElement("div");
            newTaskLeft.classList.add("task-container-left");
            let newTaskTitle = document.createElement("div");
                newTaskTitle.innerHTML = element.name;
                newTaskTitle.classList.add("task-div");
            let newTaskCheck = document.createElement("div");
                if (element.status == "completed"){
                    newTaskCheck.innerHTML = "✔️";
                } else {
                    newTaskCheck.innerHTML = "🔘";
                }
                newTaskCheck.classList.add("task-div-check");
                newTaskCheck.addEventListener("click", function(){
                    var item = arr.find( ({id}) => id === _id);
                    if (this.innerHTML == "🔘"){
                        this.innerHTML = "✔️";
                        item.status = "completed";
                        updateLists();
                    } else {
                        this.innerHTML = "🔘";
                        item.status = "todo";
                        updateLists();
                    }
                })
            let editTaskButton = document.createElement("button");
                editTaskButton.innerHTML = "✎"
                editTaskButton.classList.add("task-edit-button");
                editTaskButton.addEventListener("click", function(){
                    var item = arr.find( ({id}) => id === _id);
                    let editTaskClose = document.createElement("button");
                        editTaskClose.innerHTML = "✎"
                        editTaskClose.classList.add("task-edit-button");
                        editTaskClose.addEventListener("click", function(){
                            newTaskTitle.style.display = "flex";
                            newTaskCheck.style.display = "flex";
                            editTaskButton.style.display = "flex";
                            editTaskName.remove();
                            editTaskSave.remove();
                            editTaskClose.remove();
                            updateLists();
                        })
                        newTaskLeft.appendChild(editTaskClose);
                    let editTaskName = document.createElement("input")
                        editTaskName.classList.add("edit-task-input");
                        editTaskName.type = "text";
                        editTaskName.value = item.name
                    let editTaskSave = document.createElement("button");
                        editTaskSave.innerHTML = "save";
                        editTaskSave.classList.add("task-edit-button");
                        newTaskLeft.appendChild(editTaskName);
                        newTaskLeft.appendChild(editTaskSave);
                        newTaskTitle.style.display = "none";
                        newTaskCheck.style.display = "none";
                        editTaskButton.style.display = "none";
                        editTaskSave.addEventListener("click", function(){
                            item.name = editTaskName.value;
                            newTaskTitle.style.display = "flex";
                            newTaskCheck.style.display = "flex";
                            editTaskButton.style.display = "flex";
                            newTaskTitle.innerHTML = editTaskName.value;
                            editTaskName.remove();
                            editTaskSave.remove();
                            editTaskClose.remove();
                            updateLists();
                        })
                })
        newTaskLeft.appendChild(editTaskButton); 
        newTaskLeft.appendChild(newTaskTitle); 
        newTaskLeft.appendChild(newTaskCheck); 

        let newTaskRight = document.createElement("div");
            newTaskRight.classList.add("task-container-right");
            let flagTaskButton = document.createElement("button");
                flagTaskButton.innerHTML = "⚑"
                flagTaskButton.classList.add("task-flag-button");
                if (element.urgency == "urgent"){
                    flagTaskButton.style.cssText = "color: var(--cancelRed);"
                } else {
                    flagTaskButton.style.removeProperty("color");
                }
                flagTaskButton.addEventListener("click", function(){
                    var item = arr.find( ({id}) => id === _id);
                    if (item.urgency == "not"){
                        flagTaskButton.style.cssText = "color: var(--cancelRed);"
                        item.urgency = "urgent";
                        updateLists();
                    } else {
                        flagTaskButton.style.removeProperty("color");
                        item.urgency = "not";
                        updateLists();
                    }
                })
            let dateInput = document.createElement("input");
                dateInput.classList.add("task-input");
                dateInput.type = "date";
                dateInput.value = element.date;
                dateInput.addEventListener("change", function(){
                    var input = this.value;
                    var item = arr.find( ({id}) => id === _id);
                    item.date = input;
                    updateLists();
                })
            let newTaskClear = document.createElement("div");
                newTaskClear.innerHTML = "❌";
                newTaskClear.classList.add("task-div-check");
                newTaskClear.addEventListener("click", function(){
                    var item = arr.find( ({id}) => id === _id);
                    var index = arr.indexOf(item);
                    arr.splice(index, 1);
                    newTaskClear.parentElement.parentElement.remove();
                    updateLists();
                })
            newTaskRight.appendChild(flagTaskButton);
            newTaskRight.appendChild(dateInput);
            newTaskRight.appendChild(newTaskClear); 
        newTask.appendChild(newTaskLeft); 
        newTask.appendChild(newTaskRight); 
    tasksDiv.appendChild(newTask);
    taskInput.value = "";
    updateLists();
    });
}

// project task factory
const projectTask = () => {
    let arrayName = titleTask.innerHTML;
    if (taskInput.value.length < 1){
        alert("task is empty, add text")
        return
    }
    let name = taskInput.value;
    let id = taskID
    const today = new Date().toISOString().slice(0,10);
    let newTask = {
        name: name,
        id: id,
        date:  today,
        status: "todo",
        urgency: "not",
        project: arrayName
    }
    taskID ++;
    projectObject[arrayName].push(newTask);
    addProjTaskToList(name, id, arrayName)
}

// add new project

function addNewProject() {
    newProjectButton.style.display = "none";
    let projectsInputContainer = document.createElement("div");
        projectsInputContainer.classList.add("project-input-container");
        let projectsInput = document.createElement("input");
            projectsInput.classList.add("project-input");
            projectsInput.id = "button-input";
            projectsInput.type = "text";
            projectsInput.placeholder = "new project";
        projectsInputContainer.appendChild(projectsInput);
        let projButtonContainer = document.createElement("div");
        projButtonContainer.classList.add("add-proj-button-container")
            let addButton = document.createElement("button");
                addButton.classList.add("add-proj-button");
                addButton.innerHTML = "add";
                addButton.addEventListener("click", function(){
                    let newProjectName = projectsInput.value;
                    if (newProjectName in projectObject){
                        alert("Already a project with that name, try another name");
                        return;
                    }
                    let newProjectArray = [];
                    projectObject[newProjectName] = newProjectArray;
                    let newProjectButtonToAdd = document.createElement("button");
                        newProjectButtonToAdd.innerHTML = newProjectName;
                        newProjectButtonToAdd.classList.add("sidebar-button");
                        newProjectButtonToAdd.addEventListener("click", switchListProj);
                        newProjectButtonToAdd.id = newProjectName + "-button";
                    projectButtons.appendChild(newProjectButtonToAdd);
                    addButton.parentElement.parentElement.remove();
                    newProjectButton.style.removeProperty("display");
                })
            let cancelButton = document.createElement("button");
                cancelButton.classList.add("cancel-proj-button");
                cancelButton.innerHTML = "cancel";
                cancelButton.addEventListener("click", function(){
                    cancelButton.parentElement.parentElement.remove();
                    newProjectButton.style.removeProperty("display");
                })
            projButtonContainer.appendChild(addButton);
            projButtonContainer.appendChild(cancelButton);
        projectsInputContainer.appendChild(projButtonContainer);
    sidebarDiv.appendChild(projectsInputContainer);
}

// add project task to project list

function addProjTaskToList(task, id, arrayName){
    let newTask = document.createElement("div");
        newTask.classList.add("new-task-container");
        newTask.id = arrayName;
        let _id = id
        let arr = projectObject[arrayName];
        let newTaskLeft = document.createElement("div");
            newTaskLeft.classList.add("task-container-left");
            let newTaskTitle = document.createElement("div");
                newTaskTitle.innerHTML = task;
                newTaskTitle.classList.add("task-div");
            let newTaskCheck = document.createElement("div");
                newTaskCheck.innerHTML = "🔘";
                newTaskCheck.classList.add("task-div-check");
                newTaskCheck.addEventListener("click", function(){
                    var item = arr.find( ({id}) => id === _id);
                    if (this.innerHTML == "🔘"){
                        this.innerHTML = "✔️";
                        item.status = "completed";
                        updateLists();
                    } else {
                        this.innerHTML = "🔘";
                        item.status = "todo";
                        updateLists();
                    }
                })
            let editTaskButton = document.createElement("button");
                editTaskButton.innerHTML = "✎"
                editTaskButton.classList.add("task-edit-button");
                editTaskButton.addEventListener("click", function(){
                    var item = arr.find( ({id}) => id === _id);
                    let editTaskClose = document.createElement("button");
                        editTaskClose.innerHTML = "✎"
                        editTaskClose.classList.add("task-edit-button");
                        editTaskClose.addEventListener("click", function(){
                            newTaskTitle.style.display = "flex";
                            newTaskCheck.style.display = "flex";
                            editTaskButton.style.display = "flex";
                            editTaskName.remove();
                            editTaskSave.remove();
                            editTaskClose.remove();
                            updateLists();
                        })
                        newTaskLeft.appendChild(editTaskClose);
                    let editTaskName = document.createElement("input")
                        editTaskName.classList.add("edit-task-input");
                        editTaskName.type = "text";
                        editTaskName.value = item.name
                    let editTaskSave = document.createElement("button");
                        editTaskSave.innerHTML = "save";
                        editTaskSave.classList.add("task-edit-button");
                        newTaskLeft.appendChild(editTaskName);
                        newTaskLeft.appendChild(editTaskSave);
                        newTaskTitle.style.display = "none";
                        newTaskCheck.style.display = "none";
                        editTaskButton.style.display = "none";
                        editTaskSave.addEventListener("click", function(){
                            item.name = editTaskName.value;
                            console.log(item)
                            newTaskTitle.style.display = "flex";
                            newTaskCheck.style.display = "flex";
                            editTaskButton.style.display = "flex";
                            newTaskTitle.innerHTML = editTaskName.value;
                            editTaskName.remove();
                            editTaskSave.remove();
                            editTaskClose.remove();
                            updateLists();
                        })
                })
        newTaskLeft.appendChild(editTaskButton); 
        newTaskLeft.appendChild(newTaskTitle); 
        newTaskLeft.appendChild(newTaskCheck); 

        let newTaskRight = document.createElement("div");
            newTaskRight.classList.add("task-container-right");
            let flagTaskButton = document.createElement("button");
                flagTaskButton.innerHTML = "⚑"
                flagTaskButton.classList.add("task-flag-button");
                flagTaskButton.addEventListener("click", function(){
                    var item = arr.find( ({id}) => id === _id);
                    if (item.urgency == "not"){
                        flagTaskButton.style.cssText = "color: var(--cancelRed);"
                        item.urgency = "urgent";
                        updateLists();
                    } else {
                        flagTaskButton.style.removeProperty("color");
                        item.urgency = "not";
                        updateLists();
                    }
                })
            let dateInput = document.createElement("input");
                dateInput.classList.add("task-input");
                dateInput.type = "date";
                dateInput.addEventListener("change", function(){
                    var input = this.value;
                    var item = arr.find( ({id}) => id === _id);
                    item.date = input;
                    updateLists();
                })
            let newTaskClear = document.createElement("div");
                newTaskClear.innerHTML = "❌";
                newTaskClear.classList.add("task-div-check");
                newTaskClear.addEventListener("click", function(){
                    var item = arr.find( ({id}) => id === _id);
                    var index = arr.indexOf(item)
                    arr.splice(index, 1);
                    newTaskClear.parentElement.parentElement.remove();
                    updateLists();
                })
            newTaskRight.appendChild(flagTaskButton);
            newTaskRight.appendChild(dateInput);
            newTaskRight.appendChild(newTaskClear); 
        newTask.appendChild(newTaskLeft); 
        newTask.appendChild(newTaskRight); 
    tasksDiv.appendChild(newTask);
    taskInput.value = "";
    updateLists();
}

function changeButton (currentList){
    var buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        if (button.id == currentList + "-button"){
            button.style.cssText = "background-color: var(--tasklist);"
        } else {
            button.style.removeProperty("background-color")
        }
    })
}

taskButton.addEventListener("click", task);
projTaskButton.addEventListener("click", projectTask);
deleteProjectButton.addEventListener("click", deleteProject);

function deleteProject () {
    if (document.querySelector('#confirmation-div') !== null){
        return;
    }
    var projToDelete = titleTask.innerHTML;
    var confirmationDiv = document.createElement("div");
        confirmationDiv.id = "confirmation-div"
        confirmationDiv.innerHTML = "are you sure?";
        var yesButton = document.createElement("button");
            yesButton.innerHTML = "yes";
            yesButton.classList.add("yes-button");
            yesButton.addEventListener("click", function(){
                if(projToDelete in projectObject){
                    var buttons = document.querySelectorAll("button");
                    buttons.forEach(button => {
                        if (button.id == projToDelete + "-button"){
                            button.remove();
                        }
                    })
                    delete projectObject[projToDelete];
                    switchList();
                    noButton.remove();
                    yesButton.remove();
                    confirmationDiv.remove();
                }
            })
        var noButton = document.createElement("button");
            noButton.innerHTML = "no";
            noButton.classList.add("no-button");
            noButton.addEventListener("click", function(){
                noButton.remove();
                yesButton.remove();
                confirmationDiv.remove();
            })
        confirmationDiv.appendChild(yesButton);
        confirmationDiv.appendChild(noButton);
    taskInputContainer.appendChild(confirmationDiv);
}