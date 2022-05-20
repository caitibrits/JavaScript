let userList = [
    user1 = 'Gerrie',
    user2 = 'Susan',
    user3 = 'Geerhard',
    user4 = 'Caitlin',
    user5 = 'Eckhard',
    user6 = 'Jaco',
    user7 = 'Ane',
    user8 = 'Petrie',
    user9 = 'Janco',
    user10 = 'Ane',
];

let menuOptions = ['1', '2', '3', '4'];

let userMenu = prompt('Choose an option:\n 1) Add three Users \n 2) Remove User \n 3) Display all users \n 4) Sort users \n');

switch (menuOptions) {
    case '1':
        break;
    case '2':
        prompt('Who do you want to remove?');
        userList.reduce(function(total, current));
        break;
    case '3':
        console.log('Display all users');
        break;
    case '4':
        console.log('Sort users');
        break;
}

if (userMenu = () => ('1')) {
       newUser = userList.map(function (user) {return user++;})
        console.log('${item} will be added');
};