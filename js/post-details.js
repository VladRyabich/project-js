const postSection = document.getElementById('postSection');
document.body.appendChild(postSection);

const container = document.getElementById('postContainer');
postSection.appendChild(container);

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const idPost = urlParams.get('id');

    fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
        .then(response => response.json())
        .then(post => {
            const container = document.getElementById('postContainer');
            const postBlock = document.createElement('div');
            postBlock.classList.add('post-details');

            const postBlockTitle = document.createElement('h1');
            postBlockTitle.innerText = `${post.title}`;

            const postBlockText = document.createElement('p');
            postBlockText.innerText = `${post.body}`;

            const commentsTitle = document.createElement('h2');
            commentsTitle.classList.add('hero-title');
            commentsTitle.innerText = 'Comments';

            postBlock.append(postBlockTitle, postBlockText)
            container.append(postBlock, commentsTitle);


            fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                .then(response => response.json())
                .then(comments => {
                    const commentsList = document.createElement('ul');
                    commentsList.classList.add('comments-list');

                    comments.forEach(comment => {
                        const commentItem = document.createElement('li');

                        const commentInfoList = document.createElement('ul');

                        commentsList.appendChild(commentItem);
                        commentItem.appendChild(commentInfoList);

                        for (const commentKey in comment) {
                            const commentInfoItem = document.createElement('li');

                            const commentInfoTitle = document.createElement('h2');
                            commentInfoTitle.innerText = `${commentKey}`;

                            const commentInfoText = document.createElement('p');
                            commentInfoText.innerText = `${comment[commentKey]}`;

                            commentInfoItem.append(commentInfoTitle, commentInfoText);
                            commentInfoList.appendChild(commentInfoItem);
                        }
                    });

                    container.appendChild(commentsList);

                    const backPageWrapper = document.createElement('div');
                    backPageWrapper.classList.add('back-page-wrapper');
                    backPageWrapper.innerHTML = `<a class="btn" onclick="history.back(); return false;">Back</a>`;
                    container.appendChild(backPageWrapper);
                });
        });
});