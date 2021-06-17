const exc = require('./exercices.js');
const { describe,test } = require('@jest/globals');

describe('teste do spyOn', () => {
    test('mocka função com spyOn', () => {
        const rng = jest.spyOn(exc, 'randomNumber');
        console.log(rng());
        rng.mockImplementation(() => 'oioioi');
        console.log(rng());
        rng.mockRestore();
        console.log(exc.randomNumber());
    })
})