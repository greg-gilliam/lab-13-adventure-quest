import neighborhoods from '../data/neighborhood-data.js';

export function hasCompletedAllQuests(user){
    for (let neighborhood of neighborhoods){
        console.log(user.complete);
        if (!user.complete[neighborhood.id]) {
            return false;
        }
    }
    return true;
}