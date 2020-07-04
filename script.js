console.log('it works');

const newPost = () => {
        var div = document.createElement('div');
        div.setAttribute('id', 'post-list');

        var title = document.createElement('h5');
        title.classList.add('card-title');

        var content = document.createElement('p');
        content.classList.add('card-text');

        title.textContent = document.getElementById('new-post-title').value;
        content.textContent = document.getElementById('new-post-content').value;

        div.appendChild(title);
        div.appendChild(content);
        return div;
    }

const blogList = document.querySelector('#post-list');

const submit = document.getElementById('submit-form');

submit.addEventListener('click', ($event) => {
    const newBlog = newPost();
    blogList.appendChild(newBlog);
    $event.preventDefault();
    document.querySelector('form').reset();
  });

