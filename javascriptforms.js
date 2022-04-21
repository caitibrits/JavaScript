const form = document.getElementById('form');
const newTask = document.getElementById("newTask");

form.addEventListener('submit', e => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  //get values from inputs
  const newTaskValue = newTask.value.trim();

  if(newTaskValue === '') {
    //show error
    //add error class
    setErrorFor(newTask, 'Please make sure your task contains no HTML characters');
  } else {
    //add success class
    setSuccessFor(newTask);
  }

  if(newTaskValue === '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/'); {
    setErrorFor(newTask, 'Please make sure your task contains no HTML characters');
  } 
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  //add error message inside small
  small.innerText = message;

  //add error class
  formControl.className = 'form-control error';
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function setErrorFor(newTask){
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
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