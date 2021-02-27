const addButton = document.querySelector('.addProject');
const delButton = document.querySelector('.btnTask');
let modalOpen = false;
const formContainer = document.querySelector(".container");

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
    // overlay.style.opacity = 0;
    modalOpen = false;
  } else {
    h2.textContent = "New Task";
    submitInput.value = "Submit";
    formContainer.style.pointerEvents = "auto";
    formContainer.style.transform = "scale(1)";
    // overlay.style.opacity = 1;
    modalOpen = true;
  }

  console.log("hello");

  
}
delButton.addEventListener("click", (e) => {
  // newTaskForm.reset();
  e.preventDefault();
  openOrCloseAddTaskForm();

  // if (modalOpen) {
  //   addButton.style.background = "#2185d5";
  //   addButton.style.transform = "rotate(45deg)";
  // } else {
  //   addButton.style.background = "transparent";
  //   addButton.style.transform = "rotate(0)";
  // }
});



