import neighborhoods from '../data/neighborhood-data.js';
import { getUser } from '..data/storage-utils.js';
import { hasCompletedAllQuests } from './has-completed-all-quests.js';

const user = getUser();

if (user.health <= 0 || hasCompletedAllQuests(user)){
    window.location.replace('../results');
}

const neighborhoodList = document.getElementById('neighborhood-list');

for (let neighborhood of neighborhood) {
    if (user.completed[neighborhood.id]){
        createNeighborhoodSpan(neighborhood);
    } else {
        createNeighborhoodLink(neighborhood);
    }
}

function createNeighborhoodSpan(neighborhood){
    const span = document.createElement('span');
    span.innerText = `${neighborhood.title} COMPLETED!`;
    neighborhoodList.appendChild(span);
}

function createNeighborhoodLink(neighborhood){
    const neighborhoodHref = `../quest/?questId=${neighborhood.id}`;

    const neighborhoodLink = document.createElement('a');

    neighborhoodLink.href = neighborhoodHref;
    neighborhoodLink.textContent = neighborhood.title;

    neighborhoodList.appendChild(neighborhoodLink);
}

for (let neighborhood of neighborhoods) {
    const neighborhoodHref = `../data/?neighborhoodId=${neighborhood.id}`;

    const neighborhoodLink = document.createElement('a');
    neighborhoodLink.href = neighborhoodHref;
    neighborhoodLink.textContent = neighborhood.title;
    
    neighborhoodList.appendChild(neighborhoodLink);
}
