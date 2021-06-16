const exercices = require('./exercices');
const { test, describe } = require('@jest/globals');

describe('exercices - jest mock', () => {
    
    test('exercício 1 - randomNumber', () => {
        expect.assertions(3);
        exercices.randomNumber = jest.fn()
            .mockReturnValue(10);
        exercices.randomNumber();
        expect(exercices.randomNumber).toHaveBeenCalled();
        expect(exercices.randomNumber()).toBe(10);
        expect(exercices.randomNumber).toHaveBeenCalledTimes(2);
    })

})