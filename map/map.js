import neighborhoods from '../data/neighborhood-data.js';

const neighborhoodList = document.getElementById('neighborhood-list');

for (let neighborhood of neighborhoods) {
    const neighborhoodHref = '../quest/?questId=${neighborhood.id}';

    const neighborhoodLink = document.createElement('a');
    // <a href="./neighborhood/?id=victorian">Victorian</a>
    // <a href="./neighborhood/?id=trailers">Trailers</a>
    // <a href="./neighborhood/?id=apartments">Apartments</a>
    
    neighborhoodLink.href = neighborhoodHref;
    neighborhoodLink.textContent = neighborhood.title;

    neighborhoodList.appendChild(neighborhoodLink);
}