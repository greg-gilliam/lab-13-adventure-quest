export const USER = 'USER';

export function getUser(){
    const userString = localStorage.getItem(USER);
    return JSON.parse(userString);
}

export function setUser(userObject){
    const userString = JSON.stringify(userObject);
    localStorage.setItem(USER, userString);
}

export function findById(items, id) {
    for (const item of items) {
        if (item.id === id) {
            return item;
        }
    }
}

// export function loadUser() {
//     const name = document.getElementById('name');
//     const health = document.getElementById('health');
//     const candy = document.getElementById('candy');

//     const user = getUser();

//     name.textContent = `Name: ${user.name}`;
//     health.textContent = `Health: ${user.health}`;
//     candy.textContent = `Candy: ${user.candy}`;

//     if 
// }