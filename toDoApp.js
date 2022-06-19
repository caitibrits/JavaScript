// get value of input from HTML and assign to variable
let addInput = document.getElementById('addNewInput');
// referrencing todos li
const list = document.querySelector('.todos');

// funtion to add tasks
function getInput () {
    //creating variable to assign input to
    let todo;
    // assigning input to variable
    todo = addInput.value.trim();
    //displaying todo
    return(todo);
};

// creating function to display HTML and output the todo inside it
function display() {
    document.getElementById('todo').innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        let ourDiv = document.createElement("div");
        let html = `
                <li>${todo}</li>
                <button>Delete</button>
            `;
    };
};