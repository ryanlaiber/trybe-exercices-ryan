const exercices = require('./exercices');
const { test, describe } = require('@jest/globals');
jest.mock('./exercices');

describe('exercices - jest mock', () => {
    
    test('exercício 1 - randomNumber', () => {
        expect.assertions(3);
        exercices.randomNumber.mockReturnValue(10);
        exercices.randomNumber();
        expect(exercices.randomNumber).toHaveBeenCalled();
        expect(exercices.randomNumber()).toBe(10);
        expect(exercices.randomNumber).toHaveBeenCalledTimes(2);
    })

    test('exercicio 2 - randomNumbers mock', () => {
        exercices.randomNumber.mockImplementation((a, b) => a/b);
        expect(exercices.randomNumber(10, 2)).toBe(5);
        expect(exercices.randomNumber(6, 3)).toBe(2);
        expect(exercices.randomNumber).toHaveBeenCalledTimes(4);
    })

})