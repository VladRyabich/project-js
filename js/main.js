let usersList = document.getElementById('users-list');

fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                for (const user of users) {
                    let userItem = document.createElement('li');

                    let userId = document.createElement('h2');
                    userId.classList.add('user-id');
                    userId.innerText = `${user.id}`;

                    let userName = document.createElement('h3');
                    userName.classList.add('user-name');
                    userName.innerText = `${user.username}`;

                    let userDetailsBtn = document.createElement('a');
                    userDetailsBtn.classList.add('user-details-btn');
                    userDetailsBtn.href = `user-details.html?id=${user.id}`;
                    userDetailsBtn.innerText = 'User details';

                    userItem.append(userId, userName, userDetailsBtn);
                    usersList.appendChild(userItem);
                }
            });