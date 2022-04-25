const form = document.getElementById('form');
const newTask = document.getElementById("newTask");

form.addEventListener('submit', e => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  //get values from inputs
  const newTaskValue = newTask.value.trim();

  if (newTask.includes("<" || ">" )) {
    document.getElementById("newTask").style.display = "block";
    return false;
}
else {
    return true;
}

}
