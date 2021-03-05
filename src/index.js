const listsContainer = document.querySelector('[data-lists')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput= document.querySelector('[data-new-list-input]')

const LOCAL_STORAGE_LIST_KEY = 'task.lists'
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []



newListForm.addEventListener('submit', e => {
  e.preventDefault()
  const listName = newListInput.value
  if (listName == null || listName === '') return
  const list = createList(listName)
  newListInput.value = null
  lists.push(list)
  render()
})

function createList(name) {
 return { id: Date.now().toString(), name: name, tasks: [] }
}

function save() {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists))
}

function saveAndRender() {
  save()
  render()
}

function render() {
  clearElement(listsContainer)
  lists.forEach(list => {
    listElement.dataset.listId = list.id
    const listElement = document.createElement('li')
    listElement.classList.add("list-name")
    listElement.innerHTML = list.name
    listsContainer.appendChild(listElement)
  })
}

function clearElement(element){
while (element.firstChild) {
  element.removeChild(element.firstChild)
}
}

render()