import neighborhoods from '../data/neighborhood-data.js';

export function hasCompletedAllQuests(user){
    for (let neighborhood of neighborhoods){
        if (!user.completed[neighborhood.id]) {
            return false;
        }
    }
    return true;
}