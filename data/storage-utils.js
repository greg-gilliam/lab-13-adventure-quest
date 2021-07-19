const USER = 'USER';

export function getUser(){
    const userString = localStorage.getItem(USER);
    return JSON.parse(userString);
}

export function setUser(userObject){
    const userString = JSON.stringify(userObject);
    localStorage.setItem(USER, userString);
}