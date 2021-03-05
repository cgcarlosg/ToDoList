const listsContainer = document.querySelector('[data-lists')

let lists = [{id:1, name:'name'}, {id:2, name:'todo'}]

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