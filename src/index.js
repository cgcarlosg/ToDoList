const addButton = document.querySelector('.addProject');
const delButton = document.querySelector('.btnTask');
let modalOpen = false;
const formContainer = document.querySelector(".container");
const overlay = document.querySelector("#overlay");
const closeButton = document.querySelector(".close");
const addToDoButton = document.querySelector(".add-btn");

addButton.addEventListener('click', function(e) {
    const inputValue = document.getElementById("myInput").value;

    const list = document.getElementById('proj-list');
    const row = document.createElement('tr')
    row.innerHTML = `
      <td> ${inputValue} </td>
      <td> <span onClick="javascript:(function() { this.event.target.parentElement.parentElement.remove(); })()"> X </span></td>`;
    list.appendChild(row);
    document.getElementById('myInput').value = '';
    e.preventDefault();
})

//when user wants to add a new task
function openOrCloseAddTaskForm() {
  const h2 = document.querySelector(".container h2");
  const submitInput = document.querySelector(`input[type="submit"]`);

  if (modalOpen) {
    formContainer.style.pointerEvents = "none";
    formContainer.style.transform = "scale(0)";
    overlay.style.opacity = 0;
    modalOpen = false;
  } else {
    h2.textContent = "New Task";
    submitInput.value = "Submit";
    formContainer.style.pointerEvents = "auto";
    formContainer.style.transform = "scale(1)";
    overlay.style.opacity = 1;
    modalOpen = true;
  }

  console.log("hello");

  
}
addToDoButton.addEventListener("click", (e) => {
  // newTaskForm.reset();
  e.preventDefault();
  openOrCloseAddTaskForm();

  if (modalOpen) {
    addToDoButton.style.background = "#2185d5";
    addToDoButton.style.transform = "rotate(45deg)";
  } else {
    addToDoButton.style.background = "transparent";
    addToDoButton.style.transform = "rotate(0)";
  }
});

function modalClose(){
  formContainer.style.transform = 'scale(0)';
  overlay.style.opacity = 0;
  modalOpen = false;
}

closeButton.addEventListener('click', () => {
  modalClose();
  addToDoButton.style.background = 'transparent';
  addToDoButton.style.transform = 'rotate(0)';
  modalOpen = false;
})


