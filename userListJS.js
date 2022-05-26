let addUserButton = document.getElementById('addUser');
let userContainer = document.getElementById('userContainer');
let inputField = document.getElementById('inputField');

let userList = [
    user1 = 'Gerrie',
    user2 = 'Susan',
    user3 = 'Geerhard',
    user4 = 'Caitlin',
    user5 = 'Eckhard',
    user6 = 'John',
    user7 = 'Margie',
    user8 = 'Jess',
    user9 = 'Sarah',
    user10 = 'Claire',
];

let menuOptions = [
    addUser = '1', 
    removeUser = '2', 
    disableUser = '3', 
    Sort = '4'
];

let choices = prompt('Choose an option:\n 1) Add three Users \n 2) Remove User \n 3) Display users \n 4) Sort users');

// function options() {
switch (menuOptions) {
    case '1':
        addUserButton()
            let li = document.createElement('li');
            li.innerText = inputField.Value;
            userContainer.appendChild(li);
            console.log(inputField);
        break;
    case '2':
        li.addEventListener('click', function () {
            li.removeChild(li);})
        break;
    case '3':
        console.log(`${user1} ${user2} ${user3} ${user4} ${user5} ${user6} ${user7} ${user8} ${user9} ${user10}`)
        break;
    case '4':
        userList.sort();
        break;
}
// 