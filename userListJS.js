let addUser = document.getElementById('addUser');
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
const selected = choices;

// function options() {
switch (selected) {
    case '1':
        let li = document.createElement('li');
        li.innerText = inputField.Value;
        userContainer.appendChild(li);
        console.log(userList);
        break;
    case '2':
        userList.splice(2, 1);
        console.log(userList);
        break;
    case '3':
        console.log(`${userList}`)
        break;
    case '4':
        userList.sort();
        console.log(userList);
        break;
}
// 