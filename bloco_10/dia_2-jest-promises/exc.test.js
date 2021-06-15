const { describe, test, expect } = require('@jest/globals');
const { uppercase, getUserName } = require('./exc1');

describe('exercício 1 - toUppercase', () => {
  test('passa para uppercase', (done) => {
    uppercase('Jabuticaba Azul', (str) => {
      expect(str).toBe('JABUTICABA AZUL');
      done();
    })
  })
})

describe('exercício 2 - getUserName', () => {
  test('usuário encontrado', () => {
    expect.assertions(1);
    return getUserName(4).then((user) =>{
      expect(user).toEqual('Mark');
    });
  })
  test('usuário não encontrado', () => {
    expect.assertions(1);
    return getUserName(1).catch((user) =>{
      expect(user).toEqual({ error: 'User with 1 not found.'});
    });
  })
})

