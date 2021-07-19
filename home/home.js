import { setUser } from '../data/storage-utils.js';
import { makeUser } from './make-user.js';

const userForm = document.getElementById('user-form');

userForm.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new formData(userForm);

    const newUser = makeUser(formData);
    SpeechSynthesisUtterance(newUser);
    // window.location.replace(./map);
});