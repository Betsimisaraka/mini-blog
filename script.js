console.log('it works');

//Grab the element we need
const postList = document.querySelector('#post-list');
const submit = document.querySelector('#submit-form');
const titleInput = document.querySelector('#new-post-title');
const contentTextarea = document.querySelector('#new-post-content');
const firstCheckbox = document.querySelector('#hobbies-tag');
const secondCheckbox = document.querySelector('#school-life-tag');
const thirdCheckbox = document.querySelector('#personal-tag');
const addPostForm = document.querySelector('form');


//add the event Listener on the submit, click';

submit.addEventListener('click', ($event) => {
    // Create html element

    let mainPost = document.createElement('div');
    mainPost.classList.add('card', 'some-space');

    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    let heading = document.createElement('h5');
    heading.classList.add('card-title');
    heading.textContent = titleInput.value;

    let content = document.createElement('p');
    content.classList.add('card-text');
    content.textContent = contentTextarea.value;

    let firstBadge = document.createElement('span');
    firstBadge.classList.add('badge', 'badge-light', 'hidden');
    firstBadge.textContent ='Hobbies';

    let secondBadge = document.createElement('span');
    secondBadge.classList.add('badge', 'badge-light', 'hidden');
    secondBadge.textContent = 'School life';

    let thirdBadge = document.createElement('span');
    thirdBadge.classList.add('badge', 'badge-light', 'hidden');
    thirdBadge.textContent = 'Personal';

    // Append the element together

    mainPost.appendChild(cardBody);
    cardBody.appendChild(heading);
    cardBody.appendChild(content);
    cardBody.appendChild(firstBadge);
    cardBody.appendChild(secondBadge);
    cardBody.appendChild(thirdBadge);

    // Append the Post inside the list.
    postList.appendChild(mainPost);
    $event.preventDefault();
    // for the checkbox.

    if(firstCheckbox.checked) {
       firstBadge.classList.remove('hidden');
    }

    if(secondCheckbox.checked) {
        secondBadge.classList.remove('hidden');
    }

    if(thirdCheckbox.checked) {
        thirdBadge.classList.remove('hidden');
    }
    addPostForm.reset();
});

