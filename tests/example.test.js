import { makeUser } from '../home/make-user.js';
import { setUser, getUser } from '../data/storage-utils.js';

const test = QUnit.test;

test('should create a new user', (expect) => {
    const expected = {
        name: 'Greg',
        costume: 'ghost',
        health: 35,
        candy: 0,
        complete: {}
    };

    const userData = new FormData();
    userData.set('name', 'Greg');
    userData.set('costume', 'ghost');

    const actual = makeUser(userData);

    expect.deepEqual(actual, expected);
});

test('set user should update local storage with user info', (expect) => {
    const expected = {
        name: 'Greg',
        costume: 'ghost',
        health: 35,
        candy: 0,
        complete: {}
    };
    setUser(expected);
    const actual = getUser();
    expect.deepEqual(actual, expected);
});