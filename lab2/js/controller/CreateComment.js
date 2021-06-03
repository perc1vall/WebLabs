import LSComments from '../models/LSComment.js';
import FormReader from '../FormReader.js';

const form = document.querySelector('form');
const postId = JSON.parse(localStorage.getItem('pickedPost'));

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = FormReader.getData(form);

    if (!formData.commentText.trim().length) {
        alert('Empty comment');
        form.reset();
    } else {
     
        const comment = {
            id: Math.round(Math.random() * 100000).toString(),
            postId,
            author: JSON.parse(localStorage.getItem('sessionUser'))['nickname'],
            text: formData.commentText
        };

        LSComments.addComment(comment);
        form.reset();
        
        document.location.href = '/post.html';
    }
});