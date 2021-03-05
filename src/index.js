const listsContainer = document.querySelector("[data-lists]");
const newListForm = document.querySelector("[data-new-list-form]");
const newListInput = document.querySelector("[data-new-list-input]");
const deleteListButton = document.querySelector("[data-delete-list-button]");
const listDisplayContainer = document.querySelector("[data-list-display-container]");
const listTitleElement = document.querySelector("[data-list-title");
let lists = JSON.parse(localStorage.getItem("task.lists")) || [];
let selectedListId = localStorage.getItem("task.selectedListId");

function createList() {
    return { id: Date.now().toString(), name: newListInput.value, tasks: [] };
  }

  newListForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const listName = newListInput.value;
    if (listName === null || listName === "") return;
    const list = createList();
    newListInput.value = null;
    lists.push(list);
    renderAndSave();
  });

function renderAndSave() {
    renderLists();
  localStorage.setItem("task.lists", JSON.stringify(lists));
  localStorage.setItem("task.selectedListId", selectedListId);
}

function renderLists() {
  lists.forEach((list) => {
    const listElement = document.createElement("li");
    listElement.innerText = list.name;
    listElement.dataset.listId = list.id;
    if (list.id === selectedListId) {
      listElement.classList.add("active-list");
    }
    listsContainer.appendChild(listElement);
  });
}



