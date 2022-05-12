({
    babel: true
})


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