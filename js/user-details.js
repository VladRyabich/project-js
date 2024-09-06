const userSection = document.getElementById('userSection');
document.body.appendChild(userSection);

const userDetails = document.getElementById('userDetails');
userSection.appendChild(userDetails);

const userDetailsList = document.getElementById('user-details-list');

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const idUser = urlParams.get('id');

    fetch(`https://jsonplaceholder.typicode.com/users/${idUser}`)
        .then(response => response.json())
        .then(user => {
            for (const userKeys in user) {
                const userDetailsItem = document.createElement('li');
                userDetailsItem.classList.add('user-detail-item');

                const userDetailsTitle = document.createElement('h2');
                userDetailsTitle.classList.add('user-details-title');

                const userDetailsInfo = document.createElement('p');
                userDetailsInfo.classList.add('user-details-info');

                const iternalListInKey = document.createElement('ul');
                iternalListInKey.classList.add('iternal-list');

                const userGeoList = document.createElement('ul');

                if (typeof user[userKeys] === 'object') {

                    for (const iternalUserKeys in user[userKeys]) {
                        userDetailsTitle.innerText = `${userKeys}`;

                        const iternalItemInKey = document.createElement('li');
                        iternalItemInKey.classList.add('iternal-item');

                        const userDetailsSubtitle = document.createElement('h3');
                        userDetailsSubtitle.classList.add('user-details-subtitle');

                        const userDetailsAddedInfo = document.createElement('p');

                        userDetailsSubtitle.innerText = `${iternalUserKeys}`;
                        userDetailsAddedInfo.innerText = `${user[userKeys][iternalUserKeys]}`;

                        iternalListInKey.appendChild(iternalItemInKey);
                        iternalItemInKey.append(userDetailsSubtitle, userDetailsAddedInfo);
                        userDetailsItem.append(userDetailsTitle, iternalListInKey);


                        userDetailsList.appendChild(userDetailsItem);

                        if (typeof user[userKeys][iternalUserKeys] === 'object') {

                            for (const userGeoKey in user[userKeys][iternalUserKeys]) {
                                const userGeoItem = document.createElement('li');

                                // userGeoItem.innerText = `${userGeoKey} : ${user[userKeys][iternalUserKeys][userGeoKey]}`
                                const userGeoTitle = document.createElement('h4');
                                userGeoTitle.innerText = `${userGeoKey}`;

                                const userGeoLocation = document.createElement('p');
                                userGeoLocation.innerText = `${user[userKeys][iternalUserKeys][userGeoKey]}`;

                                userGeoItem.append(userGeoTitle, userGeoLocation);
                                userGeoList.appendChild(userGeoItem)
                                iternalItemInKey.appendChild(userGeoList);

                            }
                        }
                    }
                } else {
                    userDetailsTitle.innerText = `${userKeys}`;
                    userDetailsInfo.innerText = `${user[userKeys]}`;

                    userDetailsItem.append(userDetailsTitle, userDetailsInfo);
                    userDetailsList.appendChild(userDetailsItem);
                }
            }
            const btnWrapper = document.createElement('div');
            btnWrapper.classList.add('btn-wrapper');

            const postBtn = document.createElement('button');
            postBtn.id = 'post-btn';
            postBtn.innerText = 'post of current user';
            postBtn.classList.add('btn', 'post-btn');
            btnWrapper.appendChild(postBtn);

            const postList = document.createElement('ul');
            postList.id = 'post-list';
            postList.classList.add('post-list');

            const userContainer = document.getElementById('userDetails');
            userContainer.append(btnWrapper, postList);

            document.getElementById('post-btn').addEventListener('click', () => {
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                    .then(response => response.json())
                    .then(posts => {
                        const postContainer = document.getElementById('post-list');

                        posts.forEach(post => {
                            const postItem = document.createElement('li');
                            postItem.classList.add('post-item');

                            const userPostTitle = document.createElement('h2');
                            userPostTitle.innerText = `${post.title}`;

                            const userPostBtn = document.createElement('a');
                            userPostBtn.classList.add('btn', 'user-post-btn');
                            userPostBtn.href = `post-details.html?id=${post.id}`;
                            userPostBtn.innerText = `View Post Details`;

                            postItem.append(userPostTitle, userPostBtn);
                            postContainer.appendChild(postItem);
                        });
                    });
            });

            const backPageWrapper = document.createElement('div');
            backPageWrapper.classList.add('back-page-wrapper');
            backPageWrapper.innerHTML = `<a class="btn" onclick="history.back(); return false;">Back</a>`;
            userDetails.appendChild(backPageWrapper);
        });
});