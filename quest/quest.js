import neighborhoods from '../data/neighborhood-data.js';
import findById from '../data/find-by-id.js';
import { getUser, setUser } from '../data/storage-utils.js';

const searchParams = new URLSearchParams(window.location.search);

const questTitle = document.getElementById('quest-title');
const questImage = document.getElementById('quest-image');
const questDescription = document.getElementById('quest-description');
const choices = document.getElementById('choices');

const quest = findById(neighborhoods, searchParams.get('questId'));

questTitle.textContent = quest.title;
questImage.src = `../assets/quests/${quest.image}`;
questDescription.textContent = quest.description; 


for (let choice of quest.choices){
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
const questForm = document.getElementById('choice-form');
questForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const choiceForm = new FormData(questForm);

    const choiceValue = choiceForm.get('choice');
    const choiceData = findById(quest.choices, choiceValue);

    const user = getUser();
    user.candy += choiceData.candy;
    user.health += choiceData.health;
    user.completed[quest.id] = true;
    setUser(user);

    const backLink = document.getElementById('back-link');
    questDescription.textContent = choiceData.result;
    questForm.classList.add('hidden');
    backLink.classList.remove('hidden');
});