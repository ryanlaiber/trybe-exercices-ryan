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
        expect.assertions(3);
        exercices.randomNumber.mockClear();
        exercices.randomNumber.mockImplementation((a, b) => a/b);
        expect(exercices.randomNumber(10, 2)).toBe(5);
        expect(exercices.randomNumber(6, 3)).toBe(2);
        expect(exercices.randomNumber).toHaveBeenCalledTimes(2);
    })
    
    test('exercício 3 - randomNumbers mock reset', () => {
        const excRn = jest.spyOn(exercices, 'randomNumber')
            .mockImplementation((a, b, c) => a * b * c);
        expect(excRn(1, 2, 3)).toBe(6);
        console.log(excRn(1, 2, 3));
        expect(excRn).toHaveBeenCalledWith(1, 2, 3);
        excRn.mockRestore();
        expect(exercices.randomNumber()).toBe(50);
    })
    
})