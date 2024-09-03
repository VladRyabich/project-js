let usersList = document.getElementById('users-list');

fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                for (const user of users) {
                    let userItem = document.createElement('li');
                    let userId = document.createElement('h2');
                    userId.innerText = `${user.id}`;
                    let userName = document.createElement('h3');
                    userName.innerText = `${user.username}`
                    // userItem.innerText = `${user.id} : ${user.username}`;
                    userItem.append(userId, userName);
                    usersList.appendChild(userItem);
                }
            });