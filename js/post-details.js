let userDetailsList = document.getElementById('user-details-list');


fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(user => {
        for (const userKeys in user) {
            let userDetailsItem = document.createElement('li');
            let iternalListInKey = document.createElement('ul');

            if (typeof user[userKeys] === 'object') {
                for (const keysInTheUserKeys in user[userKeys]) {
                    for (const iternalObjectInTheUserKeys in userKeys[keysInTheUserKeys]) {

                    }

                    userDetailsItem.innerText = `${userKeys}`;

                    let iternalItemInKey = document.createElement('li');
                    iternalItemInKey.innerText = `${user[userKeys][keysInTheUserKeys]}`;

                    iternalListInKey.appendChild(iternalItemInKey);
                    userDetailsItem.appendChild(iternalListInKey)
                    userDetailsList.appendChild(userDetailsItem);
                }
            } else {
                userDetailsItem.innerText = `${userKeys} - ${user[userKeys]}`;
                userDetailsList.appendChild(userDetailsItem);
            }
            // console.log(userKeys, user[userKeys]);
        }
    });