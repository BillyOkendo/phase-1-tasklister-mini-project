document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const submit = document.querySelector('form');
  submit.addEventListener("submit", (e) => {
    e.preventDefault()
    toDoList()
    submit.reset()
  
});

function toDoList(){
  const input = document.getElementById("new-task-description");
  const oneTask = document.getElement('li');
  const deleteButtn = document.createElement('button');
  oneTask.textContent = `${input,value}`;
  document.getElementById('task').appendChild(oneTask);


  deleteButtn.textContent= "DONE";
  oneTask.appendChild(deleteButtn);
  deleteButtn.addEventListener('click', () => oneTask.remove())
}


});
