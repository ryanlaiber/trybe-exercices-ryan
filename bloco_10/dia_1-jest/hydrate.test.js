const {hydrate} = require('./hydrate');
const {test, describe, expect, toThrow, toBe} = require('@jest/globals');

describe('função hydrate:', () => {
    test('não é string', () => {
        expect(() => {hydrate(5)}).toThrow();
    });
    test('soma certinho:', () => {
        expect(hydrate('2 cervejas, 50 latinhas de gasolina e 20 vódcas')).toBe('72 copos de água');
        expect(hydrate('1 trem')).toBe('1 copo de água');
    });
});