import { makeUser } from '../home/make-user.js';
const test = QUnit.test;

test('should create a new user', (expect) => {
    const expected = {
        name: 'Greg',
        costume: 'ghost',
        health: 35,
        candy: 0,
        complete: []
    };

    const userData = new FormData();
    userData.set('name', 'Greg');
    userData.set('costume', 'ghost');

    const actual = makeUser(userData);

    expect.deepEqual(actual, expected);
});
