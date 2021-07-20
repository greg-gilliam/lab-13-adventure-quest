import neighborhoods from '../data/neighborhood-data.js';

export function hasCompletedAllQuests(user){
    for (let quest of quests){
        if (!user.completed[quest.id]) {
            return false;
        }
    }
    return true;
}