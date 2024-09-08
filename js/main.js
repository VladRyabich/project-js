const usersSection = document.getElementById('usersSection');
document.body.appendChild(usersSection)

const container = document.getElementById('usersContainer');
usersSection.appendChild(container);

let usersList = document.getElementById('users-list');


document.addEventListener('DOMContentLoaded', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            for (const user of users) {
                let userItem = document.createElement('li');
                userItem.classList.add('user-item');

                let userId = document.createElement('h2');
                userId.classList.add('user-id');
                userId.innerText = `ID: ${user.id}`;

                let userName = document.createElement('h3');
                userName.classList.add('card-info', 'user-name');
                userName.innerText = `${user.name}`;

                let userDetailsBtn = document.createElement('a');
                userDetailsBtn.classList.add('btn');
                userDetailsBtn.href = `user-details.html?id=${user.id}`;
                userDetailsBtn.innerText = 'User details';

                userItem.append(userId, userName, userDetailsBtn);
                usersList.appendChild(userItem);
            }
        });
});