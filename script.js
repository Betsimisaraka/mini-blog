console.log('it works');

//Create new blog
const blogList = document.querySelector('#post-list');

const newPost = () => {
    let div = document.createElement('div');
    div.setAttribute('id', 'post-list');

    let div1 = document.createElement('div');
    div1.classList.add('card');
    div1.classList.add('some-space');

    let div2 = document.createElement('div');
    div2.classList.add('card-body');

    let title = document.createElement('h5');
    title.classList.add('card-title');

    let content = document.createElement('p');
    content.classList.add('card-text');

    let span1 = document.createElement('span');
    span1.classList.add('badge');
    span1.classList.add('badge-light');
    span1.textContent = 'Hobbies';

    let span2 = document.createElement('span');
    span2.classList.add('badge');
    span2.classList.add('badge-light');
    span2.textContent = 'School life';

    let span3 = document.createElement('span');
    span3.classList.add('badge');
    span3.classList.add('badge-light');
    span3.textContent = 'Personal';

    title.textContent = document.getElementById('new-post-title').value;
    content.textContent = document.getElementById('new-post-content').value;

    div.appendChild(div1);
    div1.appendChild(div2);
    div2.appendChild(title);
    div2.appendChild(content);
    div2.appendChild(span1);
    div2.appendChild(span2);
    div2.appendChild(span3);
    return div;
}

// Adding the new plog to the submit button

const submit = document.getElementById('submit-form');

submit.addEventListener('click', ($event) => {
    const newBlog = newPost();
    blogList.appendChild(newBlog);
    $event.preventDefault();
    document.querySelector('form').reset();
});

