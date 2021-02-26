const addButton = document.querySelector('.addProject');
const delButton = document.querySelector('.deleteProject');
// const inputValue = document.getElementById("myInput").value;


addButton.addEventListener('click', function(e) {
    const inputValue = document.getElementById("myInput").value;

    const list = document.getElementById('proj-list');
    const row = document.createElement('tr')
    row.innerHTML = `
      <td> ${inputValue} </td>`;
    list.appendChild(row);
    document.getElementById('myInput').value = '';
    e.preventDefault();
})




delButton.addEventListener('click', function(){
    
})
