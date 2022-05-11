const form = document.getElementById('form');
const newTask = document.getElementById("newTask");

form.addEventListener('submit', e => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  //get values from inputs
  const newTaskValue = newTask.value.trim();

  if(newTaskValue.includes("<" || ">")) {
    //show error
    //add error class
    setErrorFor(newTask, 'Please make sure your task contains no HTML characters');
  } else {
    //add success class
    setSuccessFor(newTask);
  }
}


document.body.onload = addElement;

function addElement () {
  // create a new div element
  const myNewTaskList = document.createElement("li");

  // and give it some content
  const newTask = document.createTextNode("Wake up");

  // add the text node to the newly created div
  emptyListTag.appendChild(newTask);

  // add the newly created element and its content into the DOM
  const currentTask = document.getElementById("myNewTaskList");
  document.body.insertBefore(myNewTaskList, currentTask);
}