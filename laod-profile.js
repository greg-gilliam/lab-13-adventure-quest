import { getUser } from './data/storage-utils.js';
import isDead from './quest/isDead.js';

function loadProfile() {
    const name = document.getElementById('name');
    const costume = document.getElementById('costume');
    const health = document.getElementById('health');
    const candy = document.getElementById('candy');

    const user = getUser();

    if (!user) {
        window.location = './';
    }
}

name.textContent = user.name;
costume.src = '' + user.costume + '.png';
candy.textContent = user.candy;

if (isDead(user)) {
    health.textContent = 'You died!!!';
} else {
    health.textContent = user.health;
}
}; 

