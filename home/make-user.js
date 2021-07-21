export function makeUser(formData){
    const newUser = {
        candy: 0,
        health: 35,
        name: formData.get('name'),
        costume: formData.get('costume'),
        complete: []
    };

    const key = 'candy';
    newUser[key] = 0;

    return newUser;
}