import { getUser } from '../data/storage-utils.js';
import { aliveCandyMessages, deadCandyMessages, healthMessages } from './messages.js';
import scoreCandy from './scoreCandy.js';
import scoreHeatlh from './scoreHealth.js';

const user = getUser();

const storyDisplay = document.getElementById('story-display');

const healthResult = scoreHeatlh(user.health);
const candyResult = scoreCandy(user.candy);
const healthMessage = healthMessages[healthResult];

let candyMessages = null;
if (healthResult === 'dead') {
    candyMessages = deadCandyMessages;
}
else {
    candyMessages = aliveCandyMessages;
}

const candyMessage = candyMessages[candyResult];

let story = 'After your night out getting candy, ';
story += user.name + ' the ' + user.costume + ', ';
story += healthMessage + ' and ' + candyMessage + '.';

storyDisplay.textContent = story; 
