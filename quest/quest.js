import neighborhoods from '../data/neighborhood-data.js';
import findById from '../data/find-by-id.js';
import { getUser, setUser } from '../data/storage-utils.js';

const searchParams = new URLSearchParams(window.location.search);

const neighborhoodTitle = document.getElementById('neighborhood-title');
const neighborhoodImage = document.getElementById('neighborhood-image');
const neighborhoodDescription = document.getElementById('neighborhood-description');
const choices = document.getElementById('choices');

const neighborhood = findById(neighborhoods, searchParams.get('neighborhoodId'));
console.log(neighborhood);

neighborhoodTitle.textContent = neighborhood.title;
neighborhoodImage.src = `../assets/quests/${neighborhood.image}`;
neighborhoodDescription.textContent = neighborhood.description; 


for (let choice of neighborhood.choices){
    const label = document.createElement('label');

    const radio = document.createElement('input');
    radio.name = 'choice';
    radio.type = 'radio';
    radio.value = choice.id;

    const span = document.createElement('span');
    span.textContent = choice.description;

    label.append(radio, span);

    choices.appendChild(label);
}
const neighborhoodForm = document.getElementById('choice-form');
neighborhoodForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const choiceForm = new FormData(neighborhoodForm);


    const choiceValue = choiceForm.get('choice');
    const choiceData = findById(neighborhood.choices, choiceValue);
   

    const user = getUser();
    console.log(user.complete);
    user.candy += choiceData.candy;
    user.health += choiceData.health;
 
    user.complete[neighborhood.id] = true;
    setUser(user);
    

    const backLink = document.getElementById('back-link');
    neighborhoodDescription.textContent = choiceData.result;
    neighborhoodForm.classList.add('hidden');
    backLink.classList.remove('hidden');
});