const addButton = document.querySelector('.addProject');
const delButton = document.querySelector('.btnTask');

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

delButton.addEventListener('click', openForm);


function openForm() {
  dispTask.classList.add();
}

function toogle_div_fun(id) {
  let divelement = document.getElementById(id);

  if(divelement.style.display == 'none')
  divelement.style.display = 'block';
  else
  divelement.style.display = 'none';
}


