const assert = require('assert');

// cria função que checa o número
const check = (chute, result) => {
    if (chute === Math.round(result)) {
        return 'Parabéns você GANHOU!!!';
    }
    return 'Que pena, tente outra vez...';
};

// testes unitários
assert.notStrictEqual(check(5,4.8), false);
assert.notStrictEqual(check(5,4), true);

//função de chute

const sorte = (chute, callback) => {
    return callback(chute, (Math.random() * 5) );
};

console.log(sorte(3, check));